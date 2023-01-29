export interface Lang {
    language: string,
    logo: string, 
    skill: number
}

export const langs: Lang[] = [
    {
        language: "TypeScript",
        logo: "/logos/typescript.png",
        skill: 8
    },
    {
        language: "JavaScript",
        logo: "/logos/javascript.png",
        skill: 8
    },
    {
        language: "Python",
        logo: "/logos/python.png",
        skill: 6
    },
    {
        language: "C#",
        logo: '/logos/csharp.svg',
        skill: 5
    },
]

export const frontend: Lang[] = [
    {
        language: "HTML",
        logo: "/logos/html.png",
        skill: 8
    },
    {
        language: "CSS",
        logo: "/logos/css.png",
        skill: 7
    }, 
    {
        language: 'React',
        logo: "/logos/react.png",
        skill: 7
    },
    {
        language: "SASS",
        logo: "/logos/sass.png",
        skill: 7
    },
    {
        language: "Bootstrap",
        logo: "/logos/bootstrap.png",
        skill: 5
    },
    {
        language: "Tailwind",
        logo: "/logos/tailwind.svg",
        skill: 7
    },
    {
        language: "jQuery",
        logo: "/logos/jquery.png",
        skill: 2
    },
]

export const backend: Lang[] = [
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
        language: "Next.js",
        logo: "/logos/next.png",
        skill: 7
    },
    {
        language: "PostgreSQL",
        logo: "/logos/psql.png",
        skill: 6
    },
    {
        language: "Prisma",
        logo: "/logos/prisma.svg",
        skill: 5
    },
    {
        language: "ASP.NET",
        logo: '/logos/aspnet.jpg',
        skill: 4
    },
]
export const misc: Lang[] = [
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
        skill: 6
    },
    {
        language: "GraphQL",
        logo: "/logos/graphql.png",
        skill: 5
    }
]