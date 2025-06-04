const { createNodeMiddleware, createProbot } = require("probot");
const app = require("./app");

exports.probotApp = createNodeMiddleware(app, { probot: createProbot(), webhooksPath: "/" });
