import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import App from './components/App/AppContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

<<<<<<< HEAD
ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('app'));
=======
ReactDOM.render(<App />, document.getElementById('app'));
>>>>>>> 2db693c3e3d2284cf6188f988fc806c89f51d49a
