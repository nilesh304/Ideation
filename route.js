const routes = require("next-routes")();

routes.add("/Ideas/:address", "/ideas/newIdeas");

module.exports = routes;
