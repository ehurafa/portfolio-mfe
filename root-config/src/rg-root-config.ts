import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@rg/react-app",
  app: () => System.import("@rg/react-app"),
  activeWhen: ["/react"],
});
registerApplication({
  name: "@rg/react-sidebar/",
  app: () => System.import("@rg/react-sidebar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "angular-app",
  app: () => System.import("angular-app"),
  activeWhen: ["/angular"],
});

registerApplication({
  name: "portfolio-angular",
  app: () => System.import("portfolio-angular"),
  activeWhen: ["/angular"],
});

start({
  urlRerouteOnly: true,
});
