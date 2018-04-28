import React from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "../route";

export default () => {
  return (
    <Menu style={{ margin: "10px" }}>
      <Link route="/">
        <a className="item">Ideation</a>
      </Link>
      <Menu.Menu position="right">
        <Link route="/">
          <a className="item">Idea</a>
        </Link>
        <Link route="/ideas/newIdeas">
          <a className="item">+</a>
        </Link>
      </Menu.Menu>
    </Menu>
  );
};
