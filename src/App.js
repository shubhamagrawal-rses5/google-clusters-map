import { useRef } from "react";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Error from "./components/Error";
import Loading from "./components/Loading";
import "./style.css";
import MyMapComponent from "./components/MyMapComponent";
import AllMarkers from "./components/AllMarkers";

const render = (status) => {
  if (status === Status.FAILURE) return <Error />;
  return <Loading />;
};

function App() {
  let markers = useRef([]);

  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
      <MyMapComponent center={{ lat: 0, lng: 0 }} zoom={3}>
        <AllMarkers markers={markers} />
      </MyMapComponent>
    </Wrapper>
  );
}

export default App;
