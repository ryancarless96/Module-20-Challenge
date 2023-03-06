import React from 'react';
import coverImage from "../../assets(images)/cover-Page";

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Ryan Carless</h1>
    <img src={coverImage} alt="gray=background"></img>
    {props.children}
    </header>
  );
}

export default Header;
