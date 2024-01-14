import { File, MagnifyingGlass } from '@phosphor-icons/react';

import { Employees, Preview } from './components';

import * as C from './Aside.styles';

export function Aside() {
  return (
    <C.Container>
      <Preview />

      <C.InfoContent>
        <C.InfoColumn>
          <C.InfoRow>
            <File size={20} />
            <C.InfoTitle>Documentos solicitados</C.InfoTitle>
          </C.InfoRow>

          <h3>Arquivos anexados</h3>

          <div style={{ position: 'relative' }}>
            <MagnifyingGlass
              size={16}
              color="#ababab"
              style={{
                position: 'absolute',
                left: 10,
                top: '50%',
                transform: 'translate(0, -50%)',
              }}
            />

            <input
              type="text"
              placeholder="Pesquisar por nome..."
              style={{
                width: '100%',
                padding: 10,
                borderRadius: 8,
                border: '1px solid #efefef',
                fontSize: 14,
                color: '#8c8c8c',
                paddingLeft: 32,
              }}
            />
          </div>

          <C.InfoList>
            <Employees />
            <Employees />
            <Employees />
            <Employees />
            <Employees />
          </C.InfoList>
        </C.InfoColumn>
      </C.InfoContent>
    </C.Container>
  );
}
