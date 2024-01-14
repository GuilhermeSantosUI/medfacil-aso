import * as C from './Forgot.styles';

import logo from '../../../assets/logo.png';

export function Forgot() {
  return (
    <C.Container>
      <C.Branding>
        <img
          src={logo}
          alt=""
          style={{ width: 32, height: 32, objectFit: 'cover' }}
        />

        <div>
          <C.Subtitle>Grupo</C.Subtitle>
          <C.Logo>SSMA</C.Logo>
        </div>
      </C.Branding>

      <C.Form>
        <h1>Forgot your password?</h1>

        <input type="text" placeholder="E-mail" />
        <button>
          <span>Enviar</span>
        </button>
        <C.Navigation to="/auth">voltar para tela de login</C.Navigation>
      </C.Form>

      <C.Form>
        <h1>Insert the code sended to your email?</h1>

        <input type="text" placeholder="Code" />
        <input type="text" placeholder="Code" />
        <input type="text" placeholder="Code" />
        <input type="text" placeholder="Code" />

        <button>
          <span>Verificar</span>
        </button>

        <C.Navigation to="/auth">voltar para tela de login</C.Navigation>
      </C.Form>

      <C.Form>
        <h1>Reset yout password?</h1>

        <input type="text" placeholder="Password" />
        <input type="text" placeholder="Confirm password" />

        <button>
          <span>Verificar</span>
        </button>

        <C.Navigation to="/auth">voltar para tela de login</C.Navigation>
      </C.Form>
    </C.Container>
  );
}
