import React from "react";
// import { Tab, Menu, Icon } from "semantic-ui-react";
import {Nav, NavItem, NavLink as RSNavLink, TabContent, TabPane} from "reactstrap";
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
            <NavItem><RSNavLink href="/blah">Home Page</RSNavLink></NavItem>
            <NavItem><RSNavLink href="/characters">Characters</RSNavLink></NavItem>
            <NavItem><RSNavLink href="/locations">Locations</RSNavLink></NavItem>
            <NavItem><RSNavLink href="/episodes">Episodes</RSNavLink></NavItem>
         </Nav>
         <TabContent>
            <TabPane tabId="1">
               <h4>Home tab</h4>
            </TabPane>
            <TabPane tabId="1">
               <h4>Characters tab</h4>
            </TabPane>
            <TabPane tabId="1">
               <h4>Locations tab</h4>
            </TabPane>
            <TabPane tabId="1">
               <h4>Episodes tab</h4>
            </TabPane>
         </TabContent>
      </>
   );
};
