export interface Skills {
  title: string;
  description: string;
  skills: string[];
}

export const designe: Skills = {
  title: "Web Designer",
  description:
    "I design websites that look great, connect with your audience, and support your business goals so you can stand out from the competition.",
  skills: [
    "Layout, balance, spacing, typography, color theory",
    "Designing for all screen sizes",
    "User flows, wireframing, prototyping",
    "UI/Visual Design, UX Thinking",
    "HTML, CSS, JS, Git",
  ],
};

export const develop: Skills = {
  title: "Web Developer",
  description:
    "I craft smooth, front-end experiences by obsessing over the little things—like clean design, fast performance, and smart optimization.",
  skills: [
    "DOM manipulation, ES6+, fetch API, event handling",
    "Semantic markup, accessibility",
    "Flexbox, Grid, animations, responsive design",
    "React, Tailwind, API integration",
    "NPM, GitHub, DevTools, Prettier, ESLint",
  ],
};