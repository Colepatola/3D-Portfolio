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
    definedbio,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    p5js,
    threedpf,
    hackathon,
    Sign_Language,
    asu,
    machine,
    michigan,
    brain,    
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
      title: "Data Analyst Intern",
      company_name: "EECOL Electric",
      icon: eecol,
      iconBg: "#E6DEDD",
      date: "May 2023 - Aug 2023",
      points: [
        "Helped with building the front end user interface of the EECOL.com website, and helped with the FAQ's page.",
        "Learned and utilized skills in Microsoft Excel, SQL, Sharepoint, and other programming software.",
        "Automated the Supplier Volume Rebate excel sheet using complex excel formulas and queries.",
      ],
    },
    {
      title: "Quantitative Analyst Intern",
      company_name: "Deda AI",
      icon: ors,
      iconBg: "#383E56",
      date: "May 2024 - Aug 2025",
      points: [
        "Utilized Python to help develop and implement advanced machine learning models and the optimization of algorithms.",
        "Worked with TensorFlow to train Large Language Models in data visualization.",
        "Collaborated with the financial analysis team to integrate quantitative models into various business concepts.",
        "Developed Agentic AI to run analysis and produce reports on various supply chain datasets.",
      ],
    },
    {
      title: "Artificial Intelligence Research",
      company_name: "Defined Bioscience",
      icon: definedbio,
      iconBg: "#E6DEDD",
      date: "Aug 2025 - Current",
      points: [
        "Fine-tuning and developing deep learning models (CNN, U-Net) to analyze brightfield and fluorescence microscopy images for identifying differentiation stage and quality of stem cell-derived cultures.",
        "Engineering a semi-automated quality control system supporting scalable stem cell manufacturing and product consistency.",
        "Building annotated biomedical image datasets, applied data augmentation techniques, and implemented model evaluation using accuracy, precision, recall, and confusion matrices.",
        "Designing a Python-based interface allowing users to upload, process, and visualize analysis results.",
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
      designation: "4.0/4.0",
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
        "I will be attending Georgia Tech for a Masters in Computer Science with a specialization in Artificial Intelligence.",
      name: "Georgia Tech",
      designation: "M.S.",
      company: "Computer Science - AI",
      image: machine,
    },
  ];
  
  const projects = [
    {
      name: "AivaMD - AI Medical Documentation",
      description:
        "Designed and developed an AI-powered platform to automate medical documentation and billing workflows for healthcare providers. Built a scalable backend using Python and FastAPI, and used LLMs for information extraction, summarization, and structured output generation.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "fastapi",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: brain,
      source_code_link: "https://github.com/Colepatola",
    },
    {
      name: "MarketMentor AI",
      description:
        "Founded and developed a fully operational AI-driven research platform, utilizing LLaMA 3 to provide insights and analysis on stocks and cryptocurrencies. Deployed a responsive, high-performance frontend using Next.js and Vercel.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "nextjs",
          color: "pink-text-gradient",
        },
      ],
      image: threedpf,
      source_code_link: "https://github.com/Colepatola/MarketMentorAI.git",
    },
    {
      name: "AI Sign Language Detection",
      description:
        "Engineered an AI model to detect and interpret sign language gestures using Python and TensorFlow. Leveraged TensorFlow's object detection API and implemented transfer learning using SSD MobileNet, a pre-trained object detection model.",
      tags: [
        {
          name: "tensorflow",
          color: "blue-text-gradient",
        },
        {
          name: "python",
          color: "green-text-gradient",
        },
        {
          name: "ai",
          color: "pink-text-gradient",
        },
      ],
      image: Sign_Language,
      source_code_link: "https://github.com/Colepatola/AI-SL-Detection.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };