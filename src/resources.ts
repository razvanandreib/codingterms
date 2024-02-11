export const freeResources = [
  {
    title: "Free Code Camp",
    desc: "Learn to code - for free. Build projects. Earn Certifications",
    link: "https://www.freecodecamp.org/",
  },
  {
    title: "Javacript Info",
    desc: "The moden Javascript Tutorial. How its done now. From the basics to advanced topics with simple, but detailed explanations",
    link: "https://javascript.info/",
  },
  {
    title: "Free for Developers",
    desc: "This is a list of software (SaaS, PaaS, IaaS, etc.) and other offerings with free developer tiers",
    link: "https://free-for.dev/#/",
  },
  {
    title: "Smashing Magazine",
    desc: "With a commitment to quality content for the design community.",
    link: "https://www.smashingmagazine.com/",
  },
  {
    title: "C plus plus",
    desc: "Learn C++ from the basics to advanced concepts",
    link: "https://cplusplus.com/",
  },
  {
    title: "MDN Web Docs",
    desc: "Resources for Developers by Developers. Documenting web technologies, including CSS, HTML, and JavaScript, since 2005.",
    link: "https://developer.mozilla.org/en-US/",
  },
  {
    title: "Web Dev",
    desc: "We want to help you build beautiful, accessible, fast, and secure websites that work cross-browser, and for all of your users.",
    link: "htpps://web.dev",
  },
  {
    title: "W3 Schools",
    desc: "w3schools is a free online learning platform dedicated to coding and web development. ",
    link: "htpps://w3schools.com",
  },

  {
    title: "Khan Academy",
    desc: "Build a deep, solid understanding in math, science, and more.",
    link: "https://www.khanacademy.org",
  },
  {
    title: "Code Wars",
    desc: "Who said learning to code online couldn’t be fun? Codewars also offers one of the more diverse lists of programming languages.",
    link: "https://www.codewars.com",
  },
];

export const sortedResources = freeResources.sort(function (a, b) {
  let titleA = a.title.toUpperCase();
  let titleB = b.title.toUpperCase();
  return titleA < titleB ? -1 : titleA > titleB ? 1 : 0;
});
