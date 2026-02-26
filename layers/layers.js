var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 0.414000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KartlagtefriluftsomrderGiske2016_1 = new ol.format.GeoJSON();
var features_KartlagtefriluftsomrderGiske2016_1 = format_KartlagtefriluftsomrderGiske2016_1.readFeatures(json_KartlagtefriluftsomrderGiske2016_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KartlagtefriluftsomrderGiske2016_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KartlagtefriluftsomrderGiske2016_1.addFeatures(features_KartlagtefriluftsomrderGiske2016_1);
var lyr_KartlagtefriluftsomrderGiske2016_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KartlagtefriluftsomrderGiske2016_1, 
                style: style_KartlagtefriluftsomrderGiske2016_1,
                popuplayertitle: 'Kartlagte friluftsområder Giske 2016',
                interactive: true,
    title: 'Kartlagte friluftsområder Giske 2016<br />\
    <img src="styles/legend/KartlagtefriluftsomrderGiske2016_1_0.png" /> (A) Svært viktig friluftslivsområde<br />\
    <img src="styles/legend/KartlagtefriluftsomrderGiske2016_1_1.png" /> (B) Viktig friluftslivsområde<br />\
    <img src="styles/legend/KartlagtefriluftsomrderGiske2016_1_2.png" /> (C) Registrert friluftsområde<br />\
    <img src="styles/legend/KartlagtefriluftsomrderGiske2016_1_3.png" /> (D) Ikkje klassifisert<br />' });
var format_PFFtrase06112024_2 = new ol.format.GeoJSON();
var features_PFFtrase06112024_2 = format_PFFtrase06112024_2.readFeatures(json_PFFtrase06112024_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFFtrase06112024_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFFtrase06112024_2.addFeatures(features_PFFtrase06112024_2);
var lyr_PFFtrase06112024_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFFtrase06112024_2, 
                style: style_PFFtrase06112024_2,
                popuplayertitle: 'PFF - trase 06.11.2024',
                interactive: true,
    title: 'PFF - trase 06.11.2024<br />\
    <img src="styles/legend/PFFtrase06112024_2_0.png" /> Hovedtrasé<br />\
    <img src="styles/legend/PFFtrase06112024_2_1.png" /> Forgreiningstrasé<br />\
    <img src="styles/legend/PFFtrase06112024_2_2.png" /> Matetrasé<br />' });
var format_PFFmlpunkt06112024_3 = new ol.format.GeoJSON();
var features_PFFmlpunkt06112024_3 = format_PFFmlpunkt06112024_3.readFeatures(json_PFFmlpunkt06112024_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PFFmlpunkt06112024_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PFFmlpunkt06112024_3.addFeatures(features_PFFmlpunkt06112024_3);
var lyr_PFFmlpunkt06112024_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PFFmlpunkt06112024_3, 
                style: style_PFFmlpunkt06112024_3,
                popuplayertitle: 'PFF - målpunkt 06.11.2024',
                interactive: true,
    title: 'PFF - målpunkt 06.11.2024<br />\
    <img src="styles/legend/PFFmlpunkt06112024_3_0.png" /> Eksisterende<br />\
    <img src="styles/legend/PFFmlpunkt06112024_3_1.png" /> Planlagt<br />\
    <img src="styles/legend/PFFmlpunkt06112024_3_2.png" /> Foreslått nedlagt<br />\
    <img src="styles/legend/PFFmlpunkt06112024_3_3.png" /> Nedlagt<br />\
    <img src="styles/legend/PFFmlpunkt06112024_3_4.png" /> Status ikke satt<br />' });
var format_Regulerteleikeplasser_4 = new ol.format.GeoJSON();
var features_Regulerteleikeplasser_4 = format_Regulerteleikeplasser_4.readFeatures(json_Regulerteleikeplasser_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Regulerteleikeplasser_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Regulerteleikeplasser_4.addFeatures(features_Regulerteleikeplasser_4);
var lyr_Regulerteleikeplasser_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Regulerteleikeplasser_4, 
                style: style_Regulerteleikeplasser_4,
                popuplayertitle: 'Regulerte leikeplasser',
                interactive: true,
                title: '<img src="styles/legend/Regulerteleikeplasser_4.png" /> Regulerte leikeplasser'
            });
