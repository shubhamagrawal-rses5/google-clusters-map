import { useEffect, useState } from "react";

export default function Marker({position, map}) {
    const [marker, setMarker] = useState(null);
  
      useEffect(() => {
        setMarker(new window.google.maps.Marker({})); 
     
    }, []);
    if(marker)
    {
        marker.setMap(map);
        marker.setPosition(position);
    }
    return null;
  };