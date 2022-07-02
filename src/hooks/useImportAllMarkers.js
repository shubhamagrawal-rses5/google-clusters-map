import { useEffect } from "react";
import data from "../data/RandomData";
import "./../style.css";
import { Tooltip } from "./../components/Tooltip";
import { Popup } from "./../components/Popup";
import useMarkerCluster from "./useMarkerCluster";

let tooltip = null,
  popup = null;
function getSVGMarker(marker) {
  const mentions = marker.values.mentions;
  let color;
  if (mentions < 10) {
    color = "#ED775A";
  } else if (mentions >= 10 && mentions < 50) {
    color = "#53C182";
  } else if (mentions >= 50) {
    color = "#FDDE6C";
  }

  const svgMarker = {
    path: "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
    // path: "M10.453 14.016l6.563-6.609-1.406-1.406-5.156 5.203-2.063-2.109-1.406 1.406zM12 2.016q2.906 0 4.945 2.039t2.039 4.945q0 1.453-0.727 3.328t-1.758 3.516-2.039 3.070-1.711 2.273l-0.75 0.797q-0.281-0.328-0.75-0.867t-1.688-2.156-2.133-3.141-1.664-3.445-0.75-3.375q0-2.906 2.039-4.945t4.945-2.039z",
    fillColor: color,
    fillOpacity: 0.7,
    strokeColor:color,
    strokeWeight: 1.5,
    rotation: 0,
    scale: 0.6,
    
  };
  return svgMarker;
}
export default function useImportAllMarkers(markers, map) {
  useEffect(() => {
    markers.current = data.map((element, index) => {
      let marker = new window.google.maps.Marker({
        icon: getSVGMarker(element),
        values: element.values,
        anchor: new window.google.maps.Point(50,0),
      });

      // setting up tooltip
      tooltip = new window.google.maps.InfoWindow();
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
          popup.setAnchor(marker);
          tooltip.close();
        } else {
          popup.close();
          popupOpen = false;
        }
        console.log(popup)
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
