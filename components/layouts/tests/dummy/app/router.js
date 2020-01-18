import EmberRouter from "@ember/routing/router";
import config from "./config/environment";

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route("demo", function() {
    this.route("stack");
    this.route("center");
    this.route("cluster");
  });
});