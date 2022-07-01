import { Tooltip } from "./../components/Tooltip";
import { Popup } from "./../components/Popup";
import { useEffect } from "react";
import {
  MarkerClusterer,
  SuperClusterAlgorithm,
} from "@googlemaps/markerclusterer";

var tooltip = null,
  popup = null;

export const renderer = {
  render: (cluster, stats) => {
    const { count, position, markers } = cluster;

    //making the cluster properties
    const clusterObj = {
      name: count + " Locations",
      values: { mentions: 0, insights: 0, rating: 0 },
      position,
    };
    markers.forEach((element) => {
      clusterObj.values.mentions += element.mentions;
      clusterObj.values.insights += element.insights;
      clusterObj.values.rating += element.rating;
    });
    clusterObj.values.rating =
      Math.ceil((clusterObj.values.rating * 10) / count) / 10;

    // setting the color and size of the marker-cluster
    let color,
      size = 5 * count + 25; // size of the cluster is set to linear function of mentions
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

    // create svg url with fill color
    const svg = window.btoa(`
<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
  <circle cx="120" cy="120" opacity=".5" r="110" fill="${color}"/>
  <circle cx="120" cy="120" r="110" stroke="${color}"  stroke-width="3%" fill="none"/>
</svg>`);

    // create marker using svg icon
    let marker = new window.google.maps.Marker({
      position,
      icon: {
        url: `data:image/svg+xml;base64,${svg}`,
        scaledSize: new window.google.maps.Size(size, size),
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
    window.google.maps.event.addListener(marker, "dblclick", () => {
      marker.map.setZoom(marker.map.getZoom() + 1);
      marker.map.setCenter(marker.position);
    });

    return marker;
  },
};

export default function useMarkerClusters(markers, map) {
  function onClusterClick(event, cluster, map) {
    map.setZoom(map.getZoom());
  }

  useEffect(() => {
    //creating the marker clusters
    if (markers) {
      new MarkerClusterer({
        algorithm: new SuperClusterAlgorithm({ maxZoom: 10, radius: 200 }),
        map,
        markers,
        renderer,
        onClusterClick,
      });
    }
  });

  if (map) {
    map.addListener("click", (event) => {
      popup.close();
    });

    //creating the overlapping spiderfier
    let OverlappingMarkerSpiderfier = require("overlapping-marker-spiderfier");
    let osm = new OverlappingMarkerSpiderfier(map, {
      nearbyDistance: 50,
      legWeight: 2,
      markersWontMove: true,
      markersWontHide: true,
      circleFootSeparation: 50,
      spiralFootSeparation: 50,
      keepSpiderfied: true,
      ignoreMapClick: true,
    });

    markers.forEach((element) => {
      osm.addMarker(element);
    });
  }
}
