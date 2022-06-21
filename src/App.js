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
  const style = {
    height: "100vh",
    width: "100%",
  };

  return (
    <Wrapper apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY} render={render}>
      <MyMapComponent center={{lat:29.46693640581282,lng:30.635461807250977}} zoom={3} style={style}>
        <AllMarkers markers={markers} />
      </MyMapComponent>
    </Wrapper>
  );
}

export default App;