var format_Ferdselinatur_5 = new ol.format.GeoJSON();
var features_Ferdselinatur_5 = format_Ferdselinatur_5.readFeatures(json_Ferdselinatur_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferdselinatur_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferdselinatur_5.addFeatures(features_Ferdselinatur_5);
var lyr_Ferdselinatur_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferdselinatur_5, 
                style: style_Ferdselinatur_5,
                popuplayertitle: 'Ferdsel i natur',
                interactive: true,
                title: '<img src="styles/legend/Ferdselinatur_5.png" /> Ferdsel i natur'
            });
var format_Ferdselpveg_6 = new ol.format.GeoJSON();
var features_Ferdselpveg_6 = format_Ferdselpveg_6.readFeatures(json_Ferdselpveg_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferdselpveg_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferdselpveg_6.addFeatures(features_Ferdselpveg_6);
var lyr_Ferdselpveg_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferdselpveg_6, 
                style: style_Ferdselpveg_6,
                popuplayertitle: 'Ferdsel på veg',
                interactive: true,
                title: '<img src="styles/legend/Ferdselpveg_6.png" /> Ferdsel på veg'
            });
var format_Registrerteomrder_7 = new ol.format.GeoJSON();
var features_Registrerteomrder_7 = format_Registrerteomrder_7.readFeatures(json_Registrerteomrder_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Registrerteomrder_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Registrerteomrder_7.addFeatures(features_Registrerteomrder_7);
var lyr_Registrerteomrder_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Registrerteomrder_7, 
                style: style_Registrerteomrder_7,
                popuplayertitle: 'Registrerte områder',
                interactive: true,
    title: 'Registrerte områder<br />\
    <img src="styles/legend/Registrerteomrder_7_0.png" /> Leike- og opphaldsområde<br />\
    <img src="styles/legend/Registrerteomrder_7_1.png" /> Fine stader (liker)<br />\
    <img src="styles/legend/Registrerteomrder_7_2.png" /> Problemområde (vil endre)<br />\
    <img src="styles/legend/Registrerteomrder_7_3.png" /> Badeområder<br />\
    <img src="styles/legend/Registrerteomrder_7_4.png" /> Utrygg ferdsel langs veg<br />\
    <img src="styles/legend/Registrerteomrder_7_5.png" /> Vinteraktiviteter<br />' });
var format_Barnehagetrkk2023_traseer_8 = new ol.format.GeoJSON();
var features_Barnehagetrkk2023_traseer_8 = format_Barnehagetrkk2023_traseer_8.readFeatures(json_Barnehagetrkk2023_traseer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barnehagetrkk2023_traseer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barnehagetrkk2023_traseer_8.addFeatures(features_Barnehagetrkk2023_traseer_8);
var lyr_Barnehagetrkk2023_traseer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barnehagetrkk2023_traseer_8, 
                style: style_Barnehagetrkk2023_traseer_8,
                popuplayertitle: 'Barnehagetråkk2023_traseer',
                interactive: true,
    title: 'Barnehagetråkk2023_traseer<br />\
    <img src="styles/legend/Barnehagetrkk2023_traseer_8_0.png" /> Blå<br />\
    <img src="styles/legend/Barnehagetrkk2023_traseer_8_1.png" /> Grøn<br />\
    <img src="styles/legend/Barnehagetrkk2023_traseer_8_2.png" /> Rosa<br />\
    <img src="styles/legend/Barnehagetrkk2023_traseer_8_3.png" /> Rød<br />\
    <img src="styles/legend/Barnehagetrkk2023_traseer_8_4.png" /> Rød og svart<br />' });
