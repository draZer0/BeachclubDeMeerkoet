window.onload = () => {

    new WOW().init();

    const map = L.map('mapid', {gestureHandling: true}).setView([52.24, 4.426], 13);

    const icon = L.icon({
        iconUrl: '../img/icon.png',
        iconSize: [25,41],
    });

    L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
        attribution: 'Beachclub De Meerkoet',
        maxZoom: 20,
        minZoom: 10,
        subdomains:['mt0','mt1','mt2','mt3']
    }).addTo(map);

    L.marker([52.24, 4.426], {icon: icon}).addTo(map);
}
