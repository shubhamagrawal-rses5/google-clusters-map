// import { stringify } from "nodemon/lib/utils";
import "./../style.css";

export function Popup(marker) {
  return `
    <div class="box-2">
          <h2>Dropdown</h2>
          <hr></hr>
          <p>Name: ${marker.name}</p>
          <p>${JSON.stringify(marker.position)} </p>
        </div>`;
}
