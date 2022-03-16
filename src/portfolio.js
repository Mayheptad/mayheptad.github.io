/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Osho Abiodun Portfolio",
  description:
    "I am a software Developer, A passionate individual who always thrives to work on end to end products which develop sustainable, scalable social & technical systems to create impact.",
  og: {
    title: "Osho Abiodun Portfolio",
    type: "website",
    url: "https://mayheptad.github.io/",
  },
};

//Home Page
const greeting = {
  title: " Osho Abiodun",
  logo_name: "OshoAbiodun",
  nickname: "Mayheptad",
  subTitle:
    "A software Developer, A passionate individual who always thrives to work on end to end products which develop sustainable, scalable social & technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/19LIOXewQr5O9Spq0aoVz_4sKqLFr430R/view?usp=sharing",
  portfolio_repository: "https://github.com/Mayheptad/smart-vision-ai_frontend",
  githubProfile: "https://github.com/mayheptad",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/mayheptad",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/osho-abiodun-adewunmi/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCTRBlDbWeB86D3IoOPCEz_A",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:oshoabiodun94@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/Mayheptad",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/mayheptad/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "#",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive fast website front end using Html, css, javscript, Reactjs, Redux",
        "⚡ Developing fast High performance mobile applications using Dart & Flutter",
        "⚡ Creating Web application backend in Node & Express",
        "⚡ Styling front end with Boostrap, tachyons, tailwind",
        "⚡ Persisting Data in Databases using MongoDb, and Postgress",
        "⚡ Building any kind of websites / Blogs using wordpress",
        "⚡ Decent understanding & usage of the command-line",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Terminal",
          fontAwesomeClassname: "simple-icons:iterm2",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Express",
          fontAwesomeClassname: "simple-icons:express",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Dart",
          fontAwesomeClassname: "simple-icons:dart",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "wordpress",
          fontAwesomeClassname: "simple-icons:wordpress",
          style: {
            color: "#339933",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple Cloud Hosting platforms",
        "⚡ Experience Installing and maintaining scripts on Apache, Ngnix, & litespeed server",
        "⚡ Hosting and maintaining websites on linux server eviroments along with integration of databases",
        "⚡ Experience working with cloud version control system (GitHub)",
      ],
      softwareSkills: [
        {
          skillName: "Apache",
          fontAwesomeClassname: "simple-icons:apache",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "NGINX",
          fontAwesomeClassname: "simple-icons:nginx",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Litespeed",
          fontAwesomeClassname: "simple-icons:server",
          style: {
            color: "#336791",
          },
        },
      ],
    },

    {
      title: "Web Automation - Data Scraping/Extraction",
      fileName: "WebAutomation/DataExtraction",
      skills: [
        "⚡ Builiding web applications software as robots to perform pre-defined actions, tasks, & processes on the web.",
        "⚡ Experience in building data extractors programs to Extract Data instantly from any website in minutes",
        "⚡ Design applications that can Basically perform anything human can do on a webpage, and even do it faster",
        "⚡ Ability to automate common web actions—like filling out forms, clicking on buttons, downloading files, loging-in to accounts, etc.",
      ],
      softwareSkills: [
        {
          skillName: "Puppeteer",
          fontAwesomeClassname: "simple-icons:puppeteer",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "javascript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "headless-chromium",
          fontAwesomeClassname: "simple-icons:googlechrome",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "nodeJS",
          fontAwesomeClassname: "simple-icons:nodejs",
          style: {
            color: "#000000",
          },
        },
      ],
    },

    {
      title: "Algorithmic Trading Automation (Mql4 programming)",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Experience in building robot for online algorithmic trading based on a set of market signals that helps determine whether to buy or sell a currency pair at a given point in time.",
        "⚡ Building of bot to trade any currency pair on the meta trader 4 platforn using complex mathematical algorithms to monitor the markets & follow price action.",
        "⚡ Not just forex: Designing Algorithmic trading software to buy or sell indices, metals, crypto, volaility, etc",
        "⚡ Experience in using Complex mathematical model to design black-box trading software capable of executing orders using automated pre-programmed trading instructions",
        "⚡ Taking human emotions out of trading, I build algo-trading computer programs that follows any strategy of your choice to generate profits at a speed & frequency that is impossible for a human trader.",
      ],
      softwareSkills: [
        {
          skillName: "Algorithmic Trading",
          fontAwesomeClassname: "simple-icons:thealgorithms",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "Crypto bot",
          fontAwesomeClassname: "simple-icons:bitcoin",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/mayheptad",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/mayheptad",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/mayheptad",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@mayheptad",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/mayheptad",
    },
  ],
};

