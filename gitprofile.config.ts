// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'smartjoker0117', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'star', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['smartjoker0117/gitprofile', 'smartjoker0117/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: `Chewy's E-commerce Platform`,
          description: `Contributed to the Chewy's E-commerce Platform. Developed and maintained scalable and responsible web & mobile applications.`,
          imageUrl:
            'https://i.tracxn.com/logo/company/3ad9807641de89b384135b4c6604fca',
          link: 'https://www.chewy.com/',
        },
        {
          title: `HealthMine's HRA`,
          description: `Collaborated with HealthMine as a Volunteer Full Stack Engineer to develop the HealthMine's COVID-19 related Health Risk Assessment.`,
          imageUrl: 'https://info.healthmine.com/hubfs/HM-Icon_Circle.png',
          link: 'https://www.healthmine.com/digital-hra',
        },
        {
          title: `COVID-19 Tracker`,
          description: `This is a COVID-19 Tracker that shows COVID-19 related real-time data integrating the Coronavirus-Tracker-API using React.`,
          imageUrl: 'https://cdn-icons-png.flaticon.com/512/4874/4874391.png',
          link: 'https://github.com/smartjoker0117/Covid_19_tracker',
        },
        {
          title: `Popcorn and Chilly`,
          description: `This is my personal React project that consumes data from the TMDB (The Movie Data Base) API using Redux and React hooks.`,
          imageUrl:
            'https://img.freepik.com/premium-vector/cute-happy-popcorn-bucket-isolated-white-vector-cartoon-character-illustration-card-design-simple-flat-style_92289-103.jpg',
          link: 'https://github.com/smartjoker0117/popcorn-and-chill',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Jarrod Henry',
    description: `Jarrod Henry | Senior Software Engineer | Full Stack | Front End | React | Node | Java | Python | C# | Remote | Open to Work`,
    imageURL: '',
  },
  social: {
    linkedin: 'jarrod-henry-link',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'joker'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '',
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'jarrod.henry.pro@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1GVsduu1nSKirqhrKAQRoeypwyS6FCzTG/view?usp=drive_link',
  },
  skills: [
    'JavaScript',
    'TypeScript',
    'React.js',
    'React Native',
    'Next.js',
    'Node.js',
    'MongoDB',
    'Angular',
    'Vue.js',
    'Java',
    'Python',
    'C#',
    'MySQL',
    'PostgreSQL',
    'AWS',
    'Azure',
    'GCP',
    'Git',
    'Docker',
    'Kubernetes',
    'Tailwind',
    'MUI',
  ],
  experiences: [
    {
      company: 'Chewy',
      position: 'Senior Software Engineer',
      from: 'Jan 2021',
      to: 'Sep 2014',
      companyLink: 'https://www.chewy.com/',
    },
    {
      company: 'Insight Global',
      position: 'Full Stack Engineer',
      from: 'Jan 2016',
      to: 'Mar 2020',
      companyLink: 'https://insightglobal.com/',
    },
    {
      company: 'Citadel',
      position: 'Full Stack Developer',
      from: 'Jun 2014',
      to: 'Dec 2015',
      companyLink: 'https://www.citadel.com/',
    },
  ],
  certifications: [
    {
      // name: 'Lorem ipsum',
      // body: 'Lorem ipsum dolor sit amet',
      // year: 'March 2022',
      // link: 'https://example.2026',
    },
  ],
  educations: [
    {
      institution: 'Southern Methodist University',
      degree: `Bachelor's Degree in Computer Science`,
      from: '2010',
      to: '2014',
    },
    {
      // institution: 'Institution Name',
      // degree: 'Degree',
      // from: '2012',
      // to: '2014',
    },
  ],
  publications: [
    {
      // title: 'Publication Title',
      // conferenceName: '',
      // journalName: 'Journal Name',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com',
      // description:
      //   'This is my publish.',
    },
    {
      // title: 'Publication Title',
      // conferenceName: 'Conference Name',
      // journalName: '',
      // authors: 'John Doe, Jane Smith',
      // link: 'https://example.com',
      // description:
      //   'This is my publish.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'linkedin', // medium | dev
    username: 'jarrod-henry-link', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/smartjoker0117/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
