import "./../style.css";

export function Popup(marker) {
  return `
    <div class="box-2">
          <h2>Dropdown</h2>
          <hr></hr>
          <p>${marker.name}</p>
          <p>${marker.position ? JSON.stringify(marker.position) : ""} </p>
        </div>`;
}
