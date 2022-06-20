import { Tooltip } from "./Tooltip";
import { Popup } from "./Popup";
import { useEffect } from "react";
// import MarkerClusterer from "@googlemaps/markerclustererplus";
import { MarkerClusterer } from "@googlemaps/markerclusterer";

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

    // change color if this cluster has more markers than the mean cluster
    const color =
      count > Math.max(10, stats.clusters.markers.mean) ? "black" : "green";

    // create svg url with fill color
    const svg = window.btoa(`
<svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
  <circle cx="120" cy="120" opacity=".6" r="70" />
  // <circle cx="120" cy="120" opacity=".3" r="90" />
</svg>`);

    // create marker using svg icon
    let marker = new window.google.maps.Marker({
      position,
      icon: {
        url: `data:image/svg+xml;base64,${svg}`,
        scaledSize: new window.google.maps.Size(55, 55),
      },
      label: {
        text: String(clusterObj.values.mentions),
        color: "rgba(255,255,255,0.9)",
        fontSize: "12px",
      },
      // adjust zIndex to be above other markers
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
    var markerCluster;
    if (markers) {
      markerCluster = new MarkerClusterer({
        map,
        markers,
        renderer,
        onClusterClick,
      });
    }
  });
  if (map)
    map.addListener("click", (event) => {
      popup.close();
    });

  return null;
}
