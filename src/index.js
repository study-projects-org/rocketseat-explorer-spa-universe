import { Router } from "./router.js";

const route = new Router();
route.addRoute("/", "/pages/home.html");
route.addRoute("/universe", "/pages/universe.html");
route.addRoute("/exploration", "/pages/exploration.html");

route.registerNavEvent();

window.onload = () => {
  route.navigateTo(window.location.pathname);
};

