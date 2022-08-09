import {Link, Outlet} from 'react-router-dom';
import { useKeycloak } from "@react-keycloak/web";


const Layouts = () => {
    const { keycloak, initialized } = useKeycloak();

    return (
    <>
        <header>
            <Link to="/createpost">Введение реквизитов</Link>
            <Link to="/posts">Просмотр реквизитов</Link>
            <div>
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
            </div>
        </header>
        <Outlet />
        <footer>2022</footer>
    </>
    )
}

export {Layouts}

{/* <Link to="/posts/:id">Проверка реквизитов</Link>
<Link to="/posts">Просмотр реквизитов</Link> */}