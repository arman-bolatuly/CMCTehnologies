import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://0.0.0.0:8080",
  realm: "auth",
  clientId: "React-auth",
});

export default keycloak;