var wms_layers = [];

var format_Photos_0 = new ol.format.GeoJSON();
var features_Photos_0 = format_Photos_0.readFeatures(json_Photos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_0.addFeatures(features_Photos_0);
var lyr_Photos_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Photos_0, 
                style: style_Photos_0,
                popuplayertitle: "Photos",
                interactive: true,
                title: '<img src="styles/legend/Photos_0.png" /> Photos'
            });

lyr_Photos_0.setVisible(true);
var layersList = [lyr_Photos_0];
lyr_Photos_0.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Photos_0.set('fieldImages', {'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_Photos_0.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'header label - visible with data', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_Photos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});