const degrees = {
  degrees: [
    // {
    //   title: "Indian Institute of Information Technology Kurnool",
    //   subtitle: "B.Tech. in Computer Engineering",
    //   logo_path: "iiitk_logo.png",
    //   alt_name: "IIITDM Kurnool",
    //   duration: "2016 - Present",
    //   descriptions: [
    //     "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
    //     "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
    //     "⚡ I was selected for Merit cum Means Scholarship which is given to top 10% of students in college. I have received award from respected director for consistently best performance in academics.",
    //   ],
    //   website_link: "http://iiitk.ac.in",
    // },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Full-Stack Web Developer",
      subtitle: "Dr Angela yu (Developer and Lead Instructor)",
      logo_path: "stanford_logo.png",
      certificate_link:
        "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      alt_name: "Udemy Online course",
      color_code: "#8C151599",
    },
    {
      title: "Fully-fledged Flutter developer",
      subtitle: "Dr Angela yu & Google Flutter team",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link:
        "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
      alt_name: "Udemy Online course",
      color_code: "#00000099",
    },
    {
      title: "Full-Stack Web Developer",
      subtitle: "Andrei Neagoie (Senior software developer)",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/",
      alt_name: "Udemy Online course",
      color_code: "#0C9D5899",
    },
    {
      title: "Algorithmic Trading Robot Development",
      subtitle: "Enrico Lambino (Trader/Programmer)",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://www.udemy.com/course/algorithmic-trading-bootcamp-metatrader4/",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Forex Trading",
      subtitle: "Kirill Eremenko (Trader, Data Scientist & Ai Engineer)",
      logo_path: "microsoft_logo.png",
      certificate_link: "https://www.udemy.com/course/forex-trading/",
      alt_name: "Microsoft",
      color_code: "#D83B0199",
    },
    // {
    //   title: "Advanced Data Science",
    //   subtitle: "- Romeo Kienzler",
    //   logo_path: "ibm_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/BH2T9BRU87BH",
    //   alt_name: "IBM",
    //   color_code: "#1F70C199",
    // },
    // {
    //   title: "Advanced ML on GCP",
    //   subtitle: "- GCP Training",
    //   logo_path: "google_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/5JZZM7TNQ2AV",
    //   alt_name: "Google",
    //   color_code: "#0C9D5899",
    // },
    // {
    //   title: "DL on Tensorflow",
    //   subtitle: "- Laurence Moroney",
    //   logo_path: "deeplearning_ai_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/verify/6T4DCUGNK8J8",
    //   alt_name: "deeplearning.ai",
    //   color_code: "#00000099",
    // },
    // {
    //   title: "Fullstack Development",
    //   subtitle: "- Jogesh Muppala",
    //   logo_path: "coursera_logo.png",
    //   certificate_link:
    //     "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //   alt_name: "Coursera",
    //   color_code: "#2A73CC",
    // },
    // {
    //   title: "Kuberenetes on GCP",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
    // {
    //   title: "Cryptography",
    //   subtitle: "- Saurabh Mukhopadhyay",
    //   logo_path: "nptel_logo.png",
    //   certificate_link:
    //     "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //   alt_name: "NPTEL",
    //   color_code: "#FFBB0099",
    // },
    // {
    //   title: "Cloud Architecture",
    //   subtitle: "- Qwiklabs",
    //   logo_path: "gcp_logo.png",
    //   certificate_link:
    //     "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //   alt_name: "GCP",
    //   color_code: "#4285F499",
    // },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked on few projects for startups as frontend/backend web Developer, Designer and Software Architect. And have also worked with some friends to build Web scrapping/Automation bot, as well as building Many algoritmic trading software for the popular Metatrader 4 platform. I love organising events & lately, am getting involved with major opensource, communities as a representative.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Chief Technology Officer (cto)",
          company: "Face Recognition detection software",
          company_url: "https://github.com/Mayheptad/smart-vision-ai_frontend",
          logo_path: "legato_logo.png",
          duration: "June 2021 - PRESENT",
          location: "Abuja, Nigeria",
          description:
            "I am working on an AI project, Image recognition and face detection program. The projects involve scanning of visual data's like image & videos to detect human faces, Currently it allow you to input any picture link and it detect the face of human in it. Our goal is to make the AI system better so it can detect Multiple faces in any images",
          color: "#0879bf",
        },
        {
          title: "Project leader / Instructor",
          company: "Web Automation / Data Extraction",
          company_url:
            "https://github.com/Mayheptad/Bet9ja-49ja-color-result-scrapper",
          logo_path: "muffito_logo.png",
          duration: "febuary 2021 - Present",
          location: "Abuja, Nigeria",
          description:
            "I have created a complete web scraping / automation program from scratch for gathering the result of a popular online casino game (49ja color) in Nigeria betting website (Bet9ja). I worked on the implementation of information gathering algorithms. and also saving the data in a database for future study and analysis, I was a part of a team of friend that thinks we can detect a weakness in this online gaming System, since it is a software based game",
          color: "#9b1578",
        },
        {
          title: "Front End Engineer",
          company: "Note keeping / Data persistence.",
          company_url: "https://github.com/Mayheptad/Kepper",
          logo_path: "freecopy_logo.png",
          duration: "November 2021 - present",
          location: "Abuja, Nigeria",
          description:
            "I created a minimal clone of Google Keep web App. This project is a note-taking service built as part of my curiosity in getting the Design thinking of UI on perspective of People. and to learn the efﬁcient ways of Data communications etc.",
          color: "#fc1f20",
        },
      ],
    },
    // {
    //   title: "Internships",
    //   experiences: [
    //     {
    //       title: "Data Science Research Intern",
    //       company: "Delhivery Pvt. Ltd.",
    //       company_url: "https://www.delhivery.com/",
    //       logo_path: "delhivery_logo.png",
    //       duration: "May 2019 - Sept 2019",
    //       location: "Gurgaon, Haryana",
    //       description:
    //         "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
    //       color: "#ee3c26",
    //     },
    //     {
    //       title: "Data Science Intern",
    //       company: "Intel Indexer LLC",
    //       company_url:
    //         "https://opencorporates.com/companies/us_dc/EXTUID_4170286",
    //       logo_path: "intel_logo.jpg",
    //       duration: "Nov 2018 - Dec 2018",
    //       location: "Work From Home",
    //       description:
    //         "This is financial Solution Company. I have made Supervised Learning model for the company which can perform time series analysis on Stock price data for 32 companies. I have built LSTM Neural Networks Model and trained the data of 32 companies for last 2 years. This model is also used for forecasting.",
    //       color: "#0071C5",
    //     },
    //   ],
    // },
    // {
    //   title: "Volunteerships",
    //   experiences: [
    //     {
    //       title: "Google Explore ML Facilitator",
    //       company: "Google",
    //       company_url: "https://about.google/",
    //       logo_path: "google_logo.png",
    //       duration: "June 2019 - April 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
    //       color: "#4285F4",
    //     },
    //     {
    //       title: "Microsoft Student Partner",
    //       company: "Microsoft",
    //       company_url: "https://www.microsoft.com/",
    //       logo_path: "microsoft_logo.png",
    //       duration: "Aug 2019 - May 2020",
    //       location: "Hyderabad, Telangana",
    //       description:
    //         "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
    //       color: "#D83B01",
    //     },
    //     {
    //       title: "Mozilla Campus Captain",
    //       company: "Mozilla",
    //       company_url: "https://www.mozilla.org/",
    //       logo_path: "mozilla_logo.png",
    //       duration: "Oct 2019 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
    //       color: "#000000",
    //     },
    //     {
    //       title: "Developer Students Club Member",
    //       company: "DSC IIITDM Kurnool",
    //       company_url:
    //         "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
    //       logo_path: "dsc_logo.png",
    //       duration: "Jan 2018 - May 2020",
    //       location: "Kurnool, Andhra Pradesh",
    //       description:
    //         "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
    //       color: "#0C9D58",
    //     },
    //     {
    //       title: "Developer Program Member",
    //       company: "Github",
    //       company_url: "https://github.com/",
    //       logo_path: "github_logo.png",
    //       duration: "July 2019 - PRESENT",
    //       location: "Work From Home",
    //       description:
    //         "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
    //       color: "#181717",
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest and modern technology tools. My best experience is to create Web application Backend/Api projects and deploy them on the web using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  // title: "Publications",
  // description:
  //   "I have worked on and published a few research papers and publications of my own.",
  // avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on few social media platform. You can message me, I will reply within 24 hours.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://onenewspace.com/blog-category/16",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "No 51, Iya Abubakar crescent Jabi Fct Abuja",
    avatar_image_path: "address_image.svg",
    location_map_link:
      "https://www.google.com/maps/place/51+Iya+Abubakar+Cres,+Jabi+900108,+Abuja,+Nigeria/@9.0743483,7.41299,17z/data=!3m1!4b1!4m5!3m4!1s0x104e751f6b299357:0x72787710631cdabe!8m2!3d9.0743483!4d7.4151787",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+234 9033825225",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
