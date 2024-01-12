import { MagnifyingGlass } from "@phosphor-icons/react";
import * as C from "./Header.styles";

export function Header() {
  return (
    <C.Container>
      <C.HeaderLeftSide>
        <div>
          <C.Subtitle>Grupo</C.Subtitle>
          <C.Logo>SSMA</C.Logo>
        </div>

        <div style={{ position: "relative" }}>
          <MagnifyingGlass
            size={16}
            color="#ababab"
            style={{
              position: "absolute",
              left: 10,
              top: "50%",
              transform: "translate(0, -50%)",
            }}
          />

          <input
            type="text"
            placeholder="Pesquisar"
            style={{
              width: 240,
              padding: 10,
              borderRadius: 8,
              border: "1px solid #efefef",
              fontSize: 14,
              color: "#8c8c8c",
              paddingLeft: 32,
            }}
          />
        </div>
      </C.HeaderLeftSide>

      <C.HeaderRightSide>
        <div>
          <C.Subtitle>Bem vindo novamente,</C.Subtitle>
          <C.Username>Guilherme Santos</C.Username>
        </div>
      </C.HeaderRightSide>
    </C.Container>
  );
}
