import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://codingterms.net",
  author: "Razvan Balauru",
  desc: "Coding terms to find and understand",
  title: "Coding Terms",
};

export const LOCALE = ["en-EN"];

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "twitter.com",
    linkTitle: `${SITE.title} on Twitter`,
    active: true,
  },

  {
    name: "Github",
    href: "github.com",
    linkTitle: `${SITE.title} ont Github`,
    active: true,
  },
];
