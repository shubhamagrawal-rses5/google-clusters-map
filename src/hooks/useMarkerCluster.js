import { Tooltip } from "./../components/Tooltip";
import { Popup } from "./../components/Popup";
import { useEffect } from "react";
import {
  MarkerClusterer,
  SuperClusterAlgorithm,
  defaultOnClusterClickHandler,
} from "@googlemaps/markerclusterer";

var tooltip = null,
  popup = null;

  //this function calculates the cluster properties like mentions, insights etc.
function clusterProperties(cluster) {
  const { count, position, markers } = cluster;
  //making the cluster properties
  let mentions = 0,
    insights = 0,
    rating = 0;
  markers.forEach((element) => {
    mentions += element.mentions;
    insights += element.insights;
    rating += element.rating;
  });
  //converting into desired form
  rating = Math.ceil((rating * 10) / count) / 10;
  if (mentions >= 1000) {
    mentions = Math.ceil((mentions / 1000) * 10) / 10;
    mentions = mentions + "k";
  }
  if (insights >= 1000) {
    insights = Math.ceil((insights / 1000) * 10) / 10;
    insights = insights + "k";
  }
  const clusterObj = {
    name: count + " Locations",
    values: { mentions, insights, rating },
    position,
  };
  return clusterObj;
}

//function that calaculates colr,size of the cluster
function clusterGeometry(cluster) {
  const { count } = cluster;
  let color,
    size = 3 * count + 25; // size of the cluster is set to linear function of mentions
  if (count < 5) {
    color = "#ED775A";
  } else if (count >= 5 && count < 10) {
    color = "#FDDE6C";
  } else if (count >= 10) {
    color = "#53C182";
  }
  if (size > 90) {
    size = 90;
  }
  return { color, size };
}

const renderer = {
  render: (cluster, stats) => {
    const { count, position } = cluster;

    const clusterObj = clusterProperties(cluster);
    const { color, size } = clusterGeometry(cluster);

    // create svg url with fill color
    const svg = window.btoa(`
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
  <circle cx="120" cy="120" opacity="0.6" r="110" fill="${color}"/>
  <circle cx="120" cy="120" r="110" stroke="${color}"  stroke-width="5%" fill="none"/>
</svg>`);

    // create marker using svg icon
    let marker = new window.google.maps.Marker({
      position,
      icon: {
        url: `data:image/svg+xml;base64,${svg}`,
        scaledSize: new window.google.maps.Size(size, size),
        origin: new window.google.maps.Point(0, 0),
        anchor: new window.google.maps.Point(size / 2, size / 2),
      },
      label: {
        text: String(clusterObj.values.mentions),
        color: "#808080",
        fontSize: "14px",
        fontWeight: "500",
      },
      zIndex: Number(window.google.maps.Marker.MAX_ZINDEX) + count,
    });

    //setting the tooltip on cluster
    tooltip = new window.google.maps.InfoWindow();
    let tooltipContent = Tooltip(clusterObj);
    marker.addListener("mouseover", () => {
      tooltip.setContent(tooltipContent);
      tooltip.setAnchor(marker);
    });
    marker.addListener("mouseout", () => {
      tooltip.close();
    });

    //setting the popup on cluster
    popup = new window.google.maps.InfoWindow();
    let popupContent = Popup(clusterObj);
    window.google.maps.event.addListener(marker, "click", () => {
      popup.setContent(popupContent);
      popup.setAnchor(marker);
      tooltip.close();
    });

    //adding zoom on double click on cluster
    window.google.maps.event.addListener(marker, "dblclick", (event) => {
      defaultOnClusterClickHandler(event, cluster, marker.map);
    });

    return marker;
  },
};

//this function checks if the all markers od a clustre are overlapping or not
function isOverlapping(markers) {
  for (let i = 0; i < markers.length; i++) {
    if (
      JSON.stringify(markers[0].position) !==
      JSON.stringify(markers[i].position)
    ) {
      return false;
    }
  }
  return true;
}

export default function useMarkerClusters(markers, map, osm) {

  function onClusterClick(event, cluster, map) {
    const { markers } = cluster;
    let overlapping = isOverlapping(markers);

    //if all markers of a cluster are overlapping then spiderfy
    if (overlapping) {      
      // console.log(event.domEvent.target);
      
      markers.forEach((element) => {
        osm.addMarker(element);
        element.setMap(map);
      });
      popup.close();
      window.google.maps.event.trigger(markers[0], "click");
    }
    window.google.maps.event.addListener(cluster.marker, "dblclick", (event) => {
      osm.clearMarkers();
    });
  }

  if (map) {
    map.addListener("click", (event) => {
      popup.close();
    });
  }
  useEffect(() => {
    //creating the marker clusters
    if (markers) {
      new MarkerClusterer({
        algorithm: new SuperClusterAlgorithm({ maxZoom: 18, radius: 200 }),
        map,
        markers,
        renderer,
        onClusterClick,
      });
    }
  });
}
