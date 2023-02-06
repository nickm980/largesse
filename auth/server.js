import express from "express";
import cookieSession from "cookie-session";

const app = express();
var events = [
    {
        "title": "Catholic Charities - Broome County/Mother Teresa's Cupboard - Food Distribution Center",
        "address": "202 Garfield Ave, Endicott, NY 13760, United States",
        "place_id": "ChIJ__8Pi47s2okR4Kn9HSUCvUU",
        "category": "pantry",
        "rating": "4.8"
    },
    {
        "title": "Loaves and Fish Pantry",
        "address": "1262 Mill St, NY 13903, United States",
        "place_id": "ChIJ7yrGI2fv2okRxn0HpEswf4w",
        "rating": "5",
        "category": "pantry"
    },
    {
        "title": "Salvation Army",
        "address": "127 Washington St, Binghmaton,NY, United States",
        "place_id": "ChIJGWLRtm_v2okRMUdEvZv_s-E",
        "rating": "4.7",
        "category": "pantry"
    },
    {
        "title": "Northminster Presbyterian - Food Distribution Center",
        "address": "711 Farm to Market Rd, Endicott, NY 13760, United States",
        "place_id": "ChIJ50peLbLt2okR9YFu3UUEX_8",
        "rating": "0",
        "category": "pantry"
    },
    {
        "title": "Saint Patrick's Roman Catholic Church - Food Distribution Center",
        "address": "50 Oak St, Binghamton, NY 13905, United States",
        "place_id": "ChIJ7U3pEmvv2okRrlWk___XgHQ",
        "rating": "4.5",
        "category": "pantry"
    },
    {
        "title": "Our Lady of Sorrows - Food Pantry",
        "address": "801 Main St, Vestal, NY 13850, United States",
        "place_id": "ChIJ7U3pEmvv2okRrlWk___XgHQ",
        "rating": "5",
        "category": "pantry"
    },
    {
        "title": "United Way of Broome County",
        "address": "101 Jensen Rd, Vestal, NY 13850, United States",
        "place_id": "ChIJyVQXhQjv2okR_AIrAjEusr4",
        "category": "shelters",
        "rating": "4.5"
    },
    {
        "title": "Volunteers of America",
        "address": "295 Clinton St, Binghamton, NY 13905, United States",
        "place_id": "ChIJsYbUZXsZyUwRNG_a2J45e2I",
        "category": "shelters",

        "rating": "4.3"
    },
    {
        "title": "Volunteers of America",
        "category": "shelters",

        "address": "320 Chenango St, Binghamton, NY 13901, United States",
        "place_id": "ChIJD4yPYn_v2okROc-xjpp5Yjc",
        "rating": "3.6"
    },
    {
        "title": "The Beloved Community House",
        "category": "shelters",

        "address": "45 Riverside Dr, Binghamton, NY 13905, United States",
        "place_id": "ChIJVXqUlmr_54kRm5H2G7VhSP8",
        "rating": "4.3"
    },
    {
        "title": "Center for Bioregional Living",
        "category": "shelters",
        "address": "253 Briggs Hwy, Ellenville, NY 12428, United States",
        "place_id": "ChIJi-KbDu_v2okRg2BOUI1jonQ",
        "rating": "3"
    },
    {
        "title": "Voluntary Action Center",
        "category": "shelters",
        "address": "101 Jensen Rd, Vestal, NY 13850, United States",
        "place_id": "ChIJC90qErnv2okRIsVvT_UqNBQ",
        "rating": "3"
    },
    {
        "title": "Broome County Habitat For Humanity",
        "category": "shelters",
        "address": "103 Adams Ave, Endicott, NY 13760, United States",
        "place_id": "ChIJb4Z-Tors2okRMy4FkW9OvKo",
        "rating": "3"
    }
];

const placeholderEvent = {
    "isCustom": true,
    "companyName": "Company Name",
    "title": "Volunteering Example",
    "phone": "555-555-5555",
    "description": "Description of the event",
    "location": "location of the event"
};


app.use("/", (req, res, next) => {
    next()
});

app.get("/health", (req, res) => {
    console.log("[Req] healthy");
    res.json({
        "status": "healthy"
    });
});

app.get("/event", (req, res) => {
    console.log(req.body)

    events.push({
        "isCustom": true,
        "fullName": req.query.name,
        "companyName": req.query.companyName,
        "phone": req.query.phone,
        "description": req.query.description,
        "location": req.query.address,
        "category": req.query.category
    }
    );
    console.log(events)

    res.json({
        "status": "OK"
    });
});


app.get("/events/:category", (req, res) => {
    if (events.length == 0) {
        events.push(
            placeholderEvent
        )
    }
    res.json({
        "status": "OK",
        "events": events.filter(e => e.category == req.params.category)
    })
});



app.listen(3000)