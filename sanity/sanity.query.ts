import { groq } from "next-sanity";
import client from "./sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      location,
      shortBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills,
      tools
    }`
  );
}

export async function getInfo() {
  return client.fetch(
    groq`*[_type == "info"]{
      _id,
      "logo": logo.asset->url,
      description,
      metaData,
      menu
    }`
  );
}

export async function getExperience() {
  return client.fetch(
    groq`*[_type == "experience"]{
      _id,
      years,
      companies,
    }`
  );
}
