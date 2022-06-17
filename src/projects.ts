export interface Project {
    title: string,
    img: string,
    path: string,
    external?: boolean,
    description: string,
    stack: string[],
    repo: string
}

export const largeProjects: Project[] = [
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
]
export const smallProjects: Project[] = [
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
]