import React from "react";
import { Routes, Route, NavLink, BrowserRouter } from "react-router-dom";
import { Home } from "../components/Home";
import { Articles } from "../components/Articles";
import { Contact } from "../components/Contact";
import { NotFound } from "../components/NotFound";

const RouterPrincipal = () => {
  return (
    <BrowserRouter>
      <h1>Header</h1>
      <hr />
      <nav>
        <ul>
          <li>
            <NavLink to={"/home"}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to={"/articles"}>Articles</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contact</NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <section>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/articles" element={<Articles />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </section>
      <hr />
      <footer>
        <p>footer</p>
      </footer>
    </BrowserRouter>
  );
};

export default RouterPrincipal;
