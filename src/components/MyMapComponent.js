import React, { useEffect, useRef, useState } from "react";
import useImportAllMarkers from "../hooks/useImportAllMarkers";
export default function MyMapComponent({
  center,
  zoom,
  style,
  markers,
  children,
}) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
  }, [ref, map]);
  // useEffect(() => {
  //   if (map) {
  //     // ["click", "idle"].forEach((eventName) =>
  //     //   window.google.maps.event.clearListeners(map, eventName)
  //     // );
  //   }
  // }, [map]);
  if (map) {
    map.setCenter(center);
    map.setZoom(zoom);
  }
  useImportAllMarkers(markers, map);

  return (
    <>
      <div ref={ref} style={style} id="map" />
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { map });
        }
      })}
    </>
  );
}
