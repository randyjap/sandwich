import React from 'react';
import HeaderContainer from './header/header_container';
import FooterContainer from './footer/footer_container';

const App = ({ children, router }) => (
  <div className="wrapper">
    <HeaderContainer router={router}  />
    { children }
  </div>
);

export default App;
