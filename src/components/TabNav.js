import React from "react";
// import {Nav, NavItem, NavLink as RSNavLink, TabContent, TabPane} from "reactstrap";
import { Route, NavLink } from "react-router-dom";

import WelcomePage from "./WelcomePage.js";
import CharacterList from "./CharacterList.js";
import LocationsList from "./LocationsList";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
   // const [activeTab, setActiveTab] = useState(1);
   // const clickHandler = event => {
   //    event.preventDefault();
   //    setActiveTab(event.target.dataset.tabId);
   // }

   return (
      <>
         <ul>
            <li><NavLink to="/">Home Page</NavLink></li>
            <li><NavLink to="/characters">Characters</NavLink></li>
            <li><NavLink to="/locations">Locations</NavLink></li>
            {/* <li><NavLink href="/episodes">Episodes</NavLink></li> */}
         </ul>
         <Route exact path="/" component={WelcomePage} />
         <Route path="/characters" component={CharacterList} />
         <Route path="/locations" component={LocationsList} />
         {/* <Route path="/episodes" component={WelcomePage} /> */}
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
