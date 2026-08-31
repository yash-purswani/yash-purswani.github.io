// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-research",
          title: "research",
          description: "Research problems I have formulated and investigated in multi-robot control, autonomous-vehicle safety validation and learning-based coordination.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Applied robotics and engineering systems — perception, localisation, navigation and control stacks built and deployed on real platforms.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Education, research experience, manuscripts in preparation, honors and technical skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-joined-team-abhiyaan-iit-madras-autonomous-ground-vehicle-team-as-a-robotics-engineer",
          title: 'Joined Team Abhiyaan, IIT Madras’ autonomous ground vehicle team, as a Robotics Engineer....',
          description: "",
          section: "News",},{id: "news-travelled-to-the-united-states-to-represent-iit-madras-at-the-intelligent-ground-vehicle-competition-igvc-2024-michigan-confirm-exact-month",
          title: 'Travelled to the United States to represent IIT Madras at the Intelligent Ground...',
          description: "",
          section: "News",},{id: "news-secured-7th-overall-among-30-international-teams-and-6th-in-the-design-challenge-at-igvc-2024",
          title: 'Secured 7th overall among 30+ international teams and 6th in the Design Challenge...',
          description: "",
          section: "News",},{id: "news-selected-as-a-robotx-2026-fellow-at-eth-zürich-confirm-month-year-of-selection",
          title: 'Selected as a RobotX 2026 Fellow at ETH Zürich. [confirm month/year of selection]...',
          description: "",
          section: "News",},{id: "news-selected-as-a-daad-kospie-2026-scholar-for-a-master-s-thesis-exchange-at-universität-stuttgart-confirm-month-year-of-selection",
          title: 'Selected as a DAAD KOSPIE 2026 Scholar for a master’s thesis exchange at...',
          description: "",
          section: "News",},{id: "news-completed-the-robotx-2026-fellowship-at-eth-zürich-working-with-prof-emilio-frazzoli-at-the-institute-for-dynamic-systems-and-control-on-rule-constrained-adversarial-scenario-generation",
          title: 'Completed the RobotX 2026 Fellowship at ETH Zürich, working with Prof. Emilio Frazzoli...',
          description: "",
          section: "News",},{id: "news-started-master-s-thesis-research-at-the-institute-of-flight-mechanics-and-control-universität-stuttgart-under-prof-aamir-ahmad",
          title: 'Started master’s thesis research at the Institute of Flight Mechanics and Control, Universität...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
