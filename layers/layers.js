ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32645").setExtent([303167.642114, 2862525.849724, 303434.497360, 2862656.296390]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_AkhandJyotiEyeHospital_1 = new ol.format.GeoJSON();
var features_AkhandJyotiEyeHospital_1 = format_AkhandJyotiEyeHospital_1.readFeatures(json_AkhandJyotiEyeHospital_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_AkhandJyotiEyeHospital_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AkhandJyotiEyeHospital_1.addFeatures(features_AkhandJyotiEyeHospital_1);
var lyr_AkhandJyotiEyeHospital_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AkhandJyotiEyeHospital_1, 
                style: style_AkhandJyotiEyeHospital_1,
                popuplayertitle: 'AkhandJyotiEyeHospital',
                interactive: false,
                title: '<img src="styles/legend/AkhandJyotiEyeHospital_1.png" /> AkhandJyotiEyeHospital'
            });
var format_AkhandJyotiEyeHospital1_2 = new ol.format.GeoJSON();
var features_AkhandJyotiEyeHospital1_2 = format_AkhandJyotiEyeHospital1_2.readFeatures(json_AkhandJyotiEyeHospital1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_AkhandJyotiEyeHospital1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AkhandJyotiEyeHospital1_2.addFeatures(features_AkhandJyotiEyeHospital1_2);
var lyr_AkhandJyotiEyeHospital1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AkhandJyotiEyeHospital1_2, 
                style: style_AkhandJyotiEyeHospital1_2,
                popuplayertitle: 'AkhandJyotiEyeHospital1',
                interactive: false,
                title: '<img src="styles/legend/AkhandJyotiEyeHospital1_2.png" /> AkhandJyotiEyeHospital1'
            });
var format_InternalLayoutZoning_3 = new ol.format.GeoJSON();
var features_InternalLayoutZoning_3 = format_InternalLayoutZoning_3.readFeatures(json_InternalLayoutZoning_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32645'});
var jsonSource_InternalLayoutZoning_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InternalLayoutZoning_3.addFeatures(features_InternalLayoutZoning_3);
var lyr_InternalLayoutZoning_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InternalLayoutZoning_3, 
                style: style_InternalLayoutZoning_3,
                popuplayertitle: 'InternalLayoutZoning',
                interactive: true,
    title: 'InternalLayoutZoning<br />\
    <img src="styles/legend/InternalLayoutZoning_3_0.png" /> BedsLesac<br />\
    <img src="styles/legend/InternalLayoutZoning_3_1.png" /> ChanginggCornea<br />\
    <img src="styles/legend/InternalLayoutZoning_3_2.png" /> CheckInLesac<br />\
    <img src="styles/legend/InternalLayoutZoning_3_3.png" /> Circulation<br />\
    <img src="styles/legend/InternalLayoutZoning_3_4.png" /> CommercialStalls<br />\
    <img src="styles/legend/InternalLayoutZoning_3_5.png" /> Conference<br />\
    <img src="styles/legend/InternalLayoutZoning_3_6.png" /> Counceling Rm Corn<br />\
    <img src="styles/legend/InternalLayoutZoning_3_7.png" /> Councelling<br />\
    <img src="styles/legend/InternalLayoutZoning_3_8.png" /> DataCenter<br />\
    <img src="styles/legend/InternalLayoutZoning_3_9.png" /> DayCareBedsCornea<br />\
    <img src="styles/legend/InternalLayoutZoning_3_10.png" /> DirtyUtility<br />\
    <img src="styles/legend/InternalLayoutZoning_3_11.png" /> EyeBank<br />\
    <img src="styles/legend/InternalLayoutZoning_3_12.png" /> InvestigationCorn<br />\
    <img src="styles/legend/InternalLayoutZoning_3_13.png" /> NursingStation<br />\
    <img src="styles/legend/InternalLayoutZoning_3_14.png" /> OPDcornea<br />\
    <img src="styles/legend/InternalLayoutZoning_3_15.png" /> OPDlesac<br />\
    <img src="styles/legend/InternalLayoutZoning_3_16.png" /> OpenSpace<br />\
    <img src="styles/legend/InternalLayoutZoning_3_17.png" /> OTlesac<br />\
    <img src="styles/legend/InternalLayoutZoning_3_18.png" /> OTminor<br />\
    <img src="styles/legend/InternalLayoutZoning_3_19.png" /> PostOpObservation<br />\
    <img src="styles/legend/InternalLayoutZoning_3_20.png" /> ReceptionWaiting<br />\
    <img src="styles/legend/InternalLayoutZoning_3_21.png" /> Registration&RecordDesk<br />\
    <img src="styles/legend/InternalLayoutZoning_3_22.png" /> ResearchLab<br />\
    <img src="styles/legend/InternalLayoutZoning_3_23.png" /> ScrubCornea<br />\
    <img src="styles/legend/InternalLayoutZoning_3_24.png" /> ScrubLesac<br />\
    <img src="styles/legend/InternalLayoutZoning_3_25.png" /> ServiceCore<br />\
    <img src="styles/legend/InternalLayoutZoning_3_26.png" /> StaffRoom<br />\
    <img src="styles/legend/InternalLayoutZoning_3_27.png" /> SterileCornea<br />\
    <img src="styles/legend/InternalLayoutZoning_3_28.png" /> Toilets<br />\
    <img src="styles/legend/InternalLayoutZoning_3_29.png" /> WorkUpRmLesac<br />\
    <img src="styles/legend/InternalLayoutZoning_3_30.png" /> <br />' });

lyr_GoogleHybrid_0.setVisible(true);lyr_AkhandJyotiEyeHospital_1.setVisible(true);lyr_AkhandJyotiEyeHospital1_2.setVisible(true);lyr_InternalLayoutZoning_3.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_AkhandJyotiEyeHospital_1,lyr_AkhandJyotiEyeHospital1_2,lyr_InternalLayoutZoning_3];
lyr_AkhandJyotiEyeHospital_1.set('fieldAliases', {'id': 'id', 'Address': 'Address', });
lyr_AkhandJyotiEyeHospital1_2.set('fieldAliases', {'id': 'id', 'Area': 'Area', 'AreaSQF': 'AreaSQF', 'Name': 'Name', 'NAME_1': 'NAME_1', });
lyr_InternalLayoutZoning_3.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', 'layer': 'layer', 'path': 'path', 'AreaSqm': 'AreaSqm', });
lyr_AkhandJyotiEyeHospital_1.set('fieldImages', {'id': '', 'Address': '', });
lyr_AkhandJyotiEyeHospital1_2.set('fieldImages', {'id': 'TextEdit', 'Area': 'TextEdit', 'AreaSQF': 'TextEdit', 'Name': 'TextEdit', 'NAME_1': 'TextEdit', });
lyr_InternalLayoutZoning_3.set('fieldImages', {'fid': 'TextEdit', 'DN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'AreaSqm': 'Range', });
lyr_AkhandJyotiEyeHospital_1.set('fieldLabels', {'id': 'no label', 'Address': 'no label', });
lyr_AkhandJyotiEyeHospital1_2.set('fieldLabels', {'id': 'no label', 'Area': 'header label - visible with data', 'AreaSQF': 'header label - visible with data', 'Name': 'no label', 'NAME_1': 'no label', });
lyr_InternalLayoutZoning_3.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', 'layer': 'inline label - visible with data', 'path': 'no label', 'AreaSqm': 'inline label - visible with data', });
lyr_InternalLayoutZoning_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});