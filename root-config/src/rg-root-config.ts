import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from 'single-spa-layout';

import microfrontendLayout from "./microfrontend-layout.html"

const routes = constructRoutes(microfrontendLayout);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});

const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
start();

// registerApplication({
//   name: "@rg/react-app",
//   app: () => System.import("@rg/react-app"),
//   activeWhen: ["/react"],
// });
// registerApplication({
//   name: "@rg/react-sidebar/",
//   app: () => System.import("@rg/react-sidebar"),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@rg/react-certificates",
//   app: () => System.import("@rg/react-certificates"),
//   activeWhen: ["/certificates"],
// });

// registerApplication({
//   name: "angular-app",
//   app: () => System.import("angular-app"),
//   activeWhen: ["/angular"],
// });

// registerApplication({
//    name: "portfolio-angular",
//    app: () => System.import("portfolio-angular"),
//    activeWhen: ["/portfolio"],
//  });

// start({
//   urlRerouteOnly: true,
// });
