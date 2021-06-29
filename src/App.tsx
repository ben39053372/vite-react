import React from 'react';
import { renderRoutes } from 'react-router-config';
import { routes } from './routes';

function App() {
  return (<div>{renderRoutes(routes)}</div>)
}

export default App;
