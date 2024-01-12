import { Outlet } from "react-router-dom";
import { Aside, Header } from "../components";

import * as C from "./Layout.styles";

export function Layout() {
  return (
    <C.Container>
      <C.Content>
        <Header />

        <C.View>
          <Outlet />
        </C.View>
      </C.Content>

      <Aside />
    </C.Container>
  );
}
