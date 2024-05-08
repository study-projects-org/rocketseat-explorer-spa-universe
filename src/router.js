export class Router {

  constructor() {
    this.routes = {};
  }

  addRoute(routeName, page) {
    this.routes[routeName] = page;
  }

  registerNavEvent() {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault();
        const path = event.target.href;
        const pathName = event.target.pathname;

        this.navigateTo(pathName);
        window.history.pushState({}, "", path);
      });
    });
  }

  navigateTo(pathName) {
    const route = this.routes[pathName];
    const app = document.querySelector("#app");

    fetch(route)
      .then(response => response.text())
      .then(html => {
        app.innerHTML = html;
        this.highlightLink();
      });
  }

  highlightLink() {
    const links = document.querySelectorAll("a");

    links.forEach(link => {
      if (link.href === window.location.href) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
}