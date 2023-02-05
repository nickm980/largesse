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
        "events": events.filter(e => {e.category == req.params.category})
    })
});



app.listen(3000)