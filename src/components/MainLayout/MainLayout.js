import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';

const MainLayout = ({children}) => (
  <div>
    <Header />
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropTypes.node,
};
// Komponent Header wyświetli nawigację, podczas gdy props {children} będzie renderować wszystko, 
// co zostało dodane w tagach <MainLayout> w App.js.

export default MainLayout;