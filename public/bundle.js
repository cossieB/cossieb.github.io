/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/linksDiv.ts":
/*!*************************!*\
  !*** ./src/linksDiv.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createLinksDiv)
/* harmony export */ });
function createLinksDiv(proj) {
    const links = document.createElement('div');
    links.className = 'links';
    const git = document.createElement('a');
    git.className = 'git';
    git.href = proj.repo;
    git.target = "_blank";
    git.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
  </svg>`;
    const project = document.createElement('a');
    project.className = 'projectLink';
    project.href = proj.path;
    project.target = "_blank";
    project.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
    <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
  </svg>`;
    links.appendChild(git);
    links.appendChild(project);
    return links;
}


/***/ }),

/***/ "./src/projects.ts":
/*!*************************!*\
  !*** ./src/projects.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "largeProjects": () => (/* binding */ largeProjects),
/* harmony export */   "smallProjects": () => (/* binding */ smallProjects)
/* harmony export */ });
const largeProjects = [
    {
        title: `Meme Machine`,
        img: `screenshots/memes.png`,
        path: `https://mememachine.vercel.app/`,
        external: true,
        description: `<p>This is a full-stack CRUD application for posting and viewing memes. I developed it with TypeScript, Next.js, React and SASS.</p> 
        <p>It features an authentication system that I built from the ground up using Json Web Tokens to authenticate users and bcrypt to hash passwords.</p> 
        <p>I used MongoDB Atlas as a database. I also made a MySQL version, the code for which can be viewed on the 'using_mysql' branch of the <a href="https://github.com/cossieB/meme-machine">repo</a>.`,
        stack: [`typescript`, `next.js`, `react`, `node.js`, `mongodb`, `mongoose`, `json web token`, `vercel`, `mysql`, `sass`],
        repo: 'https://github.com/cossieB/meme-machine'
    }, {
        title: `Microservices`,
        img: `screenshots/microservices.png`,
        path: `https://cossie.herokuapp.com/`,
        external: true,
        description: `<p>Various REST APIs including header parser, file metadata, British/American English translator, Metric/Imperial converter.</p>
        <p>I developed this project with TypeScript, Exress.js and MongoDB Atlas. It uses server side rendering and the templating engine I used is Pug.</p> `,
        stack: [`typescript`, `node.js`, `expressjs`, `mongodb`, `mongoose`, `pug`, `heroku`],
        repo: 'https://github.com/cossieB/microservices'
    }, {
        title: `Internet Games Database`,
        img: `screenshots/igdb.png`,
        path: `https://internet-games-database.vercel.app/`,
        external: true,
        description: `<p>This is a CRUD application for adding and viewing information about the games industry. I developed it with TypeScript, Next.js, React, SASS and MongoDB Atlas.</p>
        <p>In building this project I used advanced React features such as custom hooks and the useReducer hook to manage state</p>
        `,
        stack: [`typescript`, `next.js`, `react`, `node.js`, `mongodb`, `mongoose`, `vercel`, `framer motion`, `sass`],
        repo: `https://github.com/cossieB/internet-games-database`
    }
];
const smallProjects = [
    {
        title: `Sudoku`,
        img: 'screenshots/sudoku.png',
        path: `/sudoku`,
        description: `Play sudoku. Features clash highlighting and custom puzzle creator. It can also solve most puzzles using the backtracking algorithm.`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Sudoku`
    }, {
        title: `Pomodoro`,
        img: `screenshots/pomodoro.png`,
        path: `/pomodoro`,
        description: `Timer for the pomodoro technique. You can change the session and the break lengths.`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Pomodoro`
    }, {
        title: `Calculator`,
        img: `screenshots/calculator.png`,
        path: `/calculator`,
        description: `Non-scientific calculator.`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Calculator`
    }, {
        title: 'Quiz',
        path: '/quiz',
        img: 'screenshots/quiz.png',
        description: `Quiz that tests your mental math skills. High scores stored in Firestore and local storage.`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`, `firestore`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Quiz`
    }, {
        title: 'Memory Game',
        path: '/memory',
        img: `/screenshots/memory.png`,
        description: `Quiz that tests your memory. High scores stored in Firestore and local storage.`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`, `firestore`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Memory`
    }, {
        title: `Random Quote Machine`,
        path: `/quotes`,
        img: `screenshots/quotes.png`,
        description: `Some lighthearted quotes from across the ages.`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Quotes`
    }, {
        title: `Markdown Preview`,
        path: `markdown-preview`,
        img: `screenshots/markdown.png`,
        description: `This neat little tool allows you to type markdown code and instantly see the output. Useful for git README.md files.`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`, `marked`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Markdown`
    }, {
        title: `Soundboard`,
        img: `screenshots/soundboard.png`,
        path: `/soundboard`,
        description: `Press a button and play a sound. Features a volume slider`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Soundboard`
    }, {
        title: `Message Board`,
        path: `/forum`,
        img: `screenshots/forum.png`,
        description: `User interface for a message board. Messages aren't stored.`,
        stack: [`typescript`, `react`, `firebase`, `framer motion`],
        repo: `https://github.com/cossieB/portfolio/tree/main/src/Components/Forum`
    }
];


/***/ }),

/***/ "./src/skills.ts":
/*!***********************!*\
  !*** ./src/skills.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skills": () => (/* binding */ skills)
/* harmony export */ });
const skills = [
    {
        language: "TypeScript",
        logo: "/logos/typescript.png",
        skill: 7
    },
    {
        language: "JavaScript",
        logo: "/logos/javascript.png",
        skill: 7
    },
    {
        language: "Python",
        logo: "/logos/python.png",
        skill: 6
    },
    {
        language: "C#",
        logo: '/logos/csharp.svg',
        skill: 4
    },
    {
        language: "HTML",
        logo: "/logos/html.png",
        skill: 8
    },
    {
        language: "CSS",
        logo: "/logos/css.png",
        skill: 6
    },
    {
        language: 'React',
        logo: "/logos/react.png",
        skill: 7
    },
    {
        language: "Next.js",
        logo: "/logos/next.png",
        skill: 7
    },
    {
        language: "jQuery",
        logo: "/logos/jquery.png",
        skill: 2
    },
    {
        language: "SASS",
        logo: "/logos/sass.png",
        skill: 6
    },
    {
        language: "Bootstrap",
        logo: "/logos/bootstrap.png",
        skill: 5
    },
    {
        language: 'Node.JS',
        logo: '/logos/node.png',
        skill: 7
    },
    {
        language: "ExpressJS",
        logo: "/logos/express.png",
        skill: 7
    },
    {
        language: "MongoDB",
        logo: "/logos/mongo.png",
        skill: 6
    },
    {
        language: "Mongoose",
        logo: "/logos/mongoose.png",
        skill: 6
    },
    {
        language: "MySQL",
        logo: '/logos/mysql.png',
        skill: 4
    },
    {
        language: "ASP.NET",
        logo: '/logos/aspnet.jpg',
        skill: 3
    },
    {
        language: "Visual Studio Code",
        logo: "/logos/vscode.png",
        skill: 8
    },
    {
        language: "Docker",
        logo: "/logos/docker.png",
        skill: 4
    },
    {
        language: "Git",
        logo: "/logos/git.png",
        skill: 7
    },
    {
        language: "Firebase",
        logo: "/logos/firebase.svg",
        skill: 8
    },
    {
        language: "GraphQL",
        logo: "/logos/graphql.png",
        skill: 5
    }
];


