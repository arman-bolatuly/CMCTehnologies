import React from "react";
import { useKeycloak } from "@react-keycloak/web";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

const Nav = () => {
  const { keycloak, initialized } = useKeycloak();

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Главная страница</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="/secured">Для авторизованных</BreadcrumbLink>
      </BreadcrumbItem>

      {!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.login()}>
          Login
        </button>
      )}

      {!!keycloak.authenticated && (
        <button type="button" onClick={() => keycloak.logout()}>
          Logout ({keycloak.tokenParsed.preferred_username})
        </button>
      )}
    </Breadcrumb>
  );
};

export default Nav;
