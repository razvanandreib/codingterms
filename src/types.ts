export type Site = {
  website: string;
  author: string;
  desc: string;
  title: string;
};

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
};

export type SocialIcons = {
  [socia in SocialMedia]: string;
};

export type SocialMedia = "Twitter" | "Github";
