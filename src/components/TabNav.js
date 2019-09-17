import React, {useState} from "react";
import { Link } from "react-router-dom";
import {Menu, Icon} from "semantic-ui-react";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
   const [activeTab, setActiveTab] = useState("home");

   const clickHandler = (event, props) => {
      setActiveTab(props.name);
   }

   return (
      <Menu secondary>
         <Menu.Item 
            name="home"
            active={activeTab === "home"}
            onClick={clickHandler}
            as={Link}
            to="/"
         >
            <Icon className="home" />
            Home Page
         </Menu.Item>
         <Menu.Item 
            name="characters"
            active={activeTab === "characters"}
            onClick={clickHandler}
            as={Link}
            to="/characters"
         >
            <Icon className="user" />
            Characters
         </Menu.Item>
         <Menu.Item 
            name="locations"
            active={activeTab === "locations"}
            onClick={clickHandler}
            as={Link}
            to="/locations"
         >
            <Icon className="globe" />
            Locations
         </Menu.Item>
         <Menu.Item 
            name="episodes"
            active={activeTab === "episodes"}
            onClick={clickHandler}
            as={Link}
            to="/episodes"
         >
            <Icon className="video" />
            Episodes
         </Menu.Item>
      </Menu>
   );
};
