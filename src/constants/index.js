import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "workProjects",
        title: "Projects",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "HTML, CSS, AEM, TAILWIND",
        icon: web,
    },
    {
        title: "JAVASCRIPT, JQUERY , REACT",
        icon: mobile,
    },
    {
        title: "JAVA, NODE.js",
        icon: backend,
    },
    {
        title: "PYTHON",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    // {
    //     name: "TypeScript",
    //     icon: typescript,
    // },
    {
        name: "React JS",
        icon: reactjs,
    },
    // {
    //     name: "Redux Toolkit",
    //     icon: redux,
    // },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    // {
    //     name: "figma",
    //     icon: figma,
    // },
    // {
    //     name: "python",
    //     icon: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
    // },
];

const experiences = [
    {
        title: "Frontend/AEM Developer",
        company_name: "Teknopoint/DEPT",
        icon: "data:image/png;base64,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",
        iconBg: "#383E56",
        date: "December 2021 - Present",
        points: [
            "Developing and maintaining web applications using HTML, CSS, JAVASCRIPT, AEM and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Game Developement using Python(PyGame)",
        company_name: "",
        icon: "https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png",
        iconBg: "#E6DEDD",
        date: "April 2019 - Feb 2020",
        points: [
            `Designed and implemented engaging gameplay mechanics, ensuring a seamless and enjoyable user experience.`,
            `Utilized Pygame's functionality to handle game loops, input handling, and collision detection, contributing to the overall smoothness and responsiveness of the games.`,
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "E-Commerce Store",
        description:
            "Designed and developed a comprehensive Online E-Commerce Website, leveraging the MERN(MongoDB, Express.js, React.js, Node.js) Stack for the frontend and backend. The Project includes advanced features such as a secure payment gateway using Razorpay and an efficient admin panel powered by Spring Boot",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "node",
                color: "orange-text-gradient",
            },
            {
                name: "express",
                color: "pink-text-gradient",
            },
            {
                name: "springboot",
                color: "orange-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Book Store",
        description:
            "Developed a dynamic Online BookStore Website using the MERN(MongoDB, Express.js, React.js, Node.js) Stack. This project showcases my proficieny in full-stack development and incorporates a range of technologies.",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
            {
                name: "node",
                color: "blue-text-gradient",
            },
            {
                name: "express",
                color: "orange-text-gradient",
            }
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "AND MANY MORE...",
        description:
            "",
        tags: [
            // {
            //     name: "nextjs",
            //     color: "blue-text-gradient",
            // },
            // {
            //     name: "supabase",
            //     color: "green-text-gradient",
            // },
            // {
            //     name: "css",
            //     color: "pink-text-gradient",
            // },
        ],
        image: "",
        source_code_link: "https://github.com/",
    },
];

const Workprojects = [
    {
        name: "Beautiful Homes - Asian Paints (May 2024 - Present)",
        description:
            "Currently developing and implementing a responsive web interface for the 'Beautiful Homes' project under the'Asian Paints' client. Utilizing Adobe Experience Manager (AEM) for content management, I am designing and coding the user interface with HTML and CSS to ensure cross-device and cross-browser compatibility. Implementing interactive features and dynamic content with JavaScript and jQuery to enhance user engagement and functionality. Collaborating with designers and back-end developers to",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
            {
                name: "Jquery",
                color: "blue-text-gradient",
            },
            {
                name: "AEM",
                color: "orange-text-gradient",
            },
            {
                name: "SEO",
                color: "pink-text-gradient",
            }
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Tata AIA Customer Portal (Jan 2023 - April 2024)",
        description:
            "Lead the design and implementation of a sophisticated login portal, utilizing a comprehensive toolkit including HTML, CSS, JavaScript, jQuery, Adobe Experience Manager (AEM) and React.Orchestrated the development process from concept to execution, focusing on user-centric design principles  and seamless functionality. Employed innovative techniques to enhance security measures while optimizing  user experience. Through collaborative problem-solving and meticulous attention to detail, delivered a polished",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "green-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Bajaj Travel (Dec 2021 - Dec 2022)",
        description:
            "Prociently contributed to the completion of a comprehensive flight booking project, employing a diverse tech  stack encompassing HTML, CSS, JavaScript, React, Adobe Experience Manager (AEM). Demonstrated  expertise in front-end development and integration, resulting in a seamless user experience and robust functionality. Played a pivotal role in delivering a high-performance platform that sets new standards for  efciency and user satisfaction. Successfully showcased innovative solutions and attention to detail, culminating in the realization of a cutting-edge travel booking experience.",
        tags: [
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "blue-text-gradient",
            },
            {
                name: "Javascript",
                color: "pink-text-gradient",
            },
            {
                name: "React",
                color: "blue-text-gradient",
            },
        ],
        image: "",
        source_code_link: "https://github.com/",
    },
];


const profileImage = {
    img: tripguide
}


export { services, technologies, experiences, testimonials, projects, Workprojects, profileImage };