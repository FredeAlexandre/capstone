/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as PublicImport } from './routes/_public'
import { Route as AuthedImport } from './routes/_authed'
import { Route as PublicIndexImport } from './routes/_public/index'
import { Route as PublicAuthImport } from './routes/_public/_auth'
import { Route as AuthedDashboardImport } from './routes/_authed/dashboard'
import { Route as PublicShowcaseJsonlidityImport } from './routes/_public/showcase/jsonlidity'
import { Route as PublicShowcaseDndImport } from './routes/_public/showcase/dnd'
import { Route as PublicShowcaseDeployerImport } from './routes/_public/showcase/deployer'
import { Route as PublicAuthSignupImport } from './routes/_public/_auth/signup'
import { Route as PublicAuthSigninImport } from './routes/_public/_auth/signin'
import { Route as PublicAuthResetPasswordImport } from './routes/_public/_auth/reset-password'
import { Route as PublicAuthForgotPasswordImport } from './routes/_public/_auth/forgot-password'

// Create/Update Routes

const PublicRoute = PublicImport.update({
  id: '/_public',
  getParentRoute: () => rootRoute,
} as any)

const AuthedRoute = AuthedImport.update({
  id: '/_authed',
  getParentRoute: () => rootRoute,
} as any)

const PublicIndexRoute = PublicIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => PublicRoute,
} as any)

const PublicAuthRoute = PublicAuthImport.update({
  id: '/_auth',
  getParentRoute: () => PublicRoute,
} as any)

const AuthedDashboardRoute = AuthedDashboardImport.update({
  id: '/dashboard',
  path: '/dashboard',
  getParentRoute: () => AuthedRoute,
} as any)

const PublicShowcaseJsonlidityRoute = PublicShowcaseJsonlidityImport.update({
  id: '/showcase/jsonlidity',
  path: '/showcase/jsonlidity',
  getParentRoute: () => PublicRoute,
} as any)

const PublicShowcaseDndRoute = PublicShowcaseDndImport.update({
  id: '/showcase/dnd',
  path: '/showcase/dnd',
  getParentRoute: () => PublicRoute,
} as any)

const PublicShowcaseDeployerRoute = PublicShowcaseDeployerImport.update({
  id: '/showcase/deployer',
  path: '/showcase/deployer',
  getParentRoute: () => PublicRoute,
} as any)

const PublicAuthSignupRoute = PublicAuthSignupImport.update({
  id: '/signup',
  path: '/signup',
  getParentRoute: () => PublicAuthRoute,
} as any)

const PublicAuthSigninRoute = PublicAuthSigninImport.update({
  id: '/signin',
  path: '/signin',
  getParentRoute: () => PublicAuthRoute,
} as any)

const PublicAuthResetPasswordRoute = PublicAuthResetPasswordImport.update({
  id: '/reset-password',
  path: '/reset-password',
  getParentRoute: () => PublicAuthRoute,
} as any)