/***/ }),

/***/ "./src/skillsMap.ts":
/*!**************************!*\
  !*** ./src/skillsMap.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "skillsMap": () => (/* binding */ skillsMap)
/* harmony export */ });
function skillsMap(skillLevel) {
    if (skillLevel >= 8) {
        return ["#00ffea", "Excellent"];
    }
    if (skillLevel >= 6) {
        return ["springgreen", "Good"];
    }
    if (skillLevel >= 4) {
        return ["greenyellow", "Average"];
    }
    if (skillLevel >= 2) {
        return ["yellow", "Novice"];
    }
    else {
        return ["red", "Beginner"];
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects */ "./src/projects.ts");
/* harmony import */ var _linksDiv__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linksDiv */ "./src/linksDiv.ts");
/* harmony import */ var _skills__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skills */ "./src/skills.ts");
/* harmony import */ var _skillsMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skillsMap */ "./src/skillsMap.ts");




// import './index.scss'
const website = 'https://cossie-91.web.app/';
const projectsDiv = document.getElementById('projects');
_projects__WEBPACK_IMPORTED_MODULE_0__.largeProjects.forEach((proj, idx) => {
    let div = document.createElement('div');
    div.className = idx % 2 == 1 ? 'tile reverse' : 'tile';
    let img = document.createElement('img');
    img.src = `${website}${proj.img}`;
    let leftDiv = document.createElement('div');
    const h3 = document.createElement('h3');
    h3.textContent = proj.title;
    leftDiv.appendChild(h3);
    let description = document.createElement('div');
    leftDiv.appendChild(description);
    description.innerHTML = proj.description;
    const links = (0,_linksDiv__WEBPACK_IMPORTED_MODULE_1__["default"])(proj);
    leftDiv.appendChild(links);
    div.appendChild(leftDiv);
    div.appendChild(img);
    projectsDiv.appendChild(div);
});
const smallProjectsDiv = document.getElementById('smallProjects');
_projects__WEBPACK_IMPORTED_MODULE_0__.smallProjects.forEach((proj, idx) => {
    const div = document.createElement('div');
    div.className = "smallTile";
    const img = document.createElement('img');
    img.src = `${website}${proj.img}`;
    const h3 = document.createElement('h3');
    h3.textContent = proj.title;
    const links = (0,_linksDiv__WEBPACK_IMPORTED_MODULE_1__["default"])(proj);
    const mask = document.createElement('div');
    mask.className = 'mask';
    div.appendChild(links);
    div.appendChild(img);
    div.appendChild(h3);
    div.appendChild(mask);
    div.title = proj.description;
    smallProjectsDiv.appendChild(div);
});
const nav = document.querySelector('nav');
let pos = window.scrollY;
document.addEventListener('scroll', e => {
    if (window.scrollY < pos) {
        nav.style.top = '0px';
        if (window.scrollY > 100) {
            nav.style.backgroundColor = '#ddd';
            nav.style.color = '#222';
        }
        else {
            nav.style.background = 'none';
            nav.style.color = '#ddd';
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
    pos = window.scrollY;
});
const skillsDiv = document.getElementById('skills');
_skills__WEBPACK_IMPORTED_MODULE_2__.skills.forEach(skill => {
    const div = document.createElement('div');
    div.className = 'skillDiv';
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute('title', "skill level");
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    const offset = 260 - skill.skill / 10 * 260;
    const [strokeColour, summary] = (0,_skillsMap__WEBPACK_IMPORTED_MODULE_3__.skillsMap)(skill.skill);
    circle.setAttribute('stroke-dashoffset', offset.toString());
    svg.setAttribute('stroke', strokeColour);
    svg.setAttribute('class', 'skill');
    svg.setAttribute('height', '100');
    svg.setAttribute('width', '100');
    circle.setAttribute('cx', '50');
    circle.setAttribute('cy', '50');
    circle.setAttribute('r', '40');
    svg.appendChild(circle);
    const img = document.createElement('img');
    img.title = skill.language;
    img.src = `${website}${skill.logo}`;
    div.appendChild(img);
    div.appendChild(svg);
    skillsDiv.appendChild(div);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWUsU0FBUyxjQUFjLENBQUMsSUFBYTtJQUNoRCxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUMzQyxLQUFLLENBQUMsU0FBUyxHQUFHLE9BQU87SUFDekIsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUs7SUFDckIsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsUUFBUTtJQUNyQixHQUFHLENBQUMsU0FBUyxHQUFHOztTQUVYO0lBQ0wsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QyxPQUFPLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQztJQUNsQyxPQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDekIsT0FBTyxDQUFDLE1BQU0sR0FBRyxRQUFRO0lBQ3pCLE9BQU8sQ0FBQyxTQUFTLEdBQUc7OztTQUdmO0lBQ0wsS0FBSyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7SUFDdEIsS0FBSyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUM7SUFDMUIsT0FBTyxLQUFLO0FBQ2hCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiTSxNQUFNLGFBQWEsR0FBYztJQUNwQztRQUNJLEtBQUssRUFBRSxjQUFjO1FBQ3JCLEdBQUcsRUFBRSx1QkFBdUI7UUFDNUIsSUFBSSxFQUFFLGlDQUFpQztRQUN2QyxRQUFRLEVBQUUsSUFBSTtRQUNkLFdBQVcsRUFBRTs7NE1BRXVMO1FBQ3BNLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO1FBQ3hILElBQUksRUFBRSx5Q0FBeUM7S0FDbEQsRUFBRTtRQUNDLEtBQUssRUFBRSxlQUFlO1FBQ3RCLEdBQUcsRUFBRSwrQkFBK0I7UUFDcEMsSUFBSSxFQUFFLCtCQUErQjtRQUNyQyxRQUFRLEVBQUUsSUFBSTtRQUNkLFdBQVcsRUFBRTs4SkFDeUk7UUFDdEosS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsUUFBUSxDQUFDO1FBQ3JGLElBQUksRUFBRSwwQ0FBMEM7S0FDbkQsRUFBRTtRQUNDLEtBQUssRUFBRSx5QkFBeUI7UUFDaEMsR0FBRyxFQUFFLHNCQUFzQjtRQUMzQixJQUFJLEVBQUUsNkNBQTZDO1FBQ25ELFFBQVEsRUFBRSxJQUFJO1FBQ2QsV0FBVyxFQUFFOztTQUVaO1FBQ0QsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7UUFDOUcsSUFBSSxFQUFFLG9EQUFvRDtLQUM3RDtDQUNKO0FBQ00sTUFBTSxhQUFhLEdBQWM7SUFDcEM7UUFDSSxLQUFLLEVBQUUsUUFBUTtRQUNmLEdBQUcsRUFBRSx3QkFBd0I7UUFDN0IsSUFBSSxFQUFFLFNBQVM7UUFDZixXQUFXLEVBQUUsc0lBQXNJO1FBQ25KLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsQ0FBQztRQUMzRCxJQUFJLEVBQUUsc0VBQXNFO0tBQy9FLEVBQUU7UUFDQyxLQUFLLEVBQUUsVUFBVTtRQUNqQixHQUFHLEVBQUUsMEJBQTBCO1FBQy9CLElBQUksRUFBRSxXQUFXO1FBQ2pCLFdBQVcsRUFBRSxxRkFBcUY7UUFDbEcsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO1FBQzNELElBQUksRUFBRSx3RUFBd0U7S0FDakYsRUFBRTtRQUNDLEtBQUssRUFBRSxZQUFZO1FBQ25CLEdBQUcsRUFBRSw0QkFBNEI7UUFDakMsSUFBSSxFQUFFLGFBQWE7UUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtRQUN6QyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUM7UUFDM0QsSUFBSSxFQUFFLDBFQUEwRTtLQUNuRixFQUFFO1FBQ0MsS0FBSyxFQUFFLE1BQU07UUFDYixJQUFJLEVBQUUsT0FBTztRQUNiLEdBQUcsRUFBRSxzQkFBc0I7UUFDM0IsV0FBVyxFQUFFLDZGQUE2RjtRQUMxRyxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDO1FBQ3hFLElBQUksRUFBRSxvRUFBb0U7S0FDN0UsRUFBRTtRQUNDLEtBQUssRUFBRSxhQUFhO1FBQ3BCLElBQUksRUFBRSxTQUFTO1FBQ2YsR0FBRyxFQUFFLHlCQUF5QjtRQUM5QixXQUFXLEVBQUUsaUZBQWlGO1FBQzlGLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGVBQWUsRUFBRSxXQUFXLENBQUM7UUFDeEUsSUFBSSxFQUFFLHNFQUFzRTtLQUMvRSxFQUFFO1FBQ0MsS0FBSyxFQUFFLHNCQUFzQjtRQUM3QixJQUFJLEVBQUUsU0FBUztRQUNmLEdBQUcsRUFBRSx3QkFBd0I7UUFDN0IsV0FBVyxFQUFFLGdEQUFnRDtRQUM3RCxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUM7UUFDM0QsSUFBSSxFQUFFLHNFQUFzRTtLQUMvRSxFQUFFO1FBQ0MsS0FBSyxFQUFFLGtCQUFrQjtRQUN6QixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLEdBQUcsRUFBRSwwQkFBMEI7UUFDL0IsV0FBVyxFQUFFLHNIQUFzSDtRQUNuSSxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLEVBQUUsUUFBUSxDQUFDO1FBQ3JFLElBQUksRUFBRSx3RUFBd0U7S0FDakYsRUFBRTtRQUNDLEtBQUssRUFBRSxZQUFZO1FBQ25CLEdBQUcsRUFBRSw0QkFBNEI7UUFDakMsSUFBSSxFQUFFLGFBQWE7UUFDbkIsV0FBVyxFQUFFLDJEQUEyRDtRQUN4RSxLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxlQUFlLENBQUM7UUFDM0QsSUFBSSxFQUFFLDBFQUEwRTtLQUNuRixFQUFFO1FBQ0MsS0FBSyxFQUFFLGVBQWU7UUFDdEIsSUFBSSxFQUFFLFFBQVE7UUFDZCxHQUFHLEVBQUUsdUJBQXVCO1FBQzVCLFdBQVcsRUFBRSw2REFBNkQ7UUFDMUUsS0FBSyxFQUFFLENBQUMsWUFBWSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO1FBQzNELElBQUksRUFBRSxxRUFBcUU7S0FDOUU7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDckdNLE1BQU0sTUFBTSxHQUFXO0lBQzFCO1FBQ0ksUUFBUSxFQUFFLFlBQVk7UUFDdEIsSUFBSSxFQUFFLHVCQUF1QjtRQUM3QixLQUFLLEVBQUUsQ0FBQztLQUNYO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsWUFBWTtRQUN0QixJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFDRDtRQUNJLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLElBQUksRUFBRSxtQkFBbUI7UUFDekIsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNEO1FBQ0ksUUFBUSxFQUFFLElBQUk7UUFDZCxJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFDRDtRQUNJLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNEO1FBQ0ksUUFBUSxFQUFFLEtBQUs7UUFDZixJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFDRDtRQUNJLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNEO1FBQ0ksUUFBUSxFQUFFLFNBQVM7UUFDbkIsSUFBSSxFQUFFLGlCQUFpQjtRQUN2QixLQUFLLEVBQUUsQ0FBQztLQUNYO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsUUFBUTtRQUNsQixJQUFJLEVBQUUsbUJBQW1CO1FBQ3pCLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFDRDtRQUNJLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLElBQUksRUFBRSxpQkFBaUI7UUFDdkIsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNEO1FBQ0ksUUFBUSxFQUFFLFdBQVc7UUFDckIsSUFBSSxFQUFFLHNCQUFzQjtRQUM1QixLQUFLLEVBQUUsQ0FBQztLQUNYO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsaUJBQWlCO1FBQ3ZCLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFDRDtRQUNJLFFBQVEsRUFBRSxXQUFXO1FBQ3JCLElBQUksRUFBRSxvQkFBb0I7UUFDMUIsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNEO1FBQ0ksUUFBUSxFQUFFLFNBQVM7UUFDbkIsSUFBSSxFQUFFLGtCQUFrQjtRQUN4QixLQUFLLEVBQUUsQ0FBQztLQUNYO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsVUFBVTtRQUNwQixJQUFJLEVBQUUscUJBQXFCO1FBQzNCLEtBQUssRUFBRSxDQUFDO0tBQ1g7SUFDRDtRQUNJLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLElBQUksRUFBRSxrQkFBa0I7UUFDeEIsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNEO1FBQ0ksUUFBUSxFQUFFLFNBQVM7UUFDbkIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixLQUFLLEVBQUUsQ0FBQztLQUNYO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsb0JBQW9CO1FBQzlCLElBQUksRUFBRSxtQkFBbUI7UUFDekIsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNEO1FBQ0ksUUFBUSxFQUFFLFFBQVE7UUFDbEIsSUFBSSxFQUFFLG1CQUFtQjtRQUN6QixLQUFLLEVBQUUsQ0FBQztLQUNYO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsS0FBSztRQUNmLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsS0FBSyxFQUFFLENBQUM7S0FDWDtJQUNEO1FBQ0ksUUFBUSxFQUFFLFVBQVU7UUFDcEIsSUFBSSxFQUFFLHFCQUFxQjtRQUMzQixLQUFLLEVBQUUsQ0FBQztLQUNYO0lBQ0Q7UUFDSSxRQUFRLEVBQUUsU0FBUztRQUNuQixJQUFJLEVBQUUsb0JBQW9CO1FBQzFCLEtBQUssRUFBRSxDQUFDO0tBQ1g7Q0FDSjs7Ozs7Ozs7Ozs7Ozs7O0FDakhNLFNBQVMsU0FBUyxDQUFDLFVBQWtCO0lBQ3hDLElBQUksVUFBVSxJQUFJLENBQUMsRUFBRztRQUNsQixPQUFPLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQztLQUNsQztJQUNELElBQUksVUFBVSxJQUFJLENBQUMsRUFBRztRQUNsQixPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sQ0FBQztLQUNqQztJQUNELElBQUksVUFBVSxJQUFJLENBQUMsRUFBRztRQUNsQixPQUFPLENBQUMsYUFBYSxFQUFFLFNBQVMsQ0FBQztLQUNwQztJQUNELElBQUksVUFBVSxJQUFJLENBQUMsRUFBRztRQUNsQixPQUFPLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQztLQUM5QjtTQUNLO1FBQ0YsT0FBTyxDQUFDLEtBQUssRUFBRSxVQUFVLENBQUM7S0FDN0I7QUFDTCxDQUFDOzs7Ozs7O1VDcEJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7QUNOMEQ7QUFDbEI7QUFDTjtBQUNNO0FBQ3hDLHdCQUF3QjtBQUV4QixNQUFNLE9BQU8sR0FBRyw0QkFBNEI7QUFDNUMsTUFBTSxXQUFXLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQW1CLENBQUM7QUFFMUUsNERBQXFCLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDaEMsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUM7SUFDdkMsR0FBRyxDQUFDLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxNQUFNO0lBQ3RELElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDeEMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDbEMsSUFBSSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM1QixPQUFPLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3hCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsT0FBTyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUM7SUFDaEMsV0FBVyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQ3pDLE1BQU0sS0FBSyxHQUFHLHFEQUFjLENBQUMsSUFBSSxDQUFDO0lBQ2xDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO0lBQ3hCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0lBQ3BCLFdBQVcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDO0FBQ2hDLENBQUMsQ0FBQztBQUVGLE1BQU0sZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxlQUFlLENBQUU7QUFFbEUsNERBQXFCLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEVBQUU7SUFDaEMsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxHQUFHLENBQUMsU0FBUyxHQUFHLFdBQVcsQ0FBQztJQUM1QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUNsQyxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLEVBQUUsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztJQUM1QixNQUFNLEtBQUssR0FBRyxxREFBYyxDQUFDLElBQUksQ0FBQztJQUNsQyxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNDLElBQUksQ0FBQyxTQUFTLEdBQUcsTUFBTTtJQUN2QixHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQztJQUN0QixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7SUFDckIsR0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0lBQzdCLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUM7QUFDckMsQ0FBQyxDQUFDO0FBRUYsTUFBTSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUU7QUFDMUMsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLE9BQU87QUFFeEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFBRTtJQUNwQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1FBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztRQUN0QixJQUFJLE1BQU0sQ0FBQyxPQUFPLEdBQUcsR0FBRyxFQUFFO1lBQ3RCLEdBQUcsQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLE1BQU07WUFDbEMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsTUFBTTtTQUMzQjthQUNJO1lBQ0QsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDO1lBQzlCLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU07U0FDM0I7S0FDSjtTQUNJLElBQUksTUFBTSxDQUFDLE9BQU8sR0FBRyxHQUFHLEVBQUU7UUFDM0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQztRQUM5QixHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7S0FDNUI7U0FDSTtRQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEtBQUssQ0FBQztLQUN6QjtJQUNELEdBQUcsR0FBRyxNQUFNLENBQUMsT0FBTztBQUN4QixDQUFDLENBQUM7QUFDRixNQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBRTtBQUdwRCxtREFBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ25CLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsR0FBRyxDQUFDLFNBQVMsR0FBRyxVQUFVO0lBQzFCLE1BQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDMUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDO0lBQ3hDLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsNEJBQTRCLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEYsTUFBTSxNQUFNLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxLQUFLLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQztJQUM1QyxNQUFNLENBQUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLHFEQUFTLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztJQUN0RCxNQUFNLENBQUMsWUFBWSxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzRCxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxZQUFZLENBQUM7SUFDeEMsR0FBRyxDQUFDLFlBQVksQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDO0lBQ2xDLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQztJQUNqQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxLQUFLLENBQUM7SUFDaEMsTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDO0lBQy9CLE1BQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQztJQUMvQixNQUFNLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUMvQixHQUFHLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQztJQUN2QixNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUN6QyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRO0lBQzFCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRTtJQUNuQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNwQixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNwQixTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWdlLy4vc3JjL2xpbmtzRGl2LnRzIiwid2VicGFjazovL3BhZ2UvLi9zcmMvcHJvamVjdHMudHMiLCJ3ZWJwYWNrOi8vcGFnZS8uL3NyYy9za2lsbHMudHMiLCJ3ZWJwYWNrOi8vcGFnZS8uL3NyYy9za2lsbHNNYXAudHMiLCJ3ZWJwYWNrOi8vcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhZ2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMaW5rc0Rpdihwcm9qOiBQcm9qZWN0KSB7XHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsaW5rcy5jbGFzc05hbWUgPSAnbGlua3MnXHJcbiAgICBjb25zdCBnaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBnaXQuY2xhc3NOYW1lID0gJ2dpdCdcclxuICAgIGdpdC5ocmVmID0gcHJvai5yZXBvO1xyXG4gICAgZ2l0LnRhcmdldCA9IFwiX2JsYW5rXCJcclxuICAgIGdpdC5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIGNsYXNzPVwiYmkgYmktZ2l0aHViXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgPHBhdGggZD1cIk04IDBDMy41OCAwIDAgMy41OCAwIDhjMCAzLjU0IDIuMjkgNi41MyA1LjQ3IDcuNTkuNC4wNy41NS0uMTcuNTUtLjM4IDAtLjE5LS4wMS0uODItLjAxLTEuNDktMi4wMS4zNy0yLjUzLS40OS0yLjY5LS45NC0uMDktLjIzLS40OC0uOTQtLjgyLTEuMTMtLjI4LS4xNS0uNjgtLjUyLS4wMS0uNTMuNjMtLjAxIDEuMDguNTggMS4yMy44Mi43MiAxLjIxIDEuODcuODcgMi4zMy42Ni4wNy0uNTIuMjgtLjg3LjUxLTEuMDctMS43OC0uMi0zLjY0LS44OS0zLjY0LTMuOTUgMC0uODcuMzEtMS41OS44Mi0yLjE1LS4wOC0uMi0uMzYtMS4wMi4wOC0yLjEyIDAgMCAuNjctLjIxIDIuMi44Mi42NC0uMTggMS4zMi0uMjcgMi0uMjcuNjggMCAxLjM2LjA5IDIgLjI3IDEuNTMtMS4wNCAyLjItLjgyIDIuMi0uODIuNDQgMS4xLjE2IDEuOTIuMDggMi4xMi41MS41Ni44MiAxLjI3LjgyIDIuMTUgMCAzLjA3LTEuODcgMy43NS0zLjY1IDMuOTUuMjkuMjUuNTQuNzMuNTQgMS40OCAwIDEuMDctLjAxIDEuOTMtLjAxIDIuMiAwIC4yMS4xNS40Ni41NS4zOEE4LjAxMiA4LjAxMiAwIDAgMCAxNiA4YzAtNC40Mi0zLjU4LTgtOC04elwiLz5cclxuICA8L3N2Zz5gXHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgcHJvamVjdC5jbGFzc05hbWUgPSAncHJvamVjdExpbmsnO1xyXG4gICAgcHJvamVjdC5ocmVmID0gcHJvai5wYXRoO1xyXG4gICAgcHJvamVjdC50YXJnZXQgPSBcIl9ibGFua1wiXHJcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1ib3gtYXJyb3ctdXAtcmlnaHRcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCI+XHJcbiAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04LjYzNiAzLjVhLjUuNSAwIDAgMC0uNS0uNUgxLjVBMS41IDEuNSAwIDAgMCAwIDQuNXYxMEExLjUgMS41IDAgMCAwIDEuNSAxNmgxMGExLjUgMS41IDAgMCAwIDEuNS0xLjVWNy44NjRhLjUuNSAwIDAgMC0xIDBWMTQuNWEuNS41IDAgMCAxLS41LjVoLTEwYS41LjUgMCAwIDEtLjUtLjV2LTEwYS41LjUgMCAwIDEgLjUtLjVoNi42MzZhLjUuNSAwIDAgMCAuNS0uNXpcIi8+XHJcbiAgICA8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xNiAuNWEuNS41IDAgMCAwLS41LS41aC01YS41LjUgMCAwIDAgMCAxaDMuNzkzTDYuMTQ2IDkuMTQ2YS41LjUgMCAxIDAgLjcwOC43MDhMMTUgMS43MDdWNS41YS41LjUgMCAwIDAgMSAwdi01elwiLz5cclxuICA8L3N2Zz5gXHJcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChnaXQpXHJcbiAgICBsaW5rcy5hcHBlbmRDaGlsZChwcm9qZWN0KVxyXG4gICAgcmV0dXJuIGxpbmtzXHJcbn0iLCJleHBvcnQgaW50ZXJmYWNlIFByb2plY3Qge1xyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIGltZzogc3RyaW5nLFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgZXh0ZXJuYWw/OiBib29sZWFuLFxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyxcclxuICAgIHN0YWNrOiBzdHJpbmdbXSxcclxuICAgIHJlcG86IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbGFyZ2VQcm9qZWN0czogUHJvamVjdFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBgTWVtZSBNYWNoaW5lYCxcclxuICAgICAgICBpbWc6IGBzY3JlZW5zaG90cy9tZW1lcy5wbmdgLFxyXG4gICAgICAgIHBhdGg6IGBodHRwczovL21lbWVtYWNoaW5lLnZlcmNlbC5hcHAvYCxcclxuICAgICAgICBleHRlcm5hbDogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYDxwPlRoaXMgaXMgYSBmdWxsLXN0YWNrIENSVUQgYXBwbGljYXRpb24gZm9yIHBvc3RpbmcgYW5kIHZpZXdpbmcgbWVtZXMuIEkgZGV2ZWxvcGVkIGl0IHdpdGggVHlwZVNjcmlwdCwgTmV4dC5qcywgUmVhY3QgYW5kIFNBU1MuPC9wPiBcclxuICAgICAgICA8cD5JdCBmZWF0dXJlcyBhbiBhdXRoZW50aWNhdGlvbiBzeXN0ZW0gdGhhdCBJIGJ1aWx0IGZyb20gdGhlIGdyb3VuZCB1cCB1c2luZyBKc29uIFdlYiBUb2tlbnMgdG8gYXV0aGVudGljYXRlIHVzZXJzIGFuZCBiY3J5cHQgdG8gaGFzaCBwYXNzd29yZHMuPC9wPiBcclxuICAgICAgICA8cD5JIHVzZWQgTW9uZ29EQiBBdGxhcyBhcyBhIGRhdGFiYXNlLiBJIGFsc28gbWFkZSBhIE15U1FMIHZlcnNpb24sIHRoZSBjb2RlIGZvciB3aGljaCBjYW4gYmUgdmlld2VkIG9uIHRoZSAndXNpbmdfbXlzcWwnIGJyYW5jaCBvZiB0aGUgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL21lbWUtbWFjaGluZVwiPnJlcG88L2E+LmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGBuZXh0LmpzYCwgYHJlYWN0YCwgYG5vZGUuanNgLCBgbW9uZ29kYmAsIGBtb25nb29zZWAsIGBqc29uIHdlYiB0b2tlbmAsIGB2ZXJjZWxgLCBgbXlzcWxgLCBgc2Fzc2BdLFxyXG4gICAgICAgIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9tZW1lLW1hY2hpbmUnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6IGBNaWNyb3NlcnZpY2VzYCxcclxuICAgICAgICBpbWc6IGBzY3JlZW5zaG90cy9taWNyb3NlcnZpY2VzLnBuZ2AsXHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vY29zc2llLmhlcm9rdWFwcC5jb20vYCxcclxuICAgICAgICBleHRlcm5hbDogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYDxwPlZhcmlvdXMgUkVTVCBBUElzIGluY2x1ZGluZyBoZWFkZXIgcGFyc2VyLCBmaWxlIG1ldGFkYXRhLCBCcml0aXNoL0FtZXJpY2FuIEVuZ2xpc2ggdHJhbnNsYXRvciwgTWV0cmljL0ltcGVyaWFsIGNvbnZlcnRlci48L3A+XHJcbiAgICAgICAgPHA+SSBkZXZlbG9wZWQgdGhpcyBwcm9qZWN0IHdpdGggVHlwZVNjcmlwdCwgRXhyZXNzLmpzIGFuZCBNb25nb0RCIEF0bGFzLiBJdCB1c2VzIHNlcnZlciBzaWRlIHJlbmRlcmluZyBhbmQgdGhlIHRlbXBsYXRpbmcgZW5naW5lIEkgdXNlZCBpcyBQdWcuPC9wPiBgLFxyXG4gICAgICAgIHN0YWNrOiBbYHR5cGVzY3JpcHRgLCBgbm9kZS5qc2AsIGBleHByZXNzanNgLCBgbW9uZ29kYmAsIGBtb25nb29zZWAsIGBwdWdgLCBgaGVyb2t1YF0sXHJcbiAgICAgICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL21pY3Jvc2VydmljZXMnXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6IGBJbnRlcm5ldCBHYW1lcyBEYXRhYmFzZWAsXHJcbiAgICAgICAgaW1nOiBgc2NyZWVuc2hvdHMvaWdkYi5wbmdgLFxyXG4gICAgICAgIHBhdGg6IGBodHRwczovL2ludGVybmV0LWdhbWVzLWRhdGFiYXNlLnZlcmNlbC5hcHAvYCxcclxuICAgICAgICBleHRlcm5hbDogdHJ1ZSxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYDxwPlRoaXMgaXMgYSBDUlVEIGFwcGxpY2F0aW9uIGZvciBhZGRpbmcgYW5kIHZpZXdpbmcgaW5mb3JtYXRpb24gYWJvdXQgdGhlIGdhbWVzIGluZHVzdHJ5LiBJIGRldmVsb3BlZCBpdCB3aXRoIFR5cGVTY3JpcHQsIE5leHQuanMsIFJlYWN0LCBTQVNTIGFuZCBNb25nb0RCIEF0bGFzLjwvcD5cclxuICAgICAgICA8cD5JbiBidWlsZGluZyB0aGlzIHByb2plY3QgSSB1c2VkIGFkdmFuY2VkIFJlYWN0IGZlYXR1cmVzIHN1Y2ggYXMgY3VzdG9tIGhvb2tzIGFuZCB0aGUgdXNlUmVkdWNlciBob29rIHRvIG1hbmFnZSBzdGF0ZTwvcD5cclxuICAgICAgICBgLFxyXG4gICAgICAgIHN0YWNrOiBbYHR5cGVzY3JpcHRgLCBgbmV4dC5qc2AsIGByZWFjdGAsIGBub2RlLmpzYCwgYG1vbmdvZGJgLCBgbW9uZ29vc2VgLCBgdmVyY2VsYCwgYGZyYW1lciBtb3Rpb25gLCBgc2Fzc2BdLFxyXG4gICAgICAgIHJlcG86IGBodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9pbnRlcm5ldC1nYW1lcy1kYXRhYmFzZWBcclxuICAgIH1cclxuXVxyXG5leHBvcnQgY29uc3Qgc21hbGxQcm9qZWN0czogUHJvamVjdFtdID0gW1xyXG4gICAge1xyXG4gICAgICAgIHRpdGxlOiBgU3Vkb2t1YCxcclxuICAgICAgICBpbWc6ICdzY3JlZW5zaG90cy9zdWRva3UucG5nJyxcclxuICAgICAgICBwYXRoOiBgL3N1ZG9rdWAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBQbGF5IHN1ZG9rdS4gRmVhdHVyZXMgY2xhc2ggaGlnaGxpZ2h0aW5nIGFuZCBjdXN0b20gcHV6emxlIGNyZWF0b3IuIEl0IGNhbiBhbHNvIHNvbHZlIG1vc3QgcHV6emxlcyB1c2luZyB0aGUgYmFja3RyYWNraW5nIGFsZ29yaXRobS5gLFxyXG4gICAgICAgIHN0YWNrOiBbYHR5cGVzY3JpcHRgLCBgcmVhY3RgLCBgZmlyZWJhc2VgLCBgZnJhbWVyIG1vdGlvbmBdLFxyXG4gICAgICAgIHJlcG86IGBodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9wb3J0Zm9saW8vdHJlZS9tYWluL3NyYy9Db21wb25lbnRzL1N1ZG9rdWBcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogYFBvbW9kb3JvYCxcclxuICAgICAgICBpbWc6IGBzY3JlZW5zaG90cy9wb21vZG9yby5wbmdgLFxyXG4gICAgICAgIHBhdGg6IGAvcG9tb2Rvcm9gLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgVGltZXIgZm9yIHRoZSBwb21vZG9ybyB0ZWNobmlxdWUuIFlvdSBjYW4gY2hhbmdlIHRoZSBzZXNzaW9uIGFuZCB0aGUgYnJlYWsgbGVuZ3Rocy5gLFxyXG4gICAgICAgIHN0YWNrOiBbYHR5cGVzY3JpcHRgLCBgcmVhY3RgLCBgZmlyZWJhc2VgLCBgZnJhbWVyIG1vdGlvbmBdLFxyXG4gICAgICAgIHJlcG86IGBodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9wb3J0Zm9saW8vdHJlZS9tYWluL3NyYy9Db21wb25lbnRzL1BvbW9kb3JvYFxyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiBgQ2FsY3VsYXRvcmAsXHJcbiAgICAgICAgaW1nOiBgc2NyZWVuc2hvdHMvY2FsY3VsYXRvci5wbmdgLFxyXG4gICAgICAgIHBhdGg6IGAvY2FsY3VsYXRvcmAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBOb24tc2NpZW50aWZpYyBjYWxjdWxhdG9yLmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL3BvcnRmb2xpby90cmVlL21haW4vc3JjL0NvbXBvbmVudHMvQ2FsY3VsYXRvcmBcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogJ1F1aXonLFxyXG4gICAgICAgIHBhdGg6ICcvcXVpeicsXHJcbiAgICAgICAgaW1nOiAnc2NyZWVuc2hvdHMvcXVpei5wbmcnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgUXVpeiB0aGF0IHRlc3RzIHlvdXIgbWVudGFsIG1hdGggc2tpbGxzLiBIaWdoIHNjb3JlcyBzdG9yZWQgaW4gRmlyZXN0b3JlIGFuZCBsb2NhbCBzdG9yYWdlLmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYCwgYGZpcmVzdG9yZWBdLFxyXG4gICAgICAgIHJlcG86IGBodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9wb3J0Zm9saW8vdHJlZS9tYWluL3NyYy9Db21wb25lbnRzL1F1aXpgXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6ICdNZW1vcnkgR2FtZScsXHJcbiAgICAgICAgcGF0aDogJy9tZW1vcnknLFxyXG4gICAgICAgIGltZzogYC9zY3JlZW5zaG90cy9tZW1vcnkucG5nYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFF1aXogdGhhdCB0ZXN0cyB5b3VyIG1lbW9yeS4gSGlnaCBzY29yZXMgc3RvcmVkIGluIEZpcmVzdG9yZSBhbmQgbG9jYWwgc3RvcmFnZS5gLFxyXG4gICAgICAgIHN0YWNrOiBbYHR5cGVzY3JpcHRgLCBgcmVhY3RgLCBgZmlyZWJhc2VgLCBgZnJhbWVyIG1vdGlvbmAsIGBmaXJlc3RvcmVgXSxcclxuICAgICAgICByZXBvOiBgaHR0cHM6Ly9naXRodWIuY29tL2Nvc3NpZUIvcG9ydGZvbGlvL3RyZWUvbWFpbi9zcmMvQ29tcG9uZW50cy9NZW1vcnlgXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6IGBSYW5kb20gUXVvdGUgTWFjaGluZWAsXHJcbiAgICAgICAgcGF0aDogYC9xdW90ZXNgLFxyXG4gICAgICAgIGltZzogYHNjcmVlbnNob3RzL3F1b3Rlcy5wbmdgLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgU29tZSBsaWdodGhlYXJ0ZWQgcXVvdGVzIGZyb20gYWNyb3NzIHRoZSBhZ2VzLmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL3BvcnRmb2xpby90cmVlL21haW4vc3JjL0NvbXBvbmVudHMvUXVvdGVzYFxyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiBgTWFya2Rvd24gUHJldmlld2AsXHJcbiAgICAgICAgcGF0aDogYG1hcmtkb3duLXByZXZpZXdgLFxyXG4gICAgICAgIGltZzogYHNjcmVlbnNob3RzL21hcmtkb3duLnBuZ2AsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBUaGlzIG5lYXQgbGl0dGxlIHRvb2wgYWxsb3dzIHlvdSB0byB0eXBlIG1hcmtkb3duIGNvZGUgYW5kIGluc3RhbnRseSBzZWUgdGhlIG91dHB1dC4gVXNlZnVsIGZvciBnaXQgUkVBRE1FLm1kIGZpbGVzLmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYCwgYG1hcmtlZGBdLFxyXG4gICAgICAgIHJlcG86IGBodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9wb3J0Zm9saW8vdHJlZS9tYWluL3NyYy9Db21wb25lbnRzL01hcmtkb3duYFxyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiBgU291bmRib2FyZGAsXHJcbiAgICAgICAgaW1nOiBgc2NyZWVuc2hvdHMvc291bmRib2FyZC5wbmdgLFxyXG4gICAgICAgIHBhdGg6IGAvc291bmRib2FyZGAsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBQcmVzcyBhIGJ1dHRvbiBhbmQgcGxheSBhIHNvdW5kLiBGZWF0dXJlcyBhIHZvbHVtZSBzbGlkZXJgLFxyXG4gICAgICAgIHN0YWNrOiBbYHR5cGVzY3JpcHRgLCBgcmVhY3RgLCBgZmlyZWJhc2VgLCBgZnJhbWVyIG1vdGlvbmBdLFxyXG4gICAgICAgIHJlcG86IGBodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9wb3J0Zm9saW8vdHJlZS9tYWluL3NyYy9Db21wb25lbnRzL1NvdW5kYm9hcmRgXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6IGBNZXNzYWdlIEJvYXJkYCxcclxuICAgICAgICBwYXRoOiBgL2ZvcnVtYCxcclxuICAgICAgICBpbWc6IGBzY3JlZW5zaG90cy9mb3J1bS5wbmdgLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgVXNlciBpbnRlcmZhY2UgZm9yIGEgbWVzc2FnZSBib2FyZC4gTWVzc2FnZXMgYXJlbid0IHN0b3JlZC5gLFxyXG4gICAgICAgIHN0YWNrOiBbYHR5cGVzY3JpcHRgLCBgcmVhY3RgLCBgZmlyZWJhc2VgLCBgZnJhbWVyIG1vdGlvbmBdLFxyXG4gICAgICAgIHJlcG86IGBodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9wb3J0Zm9saW8vdHJlZS9tYWluL3NyYy9Db21wb25lbnRzL0ZvcnVtYFxyXG4gICAgfVxyXG5dIiwiZXhwb3J0IGludGVyZmFjZSBMYW5nIHtcclxuICAgIGxhbmd1YWdlOiBzdHJpbmcsXHJcbiAgICBsb2dvOiBzdHJpbmcsIFxyXG4gICAgc2tpbGw6IG51bWJlclxyXG59XHJcblxyXG5leHBvcnQgY29uc3Qgc2tpbGxzOiBMYW5nW10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiVHlwZVNjcmlwdFwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL3R5cGVzY3JpcHQucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL2phdmFzY3JpcHQucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiUHl0aG9uXCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvcHl0aG9uLnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIkMjXCIsXHJcbiAgICAgICAgbG9nbzogJy9sb2dvcy9jc2hhcnAuc3ZnJyxcclxuICAgICAgICBza2lsbDogNFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJIVE1MXCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvaHRtbC5wbmdcIixcclxuICAgICAgICBza2lsbDogOFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJDU1NcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9jc3MucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDZcclxuICAgIH0sIFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiAnUmVhY3QnLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL3JlYWN0LnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIk5leHQuanNcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9uZXh0LnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcImpRdWVyeVwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL2pxdWVyeS5wbmdcIixcclxuICAgICAgICBza2lsbDogMlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJTQVNTXCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3Mvc2Fzcy5wbmdcIixcclxuICAgICAgICBza2lsbDogNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJCb290c3RyYXBcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9ib290c3RyYXAucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdOb2RlLkpTJyxcclxuICAgICAgICBsb2dvOiAnL2xvZ29zL25vZGUucG5nJyxcclxuICAgICAgICBza2lsbDogN1xyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiRXhwcmVzc0pTXCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvZXhwcmVzcy5wbmdcIixcclxuICAgICAgICBza2lsbDogN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJNb25nb0RCXCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvbW9uZ28ucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiTW9uZ29vc2VcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9tb25nb29zZS5wbmdcIixcclxuICAgICAgICBza2lsbDogNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJNeVNRTFwiLFxyXG4gICAgICAgIGxvZ286ICcvbG9nb3MvbXlzcWwucG5nJyxcclxuICAgICAgICBza2lsbDogNFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJBU1AuTkVUXCIsXHJcbiAgICAgICAgbG9nbzogJy9sb2dvcy9hc3BuZXQuanBnJyxcclxuICAgICAgICBza2lsbDogM1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJWaXN1YWwgU3R1ZGlvIENvZGVcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy92c2NvZGUucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiRG9ja2VyXCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvZG9ja2VyLnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIkdpdFwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL2dpdC5wbmdcIixcclxuICAgICAgICBza2lsbDogN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJGaXJlYmFzZVwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL2ZpcmViYXNlLnN2Z1wiLFxyXG4gICAgICAgIHNraWxsOiA4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIkdyYXBoUUxcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9ncmFwaHFsLnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA1XHJcbiAgICB9XHJcbl0iLCJpbnRlcmZhY2UgUyB7XHJcbiAgICBbbGV2ZWw6IG51bWJlcl06IFtzdHJpbmcsIHN0cmluZ11cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNraWxsc01hcChza2lsbExldmVsOiBudW1iZXIpOiBbc3RyaW5nLCBzdHJpbmddIHtcclxuICAgIGlmIChza2lsbExldmVsID49IDggKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcIiMwMGZmZWFcIiwgXCJFeGNlbGxlbnRcIl1cclxuICAgIH1cclxuICAgIGlmIChza2lsbExldmVsID49IDYgKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcInNwcmluZ2dyZWVuXCIsIFwiR29vZFwiXVxyXG4gICAgfVxyXG4gICAgaWYgKHNraWxsTGV2ZWwgPj0gNCApIHtcclxuICAgICAgICByZXR1cm4gW1wiZ3JlZW55ZWxsb3dcIiwgXCJBdmVyYWdlXCJdXHJcbiAgICB9XHJcbiAgICBpZiAoc2tpbGxMZXZlbCA+PSAyICkge1xyXG4gICAgICAgIHJldHVybiBbXCJ5ZWxsb3dcIiwgXCJOb3ZpY2VcIl1cclxuICAgIH1cclxuICAgIGVsc2UgIHtcclxuICAgICAgICByZXR1cm4gW1wicmVkXCIsIFwiQmVnaW5uZXJcIl1cclxuICAgIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbGFyZ2VQcm9qZWN0cywgc21hbGxQcm9qZWN0cyB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcbmltcG9ydCBjcmVhdGVMaW5rc0RpdiBmcm9tIFwiLi9saW5rc0RpdlwiO1xyXG5pbXBvcnQgeyBza2lsbHMgfSBmcm9tIFwiLi9za2lsbHNcIjtcclxuaW1wb3J0IHsgc2tpbGxzTWFwIH0gZnJvbSBcIi4vc2tpbGxzTWFwXCI7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5zY3NzJ1xyXG5cclxuY29uc3Qgd2Vic2l0ZSA9ICdodHRwczovL2Nvc3NpZS05MS53ZWIuYXBwLydcclxuY29uc3QgcHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdHMnKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuXHJcbmxhcmdlUHJvamVjdHMuZm9yRWFjaCgocHJvaiwgaWR4KSA9PiB7XHJcbiAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5jbGFzc05hbWUgPSBpZHggJSAyID09IDEgPyAndGlsZSByZXZlcnNlJyA6ICd0aWxlJ1xyXG4gICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgaW1nLnNyYyA9IGAke3dlYnNpdGV9JHtwcm9qLmltZ31gO1xyXG4gICAgbGV0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLnRleHRDb250ZW50ID0gcHJvai50aXRsZTtcclxuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoaDMpO1xyXG4gICAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZWZ0RGl2LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxyXG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gcHJvai5kZXNjcmlwdGlvbjtcclxuICAgIGNvbnN0IGxpbmtzID0gY3JlYXRlTGlua3NEaXYocHJvailcclxuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQobGlua3MpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGVmdERpdilcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChkaXYpXHJcbn0pXHJcblxyXG5jb25zdCBzbWFsbFByb2plY3RzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NtYWxsUHJvamVjdHMnKSFcclxuXHJcbnNtYWxsUHJvamVjdHMuZm9yRWFjaCgocHJvaiwgaWR4KSA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSBcInNtYWxsVGlsZVwiO1xyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGltZy5zcmMgPSBgJHt3ZWJzaXRlfSR7cHJvai5pbWd9YDtcclxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcclxuICAgIGgzLnRleHRDb250ZW50ID0gcHJvai50aXRsZTtcclxuICAgIGNvbnN0IGxpbmtzID0gY3JlYXRlTGlua3NEaXYocHJvailcclxuICAgIGNvbnN0IG1hc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG1hc2suY2xhc3NOYW1lID0gJ21hc2snXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobGlua3MpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChoMyk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQobWFzaylcclxuICAgIGRpdi50aXRsZSA9IHByb2ouZGVzY3JpcHRpb247XHJcbiAgICBzbWFsbFByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdilcclxufSlcclxuXHJcbmNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ25hdicpIVxyXG5sZXQgcG9zID0gd2luZG93LnNjcm9sbFlcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGUgPT4ge1xyXG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZIDwgcG9zKSB7XHJcbiAgICAgICAgbmF2LnN0eWxlLnRvcCA9ICcwcHgnO1xyXG4gICAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+IDEwMCkge1xyXG4gICAgICAgICAgICBuYXYuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJyNkZGQnXHJcbiAgICAgICAgICAgIG5hdi5zdHlsZS5jb2xvciA9ICcjMjIyJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbmF2LnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgIG5hdi5zdHlsZS5jb2xvciA9ICcjZGRkJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgICAgbmF2LnN0eWxlLnRvcCA9ICctMTAwcHgnO1xyXG4gICAgICAgIG5hdi5zdHlsZS5iYWNrZ3JvdW5kID0gJ25vbmUnO1xyXG4gICAgICAgIG5hdi5zdHlsZS5jb2xvciA9ICcjZGRkJztcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIG5hdi5zdHlsZS50b3AgPSAnMHB4JztcclxuICAgIH1cclxuICAgIHBvcyA9IHdpbmRvdy5zY3JvbGxZXHJcbn0pXHJcbmNvbnN0IHNraWxsc0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdza2lsbHMnKSFcclxuXHJcblxyXG5za2lsbHMuZm9yRWFjaChza2lsbCA9PiB7XHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdi5jbGFzc05hbWUgPSAnc2tpbGxEaXYnXHJcbiAgICBjb25zdCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcInN2Z1wiKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgXCJza2lsbCBsZXZlbFwiKVxyXG4gICAgY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJjaXJjbGVcIik7XHJcbiAgICBjb25zdCBvZmZzZXQgPSAyNjAgLSBza2lsbC5za2lsbCAvIDEwICogMjYwO1xyXG4gICAgY29uc3QgW3N0cm9rZUNvbG91ciwgc3VtbWFyeV0gPSBza2lsbHNNYXAoc2tpbGwuc2tpbGwpXHJcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdzdHJva2UtZGFzaG9mZnNldCcsIG9mZnNldC50b1N0cmluZygpKVxyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnc3Ryb2tlJywgc3Ryb2tlQ29sb3VyKVxyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnc2tpbGwnKVxyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnaGVpZ2h0JywgJzEwMCcpXHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsICcxMDAnKVxyXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3gnLCAnNTAnKVxyXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgnY3knLCAnNTAnKVxyXG4gICAgY2lyY2xlLnNldEF0dHJpYnV0ZSgncicsICc0MCcpO1xyXG4gICAgc3ZnLmFwcGVuZENoaWxkKGNpcmNsZSlcclxuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpXHJcbiAgICBpbWcudGl0bGUgPSBza2lsbC5sYW5ndWFnZVxyXG4gICAgaW1nLnNyYyA9IGAke3dlYnNpdGV9JHtza2lsbC5sb2dvfWBcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpXHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoc3ZnKVxyXG4gICAgc2tpbGxzRGl2LmFwcGVuZENoaWxkKGRpdilcclxufSlcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==