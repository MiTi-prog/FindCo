const mongoose = required('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const LocationsSchema = new mongoose.Schema(
    {
        _id_locations: { 
            type: String, 
            dafault: uniqueValidator.v1 
        },
        locations: [{
            location: String
        }]        
    }
);
    
module.exports = mongoose.model("Locations", LocationsSchema);

const doc = new Locations({ //adding locations to locations array in LocationSchema
    locations: [{ 
        location:   "Gorenjska regija",
        location:   "Jugovzhodna Slovenija",
        location:   "Notranjsko-kraška Slovenija",
        location:   "Osrednjeslovenska regija",
        location:   "Pomurska regija",
        location:   "Spodnjeposavska regija",
        location:   "Goriška regija",
        location:   "Koroška regija",
        location:   "Obalno-kraška regija",
        location:   "Podravska regija",
        location:   "Savinjska regija",
        location:   "Zasavska regija"
    }]
    });

await doc.save();