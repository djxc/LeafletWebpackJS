import L from 'leaflet';
import esrileaflet from 'esri-leaflet';
// import 'node_modules/leaflet/dist/leaflet.css';
require("leaflet_css");
require("leaflet_marker");
require("leaflet_marker_2x");
require("leaflet_marker_shadow");

// import './css/djstyle.css';
import './js/bootstrap.min.js';
import './commTool/menu.js';

import './css/nav.css';
import './css/htmleaf-demo.css';
import './css/myLeaflet.css';

import './fonts/iconfont.css';
import './css/font-awesome.css';
import './css/fonts_goole.css';

import avatar from './images/plen.png';

const greeter = require('./Greeter.js');

 var mymap = L.map('map', {
          center: [39.75621, -104.99404],
          zoom: 10
        });

// L.tileLayer("http://t{s}.tianditu.cn/vec_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=vec&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles", {
//     subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
// }).addTo(mymap);
//影像
L.tileLayer("http://t{s}.tianditu.cn/img_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=img&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles", {
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
}).addTo(mymap);
// 地名标注
L.tileLayer("http://t{s}.tianditu.cn/cia_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=cia&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles", {
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
}).addTo(mymap);
// 边界
L.tileLayer("http://t{s}.tianditu.cn/ibo_w/wmts?service=wmts&request=GetTile&version=1.0.0&LAYER=ibo&tileMatrixSet=w&TileMatrix={z}&TileRow={y}&TileCol={x}&style=default&format=tiles", {
    subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"]
}).addTo(mymap);

var greenIcon = L.icon({
    iconUrl: avatar,
    // shadowUrl: 'leaf-shadow.png',

    iconSize:     [38, 60], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [10, 10], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

var marker = L.marker([51.5, -0.09], {icon: greenIcon}).addTo(mymap);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
var circle = L.circle([51.508, -0.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(mymap);

var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(mymap);

var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [-104.99404, 39.75621]
    }
};
var myLayer = L.geoJSON().addTo(mymap);
myLayer.addData(geojsonFeature);