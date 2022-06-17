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
    project.href = proj.external ? proj.path : `https://cossie-91.web.app${proj.path}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLEtBQUssQ0FBQztJQUN6QyxHQUFHLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxRQUFRO0lBQzFCLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxPQUFPLEdBQUcsS0FBSyxDQUFDLElBQUksRUFBRTtJQUNuQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNwQixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztJQUNwQixTQUFTLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQztBQUM5QixDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWdlLy4vc3JjL2xpbmtzRGl2LnRzIiwid2VicGFjazovL3BhZ2UvLi9zcmMvcHJvamVjdHMudHMiLCJ3ZWJwYWNrOi8vcGFnZS8uL3NyYy9za2lsbHMudHMiLCJ3ZWJwYWNrOi8vcGFnZS8uL3NyYy9za2lsbHNNYXAudHMiLCJ3ZWJwYWNrOi8vcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3BhZ2UvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVMaW5rc0Rpdihwcm9qOiBQcm9qZWN0KSB7XHJcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBsaW5rcy5jbGFzc05hbWUgPSAnbGlua3MnXHJcbiAgICBjb25zdCBnaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICBnaXQuY2xhc3NOYW1lID0gJ2dpdCdcclxuICAgIGdpdC5ocmVmID0gIHByb2oucmVwbztcclxuICAgIGdpdC50YXJnZXQgPSBcIl9ibGFua1wiXHJcbiAgICBnaXQuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWdpdGh1YlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgIDxwYXRoIGQ9XCJNOCAwQzMuNTggMCAwIDMuNTggMCA4YzAgMy41NCAyLjI5IDYuNTMgNS40NyA3LjU5LjQuMDcuNTUtLjE3LjU1LS4zOCAwLS4xOS0uMDEtLjgyLS4wMS0xLjQ5LTIuMDEuMzctMi41My0uNDktMi42OS0uOTQtLjA5LS4yMy0uNDgtLjk0LS44Mi0xLjEzLS4yOC0uMTUtLjY4LS41Mi0uMDEtLjUzLjYzLS4wMSAxLjA4LjU4IDEuMjMuODIuNzIgMS4yMSAxLjg3Ljg3IDIuMzMuNjYuMDctLjUyLjI4LS44Ny41MS0xLjA3LTEuNzgtLjItMy42NC0uODktMy42NC0zLjk1IDAtLjg3LjMxLTEuNTkuODItMi4xNS0uMDgtLjItLjM2LTEuMDIuMDgtMi4xMiAwIDAgLjY3LS4yMSAyLjIuODIuNjQtLjE4IDEuMzItLjI3IDItLjI3LjY4IDAgMS4zNi4wOSAyIC4yNyAxLjUzLTEuMDQgMi4yLS44MiAyLjItLjgyLjQ0IDEuMS4xNiAxLjkyLjA4IDIuMTIuNTEuNTYuODIgMS4yNy44MiAyLjE1IDAgMy4wNy0xLjg3IDMuNzUtMy42NSAzLjk1LjI5LjI1LjU0LjczLjU0IDEuNDggMCAxLjA3LS4wMSAxLjkzLS4wMSAyLjIgMCAuMjEuMTUuNDYuNTUuMzhBOC4wMTIgOC4wMTIgMCAwIDAgMTYgOGMwLTQuNDItMy41OC04LTgtOHpcIi8+XHJcbiAgPC9zdmc+YFxyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIHByb2plY3QuY2xhc3NOYW1lID0gJ3Byb2plY3RMaW5rJztcclxuICAgIHByb2plY3QuaHJlZiA9IHByb2ouZXh0ZXJuYWwgPyBwcm9qLnBhdGggOiBgaHR0cHM6Ly9jb3NzaWUtOTEud2ViLmFwcCR7cHJvai5wYXRofWA7XHJcbiAgICBwcm9qZWN0LnRhcmdldCA9IFwiX2JsYW5rXCJcclxuICAgIHByb2plY3QuaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWJveC1hcnJvdy11cC1yaWdodFwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIj5cclxuICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTguNjM2IDMuNWEuNS41IDAgMCAwLS41LS41SDEuNUExLjUgMS41IDAgMCAwIDAgNC41djEwQTEuNSAxLjUgMCAwIDAgMS41IDE2aDEwYTEuNSAxLjUgMCAwIDAgMS41LTEuNVY3Ljg2NGEuNS41IDAgMCAwLTEgMFYxNC41YS41LjUgMCAwIDEtLjUuNWgtMTBhLjUuNSAwIDAgMS0uNS0uNXYtMTBhLjUuNSAwIDAgMSAuNS0uNWg2LjYzNmEuNS41IDAgMCAwIC41LS41elwiLz5cclxuICAgIDxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTE2IC41YS41LjUgMCAwIDAtLjUtLjVoLTVhLjUuNSAwIDAgMCAwIDFoMy43OTNMNi4xNDYgOS4xNDZhLjUuNSAwIDEgMCAuNzA4LjcwOEwxNSAxLjcwN1Y1LjVhLjUuNSAwIDAgMCAxIDB2LTV6XCIvPlxyXG4gIDwvc3ZnPmBcclxuICAgIGxpbmtzLmFwcGVuZENoaWxkKGdpdClcclxuICAgIGxpbmtzLmFwcGVuZENoaWxkKHByb2plY3QpXHJcbiAgICByZXR1cm4gbGlua3NcclxufSIsImV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdCB7XHJcbiAgICB0aXRsZTogc3RyaW5nLFxyXG4gICAgaW1nOiBzdHJpbmcsXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICBleHRlcm5hbD86IGJvb2xlYW4sXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nLFxyXG4gICAgc3RhY2s6IHN0cmluZ1tdLFxyXG4gICAgcmVwbzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBsYXJnZVByb2plY3RzOiBQcm9qZWN0W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IGBNZW1lIE1hY2hpbmVgLFxyXG4gICAgICAgIGltZzogYHNjcmVlbnNob3RzL21lbWVzLnBuZ2AsXHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vbWVtZW1hY2hpbmUudmVyY2VsLmFwcC9gLFxyXG4gICAgICAgIGV4dGVybmFsOiB0cnVlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgPHA+VGhpcyBpcyBhIGZ1bGwtc3RhY2sgQ1JVRCBhcHBsaWNhdGlvbiBmb3IgcG9zdGluZyBhbmQgdmlld2luZyBtZW1lcy4gSSBkZXZlbG9wZWQgaXQgd2l0aCBUeXBlU2NyaXB0LCBOZXh0LmpzLCBSZWFjdCBhbmQgU0FTUy48L3A+IFxyXG4gICAgICAgIDxwPkl0IGZlYXR1cmVzIGFuIGF1dGhlbnRpY2F0aW9uIHN5c3RlbSB0aGF0IEkgYnVpbHQgZnJvbSB0aGUgZ3JvdW5kIHVwIHVzaW5nIEpzb24gV2ViIFRva2VucyB0byBhdXRoZW50aWNhdGUgdXNlcnMgYW5kIGJjcnlwdCB0byBoYXNoIHBhc3N3b3Jkcy48L3A+IFxyXG4gICAgICAgIDxwPkkgdXNlZCBNb25nb0RCIEF0bGFzIGFzIGEgZGF0YWJhc2UuIEkgYWxzbyBtYWRlIGEgTXlTUUwgdmVyc2lvbiwgdGhlIGNvZGUgZm9yIHdoaWNoIGNhbiBiZSB2aWV3ZWQgb24gdGhlICd1c2luZ19teXNxbCcgYnJhbmNoIG9mIHRoZSA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2Nvc3NpZUIvbWVtZS1tYWNoaW5lXCI+cmVwbzwvYT4uYCxcclxuICAgICAgICBzdGFjazogW2B0eXBlc2NyaXB0YCwgYG5leHQuanNgLCBgcmVhY3RgLCBgbm9kZS5qc2AsIGBtb25nb2RiYCwgYG1vbmdvb3NlYCwgYGpzb24gd2ViIHRva2VuYCwgYHZlcmNlbGAsIGBteXNxbGAsIGBzYXNzYF0sXHJcbiAgICAgICAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL21lbWUtbWFjaGluZSdcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogYE1pY3Jvc2VydmljZXNgLFxyXG4gICAgICAgIGltZzogYHNjcmVlbnNob3RzL21pY3Jvc2VydmljZXMucG5nYCxcclxuICAgICAgICBwYXRoOiBgaHR0cHM6Ly9jb3NzaWUuaGVyb2t1YXBwLmNvbS9gLFxyXG4gICAgICAgIGV4dGVybmFsOiB0cnVlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgPHA+VmFyaW91cyBSRVNUIEFQSXMgaW5jbHVkaW5nIGhlYWRlciBwYXJzZXIsIGZpbGUgbWV0YWRhdGEsIEJyaXRpc2gvQW1lcmljYW4gRW5nbGlzaCB0cmFuc2xhdG9yLCBNZXRyaWMvSW1wZXJpYWwgY29udmVydGVyLjwvcD5cclxuICAgICAgICA8cD5JIGRldmVsb3BlZCB0aGlzIHByb2plY3Qgd2l0aCBUeXBlU2NyaXB0LCBFeHJlc3MuanMgYW5kIE1vbmdvREIgQXRsYXMuIEl0IHVzZXMgc2VydmVyIHNpZGUgcmVuZGVyaW5nIGFuZCB0aGUgdGVtcGxhdGluZyBlbmdpbmUgSSB1c2VkIGlzIFB1Zy48L3A+IGAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGBub2RlLmpzYCwgYGV4cHJlc3Nqc2AsIGBtb25nb2RiYCwgYG1vbmdvb3NlYCwgYHB1Z2AsIGBoZXJva3VgXSxcclxuICAgICAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Nvc3NpZUIvbWljcm9zZXJ2aWNlcydcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogYEludGVybmV0IEdhbWVzIERhdGFiYXNlYCxcclxuICAgICAgICBpbWc6IGBzY3JlZW5zaG90cy9pZ2RiLnBuZ2AsXHJcbiAgICAgICAgcGF0aDogYGh0dHBzOi8vaW50ZXJuZXQtZ2FtZXMtZGF0YWJhc2UudmVyY2VsLmFwcC9gLFxyXG4gICAgICAgIGV4dGVybmFsOiB0cnVlLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgPHA+VGhpcyBpcyBhIENSVUQgYXBwbGljYXRpb24gZm9yIGFkZGluZyBhbmQgdmlld2luZyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgZ2FtZXMgaW5kdXN0cnkuIEkgZGV2ZWxvcGVkIGl0IHdpdGggVHlwZVNjcmlwdCwgTmV4dC5qcywgUmVhY3QsIFNBU1MgYW5kIE1vbmdvREIgQXRsYXMuPC9wPlxyXG4gICAgICAgIDxwPkluIGJ1aWxkaW5nIHRoaXMgcHJvamVjdCBJIHVzZWQgYWR2YW5jZWQgUmVhY3QgZmVhdHVyZXMgc3VjaCBhcyBjdXN0b20gaG9va3MgYW5kIHRoZSB1c2VSZWR1Y2VyIGhvb2sgdG8gbWFuYWdlIHN0YXRlPC9wPlxyXG4gICAgICAgIGAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGBuZXh0LmpzYCwgYHJlYWN0YCwgYG5vZGUuanNgLCBgbW9uZ29kYmAsIGBtb25nb29zZWAsIGB2ZXJjZWxgLCBgZnJhbWVyIG1vdGlvbmAsIGBzYXNzYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL2ludGVybmV0LWdhbWVzLWRhdGFiYXNlYFxyXG4gICAgfVxyXG5dXHJcbmV4cG9ydCBjb25zdCBzbWFsbFByb2plY3RzOiBQcm9qZWN0W10gPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdGl0bGU6IGBTdWRva3VgLFxyXG4gICAgICAgIGltZzogJ3NjcmVlbnNob3RzL3N1ZG9rdS5wbmcnLFxyXG4gICAgICAgIHBhdGg6IGAvc3Vkb2t1YCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFBsYXkgc3Vkb2t1LiBGZWF0dXJlcyBjbGFzaCBoaWdobGlnaHRpbmcgYW5kIGN1c3RvbSBwdXp6bGUgY3JlYXRvci4gSXQgY2FuIGFsc28gc29sdmUgbW9zdCBwdXp6bGVzIHVzaW5nIHRoZSBiYWNrdHJhY2tpbmcgYWxnb3JpdGhtLmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL3BvcnRmb2xpby90cmVlL21haW4vc3JjL0NvbXBvbmVudHMvU3Vkb2t1YFxyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiBgUG9tb2Rvcm9gLFxyXG4gICAgICAgIGltZzogYHNjcmVlbnNob3RzL3BvbW9kb3JvLnBuZ2AsXHJcbiAgICAgICAgcGF0aDogYC9wb21vZG9yb2AsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBUaW1lciBmb3IgdGhlIHBvbW9kb3JvIHRlY2huaXF1ZS4gWW91IGNhbiBjaGFuZ2UgdGhlIHNlc3Npb24gYW5kIHRoZSBicmVhayBsZW5ndGhzLmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL3BvcnRmb2xpby90cmVlL21haW4vc3JjL0NvbXBvbmVudHMvUG9tb2Rvcm9gXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6IGBDYWxjdWxhdG9yYCxcclxuICAgICAgICBpbWc6IGBzY3JlZW5zaG90cy9jYWxjdWxhdG9yLnBuZ2AsXHJcbiAgICAgICAgcGF0aDogYC9jYWxjdWxhdG9yYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYE5vbi1zY2llbnRpZmljIGNhbGN1bGF0b3IuYCxcclxuICAgICAgICBzdGFjazogW2B0eXBlc2NyaXB0YCwgYHJlYWN0YCwgYGZpcmViYXNlYCwgYGZyYW1lciBtb3Rpb25gXSxcclxuICAgICAgICByZXBvOiBgaHR0cHM6Ly9naXRodWIuY29tL2Nvc3NpZUIvcG9ydGZvbGlvL3RyZWUvbWFpbi9zcmMvQ29tcG9uZW50cy9DYWxjdWxhdG9yYFxyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAnUXVpeicsXHJcbiAgICAgICAgcGF0aDogJy9xdWl6JyxcclxuICAgICAgICBpbWc6ICdzY3JlZW5zaG90cy9xdWl6LnBuZycsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBRdWl6IHRoYXQgdGVzdHMgeW91ciBtZW50YWwgbWF0aCBza2lsbHMuIEhpZ2ggc2NvcmVzIHN0b3JlZCBpbiBGaXJlc3RvcmUgYW5kIGxvY2FsIHN0b3JhZ2UuYCxcclxuICAgICAgICBzdGFjazogW2B0eXBlc2NyaXB0YCwgYHJlYWN0YCwgYGZpcmViYXNlYCwgYGZyYW1lciBtb3Rpb25gLCBgZmlyZXN0b3JlYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL3BvcnRmb2xpby90cmVlL21haW4vc3JjL0NvbXBvbmVudHMvUXVpemBcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogJ01lbW9yeSBHYW1lJyxcclxuICAgICAgICBwYXRoOiAnL21lbW9yeScsXHJcbiAgICAgICAgaW1nOiBgL3NjcmVlbnNob3RzL21lbW9yeS5wbmdgLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgUXVpeiB0aGF0IHRlc3RzIHlvdXIgbWVtb3J5LiBIaWdoIHNjb3JlcyBzdG9yZWQgaW4gRmlyZXN0b3JlIGFuZCBsb2NhbCBzdG9yYWdlLmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYCwgYGZpcmVzdG9yZWBdLFxyXG4gICAgICAgIHJlcG86IGBodHRwczovL2dpdGh1Yi5jb20vY29zc2llQi9wb3J0Zm9saW8vdHJlZS9tYWluL3NyYy9Db21wb25lbnRzL01lbW9yeWBcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogYFJhbmRvbSBRdW90ZSBNYWNoaW5lYCxcclxuICAgICAgICBwYXRoOiBgL3F1b3Rlc2AsXHJcbiAgICAgICAgaW1nOiBgc2NyZWVuc2hvdHMvcXVvdGVzLnBuZ2AsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBTb21lIGxpZ2h0aGVhcnRlZCBxdW90ZXMgZnJvbSBhY3Jvc3MgdGhlIGFnZXMuYCxcclxuICAgICAgICBzdGFjazogW2B0eXBlc2NyaXB0YCwgYHJlYWN0YCwgYGZpcmViYXNlYCwgYGZyYW1lciBtb3Rpb25gXSxcclxuICAgICAgICByZXBvOiBgaHR0cHM6Ly9naXRodWIuY29tL2Nvc3NpZUIvcG9ydGZvbGlvL3RyZWUvbWFpbi9zcmMvQ29tcG9uZW50cy9RdW90ZXNgXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6IGBNYXJrZG93biBQcmV2aWV3YCxcclxuICAgICAgICBwYXRoOiBgbWFya2Rvd24tcHJldmlld2AsXHJcbiAgICAgICAgaW1nOiBgc2NyZWVuc2hvdHMvbWFya2Rvd24ucG5nYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFRoaXMgbmVhdCBsaXR0bGUgdG9vbCBhbGxvd3MgeW91IHRvIHR5cGUgbWFya2Rvd24gY29kZSBhbmQgaW5zdGFudGx5IHNlZSB0aGUgb3V0cHV0LiBVc2VmdWwgZm9yIGdpdCBSRUFETUUubWQgZmlsZXMuYCxcclxuICAgICAgICBzdGFjazogW2B0eXBlc2NyaXB0YCwgYHJlYWN0YCwgYGZpcmViYXNlYCwgYGZyYW1lciBtb3Rpb25gLCBgbWFya2VkYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL3BvcnRmb2xpby90cmVlL21haW4vc3JjL0NvbXBvbmVudHMvTWFya2Rvd25gXHJcbiAgICB9LCB7XHJcbiAgICAgICAgdGl0bGU6IGBTb3VuZGJvYXJkYCxcclxuICAgICAgICBpbWc6IGBzY3JlZW5zaG90cy9zb3VuZGJvYXJkLnBuZ2AsXHJcbiAgICAgICAgcGF0aDogYC9zb3VuZGJvYXJkYCxcclxuICAgICAgICBkZXNjcmlwdGlvbjogYFByZXNzIGEgYnV0dG9uIGFuZCBwbGF5IGEgc291bmQuIEZlYXR1cmVzIGEgdm9sdW1lIHNsaWRlcmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL3BvcnRmb2xpby90cmVlL21haW4vc3JjL0NvbXBvbmVudHMvU291bmRib2FyZGBcclxuICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogYE1lc3NhZ2UgQm9hcmRgLFxyXG4gICAgICAgIHBhdGg6IGAvZm9ydW1gLFxyXG4gICAgICAgIGltZzogYHNjcmVlbnNob3RzL2ZvcnVtLnBuZ2AsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGBVc2VyIGludGVyZmFjZSBmb3IgYSBtZXNzYWdlIGJvYXJkLiBNZXNzYWdlcyBhcmVuJ3Qgc3RvcmVkLmAsXHJcbiAgICAgICAgc3RhY2s6IFtgdHlwZXNjcmlwdGAsIGByZWFjdGAsIGBmaXJlYmFzZWAsIGBmcmFtZXIgbW90aW9uYF0sXHJcbiAgICAgICAgcmVwbzogYGh0dHBzOi8vZ2l0aHViLmNvbS9jb3NzaWVCL3BvcnRmb2xpby90cmVlL21haW4vc3JjL0NvbXBvbmVudHMvRm9ydW1gXHJcbiAgICB9XHJcbl0iLCJleHBvcnQgaW50ZXJmYWNlIExhbmcge1xyXG4gICAgbGFuZ3VhZ2U6IHN0cmluZyxcclxuICAgIGxvZ286IHN0cmluZywgXHJcbiAgICBza2lsbDogbnVtYmVyXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBza2lsbHM6IExhbmdbXSA9IFtcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJUeXBlU2NyaXB0XCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvdHlwZXNjcmlwdC5wbmdcIixcclxuICAgICAgICBza2lsbDogN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvamF2YXNjcmlwdC5wbmdcIixcclxuICAgICAgICBza2lsbDogN1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJQeXRob25cIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9weXRob24ucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDZcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiQyNcIixcclxuICAgICAgICBsb2dvOiAnL2xvZ29zL2NzaGFycC5zdmcnLFxyXG4gICAgICAgIHNraWxsOiA0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIkhUTUxcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9odG1sLnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA4XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIkNTU1wiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL2Nzcy5wbmdcIixcclxuICAgICAgICBza2lsbDogNlxyXG4gICAgfSwgXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6ICdSZWFjdCcsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvcmVhY3QucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiTmV4dC5qc1wiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL25leHQucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwialF1ZXJ5XCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvanF1ZXJ5LnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiAyXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIlNBU1NcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9zYXNzLnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIkJvb3RzdHJhcFwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL2Jvb3RzdHJhcC5wbmdcIixcclxuICAgICAgICBza2lsbDogNVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogJ05vZGUuSlMnLFxyXG4gICAgICAgIGxvZ286ICcvbG9nb3Mvbm9kZS5wbmcnLFxyXG4gICAgICAgIHNraWxsOiA3XHJcbiAgICB9LCBcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJFeHByZXNzSlNcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9leHByZXNzLnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIk1vbmdvREJcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9tb25nby5wbmdcIixcclxuICAgICAgICBza2lsbDogNlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJNb25nb29zZVwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL21vbmdvb3NlLnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA2XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIk15U1FMXCIsXHJcbiAgICAgICAgbG9nbzogJy9sb2dvcy9teXNxbC5wbmcnLFxyXG4gICAgICAgIHNraWxsOiA0XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIkFTUC5ORVRcIixcclxuICAgICAgICBsb2dvOiAnL2xvZ29zL2FzcG5ldC5qcGcnLFxyXG4gICAgICAgIHNraWxsOiAzXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIlZpc3VhbCBTdHVkaW8gQ29kZVwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL3ZzY29kZS5wbmdcIixcclxuICAgICAgICBza2lsbDogOFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBsYW5ndWFnZTogXCJEb2NrZXJcIixcclxuICAgICAgICBsb2dvOiBcIi9sb2dvcy9kb2NrZXIucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDRcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiR2l0XCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvZ2l0LnBuZ1wiLFxyXG4gICAgICAgIHNraWxsOiA3XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGxhbmd1YWdlOiBcIkZpcmViYXNlXCIsXHJcbiAgICAgICAgbG9nbzogXCIvbG9nb3MvZmlyZWJhc2Uuc3ZnXCIsXHJcbiAgICAgICAgc2tpbGw6IDhcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbGFuZ3VhZ2U6IFwiR3JhcGhRTFwiLFxyXG4gICAgICAgIGxvZ286IFwiL2xvZ29zL2dyYXBocWwucG5nXCIsXHJcbiAgICAgICAgc2tpbGw6IDVcclxuICAgIH1cclxuXSIsImludGVyZmFjZSBTIHtcclxuICAgIFtsZXZlbDogbnVtYmVyXTogW3N0cmluZywgc3RyaW5nXVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2tpbGxzTWFwKHNraWxsTGV2ZWw6IG51bWJlcik6IFtzdHJpbmcsIHN0cmluZ10ge1xyXG4gICAgaWYgKHNraWxsTGV2ZWwgPj0gOCApIHtcclxuICAgICAgICByZXR1cm4gW1wiIzAwZmZlYVwiLCBcIkV4Y2VsbGVudFwiXVxyXG4gICAgfVxyXG4gICAgaWYgKHNraWxsTGV2ZWwgPj0gNiApIHtcclxuICAgICAgICByZXR1cm4gW1wic3ByaW5nZ3JlZW5cIiwgXCJHb29kXCJdXHJcbiAgICB9XHJcbiAgICBpZiAoc2tpbGxMZXZlbCA+PSA0ICkge1xyXG4gICAgICAgIHJldHVybiBbXCJncmVlbnllbGxvd1wiLCBcIkF2ZXJhZ2VcIl1cclxuICAgIH1cclxuICAgIGlmIChza2lsbExldmVsID49IDIgKSB7XHJcbiAgICAgICAgcmV0dXJuIFtcInllbGxvd1wiLCBcIk5vdmljZVwiXVxyXG4gICAgfVxyXG4gICAgZWxzZSAge1xyXG4gICAgICAgIHJldHVybiBbXCJyZWRcIiwgXCJCZWdpbm5lclwiXVxyXG4gICAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBsYXJnZVByb2plY3RzLCBzbWFsbFByb2plY3RzIH0gZnJvbSBcIi4vcHJvamVjdHNcIjtcclxuaW1wb3J0IGNyZWF0ZUxpbmtzRGl2IGZyb20gXCIuL2xpbmtzRGl2XCI7XHJcbmltcG9ydCB7IHNraWxscyB9IGZyb20gXCIuL3NraWxsc1wiO1xyXG5pbXBvcnQgeyBza2lsbHNNYXAgfSBmcm9tIFwiLi9za2lsbHNNYXBcIjtcclxuLy8gaW1wb3J0ICcuL2luZGV4LnNjc3MnXHJcblxyXG5jb25zdCB3ZWJzaXRlID0gJ2h0dHBzOi8vY29zc2llLTkxLndlYi5hcHAvJ1xyXG5jb25zdCBwcm9qZWN0c0RpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0cycpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG5cclxubGFyZ2VQcm9qZWN0cy5mb3JFYWNoKChwcm9qLCBpZHgpID0+IHtcclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGl2LmNsYXNzTmFtZSA9IGlkeCAlIDIgPT0gMSA/ICd0aWxlIHJldmVyc2UnIDogJ3RpbGUnXHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gYCR7d2Vic2l0ZX0ke3Byb2ouaW1nfWA7XHJcbiAgICBsZXQgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSBwcm9qLnRpdGxlO1xyXG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChoMyk7XHJcbiAgICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxlZnREaXYuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXHJcbiAgICBkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBwcm9qLmRlc2NyaXB0aW9uO1xyXG4gICAgY29uc3QgbGlua3MgPSBjcmVhdGVMaW5rc0Rpdihwcm9qKVxyXG4gICAgbGVmdERpdi5hcHBlbmRDaGlsZChsaW5rcylcclxuICAgIGRpdi5hcHBlbmRDaGlsZChsZWZ0RGl2KVxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGltZylcclxuICAgIHByb2plY3RzRGl2LmFwcGVuZENoaWxkKGRpdilcclxufSlcclxuXHJcbmNvbnN0IHNtYWxsUHJvamVjdHNEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc21hbGxQcm9qZWN0cycpIVxyXG5cclxuc21hbGxQcm9qZWN0cy5mb3JFYWNoKChwcm9qLCBpZHgpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9IFwic21hbGxUaWxlXCI7XHJcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKVxyXG4gICAgaW1nLnNyYyA9IGAke3dlYnNpdGV9JHtwcm9qLmltZ31gO1xyXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xyXG4gICAgaDMudGV4dENvbnRlbnQgPSBwcm9qLnRpdGxlO1xyXG4gICAgY29uc3QgbGlua3MgPSBjcmVhdGVMaW5rc0Rpdihwcm9qKVxyXG4gICAgY29uc3QgbWFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbWFzay5jbGFzc05hbWUgPSAnbWFzaydcclxuICAgIGRpdi5hcHBlbmRDaGlsZChsaW5rcylcclxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgZGl2LmFwcGVuZENoaWxkKGgzKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChtYXNrKVxyXG4gICAgZGl2LnRpdGxlID0gcHJvai5kZXNjcmlwdGlvbjtcclxuICAgIHNtYWxsUHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQoZGl2KVxyXG59KVxyXG5cclxuY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JykhXHJcbmxldCBwb3MgPSB3aW5kb3cuc2Nyb2xsWVxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZSA9PiB7XHJcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPCBwb3MpIHtcclxuICAgICAgICBuYXYuc3R5bGUudG9wID0gJzBweCc7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zY3JvbGxZID4gMTAwKSB7XHJcbiAgICAgICAgICAgIG5hdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2RkZCdcclxuICAgICAgICAgICAgbmF2LnN0eWxlLmNvbG9yID0gJyMyMjInXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBuYXYuc3R5bGUuYmFja2dyb3VuZCA9ICdub25lJztcclxuICAgICAgICAgICAgbmF2LnN0eWxlLmNvbG9yID0gJyNkZGQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAod2luZG93LnNjcm9sbFkgPiAxMDApIHtcclxuICAgICAgICBuYXYuc3R5bGUudG9wID0gJy0xMDBweCc7XHJcbiAgICAgICAgbmF2LnN0eWxlLmJhY2tncm91bmQgPSAnbm9uZSc7XHJcbiAgICAgICAgbmF2LnN0eWxlLmNvbG9yID0gJyNkZGQnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbmF2LnN0eWxlLnRvcCA9ICcwcHgnO1xyXG4gICAgfVxyXG4gICAgcG9zID0gd2luZG93LnNjcm9sbFlcclxufSlcclxuY29uc3Qgc2tpbGxzRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NraWxscycpIVxyXG5cclxuXHJcbnNraWxscy5mb3JFYWNoKHNraWxsID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZGl2LmNsYXNzTmFtZSA9ICdza2lsbERpdidcclxuICAgIGNvbnN0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsIFwic3ZnXCIpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgndGl0bGUnLCBcInNraWxsIGxldmVsXCIpXHJcbiAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImNpcmNsZVwiKTtcclxuICAgIGNvbnN0IG9mZnNldCA9IDI2MCAtIHNraWxsLnNraWxsIC8gMTAgKiAyNjA7XHJcbiAgICBjb25zdCBbc3Ryb2tlQ29sb3VyLCBzdW1tYXJ5XSA9IHNraWxsc01hcChza2lsbC5za2lsbClcclxuICAgIGNpcmNsZS5zZXRBdHRyaWJ1dGUoJ3N0cm9rZS1kYXNob2Zmc2V0Jywgb2Zmc2V0LnRvU3RyaW5nKCkpXHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdzdHJva2UnLCBzdHJva2VDb2xvdXIpXHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdjbGFzcycsICdza2lsbCcpXHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAnMTAwJylcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgJzEwMCcpXHJcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdjeCcsICc1MCcpXHJcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdjeScsICc1MCcpXHJcbiAgICBjaXJjbGUuc2V0QXR0cmlidXRlKCdyJywgJzQwJyk7XHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQoY2lyY2xlKVxyXG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcclxuICAgIGltZy50aXRsZSA9IHNraWxsLmxhbmd1YWdlXHJcbiAgICBpbWcuc3JjID0gYCR7d2Vic2l0ZX0ke3NraWxsLmxvZ299YFxyXG4gICAgZGl2LmFwcGVuZENoaWxkKGltZylcclxuICAgIGRpdi5hcHBlbmRDaGlsZChzdmcpXHJcbiAgICBza2lsbHNEaXYuYXBwZW5kQ2hpbGQoZGl2KVxyXG59KVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9