var format_Barnehagetrkk2023_omrder_9 = new ol.format.GeoJSON();
var features_Barnehagetrkk2023_omrder_9 = format_Barnehagetrkk2023_omrder_9.readFeatures(json_Barnehagetrkk2023_omrder_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Barnehagetrkk2023_omrder_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Barnehagetrkk2023_omrder_9.addFeatures(features_Barnehagetrkk2023_omrder_9);
var lyr_Barnehagetrkk2023_omrder_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Barnehagetrkk2023_omrder_9, 
                style: style_Barnehagetrkk2023_omrder_9,
                popuplayertitle: 'Barnehagetråkk2023_områder',
                interactive: true,
    title: 'Barnehagetråkk2023_områder<br />\
    <img src="styles/legend/Barnehagetrkk2023_omrder_9_0.png" /> Daggry barnehage<br />\
    <img src="styles/legend/Barnehagetrkk2023_omrder_9_1.png" /> Giske<br />\
    <img src="styles/legend/Barnehagetrkk2023_omrder_9_2.png" /> Godøy<br />\
    <img src="styles/legend/Barnehagetrkk2023_omrder_9_3.png" /> Myra<br />\
    <img src="styles/legend/Barnehagetrkk2023_omrder_9_4.png" /> Myra og Daggry<br />\
    <img src="styles/legend/Barnehagetrkk2023_omrder_9_5.png" /> Nordstrand<br />\
    <img src="styles/legend/Barnehagetrkk2023_omrder_9_6.png" /> Sætra<br />\
    <img src="styles/legend/Barnehagetrkk2023_omrder_9_7.png" /> Vigra<br />' });
var group_Byggogsamferdsel = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Bygg og samferdsel'});
var group_Registreringerbarnehage2023 = new ol.layer.Group({
                                layers: [lyr_Barnehagetrkk2023_traseer_8,lyr_Barnehagetrkk2023_omrder_9,],
                                fold: 'close',
                                title: 'Registreringer barnehage 2023'});
var group_Registreringerbarnetrkk2015 = new ol.layer.Group({
                                layers: [lyr_Ferdselinatur_5,lyr_Ferdselpveg_6,lyr_Registrerteomrder_7,],
                                fold: 'close',
                                title: 'Registreringer barnetråkk 2015'});
var group_Leikeplassar = new ol.layer.Group({
                                layers: [lyr_Regulerteleikeplasser_4,],
                                fold: 'close',
                                title: 'Leikeplassar'});
var group_PlanforfriluftslivetsferdselsrerPFF = new ol.layer.Group({
                                layers: [lyr_PFFtrase06112024_2,lyr_PFFmlpunkt06112024_3,],
                                fold: 'close',
                                title: 'Plan for friluftslivets ferdselsårer (PFF)'});
var group_Friluftslivsomrder = new ol.layer.Group({
                                layers: [lyr_KartlagtefriluftsomrderGiske2016_1,],
                                fold: 'close',
                                title: 'Friluftslivsområder'});
var group_NrhettiltenesterfrPAKT = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Nærhet til tenester (frå PAKT)'});
var group_Openstreetmap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_0,],
                                fold: 'close',
                                title: 'Open street map'});

