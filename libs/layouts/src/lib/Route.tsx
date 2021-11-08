import React from 'react';
import {
  Route as ReactRoute,
  RouteProps as ReactRouteProps,
  RouteComponentProps,
} from 'react-router-dom';
export interface RouteProps extends ReactRouteProps {
  component: React.ComponentType<RouteComponentProps>;
  layout?: React.ElementType;
}
export function Route({
  component: Component,
  layout: Layout,
  ...rest
}: RouteProps) {
  return (
    <ReactRoute
      {...rest}
      render={(props) => {
        return Layout ? (
          <Layout {...props}>
            <Component {...props} />
          </Layout>
        ) : (
          <Component {...props} />
        );
      }}
    />
  );
}
