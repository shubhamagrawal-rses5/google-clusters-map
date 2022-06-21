import { Tooltip } from "./Tooltip";
import { Popup } from "./Popup";
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
    let color = "#0000ff",
      size = 45,
      mentions = clusterObj.values.mentions;
    if (mentions < 100) {
      size = 45;
      color = "#0000ff";
    } else if (mentions >= 100 && mentions < 300) {
      size = 55;
      color = "#ff0000";
    } else if (mentions >= 300) {
      size = 65;
      color = "rgba(241, 128, 23)";
    }

    // create svg url with fill color
    const svg = window.btoa(`
<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
  <circle cx="120" cy="120" opacity=".7" r="70" />
  <circle cx="120" cy="120" opacity=".3" r="90" />
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
        color: "rgba(255,255,255,0.9)",
        fontSize: "14px",
      },
      zIndex: Number(window.google.maps.Marker.MAX_ZINDEX) + count,
    });

    //setting the tooltip on cluster
    tooltip = new window.google.maps.InfoWindow({});
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

    return marker;
  },
};

export default function MarkerClusters({ markers, map }) {
  function onClusterClick(event, cluster, map) {}

  useEffect(() => {
    //creating the marker clusters
    if (markers) {
      new MarkerClusterer({
        algorithm: new SuperClusterAlgorithm({ maxZoom: 5, radius: 150 }),
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
      nearbyDistance: 30,
      legWeight: 2,
      markersWontMove: false,
      markersWontHide: true,
      circleFootSeparation: 50,
      keepSpiderfied: true,
      ignoreMapClick: true
    });

    markers.forEach((element) => {
      osm.addMarker(element);
    });
  }

  return null;
}
