export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Raju Randhav',
    position: 'Co-founder and CPO at iAgent-Protocol',
    img: 'assets/raju1.png',
    review:
      'I have known Sahil for the past 1.5 years, working side by side at the same table. He is incredibly hardworking, dedicated, and detail-oriented. His strong grasp of AI/ML concepts, combined with hands-on coding expertise, makes him a reliable and skilled professional. He never hesitates to go the extra mile to get things done.',
  },
  {
    id: 2,
    name: 'Naga Kiran Vishwanadhapalli',
    position: 'Founder and CEO of CaspAI',
    img: 'assets/naga1.png',
    review:
      'Working with Sahil has been fantastic. Despite being a fresher, he approaches every task with remarkable attention to detail. He handled a heavy workload efficiently, often staying up late to ensure everything was done perfectly. My team also interacted with him and was impressed by his deep understanding of AI/ML concepts and his strong hands-on coding skills.',
  },
  // {
  //   id: 3,
  //   name: 'John Dohsas',
  //   position: 'Project Manager at UrbanTech ',
  //   img: 'assets/review3.png',
  //   review:
  //     'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  // },
  // {
  //   id: 4,
  //   name: 'Ether Smith',
  //   position: 'CEO of BrightStar Enterprises',
  //   img: 'assets/review4.png',
  //   review:
  //     'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  // },
];

export const myProjects = [
  {
    title: 'CSGO - CS2 Behavioural Cloning',
    desc: 'Developed model architectures for gaming agents, capturing live gameplay screenshots along with metadata, including player view angles, mouse movements, keyboard inputs, and player health.',
  subdesc: 'Enhanced preprocessing steps to separate relevant frames from data for the training process. Designed various model architectures, including CNN and Conv3D layers, and modified implementations for Reinforcement Learning, specifically focusing on Proximal Policy Optimization (PPO).',
  href: 'https://www.linkedin.com/in/sahilll',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/python2.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/python3.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Traffic Controller System using AI',
  desc: 'An AI-powered smart traffic management system that dynamically adjusts traffic lights based on real-time vehicle density, optimizing traffic flow and reducing congestion.',
  subdesc: 'This project utilized AI-driven image processing techniques to analyze traffic camera feeds, detect high-density vehicle areas, and automatically adjust signal timings for efficient traffic management. Selected among the top 3 projects in the college, demonstrating innovation in urban mobility solutions.',
    href: 'https://github.com/Sahil2510/Traffic-Managment-System-Using-AI',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/python.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/python2.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/python3.svg',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  // {
  //   title: 'CarePulse - Health Management System',
  //   desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
  //   subdesc:
  //     'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
  //   href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
  //   texture: '/textures/project/project3.mp4',
  //   logo: '/assets/project-logo3.png',
  //   logoStyle: {
  //     backgroundColor: '#60f5a1',
  //     background:
  //       'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
  //     border: '0.2px solid rgba(208, 213, 221, 1)',
  //     boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
  //   },
  //   spotlight: '/assets/spotlight3.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Horizon - Online Banking Platform',
  //   desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
  //   subdesc:
  //     'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
  //   href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
  //   texture: '/textures/project/project4.mp4',
  //   logo: '/assets/project-logo4.png',
  //   logoStyle: {
  //     backgroundColor: '#0E1F38',
  //     border: '0.2px solid #0E2D58',
  //     boxShadow: '0px 0px 60px 0px #2F67B64D',
  //   },
  //   spotlight: '/assets/spotlight4.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'iAgent-Protocol',
    pos: 'Artificial Intelligence Developer',
    duration: 'JULY 2023 - Present',
    title: "Developed AI-powered gaming agents for CSGO & CS2, improving performance by 30% through optimized datasets and algorithms. Expertise in computer vision (OpenCV) and ML frameworks (PyTorch, TensorFlow). Strong collaboration with cross-functional teams to enhance AI-driven gameplay experiences.",
    icon: '/assets/iagent.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'iAgent-Protocol',
    pos: 'Artificial Intelligence Developer - Intern',
    duration: 'MAY 2023 - JULY 2023',
    title: "Contributed to gaming agent development by analyzing codebases, optimizing project workflows, and enhancing data acquisition with a game metadata collection script. Collaborated with the core team on strategic planning, introduced innovative solutions, and created MIRO board diagrams to map future AI advancements.",
    icon: '/assets/iagent.png',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'MRND Labs Pvt. Ltd.',
    pos: 'Python Developer - Intern',
    duration: 'JAN 2023 - APRIL 2023',
    title: "Passionate Developer with hands-on experience in building interactive games like T-T-T and S-P-S. Developed a 'Random Password Generator' to enhance software security as a project. Wrote clean, scalable, and efficient code, with a strong knowledge in error solving.",
    icon: '/assets/mrnd.png',
    animation: 'salute',
  },
];
