import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import { RouteWithLayout } from './components';
import { Main as MainLayout } from './layouts';

import {
  Dashboard as DashboardView,
  Settings as SettingsView,
  Engagement as EngagementView,
  Message as MessageView,
  Todolist as TodolistView,
} from './views';

import {
  UsersProfile as UsersProfileView
} from './views/Engagement/components';

import {
  TodoDetail as TodoDetailView,
  TodoCreate as TodoCreateView
} from './views/Todolist/components';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
        component={DashboardView}
        exact
        layout={MainLayout}
        path="/dashboard"
      />
      <RouteWithLayout
        component={EngagementView}
        exact
        layout={MainLayout}
        path="/engagement"
      />
      <RouteWithLayout
        component={MessageView}
        exact
        layout={MainLayout}
        path="/message"
      />
      <RouteWithLayout
        component={TodolistView}
        exact
        layout={MainLayout}
        path="/todolist"
      />
      <RouteWithLayout
        component={SettingsView}
        exact
        layout={MainLayout}
        path="/settings"
      />
      
      <RouteWithLayout
        component={UsersProfileView}
        exact
        layout={MainLayout}
        path="/profiledetail"
      />
      <RouteWithLayout
        component={TodoDetailView}
        exact
        layout={MainLayout}
        path="/tododetail"
      />
      <RouteWithLayout
        component={TodoCreateView}
        exact
        layout={MainLayout}
        path="/todocreate"
      />
      <Redirect to="/not-found" />
    </Switch>
  );
};

export default Routes;
