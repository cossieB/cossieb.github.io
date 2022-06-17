import { largeProjects, smallProjects } from "./projects";
import createLinksDiv from "./linksDiv";
import { skills } from "./skills";
import { skillsMap } from "./skillsMap";
// import './index.scss'

const website = 'https://cossie-91.web.app/'
const projectsDiv = document.getElementById('projects') as HTMLDivElement;

largeProjects.forEach((proj, idx) => {
    let div = document.createElement('div')
    div.className = idx % 2 == 1 ? 'tile reverse' : 'tile'
    let img = document.createElement('img');
    img.src = `${website}${proj.img}`;
    let leftDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = proj.title;
    leftDiv.appendChild(h3);
    let description = document.createElement('div');
    leftDiv.appendChild(description)
    description.innerHTML = proj.description;
    const links = createLinksDiv(proj)
    leftDiv.appendChild(links)
    div.appendChild(leftDiv)
    div.appendChild(img)
    projectsDiv.appendChild(div)
})

const smallProjectsDiv = document.getElementById('smallProjects')!

smallProjects.forEach((proj, idx) => {
    const div = document.createElement('div');
    div.className = "smallTile";
    const img = document.createElement('img')
    img.src = `${website}${proj.img}`;
    const h3 = document.createElement('h3');
    h3.textContent = proj.title;
    const links = createLinksDiv(proj)
    const mask = document.createElement('div');
    mask.className = 'mask'
    div.appendChild(links)
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(mask)
    div.title = proj.description;
    smallProjectsDiv.appendChild(div)
})

const nav = document.querySelector('nav')!
let pos = window.scrollY

document.addEventListener('scroll', e => {
    if (window.scrollY < pos) {
        nav.style.top = '0px';
        if (window.scrollY > 100) {
            nav.style.backgroundColor = '#ddd'
            nav.style.color = '#222'
        }
        else {
            nav.style.background = 'none';
            nav.style.color = '#ddd'
        }
    }
    else if (window.scrollY > 100) {
        nav.style.top = '-100px';
        nav.style.background = 'none';
        nav.style.color = '#ddd';
    }
    else {
        nav.style.top = '0px';
    }
    pos = window.scrollY
})
const skillsDiv = document.getElementById('skills')!


skills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skillDiv'
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('title', "skill level")
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const offset = 260 - skill.skill / 10 * 260;
    const [strokeColour, summary] = skillsMap(skill.skill)
    circle.setAttribute('stroke-dashoffset', offset.toString())
    svg.setAttribute('stroke', strokeColour)
    svg.setAttribute('class', 'skill')
    svg.setAttribute('height', '100')
    svg.setAttribute('width', '100')
    circle.setAttribute('cx', '50')
    circle.setAttribute('cy', '50')
    circle.setAttribute('r', '40');
    svg.appendChild(circle)
    const img = document.createElement('img')
    img.title = skill.language
    img.src = `${website}${skill.logo}`
    div.appendChild(img)
    div.appendChild(svg)
    skillsDiv.appendChild(div)
})

