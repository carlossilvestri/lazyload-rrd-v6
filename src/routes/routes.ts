import { lazy } from 'react';
import { LazyPage1, LazyPage2, LazyPage3 } from '../01-layload/pages';
import NoLazy from '../01-layload/pages/NoLazy';

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: React.LazyExoticComponent<() => JSX.Element> | JSXComponent, // Uppercase obhligatorio porque es un componente de react.
    name: string 
}

export const LazyLayout  = lazy( () => import( /* webpackChunkName: "LazyLayout" */ '../01-layload/layout/LazyLayout'));

export const routes : Route[] = [
    {
        to: '/lazyload/',
        path: '/lazyload/*',
        Component: LazyLayout,
        name: 'LazyLayout - Dash'
    },
    {
        to: '/no-lazy',
        path: 'no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    }
]