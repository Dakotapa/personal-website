import React from 'react';

import './Layout.css'
import ContentLayout from './content/ContentLayout.js'
import Footer from './Footer.js'
import Header from './Header.js'


function Layout() {

  return (
    <div className="Layout">
     <Header />
     <ContentLayout />
     <Footer />
      
    </div>
  );
}

export default Layout;
