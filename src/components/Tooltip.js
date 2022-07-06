import "./../style.css";
export function Tooltip(marker) {
  return `
<div class="box-1">
      <h3>${marker.name}</h3>
      <hr></hr>
      <table>
        <thead />
        <tbody>
          <tr>
            <td class="item">Mentions</td>
            <td class="value">${marker.values.mentions}</td>
          </tr>
          <tr>
            <td class="item">Insights</td>
            <td class="value">${marker.values.insights}</td>
          </tr>
          <tr>
            <td class="item">Star Rating</td>
            <td class="value">${marker.values.rating}</td>
          </tr>
        </tbody>
      </table>
    </div>`;
}
