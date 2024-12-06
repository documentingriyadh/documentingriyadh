var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Photos_1 = new ol.format.GeoJSON();
var features_Photos_1 = format_Photos_1.readFeatures(json_Photos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_1.addFeatures(features_Photos_1);
var lyr_Photos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Photos_1, 
                style: style_Photos_1,
                popuplayertitle: "Photos",
                interactive: true,
                title: '<img src="styles/legend/Photos_1.png" /> Photos'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_Photos_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Photos_1];
lyr_Photos_1.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_Photos_1.set('fieldImages', {'photo': 'ExternalResource', 'filename': '', 'directory': 'ExternalResource', 'altitude': '', 'direction': '', 'rotation': '', 'longitude': '', 'latitude': '', 'timestamp': '', });
lyr_Photos_1.set('fieldLabels', {'photo': 'inline label - always visible', 'filename': 'hidden field', 'directory': 'no label', 'altitude': 'hidden field', 'direction': 'hidden field', 'rotation': 'hidden field', 'longitude': 'hidden field', 'latitude': 'hidden field', 'timestamp': 'hidden field', });
lyr_Photos_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});