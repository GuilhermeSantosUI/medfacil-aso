import { Header } from './components';

import * as C from './Layout.styles';

import { Toaster } from '@/view/components/ui/sonner';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <C.Container>
      <Header />

      <C.View>{children}</C.View>
      <Toaster />
    </C.Container>
  );
}