const PublicAuthForgotPasswordRoute = PublicAuthForgotPasswordImport.update({
  id: '/forgot-password',
  path: '/forgot-password',
  getParentRoute: () => PublicAuthRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    '/_public': {
      id: '/_public'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicImport
      parentRoute: typeof rootRoute
    }
    '/_authed/dashboard': {
      id: '/_authed/dashboard'
      path: '/dashboard'
      fullPath: '/dashboard'
      preLoaderRoute: typeof AuthedDashboardImport
      parentRoute: typeof AuthedImport
    }
    '/_public/_auth': {
      id: '/_public/_auth'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof PublicAuthImport
      parentRoute: typeof PublicImport
    }
    '/_public/': {
      id: '/_public/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof PublicIndexImport
      parentRoute: typeof PublicImport
    }
    '/_public/_auth/forgot-password': {
      id: '/_public/_auth/forgot-password'
      path: '/forgot-password'
      fullPath: '/forgot-password'
      preLoaderRoute: typeof PublicAuthForgotPasswordImport
      parentRoute: typeof PublicAuthImport
    }
    '/_public/_auth/reset-password': {
      id: '/_public/_auth/reset-password'
      path: '/reset-password'
      fullPath: '/reset-password'
      preLoaderRoute: typeof PublicAuthResetPasswordImport
      parentRoute: typeof PublicAuthImport
    }
    '/_public/_auth/signin': {
      id: '/_public/_auth/signin'
      path: '/signin'
      fullPath: '/signin'
      preLoaderRoute: typeof PublicAuthSigninImport
      parentRoute: typeof PublicAuthImport
    }
    '/_public/_auth/signup': {
      id: '/_public/_auth/signup'
      path: '/signup'
      fullPath: '/signup'
      preLoaderRoute: typeof PublicAuthSignupImport
      parentRoute: typeof PublicAuthImport
    }
    '/_public/showcase/deployer': {
      id: '/_public/showcase/deployer'
      path: '/showcase/deployer'
      fullPath: '/showcase/deployer'
      preLoaderRoute: typeof PublicShowcaseDeployerImport
      parentRoute: typeof PublicImport
    }
    '/_public/showcase/dnd': {
      id: '/_public/showcase/dnd'
      path: '/showcase/dnd'
      fullPath: '/showcase/dnd'
      preLoaderRoute: typeof PublicShowcaseDndImport
      parentRoute: typeof PublicImport
    }
    '/_public/showcase/jsonlidity': {
      id: '/_public/showcase/jsonlidity'
      path: '/showcase/jsonlidity'
      fullPath: '/showcase/jsonlidity'
      preLoaderRoute: typeof PublicShowcaseJsonlidityImport
      parentRoute: typeof PublicImport
    }
  }
}

// Create and export the route tree

