var size = 0;
var placement = 'point';
function categories_Registrerteomrder_9(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Leik':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(229,193,110,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(229,193,110,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Like':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(178,223,138,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(178,223,138,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Prob':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,90,0,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(128,90,0,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Somm':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(128,163,255,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(128,163,255,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Traf':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(249,69,81,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(249,69,81,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vint':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(109,250,250,0.8)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(109,250,250,0.8)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Registrerteomrder_9 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("TYPE");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("OMRID") !== null) {
        labelText = String(feature.get("OMRID"));
    }
    
    var style = categories_Registrerteomrder_9(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
