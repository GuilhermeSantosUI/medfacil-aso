import * as C from "./Preview.styles";

import Image from "../../../../assets/logo.png";

export function Preview() {
  return (
    <C.Container>
      <C.ShadowOne />
      <C.ShadowTwo />

      <C.Content>
        <img src={Image} alt="" />

        <div>
          <h3>Guilherme Feitoza Santos</h3>
          <p>089 . 3289824 . 1239</p>
        </div>
      </C.Content>
    </C.Container>
  );
}
