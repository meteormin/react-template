import React from 'react';
import Navigator, { Menu } from './Navigator';
import Loading from '../Loading';
import AlertModal from '../AlertModal';
import Footer from './Footer';

export interface ContainerProps {
  menu: Menu;
  children: React.ReactNode | React.ReactNode[];
  footer: {
    company: string;
    privacyUrl: string;
    termsUrl: string;
  };
}

const Container = ({ menu, children, footer }: ContainerProps) => {
  const year = new Date().getFullYear().toString();
  return (
    <div id="layoutSidenav">
      <Navigator menu={menu} />
      <div id="layoutSidenav_content">
        <main>
          {children}
          <Loading />
          <AlertModal />
        </main>
        <Footer year={year} {...footer} />
      </div>
    </div>
  );
};

export default Container;
