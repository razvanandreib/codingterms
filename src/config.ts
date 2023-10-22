import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://codingterms.net",
  desc: "Coding terms to find and understand",
  title: "Coding Terms",
};

export const LOCALE = ["en-EN"];

export const SOCIALS: SocialObjects = [
  {
    name: "Twitter",
    href: "twitter.com",
    active: true,
    linkTitle: `${SITE.title} on Twitter`,
  },
  {
    name: "Github",
    href: "github.com",
    active: true,
    linkTitle: `${SITE.title} on Github`,
  },
];
