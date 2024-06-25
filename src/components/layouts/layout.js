import React from 'react';
import Navigation from '@/components/layouts/navigation';
import { getCollections } from '@/lib/data';

const Layout = async ({ children }) => {
  const collections = await getCollections();
  return (
    <div>
      <div className={'h-8 w-full bg-fourth'}>test</div>
      <header className={'border-b'}>
        <Navigation collections={collections}></Navigation>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
