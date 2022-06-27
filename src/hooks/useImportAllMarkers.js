import { useEffect } from "react";
import data from "../data/RandomData";
import "./../style.css";
import { Tooltip } from "./../components/Tooltip";
import { Popup } from "./../components/Popup";
import useMarkerCluster from "./useMarkerCluster";

let tooltip = null,
  popup = null;

export default function useImportAllMarkers(markers, map) {
  useEffect(() => {
    markers.current = data.map((element, index) => {
      let marker = new window.google.maps.Marker({ values: element.values });

      // setting up tooltip
      tooltip = new window.google.maps.InfoWindow({});
      let tooltipContent = Tooltip(element);

      marker.addListener("mouseover", () => {
        tooltip.setContent(tooltipContent);
        tooltip.open(map, marker);
      });

      marker.addListener("mouseout", () => {
        tooltip.close();
      });

      // setting popup
      popup = new window.google.maps.InfoWindow();
      let popupContent = Popup(element);
      let popupOpen = false;

      window.google.maps.event.addListener(marker, "click", function (e) {
        if (!popupOpen) {
          popup.setContent(popupContent);
          popup.open(map, marker);
          tooltip.close();
        } else {
          popup.close();
          popupOpen = false;
        }
      });

      if (marker) {
        marker.setPosition(element.position);
      }

      return marker;
    });

    //listener to close popup on map click
    if (map) {
      map.addListener("click", (event) => {
        if (popup) popup.close();
      });
    }
  }, [map, markers]);
  useMarkerCluster(markers.current, map);
}
