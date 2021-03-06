import React from 'react';
import Home from '../Home/HomeContainer';
import Info from '../Info/Info';
import {BrowserRouter, Route} from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

<BrowserRouter>
  <MainLayout>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/info' component={Info} />
    </Switch>
  </MainLayout>
</BrowserRouter>

export default App;
// Ten plik informuje aplikację, jakie komponenty powinna wyświetlić,
// gdy użytkownik znajduje się na określonej podstronie 
//(lub, bardziej precyzyjnie, na określonej ścieżce, czyli path).