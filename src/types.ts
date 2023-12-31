export type Site = {
  website: string;
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
  [social in SocialMedia]: string;
};

export type SocialMedia = "Twitter" | "Github";
