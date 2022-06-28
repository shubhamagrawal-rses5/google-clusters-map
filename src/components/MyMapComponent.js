import React, { useEffect, useRef, useState } from "react";
import useImportAllMarkers from "../hooks/useImportAllMarkers";
export default function MyMapComponent({
  center,
  zoom,
  style,
  markers
}) {
  const ref = useRef(null);
  const [map, setMap] = useState();

  useEffect(() => {
    if (ref.current && !map) {
      setMap(new window.google.maps.Map(ref.current, {}));
    }
    if (map) {
      map.setCenter(center);
      map.setZoom(zoom);
    }
  }, [ref, map]);

  useImportAllMarkers(markers, map);

  return (
    <>
      <div ref={ref} style={style} id="map" />
    </>
  );
}
