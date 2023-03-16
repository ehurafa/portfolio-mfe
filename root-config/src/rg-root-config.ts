import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';



// import microfrontendLayout from "./microfrontend-layout.html"

// const routes = constructRoutes(microfrontendLayout);

// const applications = constructApplications({
//   routes,
//   loadApp({ name }) {
//     return System.import(name);
//   },
// });

// const layoutEngine = constructLayoutEngine({ routes, applications });

// applications.forEach(registerApplication);
// start();

registerApplication({
  name: "@rg/react-sidebar",
  app: () => System.import("@rg/react-sidebar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "portfolio-angular",
  app: () => System.import("portfolio-angular"),
  activeWhen: (location) => location.pathname === '/',
});

 registerApplication({
   name: "@rg/react-certificates",
   app: () => System.import("@rg/react-certificates"),
   activeWhen: ["/certificados"],
 });

 registerApplication({
  name: "@rg/vue-labs",
  app: () => System.import("@rg/vue-labs"),
  activeWhen: ["/labs"],
});

registerApplication({
  name: "@rg/react-costs",
  app: () => System.import("@rg/react-costs"),
  activeWhen: ["/costs"],
});



start({
   urlRerouteOnly: true,
 });
