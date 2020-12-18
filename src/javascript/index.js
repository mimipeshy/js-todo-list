import '../css/styles.css';
// import img1 from '../images/img2.jpeg'
console.log("hi all");

import Todo from './todo';
import Project from './project';

const body = document.getElementsByTagName("body")[0];

const addProjectButton = document.createElement("button");
body.appendChild(addProjectButton);
addProjectButton.textContent = "Add Project";

let counter = 0 
addProjectButton.onclick = function() {
    const project1 = new Project("project1");
    // const todo1 = new Todo("homework1", "this is a description", "01/02/2021");
    // project1.todos.push(todo1);
    counter += 1;
    const projectTitle  = document.createElement("h3");
    projectTitle.textContent = project1.title + " - " + counter.toString();
    projectsDiv.appendChild(projectTitle);
    console.log(projectTitle);
    
    console.log(project1);

}

const projectsDiv =  document.createElement("div");
body.appendChild(projectsDiv);

const header = document.createElement("h1")
header.textContent = "Hey There I am a Header";
body.appendChild(header);



// const imgTag = document.createElement("img");
// imgTag.setAttribute("src", img1);

// body.appendChild(imgTag);



