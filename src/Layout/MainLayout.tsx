import React, { ComponentType } from 'react';
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config';
import { NavBar } from '../components/NavBar';

export const MainLayout: ComponentType<RouteConfigComponentProps<any>> = ({
  route,
}) => {
  console.log('MainLayout');
  console.log(route);
  return (
    <div className="w-full">
      <NavBar />
      {renderRoutes(route?.routes)}
    </div>
  );
};
