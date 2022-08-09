import { useKeycloak } from "@react-keycloak/web";

const PrivateRoute = ({ children, roles, ...rest }) => {
  const { keycloak } = useKeycloak();

  const isAutherized = (roles) => {
    if (keycloak && roles) {
      return roles.some(r => {
        const realm = keycloak.hasRealmRole(r);
        const resource = keycloak.hasResourceRole(r);
        return realm || resource;
      });
    }
    return false;
  }
  // return (
  //   <Route {...rest} render={props => {
  //     return isAutherized(roles) ? children : null
  //   }} />
  // )
  return isAutherized(roles) ? children : null;
    

  // const hasRole = (roles) => roles.some((role) => keycloak.hasRealmRole(role));

  // const isLoggedIn = keycloak.authenticated;

  // return isLoggedIn ? children : null;
};

export default PrivateRoute;
