import React from "react";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import keycloak from "./Keycloak";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import AdminPage from "./pages/AdminPage";
import PrivateRoute from "./helpers/PrivateRoute";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import EditPage from "./pages/EditPage";
import { Layouts } from "./components/Layouts";
import Page3 from "./pages/Page3";

function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        {/* <Nav /> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layouts />}>
              <Route index element={<WelcomePage />} />
              {/* <Route index element={<Page1 />} />
              <Route path='posts' element={<Page3 />} />
              <Route path='posts/:id' element={<Page2 />} />
              <Route path='posts/edit/:id' element={<EditPage />} /> */}
              <Route
                path="/createpost"
                element={
                  <PrivateRoute roles={['user']}>
                    <Page1 />
                  </PrivateRoute>
                }
              />
              <Route
                path="posts/:id"
                element={
                  <PrivateRoute roles={['user']}>
                    <Page2 />
                  </PrivateRoute>
                }
              />
              <Route
                path="posts/edit/:id"
                element={
                  <PrivateRoute roles={['user']}>
                    <EditPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="posts"
                element={
                  <PrivateRoute roles={['admin']}>
                    <Page3 />
                  </PrivateRoute>
                }
              />
              <Route
                path="*" element={
                  <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                    <Link to="/">Page 1</Link>
                  </main>
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </ReactKeycloakProvider>
    </div>
  );
}

export default App;
