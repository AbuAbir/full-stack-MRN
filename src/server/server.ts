import express from "express";

import config from "./config";
const server = express();

server.use(express.static("dist"));
server.set("view engine", "ejs");

server.use("/", (req, res) => {
    res.render("index", {
        initialContent: "Loading ...",
    });
});

server.listen(Number(config.PORT), config.HOST, () => {
    console.info(`Express is running on ${config.HOST}, port ${config.PORT}`);
})