import React, {useState} from 'react';
import Profile from './Profile';
import Contact from './Contact';

function Projects(){
    const[project,setProject] = useState([]);
    const addProjectsItem = (profile)=> {
        console.log(
            '🚀 ~ file: Projects.js ~ line 10 ~ addProjectsItem ~ item',
            item
        );
        if(!item.text){
            return;
        }

        const newProject = [item, ...profile];
        console.log(newProject);

        setProject(newProject);
    };

    const completeProjectItem = (id) => {
        let updatedProject = project.map((item)=> {
            if(item.id === id) {
                item.isComplete = !item.isComplete;
            }
            return item;
        });
    console.log(updatedProject);
    setProject(updatedProject);
    };

    const removeProjectItem = (id) => {
        const updatedProject = [...project].filter((item)=> item.id !=id);

        setProject(updatedProject);
    };

    const editProjectItem = (itemId, newValue)=> {
        if(!newValue.text){
            return;
        }

        setProject((prev)=> 
        prev.map((item)=> (item.id === itemId? newValue: item))
        );
    };

    return(
        <div>
            <h1> Project Page</h1>
            <ProjectForm onSubmit = {addProjectsItem}/>
            <Contact
            contact ={Contact}
            completeProjectItem = {completeProjectItem}
            removeProjectItem = {removeProjectItem}
            editProjectItem = {editProjectItem}
></Contact>
        </div>
    );
}

export default Projects;