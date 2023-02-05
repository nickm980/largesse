import express from "express";
import cookieSession from "cookie-session";

const app = express();
var events = [];
var users = [];

const placeholderEvent = {
    "isCustom": true,
    "companyName": "Company Name",
    "title": "Volunteering Example",
    "phone": "555-555-5555",
    "description": "Description of the event",
    "location": "location of the event"
};

app.use(express.cookieParser());

app.use("/", (req, res, next) => {
    console.log('Request Type:', req.method)
    console.log(req.cookies)
    next()
});

app.get("/clear", (req, res) => {

});

//body name:,pass, 
app.post("/signup", (req, res) => {
    console.log("[Req] Signup");
    let options = {
        maxAge: 1000 * 60 * 15, // would expire after 15 minutes
        httpOnly: true, // The cookie only accessible by the web server
        signed: true // Indicates if the cookie should be signed
    }

    res.cookie('username', req.body.username, options)


    res.json({
        "status": "successful"
    });
});

app.get("/health", (req, res) => {
    console.log("[Req] healthy");
    res.json({
        "status": "healthy"
    });
});

app.post("/event", (req, res) => {
    events.push({
        "isCustom": true,
        "companyName": req.body.companyName,
        "title": req.body.title,
        "phone": req.body.phone,
        "description": req.body.desc,
        "location": req.body.location
    }
    );
    res.json({
        "status": "OK"
    });
});

app.get("/events", (req, res) => {
    if (events.length == 0) {
        events.push(
            placeholderEvent
        )
    }
    res.json({
        "status": "OK",
        "events": events
    })
});

app.listen(3000)