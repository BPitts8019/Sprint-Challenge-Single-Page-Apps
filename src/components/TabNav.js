import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {Menu, Tab} from "semantic-ui-react";

// TODO: Add missing menu/tabs/nav below

// Review Semantic UI Component options for nav-like UI:
// https://react.semantic-ui.com/collections/menu/
// https://react.semantic-ui.com/modules/tab/
// https://react.semantic-ui.com/elements/button/
// https://react.semantic-ui.com/collections/breadcrumb/

export default function TabNav() {
   const [activeTab, setActiveTab] = useState("home");

   const clickHandler = (event, ...rest) => {
      // console.log(JSON.stringify(rest, null, 3));
      setActiveTab(event.target.name);
   }
   // const panes = [
   //    {
   //       menuItem: "Home Page",
   //       render: () => <Tab.Pane><NavLink to="/">Home Page</NavLink></Tab.Pane>
   //    },
   //    {
   //       menuItem: "Characters",
   //       render: () => <Tab.Pane><NavLink to="/characters">Characters</NavLink></Tab.Pane>
   //    },
   //    {
   //       menuItem: "Locations",
   //       render: () => <Tab.Pane><NavLink to="/locations">Locations</NavLink></Tab.Pane>
   //    }
   //    // {
   //    //    menuItem: "home",
   //    //    render: () => <Tab.Pane><NavLink to="/">Home Page</NavLink></Tab.Pane>
   //    // },
   // ];


   return (
      // <Menu secondary>
      //    <Menu.Item 
      //       name="home"
      //       active={activeTab === "home"}
      //       onClick={clickHandler}
      //    >
      //       <NavLink to="/">Home Page</NavLink>
      //    </Menu.Item>
      //    <Menu.Item 
      //       name="characters"
      //       active={activeTab === "characters"}
      //       onClick={clickHandler}
      //    >
      //       <NavLink to="/characters">Characters</NavLink>
      //    </Menu.Item>
      //    <Menu.Item 
      //       name="locations"
      //       active={activeTab === "locations"}
      //       onClick={clickHandler}
      //    >
      //       <NavLink to="/locations">Locations</NavLink>
      //    </Menu.Item>
      // </Menu>
      <ul>
         <li><NavLink to="/">Home Page</NavLink></li>
         <li><NavLink to="/characters">Characters</NavLink></li>
         <li><NavLink to="/locations">Locations</NavLink></li>
         <li><NavLink to="/episodes">Episodes</NavLink></li>
      </ul>
      // <Tab panes={panes} />
   );
};
