import { useEffect } from "react";
import data from "../data/RandomData";
import "./../style.css";
import { Tooltip } from "./../components/Tooltip";
import { Popup } from "./../components/Popup";
import useMarkerCluster from "./useMarkerCluster";

let tooltip = null,
  popup = null;

// function that makes the svg icon of the marker
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
    fillColor: color,
    fillOpacity: 0.7,
    strokeColor: color,
    strokeWeight: 1.5,
    rotation: 0,
    scale: 0.6,
  };
  return svgMarker;
}

export default function useImportAllMarkers(markers, map) {
  //initialising the overlapping spiderfier
  let OverlappingMarkerSpiderfier = require("overlapping-marker-spiderfier");
  let osm;

  if (map) {
    osm = new OverlappingMarkerSpiderfier(map, {
      nearbyDistance: 50,
      legWeight: 1.5,
      markersWontMove: true,
      markersWontHide: true,
      circleFootSeparation: 50,
      spiralFootSeparation: 50,
      keepSpiderfied: true,
    });
    osm.addListener("spiderfy", (markers) => {
      if (popup) popup.close();
    });
  }
  
  useEffect(() => {
    markers.current = data.map((element, index) => {
      let marker = new window.google.maps.Marker({
        icon: getSVGMarker(element),
        values: element.values,
        anchor: new window.google.maps.Point(50, 0),
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
        if (osm) {
          osm.markers.forEach((element) => {
            element.setMap(null);
          });
          osm.clearMarkers();
        }
      });
    }
  }, [map, markers]);

  useMarkerCluster(markers.current, map, osm);
}
