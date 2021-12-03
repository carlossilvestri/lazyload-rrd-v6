import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link, NavLink, Navigate } from "react-router-dom";
import logo from "../logo.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../01-layload/pages";
import { routes } from "./routes";

/**
 * React Router DOM version 6
 */
export const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="React logo" />
          <ul>
            { 
              routes.map( route => ( 
                <li key={route.to}>
                  <NavLink to={route.to} className={ ({ isActive}) => isActive ? 'nav-active' : '' }>{route.name}</NavLink>
                </li>
              ))
            }
          </ul>
        </nav>
        <Routes>
          {
            routes.map( ({to, path, Component}) => (
              <Route key={to} path={path} element={<Component/>} />
            ) )
          }
          {  /* En caso de que una ruta no exista, se envia al usuario a /home */ }
          <Route path="/*" element={<Navigate to={routes[0].to} replace  />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
