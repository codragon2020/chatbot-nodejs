import express from "express";

// Express Router Middleware
let router = express.Router();


let initWebRoutes = (app) => {
    router.get("/", (req, res) => {
        return res.send( data: "Hello World!");
    });

    return app.use("/", router);
}

module.exports = initWebRoutes