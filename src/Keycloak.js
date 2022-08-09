import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
  url: "http://localhost:8080",
  realm: "Platonus",
  clientId: "React-auth",
});

export default keycloak;