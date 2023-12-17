import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { DivHeader, Li, Navigation, Ul } from "./layout.styled";

function Layout() {
  return (
    <DivHeader>
      <Ul>
        <Li>
          <Navigation to="/">Home</Navigation>
        </Li>
        <Li>
          <Navigation to="catalog">Catalog</Navigation>
        </Li>
        <Li>
          <Navigation to="favorite">Favorite</Navigation>
        </Li>
      </Ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </DivHeader>
  );
}

export default Layout;
