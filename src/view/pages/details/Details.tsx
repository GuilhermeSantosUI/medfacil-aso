import { Swap } from '@phosphor-icons/react';
import { Layout } from '../../layout/Layout';

import { Aside } from './components/aside/Aside';
import * as C from './Details.styles';

export function Details() {
  return (
    <C.Container>
      <Layout>
        <h2>Guilherme Santos</h2>
        <h3>Atestado de Saúde Ocupacional Nº: 12</h3>
        <p>Retorno ao trabalho</p>

        <hr />

        <ul>
          <li>(79) 9 9952-0079</li>
          <li>27-10-2020 19:29:56</li>
        </ul>

        <C.WidgetContainer>
          <div
            style={{
              padding: 10,
              borderRadius: 10,
              background: '#8c8c8c',
            }}>
            <div>
              <p>Status</p>
              <h3>Arquivado</h3>
            </div>

            <Swap />
          </div>

          <div></div>

          <div
            style={{
              padding: 10,
              borderRadius: 10,
              background: '#8c8c8c',
            }}>
            <div>
              <p>Funcao</p>
              <h3>Desenvolvedor</h3>
            </div>

            <Swap />
          </div>

          <div
            style={{
              padding: 10,
              borderRadius: 10,
              background: '#8c8c8c',
            }}>
            <div>
              <p>Setor</p>
              <h3>Tecnologia</h3>
            </div>

            <Swap />
          </div>
        </C.WidgetContainer>
      </Layout>

      <Aside />
    </C.Container>
  );
}
