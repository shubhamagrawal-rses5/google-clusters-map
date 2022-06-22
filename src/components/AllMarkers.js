import { useEffect } from "react";
import data from "../data/RandomData";
import "./../style.css";
import { Tooltip } from "./Tooltip";
import { Popup } from "./Popup";
// import MarkerClusters from "./MarkerClusters";
import useMarkerCluster from './../hooks/useMarkerCluster'

let tooltip = null,
  popup = null;

export default function AllMarkers({ markers, map }) {
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

    if (map) {
      map.addListener("click", (event) => {
        if (popup) popup.close();
      });
    }
  }, [map, markers]);
  useMarkerCluster(markers.current, map);
  // return <MarkerClusters markers={markers.current} map={map} />;
}
