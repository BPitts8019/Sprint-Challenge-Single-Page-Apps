import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import {Nav, NavItem, NavLink as RSNavLink} from "reactstrap";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
   return (
      <>
         <Nav tabs>
            <NavItem className="active"><a>Home Page</a></NavItem>
            <NavItem><RSNavLink>Characters</RSNavLink></NavItem>
            <NavItem><RSNavLink>Locations</RSNavLink></NavItem>
            <NavItem><RSNavLink>Episodes</RSNavLink></NavItem>
         </Nav>
      </>
   );
};
