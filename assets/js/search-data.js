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
          section: "News",},{id: "news-represented-iit-madras-with-project-vidyut-at-the-intelligent-ground-vehicle-competition-igvc-2024-michigan-usa-8th-overall-among-30-international-teams-and-6th-in-the-design-challenge",
          title: 'Represented IIT Madras with Project Vidyut at the Intelligent Ground Vehicle Competition (IGVC)...',
          description: "",
          section: "News",},{id: "news-joined-the-distributed-intelligence-amp-amp-robotics-lab-diro-lab-iit-madras-as-an-undergraduate-researcher-working-with-prof-anuj-kumar-tiwari-on-robust-finite-time-control-of-multi-agent-swarms",
          title: 'Joined the Distributed Intelligence &amp;amp;amp; Robotics Lab (DIRo Lab), IIT Madras, as an...',
          description: "",
          section: "News",},{id: "news-joined-prof-emilio-frazzoli-s-group-at-the-institute-for-dynamic-systems-and-control-idsc-eth-zürich-as-a-robotx-2026-fellow",
          title: 'Joined Prof. Emilio Frazzoli’s group at the Institute for Dynamic Systems and Control...',
          description: "",
          section: "News",},{id: "news-began-master-s-thesis-research-at-the-institute-of-flight-mechanics-and-control-universität-stuttgart-with-prof-aamir-ahmad-as-a-daad-kospie-scholar",
          title: 'Began master’s thesis research at the Institute of Flight Mechanics and Control, Universität...',
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
