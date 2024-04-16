var mapx = document.getElementById('map');

var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { 
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    + 'contributors', 
    maxZoom: 20
    });

var map = L.map(mapx, {
    center: [1.614167, -75.611667], //latitud y longitud en grados
    zoom: 15, //zoom inicial
    layers: osm, //capa que se va a graficar
    scrollWheelZoom: true,
});

L.control.scale().addTo(map);

var Universidad = L.icon({
    iconUrl: 'https://www.uniamazonia.edu.co/inicio/images/Programas/LogoOficial.png',
    iconSize: [50, 50],
    popupAnchor: [-1, -10]
    });
    
L.marker([1.6200350625942592, -75.60442092439301], {
    draggable: true,
    title: 'Click aquí',
    icon: Universidad}
    ).addTo(map).bindPopup("<b>Universidad de la Amazonia</b>");
        
        
        
var Alcaldia = L.icon({
    iconUrl: 'https://www.florencia-caqueta.gov.co/sites/florenciacaqueta/content/files/000861/43037_pag-wb-escudo_200x200.png',
    iconSize: [70, 70],
    popupAnchor: [-1, -10]
    });

L.marker([1.6150742306867911, -75.61384110600727], {
    draggable: true,
    title: 'Click aquí',
    icon: Alcaldia}
    ).addTo(map).bindPopup("<b>Alcadía de la Ciudad de Florencia</b>");

var circle = L.circle([1.6150742306867911, -75.61384110600727], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
    }).addTo(map);
        
circle.bindPopup("500m contorno a la alcaldía");


var Plaza = L.icon({
    iconUrl: 'https://caqueta.micolombiadigital.gov.co/sites/caqueta/content/files/000165/8226_27972646_1708678189188194_6502280985888620964_n_1024x600.jpg',
    iconSize: [30, 30],
    popupAnchor: [-1, -10]
    });

L.marker([1.6150080774563316, -75.61330058630226], {
    draggable: true,
    title: 'Click aquí',
    icon: Plaza}
    ).addTo(map).bindPopup("<b>Plaza Santander </b>");

var polygon = L.polygon([
    [1.6151793690533172, -75.61370086601237],
    [1.615398407310856, -75.61303472516292],
    [1.6146974848265687, -75.61282655614447],
    [1.6145091122822435, -75.61349927085246]
    ]).addTo(map)
    .bindPopup ('Plaza Santander');



var pointA = new L.LatLng(1.6208499180388036, -75.6032595027635); 
var pointB = new L.LatLng(1.620877765554826, -75.60353808883528);
var pointC = new L.LatLng(1.6199129356707882, -75.60269856586147);
var pointD = new L.LatLng(1.619119282646798, -75.60320930724316);
var pointE = new L.LatLng(1.6191378475177074, -75.6040589946695);
var pointF = new L.LatLng(1.6195602012035222, -75.60445365804756);
var pointG = new L.LatLng(1.6200336081748183, -75.60443044255037);

var latlngs = [pointA, pointB, pointC, pointD, pointE, pointF, pointG];
var polyline = L.polyline(
    latlngs, {color: 'red'}
    ).addTo(map)
    .bindPopup ('De la U a mi casa');