var size = 0;
var placement = 'point';

var style_PFFmlpunkt06112024_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("var value = '';");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
        function rules_PFFmlpunkt06112024_3(feature, value) {
            var context = {
                feature: feature,
                variables: {}
            };
            // Start of if blocks and style check logic
            if (exp_PFFmlpunkt06112024_3rule0_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 4,
            angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(200,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(200,0,0,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_PFFmlpunkt06112024_3rule1_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 4,
            angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(200,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(227,26,28,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_PFFmlpunkt06112024_3rule2_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          displacement: [0, 0],
                                          stroke: new ol.style.Stroke({color: 'rgba(200,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
                                          fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
                    else if (exp_PFFmlpunkt06112024_3rule3_eval_expression(context)) {
                      return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 8.0 + size,
                                          points: 4,
                                          radius2: 0,
                                          angle: Math.PI / 4,
                                          displacement: [0, 0],
                                          stroke: new ol.style.Stroke({color: 'rgba(0,0,0,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}),
                                          fill: new ol.style.Fill({color: 'rgba(255,0,0,1.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    }
            else {
                return [ new ol.style.Style({
        image: new ol.style.RegularShape({radius: 10.0 + size, points: 4,
            angle: Math.PI/4, displacement: [0, 0], stroke: new ol.style.Stroke({color: 'rgba(128,128,128,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.9}), fill: new ol.style.Fill({color: 'rgba(255,0,0,0.0)'})}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
            }
        }
        var style = rules_PFFmlpunkt06112024_3(feature, value);
        ;

    return style;
};
