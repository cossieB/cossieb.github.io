import { largeProjects, smallProjects } from "./projects";
import createLinksDiv from "./linksDiv";
import { skills } from "./skills";
import { skillsMap } from "./skillsMap";
import animateInOnScroll from "./animate";
// import './index.scss'

const website = 'https://cossie-91.web.app/'
const projectsDiv = document.getElementById('projects') as HTMLDivElement;
const root = document.querySelector(':root')! as any
const about = document.getElementById('about') as HTMLDivElement

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


document.addEventListener('scroll', () => {
    if (window.scrollY < pos) {
        nav.style.top = '0px';
        if (window.scrollY > 100) {
            nav.style.backgroundColor = 'var(--tertiaryClr)'
        }
        else {
            nav.style.background = 'none';
            nav.style.color = 'var(--textClr)'
        }
    }
    else if (window.scrollY > 100) {
        nav.style.top = '-100px';
        nav.style.background = 'none';
        nav.style.color = 'var(--textClr)';
    }
    else {
        nav.style.top = '0px';
    }
    pos = window.scrollY;
    animateInOnScroll(projectsDiv)
    animateInOnScroll(smallProjectsDiv)
    animateInOnScroll(about)
    animateInOnScroll(skillsDiv)
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
    const title = document.createElementNS("http://www.w3.org/2000/svg", 'title');
    title.textContent = summary;
    svg.appendChild(title)
    const img = document.createElement('img')
    img.title = skill.language
    img.src = `${website}${skill.logo}`
    div.appendChild(img)
    div.appendChild(svg)
    skillsDiv.appendChild(div)
})

const form = document.querySelector('form')!
form.addEventListener('submit', async e => {
    e.preventDefault();
    const responseDiv = document.getElementById('response')! as HTMLDivElement
    const name = (document.getElementById('name')! as HTMLInputElement).value
    const company = (document.getElementById('company')! as HTMLInputElement).value
    const email = (document.getElementById('email')! as HTMLInputElement).value
    const msg = (document.getElementById('msg')! as HTMLTextAreaElement).value
    const data = await fetch('https://cossie.herokuapp.com/api/email', {
        method: "POST",
        body: JSON.stringify({name, company, email, msg}),
        headers: {
            "Content-Type": "application/json",
        }
    }) 
    const response = await data.json()
    responseDiv.classList.toggle('show')
    if (response.status) {
        responseDiv.style.color = 'springgreen';
        responseDiv.innerText = "Thank you, your message has been sent successfully! I will get back to you as soon as possible."
    }
    else {
        responseDiv.style.color = "red"
        responseDiv.textContent = "Something went wrong."
    }
    responseDiv.style.fontSize = '1.25rem'
    responseDiv.style.textAlign = 'center'
    setTimeout(() => {
        responseDiv.classList.toggle('show')
    }, 3500)
})
const toggle = document.getElementById('lightDarkToggle') as HTMLDivElement;
toggle.onclick = function toggleLightDark() {
    const variables = getComputedStyle(root)
    const clr1 = variables.getPropertyValue('--clr1'); 
    const clr2 = variables.getPropertyValue('--clr2'); 
    const clr3 = variables.getPropertyValue('--clr3'); 
    const clr4 = variables.getPropertyValue('--clr4'); 
    const clr5 = variables.getPropertyValue('--clr5'); 
    const clr6 = variables.getPropertyValue('--clr6'); 
    const mode = variables.getPropertyValue('--mode'); console.log(mode)
    if (mode == "dark") {
        root.style.setProperty('--textClr', clr1)
        root.style.setProperty('--bgClr', clr2)
        root.style.setProperty('--clrInfo', clr4)
        root.style.setProperty('--tertiaryClr', clr3)
        root.style.setProperty('--mode', "light")
    }
    else {
        root.style.setProperty('--textClr', clr2)
        root.style.setProperty('--bgClr', clr1)
        root.style.setProperty('--clrInfo', clr3)
        root.style.setProperty('--tertiaryClr', 'black')
        root.style.setProperty('--mode', "dark")
    }
}