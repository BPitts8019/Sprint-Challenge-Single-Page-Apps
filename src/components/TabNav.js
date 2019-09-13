import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
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
         <div clasName="ui top attached tabular menu">
            <a clasName="active item">Home Page</a>
            <a clasName="item">Characters</a>
            <a clasName="item">Locations</a>
            <a clasName="item">Episodes</a>
         </div>
         <div className="ui bottom attached segment">
            <p></p>
         </div>
      </>
   );
};
