export const PROJECTS_DETAIL = [
  {
    id: 1,
    image: "/projects/mechflow-hero.png",
    applicationType: 'Desktop Application',
    title: 'mechflow',
    description: `Mechflow is a comprehensive desktop application designed specifically for mechanics and garage owners. It provides a powerful solution for managing quotes, invoices, delivery slips, purchases, and financial tracking, all in one place. Mechflow helps streamline business operations by allowing users to generate professional documents, track financial transactions, and gain insights into their business performance.`,
    role: 'Full-stack Developer',
    keyFeatures: [{
      id: 1,
      title: 'Customizable Templates',
      text: 'Choose from multiple templates to create personalized quotes (devis), invoices (facture), and delivery (bon de livraison)',
    },
    {
      id: 2,
      title: 'Inventory Management',
      text: 'Track and manage inventory, including parts, tools, and supplies, with real-time updates and alerts',
    },
    {
      id: 3,
      title: 'Financial Reporting',
      text: 'Generate financial reports, including profit and loss statements, balance sheets, and cash flow statements',
    },
    {
      id: 4,
      title: 'Client Management',
      text: 'Manage client information, including contact details, service history, and payment status',
    }
    ],
    responsive: [
      {
        id: 1,
        image: "/projects/mechflow-mobile.png",
      },
      {
        id: 2,
        image: "/projects/mechflow-mobile.png",
      },
      {
        id: 3,
        image: "/projects/mechflow-mobile.png",
      }
    ],
    stack: [
      {
        id: 1,
        title: 'Frontend',
        techs: ['Typescript', 'React', 'Electron', 'better-sqlite3', 'TailwindCss', 'React Router', 'ChartJs', 'zustand'],
      },
      {
        id: 2,
        title: 'Backend',
        techs: ['Typescript', 'Node', 'Express', 'MongoDB', 'JWT', 'bcrypt'],
      },
      {
        id: 3,
        title: 'Deployment',
        techs: ['fly'],
      }
    ]
  },
  {
    id: 2,
    image: "/projects/movieAlert-hero.png",
    applicationType: 'Web Application',
    title: 'moviealert',
    description: `MovieAlert is a web application designed to help users check for content warnings (such as violence, 
    sexual content, etc.) in movies before watching them. The application relies on user-generated content, 
    where users create the API by submitting movie details. 
    This way, users can help each other by sharing information about movies.`,
    role: 'Full-stack Developer',
    keyFeatures: [
      {
        id: 1,
        title: "User-Generated Content",
        text: "Users can submit movie details including title, release year, genre, content warnings, description, and pictures.",
      },
      {
        id: 2,
        title: "Secure Authentication",
        text: "Supports email/password and Gmail login, with email verification and password recovery.",
      },
      {
        id: 3,
        title: "Token Security",
        text: "Access tokens expire after 15 minutes, refresh tokens after 30 days, and users are notified of logins from new devices or browsers.",
      },
      {
        id: 4,
        title: "User Dashboard",
        text: "Allows users to manage their submitted movies and view session history.",
      },
      {
        id: 5,
        title: "Badge System",
        text: "Users earn badges by submitting movies, which unlocks access to more movies.",
      },
      {
        id: 6,
        title: "Admin Panel",
        text: "Administrators can view, modify, or delete movies and manage user accounts.",
      },
      {
        id: 7,
        title: "Caching",
        text: "Redis is used to cache movie titles and IDs to optimize database queries.",
      },
      {
        id: 8,
        title: "Image Storage",
        text: "AWS S3 is used to store movie images securely.",
      },
      {
        id: 9,
        title: "Email Services",
        text: "Resend is used to send verification emails, password recovery emails, and security notifications.",
      }
    ],
    responsive: [
      {
        id: 1,
        image: "/projects/movieAlert-mobile1.png",
      },
      {
        id: 2,
        image: "/projects/movieAlert-mobile2.png",
      },
      {
        id: 3,
        image: "/projects/movieAlert-mobile3.png",
      }
    ],
    stack: [
      {
        id: 1,
        title: 'Frontend',
        techs: ['Javascript', 'React', 'TailwindCss', 'Axios', 'Tanstack', 'React Router'],
      },
      {
        id: 2,
        title: 'Backend',
        techs: ['Typescript', 'Node', 'Express', 'MongoDB', 'Zod', 'JWT'],
      },
      {
        id: 3,
        title: 'Services',
        techs: ['AWS S3', 'Redis', 'Resend', 'Google OAuth'],
      },
      {
        id: 4,
        title: 'Deployment',
        techs: ['Render'],
      }
    ]
  },
]

export const PROJECTS = [
  {
    id: 1,
    url: "/projects/mechflow",
    image: "/projects/mechflow-card.png",
    applicationType: 'Desktop Application',
    techs: ['Javascript', 'React', 'Node', 'electron'],
    brand: 'Mechflow',
    description: `Mechflow is a desktop application for mechanics and garage owners
    to manage quotes, invoices, purchases, and finances, streamlining
    operations and providing business insights.`,
  },
  {
    id: 2,
    url: "/projects/moviealert",
    image: "/projects/movie-alert-card-2.png",
    applicationType: 'Web application',
    techs: ['Javascript', 'React', 'Node'],
    brand: 'MovieAlert',
    description: `MovieAlert is a full-stack web app for searching movies, 
    viewing content warnings, and adding new entries, with a user-friendly interface and dynamic backend.`
  },
  {
    id: 3,
    url: "/projects/mechflow",
    image: "/projects/yallajob-card.png",
    applicationType: 'Mobile application',
    techs: ['Typescript', 'Node'],
    brand: 'YallaJob',
    description: `YallaJob is a mobile-first platform that connects freelancers and clients, enabling freelancers 
    to showcase skills and post job listings, 
    while clients explore opportunities, communicate directly, and manage job proposals effortlessly.`
  },
  {
    id: 4,
    url: "/projects/mechflow",
    image: "/projects/quiz-generator-card-2.png",
    applicationType: 'Web application',
    techs: ['Javascript', 'React', 'Node'],
    brand: 'Quiz Generator',
    description: `Quiz Generator is an interactive web application for creating, managing, 
    and sharing custom quizzes with an intuitive interface and diverse question types.`
  },
  {
    id: 5,
    url: "/projects/mechflow",
    image: "/projects/allurena-card-3.png",
    applicationType: 'Web application',
    techs: ['Javascript', 'React', 'Node'],
    brand: 'Allurena',
    description: `A one-page skincare web app highlighting products, beauty tips, and routines with a modern, user-friendly design.`
  },
  {
    id: 6,
    url: "/projects/mechflow",
    image: "/projects/mauya-card.png",
    applicationType: 'Web application',
    techs: ['HTML', 'CSS', 'JS'],
    brand: 'Mauya Portfolio Clone',
    description: `Mauya Portfolio Clone is a recreated designer portfolio showcasing responsive design, vibrant visuals, and seamless navigation to enhance web development skills.`
  }
]