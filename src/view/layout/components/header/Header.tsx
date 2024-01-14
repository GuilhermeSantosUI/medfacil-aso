import * as C from './Header.styles';
import { Search } from './components/search/Search';

export function Header() {
  return (
    <C.Container>
      <C.HeaderLeftSide>
        <div>
          <C.Subtitle>Grupo</C.Subtitle>
          <C.Logo>SSMA</C.Logo>
        </div>

        <Search />
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
