import { useEffect, useRef } from "react";
import data from "./../data/Tooltipdata";
import { MarkerClusterer } from "@googlemaps/markerclusterer";
import "./../style.css";
import { Tooltip } from "./Tooltip";
import { Popup } from "./Popup";

export default function AllMarkers({ map }) {
  var markers = useRef([]);
  useEffect(() => {
    let tooltip = null,
      popup = null;
    markers.current = data.map((element, index) => {
      let marker = new window.google.maps.Marker({});

      // setting up tooltip
      tooltip = new window.google.maps.InfoWindow({});
      let tooltipContent = Tooltip(element);

      window.google.maps.event.addListener(marker, "mouseover", function (e) {
        tooltip.setContent(tooltipContent);
        tooltip.open(map, marker);
      });

      window.google.maps.event.addListener(marker, "mouseout", () => {
        tooltip.close();
      });

      //setting popup

      popup = new window.google.maps.InfoWindow();
      let popupContent = Popup(element);
      let popupOpen = false;
      window.google.maps.event.addListener(marker, "click", function (e) {
        if (!popupOpen) {
          popup.setContent(popupContent);
          popup.open(map, marker);
          tooltip.close();
          popupOpen = true;
        } else {
          popup.close();
          popupOpen = false;
        }
      });

      // map.addListener("click", ()=>{
      //   console.log("map clicked")
      // });

      if (marker) {
        marker.setMap(map);
        marker.setPosition(element.position);
      }
      return marker;
    });

    const all = markers.current;

    if (all) {
      // console.log(all);
      const markerCluster = new MarkerClusterer({ all, map });
      markerCluster.setMap(map);
    }
  });

  return null;
}
