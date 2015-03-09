document.addEventListener('DOMContentLoaded', function () {
  var mapContainer = document.getElementById('map');
  mapContainer.style.height = window.innerHeight + 'px';

  L.mapbox.accessToken = 'pk.eyJ1IjoiZmVuZ2xpbmctIiwiYSI6IjZoMk9iOVkifQ.4RZQqmVloTFI9ANv4o70fA';

  drawMap();
});


function drawMap () {
  var canvasTiles = L.tileLayer.canvas();
  var map = L.mapbox.map('map', 'fengling-.cfe0ce43').setView([1.3148,11, 103.8036], 11);

  L.canvasOverlay().drawing(drawPoints).addTo(map);
}

function drawPoints (canvasOverlay, params) {
  var ctx = params.canvas.getContext('2d');
  ctx.clearRect(0, 0, params.canvas.width, params.canvas.height);
  ctx.beginPath();
  points.map(function (d, i) {
    dot = canvasOverlay._map.latLngToContainerPoint( [d[0], d[1]] );
    ctx.lineTo(dot.x, dot.y);
  });
  ctx.strokeStyle = 'red';
  ctx.stroke();
  
}