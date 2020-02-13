window.onload = () => {

    new WOW().init();

    var mymap = L.map('mapid').setView([52.24, 4.426], 13);

    var icon = L.icon({
        iconUrl: '../img/icon.png',
        iconSize: [25,41],
      });

        
        let googleStreets = L.tileLayer('https://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{
            //     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
            maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
}).addTo(mymap);

    var marker = L.marker([52.24, 4.426], {icon: icon}).addTo(mymap);
}
