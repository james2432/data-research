"use strict";
const turf = require("@turf/turf");
const geojson_writer_1 = require("geojson-writer");
const collection = turf.featureCollection([]);
const data = geojson_writer_1.reader('ottawa-buildings.geojson');
data.features.map(feature => {
    feature.properties = {
        building: 'yes',
        source: 'City of Ottawa',
    };
    collection.features.push(feature);
});
geojson_writer_1.writer('ottawa-buildings-new.geojson', collection, { z: true });
/**
tippecanoe \
    --output=ottawa-address.mbtiles \
    --force \
    --base-zoom 13 \
    --no-feature-limit \
    --no-tile-size-limit \
    --minimum-zoom 13 \
    --maximum-zoom 15 \
    ottawa-address-clean.geojson
 */ 
