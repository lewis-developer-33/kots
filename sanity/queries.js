import { createClient, groq } from "next-sanity";
import {config} from './lib/client'


export async function getNotices() {
  return createClient(config).fetch(
    groq`*[_type == "notice"]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      name,
      "slug": slug.current,
      "filePaper": filePaper.asset->url,
      url,
      body,
      school[]->{title},
      department[]->{title},
      college[]->{title}
    }
    | order(_updatedAt asc)
    `
  )
}

export async function getNotice(slug) {
  return createClient(config).fetch(
    groq`*[_type == "notice"][0]{
      _id,
      _createdAt,
      _updatedAt,
      title,
      name,
      "slug": slug.current,
      "filePaper": filePaper.asset->url,
      url,
      body,
      school[]->{title},
      department[]->{title},
      college[]->{title}
    }`,
    { slug }
  )
}

