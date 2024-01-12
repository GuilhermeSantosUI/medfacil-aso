import { ArrowRight } from '@phosphor-icons/react';
import * as C from './Employees.styles';

export function Employees() {
  return (
    <C.Container>
      <C.Content>
        <C.Image
          src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="user"
        />

        <C.ContentText>
          <h3>Guilherme Santos</h3>
          <C.Subtitle>3 Vendas realizadas</C.Subtitle>
        </C.ContentText>
      </C.Content>

      <C.About>
        <ArrowRight />
      </C.About>
    </C.Container>
  );
}
