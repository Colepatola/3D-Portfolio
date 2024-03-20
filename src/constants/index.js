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
    eecol,
    swc,
    ors,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    p5js,
    threedpf,
    hackathon,
    asu,
    machine,
    michigan,    
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
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "React",
      icon: mobile,
    },
    {
      title: "ThreeJS",
      icon: backend,
    },
    {
      title: "TailwindCSS",
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
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
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
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Product Specialist",
      company_name: "Supplement World Calgary",
      icon: swc,
      iconBg: "#383E56",
      date: "Sept 2022 - June 2023",
      points: [
        "Retail Specialist with outstanding customer relationship management, effective communication, and collaborative capabilities.",
        "Managed financial transactions with precision, ensured product availability through consistent restocking, and designed visually appealing product displays.",
        "Spearheaded initiatives to enhance operational efficiency and foster a structured store environment.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "EECOL Electrc (internship)",
      icon: eecol,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Helped with building the front end user interface of the EECOL.com website, and helped with the FAQ’s page.",
        "Learned and utilized skills in Microsoft Excel, SQL, Sharepoint, and other programming software.",
        "Automated the Supplier Volume Rebate excel sheet using complex excel formulas and queries.",
        "Researched green initiatives to help improve sustainability programs.",
      ],
    },
    {
      title: "Quantative Analyst & Machine Learning Engineer",
      company_name: "Ors AI (Internship)",
      icon: ors,
      iconBg: "#383E56",
      date: "May 2024 - Aug 2024",
      points: [
        "Utilized python to help develop and implement advanced machine learning models and the optimization of algorithms.",
        "Collaborated with the financial analysis team to integrate quantitative models into various business concepts.",
        "Conducted thorough research and data analysis using statistical techniques and python libraries.",
      ],
    },
    /*{
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },*/
  ];
  
  const testimonials = [
    {
      testimonial:
        "I am currently enrolled at ASU under the Ira A Fulton School of Engineering.",
      name: "Arizona State University",
      designation: "4.29",
      company: "GPA",
      image: asu,
    },
    {
      testimonial:
        "I have earned my certifications in Python for Everyone and Python Data Structures from the University of Michigan.",
      name: "University of Michigan",
      designation: "99th",
      company: "percentile",
      image: michigan,
    },
     {
      testimonial:
        "I am an aspiring graduate student who is very interested in artificial intelligence and machine learning.",
      name: "Masters Degree",
      designation: "unknown",
      company: "destination",
      image: machine,
    },
  ];
  
  const projects = [
    {
      name: "P5js Interactive Games",
      description:
        "Interactive video games that users can play. These games include time limits, scores, leaderboards, etc. The languages used to code these games were JavaScript, CSS.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "p5js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: p5js,
      source_code_link: "https://github.com/AdrianMedina59/FSE100-MasterProject",
    },
    {
      name: "This Website!",
      description:
        "This Website is not only a representation of my portfolio, but also a testament to my skills in web development. In this website I utilized React fiber, React drei, Tailwind CSS, and ThreeJS.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "green-text-gradient",
        },
        {
          name: "webdevelopment",
          color: "pink-text-gradient",
        },
      ],
      image: threedpf,
      source_code_link: "https://github.com/adrianhajdin/project_3D_developer_portfolio/tree/main",
    },
      {
      name: "Hackathon 2023",
      description:
        "My team and I will be using our fullstack skills to find a solution common to many non profits and fix it using artifiical intelligence.",
      tags: [
        {
          name: "fullstack",
          color: "blue-text-gradient",
        },
        {
          name: "ai",
          color: "green-text-gradient",
        },
        {
          name: "nonprofit",
          color: "pink-text-gradient",
        },
      ],
      image: hackathon,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };