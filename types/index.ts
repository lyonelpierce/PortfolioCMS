export type ProfileType = {
  _id: string;
  fullName: string;
  headline: string;
  email: string;
  shortBio: string;
  location: string;
  resumeURL: string;
  socialLinks: string[];
  skills: string[];
  tools: string[];
};

export type InfoType = {
  _id: string;
  metaData: string;
  description: string;
  logo: string;
  menu: string[];
};

export type ExpType = {
  _id: string;
  years: number;
  companies: string[];
};
