const express = require("express");
const app = express();
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./passport");

app.use(
    cookieSession({
        name: "google-auth-session",
        keys: ["key1", "key2"],
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
    res.send("<button><a href='/auth'>Login With Google</a></button>");
});

// Auth
app.get(
    "/auth",
    passport.authenticate("google", { scope: ["email", "profile"] })
);

// Auth Callback
app.get(
    "/auth/callback",
    passport.authenticate("google", {
        successRedirect: "/auth/callback/success",
        failureRedirect: "/auth/callback/failure",
    })
);

// Success
app.get("/auth/callback/success", (req, res) => {
    if (!req.user) res.redirect("/auth/callback/failure");
    res.send("Welcome " + req.user.email);
});

// failure
app.get("/auth/callback/failure", (req, res) => {
    res.send("Error");
});

app.listen(4000, () => {
    console.log("Server Running on port 4000");
});
