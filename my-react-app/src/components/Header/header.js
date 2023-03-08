import React from 'react';
import coverImage from "../../images/cover-Page/cover-image.jpg";


function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Ryan Carless</h1>
      <nav>
        <button onClick={()=> props.setCurrentPage('About Me')}> AboutMe</button>
        <button onClick={()=> props.setCurrentPage('Portfolio')}> Portfolio</button>
        <button onClick={()=> props.setCurrentPage('Contact')}> Contact</button>
        <button onClick={()=> props.setCurrentPage('Resume')}> Resume</button>
        
      </nav>
    <img src={coverImage} alt="gray=background"></img>
    {props.children}
    </header>
  );
}

export default Header;
