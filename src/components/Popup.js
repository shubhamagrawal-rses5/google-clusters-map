import "./../style.css";

export function Popup(marker) {
  return `
    <div class="box-2">
          <h2>Drilldown</h2>
          <hr></hr>
          <p class="popupPara">${marker.name}</p>
        </div>`;
}
