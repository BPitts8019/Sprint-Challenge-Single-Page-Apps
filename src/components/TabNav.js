import React, {useState, useEffect} from "react";
import {Nav, NavItem, NavLink as RSNavLink, TabContent, TabPane} from "reactstrap";
import { NavLink } from "react-router-dom";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
   const [activeTab, setActiveTab] = useState(1);
   const clickHandler = event => {
      event.preventDefault();
      setActiveTab(event.target.dataset.tabId);
   }

   return (
      <>
         <ul>
            <li><a href="/" data-tabId="1" onClick={clickHandler}>Home Page</a></li>
            <li><a href="/characters" data-tabId="2" onClick={clickHandler}>Characters</a></li>
            <li><a href="/locations" data-tabId="3" onClick={clickHandler}>Locations</a></li>
            <li><a href="/episodes" data-tabId="4" onClick={clickHandler}>Episodes</a></li>
         </ul>
         <div className="tabStuff">
            {(activeTab === 1)? <h4>Home Page</h4> : null}
            {(activeTab === 2)? <h4>Characters Page</h4> : null}
            {(activeTab === 3)? <h4>Locations Page</h4> : null}
            {(activeTab === 4)? <h4>Episodes Page</h4> : null}
         </div>
      </>
      // <>
      //    <Nav tabs>
      //       <NavItem><RSNavLink href="/blah">Home Page</RSNavLink></NavItem>
      //       <NavItem><RSNavLink href="/characters">Characters</RSNavLink></NavItem>
      //       <NavItem><RSNavLink href="/locations">Locations</RSNavLink></NavItem>
      //       <NavItem><RSNavLink href="/episodes">Episodes</RSNavLink></NavItem>
      //    </Nav>
      //    <TabContent>
      //       <TabPane tabId="1">
      //          <h4>Home tab</h4>
      //       </TabPane>
      //       <TabPane tabId="1">
      //          <h4>Characters tab</h4>
      //       </TabPane>
      //       <TabPane tabId="1">
      //          <h4>Locations tab</h4>
      //       </TabPane>
      //       <TabPane tabId="1">
      //          <h4>Episodes tab</h4>
      //       </TabPane>
      //    </TabContent>
      // </>
   );
};
