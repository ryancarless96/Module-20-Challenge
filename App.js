import React, {useState} from "react";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Projects from "./src/components/Projects/Projects";


function App(){
  const [pages] = useState([
    {
        name: "about me"
    },
    {
        name: "portfolio"
    },
    {
        name: "contact"
    },
    {
        name: "projects"
    }
  ]);

  const [currentProjects, setCurrentProjects] = useState(projects[0]);
  return (
    <div>
      <Header>
        <Nav
          projects={projects}
          setCurrentProjects={setCurrentProjects}
          currentProjects={currentProjects}
        ></Nav>
      </Header>
      <main>
        <Projects currentProjects={currentProjects}></Projects>
      </main>
      <Footer />
    </div>
  );
  
 
}

export default App;