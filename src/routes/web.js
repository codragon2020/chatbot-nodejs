import express from "express";
import homepageController from "../controllers/homepageController"

// Express Router Middleware
let router = express.Router();


let initWebRoutes = (app) => {
    router.get("/", homepageController.getHomepage);

    return app.use("/", router);
}

module.exports = initWebRoutes