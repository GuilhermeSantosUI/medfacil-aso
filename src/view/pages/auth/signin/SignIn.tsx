import * as C from './SignIn.styles';

import logo from '../../../assets/logo.png';
import { MagnifyingGlass } from '@phosphor-icons/react';

export function SignIn() {
  return (
    <C.Container>
      <C.Banner>
        <C.Image
          src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />

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
      </C.Banner>

      <C.Form>
        <h1>Registro de ASO's Medicinais</h1>

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
            type="password"
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

        <button type="submit">Sign In</button>

        <C.Navigation to="/forgot">Forgot password?</C.Navigation>
      </C.Form>
    </C.Container>
  );
}