lyr_OSMStandard_0.setVisible(true);lyr_KartlagtefriluftsomrderGiske2016_1.setVisible(false);lyr_PFFtrase06112024_2.setVisible(false);lyr_PFFmlpunkt06112024_3.setVisible(false);lyr_Regulerteleikeplasser_4.setVisible(false);lyr_Ferdselinatur_5.setVisible(false);lyr_Ferdselpveg_6.setVisible(false);lyr_Registrerteomrder_7.setVisible(false);lyr_Barnehagetrkk2023_traseer_8.setVisible(false);lyr_Barnehagetrkk2023_omrder_9.setVisible(false);
var layersList = [group_Openstreetmap,group_Friluftslivsomrder,group_PlanforfriluftslivetsferdselsrerPFF,group_Leikeplassar,group_Registreringerbarnetrkk2015,group_Registreringerbarnehage2023];
lyr_KartlagtefriluftsomrderGiske2016_1.set('fieldAliases', {'gml_id': 'gml_id', 'lokalId': 'lokalId', 'navnerom': 'navnerom', 'geodataeier': 'geodataeier', 'kommune': 'kommune', 'datafangstdato': 'datafangstdato', 'områdetype': 'områdetype', 'områdeverdi': 'områdeverdi', 'friluftOpphav': 'friluftOpphav', 'kartlagtStatus': 'kartlagtStatus', 'områdenavn': 'områdenavn', 'kartleggingsår': 'kartleggingsår', 'faktaark': 'faktaark', 'tilgjengelighet': 'tilgjengelighet', 'brukerfrekvens': 'brukerfrekvens', 'egnethet': 'egnethet', 'funksjon': 'funksjon', 'tilrettelegging': 'tilrettelegging', 'opplevelseskvaliteter': 'opplevelseskvaliteter', 'regionaleOgNasjonaleBrukere': 'regionaleOgNasjonaleBrukere', 'kunnskapsverdier': 'kunnskapsverdier', 'potensiellBruk': 'potensiellBruk', 'symbolverdi': 'symbolverdi', 'inngrep': 'inngrep', 'utstrekning': 'utstrekning', });
lyr_PFFtrase06112024_2.set('fieldAliases', {'fid': 'fid', 'id': 'ID', 'navn': 'Navn', 'status': 'Status', 'traséType': 'Trasétype', 'traséBruk': 'Trasébruk', 'funksjon': 'Funksjon', 'beskrivels': 'beskrivels', 'tilrettele': 'tilrettele', 'tilrette_1': 'tilrette_1', 'tilgjengel': 'tilgjengel', 'rutenummer': 'Rutenummer', 'skiltet': 'Skiltet', 'merket': 'Merket', 'gradering': 'Gradering', 'slitasjegr': 'slitasjegr', 'trafikkbel': 'trafikkbel', 'maaloppnaa': 'maaloppnaa', 'grunneiera': 'grunneiera', 'vedlikehol': 'vedlikehol', 'lenker': 'Lenker/dokument', 'nyeTiltak': 'Beskrivelse av nye tiltak', 'nyeTiltak_': 'nyeTiltak_', 'nyeTilta_1': 'nyeTilta_1', 'nyeTilta_2': 'nyeTilta_2', 'nyeTilta_3': 'nyeTilta_3', 'Endring_Fk': 'Endring_Fk', 'Endring_N5': 'Endring_N5', 'Endring_Tu': 'Endring_Tu', 'opphav': 'Opphav', 'registreri': 'registreri', 'registrert': 'registrert', 'datafangst': 'datafangst', 'endret_av': 'Endret av', 'oppdaterin': 'oppdaterin', 'navnerom': 'navnerom', 'lokalId': 'lokalId', 'målemetod': 'målemetod', 'nøyaktigh': 'nøyaktigh', 'synbarhet': 'synbarhet', 'målemet_1': 'målemet_1', 'nøyakti_1': 'nøyakti_1', 'typeVeg': 'typeVeg', 'belysning': 'belysning', 'rutemerkin': 'rutemerkin', 'merking': 'merking', 'vedlikeh_1': 'vedlikeh_1', 'Rapport': 'Rapport', });
lyr_PFFmlpunkt06112024_3.set('fieldAliases', {'id': 'ID', 'navn': 'Navn', 'status': 'Status', 'funksjon': 'Funksjon', 'beskrivels': 'beskrivels', 'tilrettele': 'tilrettele', 'tilrette_1': 'tilrette_1', 'tilgjengel': 'tilgjengel', 'trafikkbel': 'trafikkbel', 'maaloppnaa': 'maaloppnaa', 'grunneiera': 'grunneiera', 'lenker': 'Lenker/dokument', 'nyeTiltak': 'Nye tilltak', 'nyeTiltak_': 'nyeTiltak_', 'nyeTilta_1': 'nyeTilta_1', 'nyeTilta_2': 'nyeTilta_2', 'nyeTilta_3': 'nyeTilta_3', 'opphav': 'Opphav', 'registreri': 'registreri', 'registrert': 'registrert', 'datafangst': 'datafangst', 'endret_av': 'Endret av', 'oppdaterin': 'oppdaterin', 'maalpunktB': 'maalpunktB', 'Rapport': 'Rapport', });
lyr_Regulerteleikeplasser_4.set('fieldAliases', {'Source': 'Source', 'gml_id': 'gml_id', 'lokalId': 'lokalId', 'navnerom': 'navnerom', 'versjonId': 'versjonId', 'oppdaterin': 'oppdaterin', 'kommunenum': 'kommunenum', 'planidenti': 'planidenti', 'vertikalni': 'vertikalni', 'regulering': 'regulering', 'f�rsteDi': 'f�rsteDi', 'feltbetegn': 'feltbetegn', 'utnyttings': 'utnyttings', 'utnyttin_1': 'utnyttin_1', 'avkj�rse': 'avkj�rse', });
lyr_Ferdselinatur_5.set('fieldAliases', {'OBJTYPE': 'OBJTYPE', 'OPPDATERIN': 'OPPDATERIN', 'GEOMETRITY': 'GEOMETRITY', 'LTEMA__LTE': 'LTEMA__LTE', 'FTEMA__FTE': 'FTEMA__FTE', 'Rapport': 'Rapport', });
lyr_Ferdselpveg_6.set('fieldAliases', {'OBJTYPE': 'OBJTYPE', 'OPPDATERIN': 'OPPDATERIN', 'GEOMETRITY': 'GEOMETRITY', 'LTEMA__LTE': 'LTEMA__LTE', 'ANTALL': 'ANTALL', 'FTEMA__FTE': 'FTEMA__FTE', 'Rapport': 'Rapport', });
lyr_Registrerteomrder_7.set('fieldAliases', {'OBJTYPE': 'OBJTYPE', 'GEOMETRITY': 'GEOMETRITY', 'OMRID': 'OMRID', 'OPPDATERIN': 'OPPDATERIN', 'LTEMA__LTE': 'LTEMA__LTE', 'KOMMENTAR': 'KOMMENTAR', 'ANTALL': 'ANTALL', 'FTEMA__FTE': 'FTEMA__FTE', 'PUNKT': 'PUNKT', 'TYPE': 'TYPE', 'Rapport': 'Rapport', });
lyr_Barnehagetrkk2023_traseer_8.set('fieldAliases', {'id': 'id', 'Område': 'Område', 'Kommentar': 'Kommentar', 'Registrert': 'Registrert', 'reg.info': 'reg.info', 'Tilstand': 'Tilstand', 'Tilstand -': 'Tilstand -', 'Farge': 'Farge', });
lyr_Barnehagetrkk2023_omrder_9.set('fieldAliases', {'id': 'id', 'namn': 'namn', 'kommentar': 'kommentar', 'registrert': 'registrert', 'Tilstand': 'Tilstand', 'Merknad': 'Merknad', });
lyr_KartlagtefriluftsomrderGiske2016_1.set('fieldImages', {'gml_id': 'TextEdit', 'lokalId': 'TextEdit', 'navnerom': 'TextEdit', 'geodataeier': 'TextEdit', 'kommune': 'Range', 'datafangstdato': 'Range', 'områdetype': 'TextEdit', 'områdeverdi': 'TextEdit', 'friluftOpphav': 'TextEdit', 'kartlagtStatus': 'TextEdit', 'områdenavn': 'TextEdit', 'kartleggingsår': 'Range', 'faktaark': 'TextEdit', 'tilgjengelighet': 'Range', 'brukerfrekvens': 'Range', 'egnethet': 'Range', 'funksjon': 'Range', 'tilrettelegging': 'Range', 'opplevelseskvaliteter': 'Range', 'regionaleOgNasjonaleBrukere': 'Range', 'kunnskapsverdier': 'Range', 'potensiellBruk': 'Range', 'symbolverdi': 'Range', 'inngrep': 'Range', 'utstrekning': 'Range', });
lyr_PFFtrase06112024_2.set('fieldImages', {'fid': 'Hidden', 'id': 'TextEdit', 'navn': 'TextEdit', 'status': 'ValueRelation', 'traséType': 'ValueRelation', 'traséBruk': 'ValueRelation', 'funksjon': 'TextEdit', 'beskrivels': 'TextEdit', 'tilrettele': 'TextEdit', 'tilrette_1': 'TextEdit', 'tilgjengel': 'TextEdit', 'rutenummer': 'TextEdit', 'skiltet': 'ValueRelation', 'merket': 'ValueRelation', 'gradering': 'ValueRelation', 'slitasjegr': 'TextEdit', 'trafikkbel': 'TextEdit', 'maaloppnaa': 'TextEdit', 'grunneiera': 'TextEdit', 'vedlikehol': 'TextEdit', 'lenker': 'TextEdit', 'nyeTiltak': 'TextEdit', 'nyeTiltak_': 'TextEdit', 'nyeTilta_1': 'TextEdit', 'nyeTilta_2': 'TextEdit', 'nyeTilta_3': 'TextEdit', 'Endring_Fk': 'TextEdit', 'Endring_N5': 'TextEdit', 'Endring_Tu': 'TextEdit', 'opphav': 'TextEdit', 'registreri': 'TextEdit', 'registrert': 'TextEdit', 'datafangst': 'DateTime', 'endret_av': 'TextEdit', 'oppdaterin': 'DateTime', 'navnerom': 'TextEdit', 'lokalId': 'TextEdit', 'målemetod': 'TextEdit', 'nøyaktigh': 'TextEdit', 'synbarhet': 'Range', 'målemet_1': 'TextEdit', 'nøyakti_1': 'TextEdit', 'typeVeg': 'TextEdit', 'belysning': 'Range', 'rutemerkin': 'TextEdit', 'merking': 'TextEdit', 'vedlikeh_1': 'TextEdit', 'Rapport': 'TextEdit', });
lyr_PFFmlpunkt06112024_3.set('fieldImages', {'id': 'TextEdit', 'navn': 'TextEdit', 'status': 'ValueRelation', 'funksjon': 'TextEdit', 'beskrivels': 'TextEdit', 'tilrettele': 'TextEdit', 'tilrette_1': 'TextEdit', 'tilgjengel': 'TextEdit', 'trafikkbel': 'TextEdit', 'maaloppnaa': 'TextEdit', 'grunneiera': 'TextEdit', 'lenker': 'TextEdit', 'nyeTiltak': 'TextEdit', 'nyeTiltak_': 'TextEdit', 'nyeTilta_1': 'TextEdit', 'nyeTilta_2': 'TextEdit', 'nyeTilta_3': 'TextEdit', 'opphav': 'TextEdit', 'registreri': 'TextEdit', 'registrert': 'TextEdit', 'datafangst': 'DateTime', 'endret_av': 'TextEdit', 'oppdaterin': 'DateTime', 'maalpunktB': 'TextEdit', 'Rapport': '', });
lyr_Regulerteleikeplasser_4.set('fieldImages', {'Source': 'TextEdit', 'gml_id': 'TextEdit', 'lokalId': 'TextEdit', 'navnerom': 'TextEdit', 'versjonId': 'TextEdit', 'oppdaterin': 'TextEdit', 'kommunenum': 'TextEdit', 'planidenti': 'TextEdit', 'vertikalni': 'TextEdit', 'regulering': 'TextEdit', 'f�rsteDi': 'TextEdit', 'feltbetegn': 'TextEdit', 'utnyttings': 'TextEdit', 'utnyttin_1': 'TextEdit', 'avkj�rse': 'TextEdit', });
lyr_Ferdselinatur_5.set('fieldImages', {'OBJTYPE': 'TextEdit', 'OPPDATERIN': 'TextEdit', 'GEOMETRITY': 'TextEdit', 'LTEMA__LTE': 'TextEdit', 'FTEMA__FTE': 'TextEdit', 'Rapport': 'TextEdit', });
lyr_Ferdselpveg_6.set('fieldImages', {'OBJTYPE': 'TextEdit', 'OPPDATERIN': 'TextEdit', 'GEOMETRITY': 'TextEdit', 'LTEMA__LTE': 'TextEdit', 'ANTALL': 'TextEdit', 'FTEMA__FTE': 'TextEdit', 'Rapport': 'TextEdit', });
lyr_Registrerteomrder_7.set('fieldImages', {'OBJTYPE': 'TextEdit', 'GEOMETRITY': 'TextEdit', 'OMRID': 'TextEdit', 'OPPDATERIN': 'TextEdit', 'LTEMA__LTE': 'TextEdit', 'KOMMENTAR': 'TextEdit', 'ANTALL': 'TextEdit', 'FTEMA__FTE': 'TextEdit', 'PUNKT': 'TextEdit', 'TYPE': 'TextEdit', 'Rapport': 'TextEdit', });
lyr_Barnehagetrkk2023_traseer_8.set('fieldImages', {'id': 'TextEdit', 'Område': 'TextEdit', 'Kommentar': 'TextEdit', 'Registrert': 'TextEdit', 'reg.info': 'TextEdit', 'Tilstand': 'TextEdit', 'Tilstand -': 'TextEdit', 'Farge': 'TextEdit', });
lyr_Barnehagetrkk2023_omrder_9.set('fieldImages', {'id': 'TextEdit', 'namn': 'TextEdit', 'kommentar': 'TextEdit', 'registrert': 'TextEdit', 'Tilstand': 'TextEdit', 'Merknad': 'TextEdit', });
lyr_KartlagtefriluftsomrderGiske2016_1.set('fieldLabels', {'gml_id': 'header label - visible with data', 'lokalId': 'header label - visible with data', 'navnerom': 'header label - visible with data', 'geodataeier': 'header label - visible with data', 'kommune': 'header label - visible with data', 'datafangstdato': 'header label - visible with data', 'områdetype': 'header label - visible with data', 'områdeverdi': 'header label - visible with data', 'friluftOpphav': 'header label - visible with data', 'kartlagtStatus': 'header label - visible with data', 'områdenavn': 'header label - visible with data', 'kartleggingsår': 'header label - visible with data', 'faktaark': 'header label - visible with data', 'tilgjengelighet': 'header label - visible with data', 'brukerfrekvens': 'header label - visible with data', 'egnethet': 'header label - visible with data', 'funksjon': 'header label - visible with data', 'tilrettelegging': 'header label - visible with data', 'opplevelseskvaliteter': 'header label - visible with data', 'regionaleOgNasjonaleBrukere': 'header label - visible with data', 'kunnskapsverdier': 'header label - visible with data', 'potensiellBruk': 'header label - visible with data', 'symbolverdi': 'header label - visible with data', 'inngrep': 'header label - visible with data', 'utstrekning': 'header label - visible with data', });
lyr_PFFtrase06112024_2.set('fieldLabels', {'id': 'header label - visible with data', 'navn': 'header label - visible with data', 'status': 'header label - visible with data', 'traséType': 'header label - visible with data', 'traséBruk': 'header label - visible with data', 'funksjon': 'header label - visible with data', 'beskrivels': 'header label - visible with data', 'tilrettele': 'header label - visible with data', 'tilrette_1': 'header label - visible with data', 'tilgjengel': 'header label - visible with data', 'rutenummer': 'header label - visible with data', 'skiltet': 'header label - visible with data', 'merket': 'header label - visible with data', 'gradering': 'header label - visible with data', 'slitasjegr': 'header label - visible with data', 'trafikkbel': 'header label - visible with data', 'maaloppnaa': 'header label - visible with data', 'grunneiera': 'header label - visible with data', 'vedlikehol': 'header label - visible with data', 'lenker': 'header label - visible with data', 'nyeTiltak': 'header label - visible with data', 'nyeTiltak_': 'header label - visible with data', 'nyeTilta_1': 'header label - visible with data', 'nyeTilta_2': 'header label - visible with data', 'nyeTilta_3': 'header label - visible with data', 'Endring_Fk': 'header label - visible with data', 'Endring_N5': 'header label - visible with data', 'Endring_Tu': 'header label - visible with data', 'opphav': 'header label - visible with data', 'registreri': 'header label - visible with data', 'registrert': 'header label - visible with data', 'datafangst': 'header label - visible with data', 'endret_av': 'header label - visible with data', 'oppdaterin': 'header label - visible with data', 'navnerom': 'header label - visible with data', 'lokalId': 'header label - visible with data', 'målemetod': 'header label - visible with data', 'nøyaktigh': 'header label - visible with data', 'synbarhet': 'header label - visible with data', 'målemet_1': 'header label - visible with data', 'nøyakti_1': 'header label - visible with data', 'typeVeg': 'header label - visible with data', 'belysning': 'header label - visible with data', 'rutemerkin': 'header label - visible with data', 'merking': 'header label - visible with data', 'vedlikeh_1': 'header label - visible with data', 'Rapport': 'header label - visible with data', });
lyr_PFFmlpunkt06112024_3.set('fieldLabels', {'id': 'header label - visible with data', 'navn': 'header label - visible with data', 'status': 'header label - visible with data', 'funksjon': 'header label - visible with data', 'beskrivels': 'header label - visible with data', 'tilrettele': 'header label - visible with data', 'tilrette_1': 'header label - visible with data', 'tilgjengel': 'header label - visible with data', 'trafikkbel': 'header label - visible with data', 'maaloppnaa': 'header label - visible with data', 'grunneiera': 'header label - visible with data', 'lenker': 'header label - visible with data', 'nyeTiltak': 'header label - visible with data', 'nyeTiltak_': 'header label - visible with data', 'nyeTilta_1': 'header label - visible with data', 'nyeTilta_2': 'header label - visible with data', 'nyeTilta_3': 'header label - visible with data', 'opphav': 'header label - visible with data', 'registreri': 'header label - visible with data', 'registrert': 'header label - visible with data', 'datafangst': 'header label - visible with data', 'endret_av': 'header label - visible with data', 'oppdaterin': 'header label - visible with data', 'maalpunktB': 'header label - visible with data', 'Rapport': 'header label - visible with data', });
lyr_Regulerteleikeplasser_4.set('fieldLabels', {'Source': 'header label - visible with data', 'gml_id': 'header label - visible with data', 'lokalId': 'header label - visible with data', 'navnerom': 'header label - visible with data', 'versjonId': 'header label - visible with data', 'oppdaterin': 'header label - visible with data', 'kommunenum': 'header label - visible with data', 'planidenti': 'header label - visible with data', 'vertikalni': 'header label - visible with data', 'regulering': 'header label - visible with data', 'f�rsteDi': 'header label - visible with data', 'feltbetegn': 'header label - visible with data', 'utnyttings': 'header label - visible with data', 'utnyttin_1': 'header label - visible with data', 'avkj�rse': 'header label - visible with data', });
lyr_Ferdselinatur_5.set('fieldLabels', {'OBJTYPE': 'header label - visible with data', 'OPPDATERIN': 'header label - visible with data', 'GEOMETRITY': 'header label - visible with data', 'LTEMA__LTE': 'header label - visible with data', 'FTEMA__FTE': 'header label - visible with data', 'Rapport': 'header label - visible with data', });
lyr_Ferdselpveg_6.set('fieldLabels', {'OBJTYPE': 'header label - visible with data', 'OPPDATERIN': 'header label - visible with data', 'GEOMETRITY': 'header label - visible with data', 'LTEMA__LTE': 'header label - visible with data', 'ANTALL': 'header label - visible with data', 'FTEMA__FTE': 'header label - visible with data', 'Rapport': 'header label - visible with data', });
lyr_Registrerteomrder_7.set('fieldLabels', {'OBJTYPE': 'header label - visible with data', 'GEOMETRITY': 'header label - visible with data', 'OMRID': 'header label - visible with data', 'OPPDATERIN': 'header label - visible with data', 'LTEMA__LTE': 'header label - visible with data', 'KOMMENTAR': 'header label - visible with data', 'ANTALL': 'header label - visible with data', 'FTEMA__FTE': 'header label - visible with data', 'PUNKT': 'header label - visible with data', 'TYPE': 'header label - visible with data', 'Rapport': 'header label - visible with data', });
lyr_Barnehagetrkk2023_traseer_8.set('fieldLabels', {'id': 'header label - visible with data', 'Område': 'header label - visible with data', 'Kommentar': 'header label - visible with data', 'Registrert': 'header label - visible with data', 'reg.info': 'header label - visible with data', 'Tilstand': 'header label - visible with data', 'Tilstand -': 'header label - visible with data', 'Farge': 'header label - visible with data', });
lyr_Barnehagetrkk2023_omrder_9.set('fieldLabels', {'id': 'header label - visible with data', 'namn': 'header label - visible with data', 'kommentar': 'header label - visible with data', 'registrert': 'header label - visible with data', 'Tilstand': 'header label - visible with data', 'Merknad': 'header label - visible with data', });
lyr_Barnehagetrkk2023_omrder_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});