interface AuthedRouteChildren {
  AuthedDashboardRoute: typeof AuthedDashboardRoute
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedDashboardRoute: AuthedDashboardRoute,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

interface PublicAuthRouteChildren {
  PublicAuthForgotPasswordRoute: typeof PublicAuthForgotPasswordRoute
  PublicAuthResetPasswordRoute: typeof PublicAuthResetPasswordRoute
  PublicAuthSigninRoute: typeof PublicAuthSigninRoute
  PublicAuthSignupRoute: typeof PublicAuthSignupRoute
}

const PublicAuthRouteChildren: PublicAuthRouteChildren = {
  PublicAuthForgotPasswordRoute: PublicAuthForgotPasswordRoute,
  PublicAuthResetPasswordRoute: PublicAuthResetPasswordRoute,
  PublicAuthSigninRoute: PublicAuthSigninRoute,
  PublicAuthSignupRoute: PublicAuthSignupRoute,
}

const PublicAuthRouteWithChildren = PublicAuthRoute._addFileChildren(
  PublicAuthRouteChildren,
)

interface PublicRouteChildren {
  PublicAuthRoute: typeof PublicAuthRouteWithChildren
  PublicIndexRoute: typeof PublicIndexRoute
  PublicShowcaseDeployerRoute: typeof PublicShowcaseDeployerRoute
  PublicShowcaseDndRoute: typeof PublicShowcaseDndRoute
  PublicShowcaseJsonlidityRoute: typeof PublicShowcaseJsonlidityRoute
}

const PublicRouteChildren: PublicRouteChildren = {
  PublicAuthRoute: PublicAuthRouteWithChildren,
  PublicIndexRoute: PublicIndexRoute,
  PublicShowcaseDeployerRoute: PublicShowcaseDeployerRoute,
  PublicShowcaseDndRoute: PublicShowcaseDndRoute,
  PublicShowcaseJsonlidityRoute: PublicShowcaseJsonlidityRoute,
}

const PublicRouteWithChildren =
  PublicRoute._addFileChildren(PublicRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof PublicAuthRouteWithChildren
  '/dashboard': typeof AuthedDashboardRoute
  '/': typeof PublicIndexRoute
  '/forgot-password': typeof PublicAuthForgotPasswordRoute
  '/reset-password': typeof PublicAuthResetPasswordRoute
  '/signin': typeof PublicAuthSigninRoute
  '/signup': typeof PublicAuthSignupRoute
  '/showcase/deployer': typeof PublicShowcaseDeployerRoute
  '/showcase/dnd': typeof PublicShowcaseDndRoute
  '/showcase/jsonlidity': typeof PublicShowcaseJsonlidityRoute
}

export interface FileRoutesByTo {
  '': typeof PublicAuthRouteWithChildren
  '/dashboard': typeof AuthedDashboardRoute
  '/': typeof PublicIndexRoute
  '/forgot-password': typeof PublicAuthForgotPasswordRoute
  '/reset-password': typeof PublicAuthResetPasswordRoute
  '/signin': typeof PublicAuthSigninRoute
  '/signup': typeof PublicAuthSignupRoute
  '/showcase/deployer': typeof PublicShowcaseDeployerRoute
  '/showcase/dnd': typeof PublicShowcaseDndRoute
  '/showcase/jsonlidity': typeof PublicShowcaseJsonlidityRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/_public': typeof PublicRouteWithChildren
  '/_authed/dashboard': typeof AuthedDashboardRoute
  '/_public/_auth': typeof PublicAuthRouteWithChildren
  '/_public/': typeof PublicIndexRoute
  '/_public/_auth/forgot-password': typeof PublicAuthForgotPasswordRoute
  '/_public/_auth/reset-password': typeof PublicAuthResetPasswordRoute
  '/_public/_auth/signin': typeof PublicAuthSigninRoute
  '/_public/_auth/signup': typeof PublicAuthSignupRoute
  '/_public/showcase/deployer': typeof PublicShowcaseDeployerRoute
  '/_public/showcase/dnd': typeof PublicShowcaseDndRoute
  '/_public/showcase/jsonlidity': typeof PublicShowcaseJsonlidityRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/dashboard'
    | '/'
    | '/forgot-password'
    | '/reset-password'
    | '/signin'
    | '/signup'
    | '/showcase/deployer'
    | '/showcase/dnd'
    | '/showcase/jsonlidity'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/dashboard'
    | '/'
    | '/forgot-password'
    | '/reset-password'
    | '/signin'
    | '/signup'
    | '/showcase/deployer'
    | '/showcase/dnd'
    | '/showcase/jsonlidity'
  id:
    | '__root__'
    | '/_authed'
    | '/_public'
    | '/_authed/dashboard'
    | '/_public/_auth'
    | '/_public/'
    | '/_public/_auth/forgot-password'
    | '/_public/_auth/reset-password'
    | '/_public/_auth/signin'
    | '/_public/_auth/signup'
    | '/_public/showcase/deployer'
    | '/_public/showcase/dnd'
    | '/_public/showcase/jsonlidity'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthedRoute: typeof AuthedRouteWithChildren
  PublicRoute: typeof PublicRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthedRoute: AuthedRouteWithChildren,
  PublicRoute: PublicRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authed",
        "/_public"
      ]
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/dashboard"
      ]
    },
    "/_public": {
      "filePath": "_public.tsx",
      "children": [
        "/_public/_auth",
        "/_public/",
        "/_public/showcase/deployer",
        "/_public/showcase/dnd",
        "/_public/showcase/jsonlidity"
      ]
    },
    "/_authed/dashboard": {
      "filePath": "_authed/dashboard.tsx",
      "parent": "/_authed"
    },
    "/_public/_auth": {
      "filePath": "_public/_auth.tsx",
      "parent": "/_public",
      "children": [
        "/_public/_auth/forgot-password",
        "/_public/_auth/reset-password",
        "/_public/_auth/signin",
        "/_public/_auth/signup"
      ]
    },
    "/_public/": {
      "filePath": "_public/index.tsx",
      "parent": "/_public"
    },
    "/_public/_auth/forgot-password": {
      "filePath": "_public/_auth/forgot-password.tsx",
      "parent": "/_public/_auth"
    },
    "/_public/_auth/reset-password": {
      "filePath": "_public/_auth/reset-password.tsx",
      "parent": "/_public/_auth"
    },
    "/_public/_auth/signin": {
      "filePath": "_public/_auth/signin.tsx",
      "parent": "/_public/_auth"
    },
    "/_public/_auth/signup": {
      "filePath": "_public/_auth/signup.tsx",
      "parent": "/_public/_auth"
    },
    "/_public/showcase/deployer": {
      "filePath": "_public/showcase/deployer.tsx",
      "parent": "/_public"
    },
    "/_public/showcase/dnd": {
      "filePath": "_public/showcase/dnd.tsx",
      "parent": "/_public"
    },
    "/_public/showcase/jsonlidity": {
      "filePath": "_public/showcase/jsonlidity.tsx",
      "parent": "/_public"
    }
  }
}
ROUTE_MANIFEST_END */
