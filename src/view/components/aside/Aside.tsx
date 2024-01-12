import { MagnifyingGlass } from '@phosphor-icons/react';

import { Calendar, Preview } from './components';

import * as C from './Aside.styles';

export function Aside() {
  return (
    <C.Container>
      <Preview />

      <C.InfoContent>
        <Calendar />
      </C.InfoContent>

      <C.InfoFooter>
        <MagnifyingGlass weight="duotone" size={32} color="#5accf5" />
        <p style={{ fontSize: 14, color: '#8c8c8c' }}>
          Selecione a <b style={{ color: '#000000' }}>Data</b> e depois clique
          em pesquisar para filtrar os <b style={{ color: '#000000' }}>ASO's</b>
          .
        </p>
      </C.InfoFooter>
    </C.Container>
  );
}
