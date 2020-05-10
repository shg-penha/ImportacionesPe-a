var map = L.map('map').setView([-12.0693361, -77.0385517], 50);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-12.0693361, -77.0385517]).addTo(map)
    .bindPopup('Av. Republica de chile 472 <br>oficina 405 - Jesus Maria')
    .openPopup()