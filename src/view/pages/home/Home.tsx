import {
  ArrowRight,
  ArrowUDownLeft,
  Brain,
  CalendarCheck,
} from "@phosphor-icons/react";
import * as C from "./Home.styles";

export function Home() {
  return (
    <C.Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Empresa/Tipo</th>
            <th>Número do ASO</th>
            <th>Status</th>
            <th>Atualizado</th>
            <th>Opções</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <ArrowUDownLeft weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Criativa <br />
              <span>Retorno ao trabalho</span>
            </td>
            <td>12</td>
            <td>2021-07-07 08:31:54</td>
            <td>07/07/2021</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <ArrowUDownLeft weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Inovadora <br />
              <span>Retorno ao trabalho</span>
            </td>
            <td>5</td>
            <td>2021-05-29 13:17:39</td>
            <td>29/05/2021</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <Brain weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Futurista <br />
              <span>Psicotécnico</span>
            </td>
            <td>0</td>
            <td>2022-05-26 11:51:23</td>
            <td>26/05/2022</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarCheck weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Inovadora <br />
              <span>Periódico</span>
            </td>
            <td>0</td>
            <td>2021-05-23 08:52:30</td>
            <td>23/05/2021</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarCheck weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Inovadora <br />
              <span>Periódico</span>
            </td>
            <td>0</td>
            <td>2021-05-23 09:10:14</td>
            <td>23/05/2021</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarCheck weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Inovadora <br />
              <span>Periódico</span>
            </td>
            <td>0</td>
            <td>2021-05-23 12:01:17</td>
            <td>23/05/2021</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarCheck weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Inovadora <br />
              <span>Periódico</span>
            </td>
            <td>0</td>
            <td>2021-05-29 12:49:15</td>
            <td>29/05/2021</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarCheck weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Inovadora <br />
              <span>Periódico</span>
            </td>
            <td>0</td>
            <td>2022-06-01 18:41:31</td>
            <td>01/06/2022</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <CalendarCheck weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Inovadora <br />
              <span>Periódico</span>
            </td>
            <td>0</td>
            <td>2022-11-18 14:20:53</td>
            <td>18/11/2022</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <ArrowUDownLeft weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Criativa 3 <br />
              <span>Retorno ao trabalho</span>
            </td>
            <td>8</td>
            <td>2021-08-15 09:30:45</td>
            <td>15/08/2021</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
          <tr>
            <td>
              <Brain weight="duotone" color="#2758a1" size={24} />
            </td>
            <td>
              Empresa Criativa 3 <br />
              <span>Psicotécnico</span>
            </td>
            <td>0</td>
            <td>2022-09-20 14:45:12</td>
            <td>20/09/2022</td>
            <td>
              <C.About>
                <ArrowRight />
              </C.About>
            </td>
          </tr>
        </tbody>
      </table>
    </C.Container>
  );
}
