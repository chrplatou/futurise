
/* Increment/decrement button */
$("#level").on('change', function () {
    var value = $(this).val();
    output.innerText = value
    raster.changed()
});

$('.btn-increment').click(function () {
    $("#level").val(parseInt($("#level").val()) + 1);
    $("#level").trigger('change');
});

$('.btn-decrement').click(function () {
    $("#level").val(parseInt($("#level").val()) - 1);
    $("#level").trigger('change');
});
/* End increment/decrement */


/* Map script */
const elevationScale = [[175, 240, 233], [175, 240, 230], [175, 240, 227], [175, 240, 222], [175, 240, 220],
[175, 240, 217], [175, 240, 213], [177, 242, 212], [177, 242, 208], [177, 242, 205],
[177, 242, 201], [177, 242, 198], [177, 242, 195], [176, 245, 191], [176, 245, 188],
[176, 245, 183], [176, 245, 181], [176, 245, 177], [180, 245, 176], [185, 247, 178],
[188, 247, 178], [192, 247, 178], [197, 247, 178], [200, 247, 178], [202, 247, 178],
[208, 250, 177], [211, 250, 177], [216, 250, 177], [218, 250, 177], [222, 250, 177],
[227, 250, 177], [232, 252, 179], [237, 252, 179], [240, 252, 179], [245, 252, 179],
[248, 252, 179], [251, 252, 179], [252, 252, 177], [243, 247, 168], [238, 245, 162],
[231, 242, 155], [222, 237, 147], [214, 235, 141], [208, 232, 135], [197, 227, 127],
[190, 224, 121], [179, 219, 114], [172, 217, 111], [163, 214, 105], [153, 209, 96],
[143, 207, 91], [136, 204, 88], [125, 199, 82], [117, 196, 77], [105, 191, 71],
[97, 189, 66], [86, 186, 61], [77, 181, 56], [69, 179, 52], [58, 176, 48],
[47, 171, 43], [39, 168, 39], [36, 166, 41], [32, 161, 43], [27, 158, 44],
[23, 153, 45], [21, 150, 47], [18, 148, 50], [14, 143, 53], [11, 140, 54],
[8, 138, 56], [5, 133, 58], [3, 130, 62], [0, 128, 64], [18, 130, 63], [30, 130, 62],
[40, 133, 61], [49, 135, 60], [54, 135, 59], [62, 138, 59], [69, 140, 58], [76, 143, 57],
[80, 143, 56], [88, 145, 55], [95, 148, 55], [99, 148, 53], [106, 150, 53], [112, 153, 50],
[118, 153, 49], [123, 156, 48], [130, 158, 47], [136, 158, 46], [143, 161, 45],
[147, 161, 43], [155, 163, 42], [162, 166, 41], [168, 166, 39], [173, 169, 38],
[179, 169, 36], [186, 171, 34], [194, 172, 33], [199, 174, 32], [204, 175, 29],
[212, 178, 25], [219, 180, 24], [224, 181, 22], [230, 180, 18], [237, 181, 14],
[245, 182, 10], [250, 185, 5], [250, 180, 2], [247, 174, 2], [242, 162, 2], [240, 161, 2],
[237, 151, 2], [232, 144, 2], [230, 139, 2], [227, 133, 2], [222, 123, 2], [219, 118, 2],
[217, 113, 2], [212, 107, 2], [209, 99, 2], [204, 93, 2], [201, 88, 2], [199, 84, 2],
[194, 79, 2], [191, 71, 2], [189, 67, 2], [184, 62, 2], [181, 59, 2], [176, 51, 2],
[173, 48, 2], [171, 44, 2], [166, 40, 2], [163, 34, 2], [161, 33, 2], [156, 27, 2],
[153, 24, 2], [148, 21, 1], [145, 18, 1], [143, 13, 1], [138, 10, 1], [135, 8, 1],
[133, 6, 1], [128, 1, 1], [120, 0, 0], [120, 5, 1], [120, 9, 1], [120, 12, 2], [117, 14, 2],
[117, 14, 2], [117, 17, 4], [117, 19, 4], [117, 21, 4], [117, 22, 5], [115, 23, 5], [115, 23, 5],
[115, 25, 5], [115, 26, 6], [115, 28, 6], [115, 29, 6], [112, 30, 7], [112, 31, 7], [112, 31, 7],
[112, 33, 7], [112, 34, 8], [112, 36, 8], [112, 36, 8], [110, 37, 9], [110, 37, 9], [110, 37, 9],
[110, 40, 10], [110, 41, 10], [110, 41, 10], [107, 41, 11], [107, 43, 11], [107, 43, 11],
[107, 44, 11], [107, 45, 12], [105, 46, 12], [105, 46, 13], [105, 48, 13], [105, 48, 14],
[107, 52, 17], [110, 55, 21], [112, 58, 24], [115, 61, 28], [117, 64, 30], [120, 67, 35],
[120, 69, 37], [122, 72, 40], [125, 76, 45], [128, 79, 48], [130, 82, 52], [133, 86, 57],
[133, 88, 60], [135, 92, 65], [138, 94, 67], [140, 99, 73], [143, 102, 77], [143, 104, 80],
[145, 109, 86], [148, 111, 90], [148, 114, 95], [150, 117, 98], [153, 122, 104],
[153, 125, 109], [156, 129, 114], [158, 133, 119], [158, 136, 123], [161, 140, 129],
[163, 146, 135], [163, 148, 139], [166, 153, 146], [166, 156, 151], [168, 161, 157],
[168, 163, 160], [171, 169, 167], [171, 171, 171], [173, 173, 173], [176, 176, 176],
[176, 176, 176], [179, 179, 179], [181, 181, 181], [184, 184, 184], [186, 186, 186],
[189, 189, 189], [191, 191, 191], [191, 191, 191], [194, 194, 194], [196, 196, 196],
[199, 199, 199], [201, 201, 201], [204, 204, 204], [207, 204, 207], [209, 207, 209],
[212, 210, 212], [214, 212, 214], [217, 215, 217], [217, 215, 217], [219, 217, 219],
[222, 220, 222], [224, 222, 224], [227, 225, 227], [230, 227, 230], [232, 230, 232],
[235, 232, 235], [237, 235, 237], [240, 237, 240], [242, 240, 242], [245, 242, 245],
[247, 245, 247], [250, 247, 250], [252, 250, 252], [255, 252, 255]]
//start View definitions
var view = new ol.View({
    projection: "EPSG:3857",
    center: [590725.6581734803, 8488853.464779368], // Bergen - nordnes
    zoom: 16
});
//End View definitions
//Start: Map definitions
var map = new ol.Map({
    target: 'map',
    view: view
});
var sProjection = 'EPSG:3857';
var extent = {
    'EPSG:3857': [-20026376.39, -20048966.10, 20026376.39, 20048966.10],
};
var projection = new ol.proj.Projection({
    code: sProjection,
    extent: extent[sProjection]
});
var projectionExtent = projection.getExtent();
var size = ol.extent.getWidth(projectionExtent) / 256;
var resolutions = [], matrixIds = [];
for (var z = 0; z < 21; ++z) {//Max 18?
    resolutions[z] = size / Math.pow(2, z);
    matrixIds[z] = sProjection + ":" + z;
}
//End: Map definitions
//***********************
var grunnkartSource = new ol.source.TileWMS({
    url: "https://openwms.statkart.no/skwms1/wms.norges_grunnkart?",
    params: {
        'LAYERS': 'Norges_grunnkart'
    },
    crossOrigin: 'anonymous'
})
var wmsRelieffSource = new ol.source.TileWMS({
    url: 'https://hoydedata.no/arcgis/services/las_dom_skyggerelieff_somlos/ImageServer/WMSServer?',
    params: {
        'LAYERS': 'las_dom_skyggerelieff_somlos'
    },
    crossOrigin: 'anonymous'
});
var wmsHoydeDomSource = new ol.source.ImageWMS({
    url: 'https://hoydedata.no/arcgis/services/las_dom_somlos/ImageServer/WMSServer?',
    params: {
        LAYERS: "las_dom_somlos"
    },
    crossOrigin: 'anonymous',
    ratio: 1
    //projection: "EPSG:3857"
    //tileGrid: tileGrid
});
var wmsHoydeDtmSource = new ol.source.ImageWMS({
    url: 'https://hoydedata.no/arcgis/services/las_dtm_somlos/ImageServer/WMSServer?',
    params: {
        LAYERS: "las_dtm_somlos"
    },
    crossOrigin: 'anonymous',
    ratio: 1
    //projection: "EPSG:3857"
    //tileGrid: tileGrid
});
var raster = new ol.source.Raster({
    sources: [wmsHoydeDtmSource],
    operation: flood
});
//End: source
//Start: layer
var tileLayerGrunnkart = new ol.layer.Tile({
    source: grunnkartSource
})
var wmsRelieffLayer = new ol.layer.Tile({
    source: wmsRelieffSource,
    opacity: 0.2,
});
var wmsHoydeDomLayer = new ol.layer.Image({
    source: wmsHoydeDomSource,
    opacity: 1
});
var wmsHoydeDtmLayer = new ol.layer.Image({
    source: wmsHoydeDtmSource,
    opacity: 1
});
var osmTile = new ol.layer.Tile({
    source: new ol.source.OSM(),
});
var rasterLayer = new ol.layer.Image({
    source: raster,
    opacity: 0.6
})
//End: layer
//End: WMS-C Kartverket
//***********************
// Add layers to map
//map.addLayer(osmTile);
map.addLayer(tileLayerGrunnkart);
//map.addLayer(wmsHoydeDtmLayer);
map.addLayer(wmsRelieffLayer);
//map.addLayer(rasterLayer);
map.on('singleclick', function (evt) {
    // 
    // document.getElementById('info').innerHTML = '';
    var viewResolution = /** @type {number} */ (view.getResolution());
    var url = wmsHoydeDomSource.getGetFeatureInfoUrl(
        evt.coordinate, viewResolution, 'EPSG:3857',
        { 'INFO_FORMAT': 'text/plain' });
    if (url) {
        fetch(url).then(function (response) {
            return response.text();
        })
            .then(function (text) {
                var doublenumber = Number(text.replace(/[^0-9\.]+/g, ""));
                console.log(doublenumber)
            })
            .catch(function (error) {
                console.log('Request failed', error)
            });
    }
});
var canvas = document.querySelector(".ol-unselectable");
var ctx = canvas.getContext("2d");
var cw, ch;
cw = canvas.offsetWidth;
ch = canvas.offsetHeight;
//cw = 200;
//ch = 200;
//var highestColors = elevationScale.slice(1).slice(-1).reverse();
var highestColors = [[255, 252, 255]]
var lowestColors = elevationScale.slice(0, 1);
var highestEl;
var lowestEl;
document.getElementById('lightest').addEventListener('click', function () {
    //map.on('moveend', function() {
    map.removeLayer(tileLayerGrunnkart);
    map.removeLayer(rasterLayer);
    map.removeLayer(wmsRelieffLayer);
    map.addLayer(wmsHoydeDomLayer);
    //wmsHoydeSource.on('imageloadend', function (e) {
    setTimeout(() => {

        console.log("ready")
        var imgData = ctx.getImageData(0, 0, cw, ch);
        var data = imgData.data;
        var highest = [];
        var lowest = [];
        for (var x = 0; x < cw; ++x) {
            for (var y = 0; y < ch; ++y) {
                var index = (y * cw + x) * 4;
                highestColors.forEach(function (highestColor, i) {
                    if (data[index + 0] == highestColor[0] && data[index + 1] == highestColor[1] && data[index + 2] == highestColor[2]) {
                        var cx = { "X": x, "Y": y, color: highestColor, index: i }; //
                        highest.push(cx);
                    }
                })
                lowestColors.forEach(function (lowestColor, i) {
                    if (data[index + 0] == lowestColor[0] && data[index + 1] == lowestColor[1] && data[index + 2] == lowestColor[2]) {
                        var cx = { "X": x, "Y": y, color: lowestColor, index: i }; //
                        lowest.push(cx);
                    }
                })
            }
        }
        highest = highest.sort(function (a, b) { return a.index - b.index })
        lowest = lowest.sort(function (a, b) { return a.index - b.index })
        console.log("highest: ", highest);
        console.log("lowest: ", lowest);
        let viewResolution = /** @type {number} */ (view.getResolution());
        let highestUrls = [];
        let lowestUrls = [];
        let highestEls = [];
        let lowestEls = [];
        highest.forEach(highestCoord => {
            var coordinate = map.getCoordinateFromPixel([highestCoord.X, highestCoord.Y]);
            var url = wmsHoydeDomSource.getGetFeatureInfoUrl(
                coordinate, viewResolution, 'EPSG:3857',
                { 'INFO_FORMAT': 'text/plain' });
            highestUrls.push(url);
        })
        lowest.slice(0, 5).forEach(lowestCoord => {
            var coordinate = map.getCoordinateFromPixel([lowestCoord.X, lowestCoord.Y]);
            var url = wmsHoydeDomSource.getGetFeatureInfoUrl(
                coordinate, viewResolution, 'EPSG:3857',
                { 'INFO_FORMAT': 'text/plain' });
            lowestUrls.push(url)
        })
        let urls = highestUrls.slice(0, 5)
        urls.push(lowestUrls.slice(0, 5))
        getHeights(urls)
        async function getHeights(urls) {
            let results = []
            for (const url of urls) {
                result = await fetch(url).then(resp => resp.text())
                console.log('fetching height-data')
                results.push(result)
            }
            let elevations = []
            results.forEach(text => {
                text.includes('NoData') ? elevation = 0 : elevation = Number(text.replace(/[^0-9\.]+/g, ""));
                elevations.push(elevation);
            })
            elevations = elevations.sort(function (a, b) { return a - b })
            console.log(elevations)
            highestEl = elevations.pop()
            console.log("highest: ", highestEl)
            lowestEl = elevations[0]
            console.log('lowest: ', lowestEl)
            if (isNumber(highestEl) && isNumber(lowestEl)) {
                map.removeLayer(wmsHoydeDomLayer);
                map.addLayer(tileLayerGrunnkart);
                map.addLayer(rasterLayer);
                map.addLayer(wmsRelieffLayer);
                raster.changed()
            }
        }
    }, 1000);
    //});
});
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
var convertRange = function (value, r1, r2) {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
}
function flood(pixels, data) {
    var pixel = pixels[0];
    var convertRange = function (value, r1, r2) {
        return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
    }
    if (pixel) {
        var index = data.elevationScale.findIndex(el => {
            return (el[0] === pixel[0] && el[1] === pixel[1] && el[2] === pixel[2])
        });
        var height = convertRange(index, [0, data.elevationScale.length], [data.lowestEl, data.highestEl])
        if (height <= data.level) {
            pixel[0] = 145;
            pixel[1] = 175;
            pixel[2] = 186;
            pixel[3] = 255;
        } else {
            pixel[3] = 0;
        }
    }
    return pixel;
}
const control = document.getElementById('level');
const output = document.getElementById('output');
control.addEventListener('input', function () {
    output.innerText = control.value;
    raster.changed();
});
output.innerText = control.value;
raster.on('beforeoperations', function (event) {
    event.data.level = control.value;
    event.data.elevationScale = elevationScale;
    event.data.highestEl = highestEl;
    event.data.lowestEl = lowestEl;
});
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}
var context = ctx;

var convertRange = function (value, r1, r2) {
    return (value - r1[0]) * (r2[1] - r2[0]) / (r1[1] - r1[0]) + r2[0];
}







// Get the modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);

// Function to open modal
function openModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to close modal if outside click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

document.getElementById("play").onclick = function () {
    console.log("Hei")
};