import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Home = () => {
  const { keycloak, initialized } = useKeycloak();
  return (
    <div>
      <h1>Главная страница</h1>
      {/* { initialized ? 
        keycloak.authenticated && <pre>{JSON.stringify(keycloak, undefined, 2)}</pre> 
        : <h2>keycloak initializing ....!!!!</h2>
      } */}
    </div>
  );
};
//UserService.getUsername()&nbsp;
export default Home;