import { createClient } from 'next-sanity'
//import { apiVersion,dataset,projectId,useCdn,} from "../../../sanity/env";

export  const client = createClient({
    token: process.env.SANITY_ACCESS_TOKEN,
    apiVersion:"2024-01-08",
    dataset: "productio",
    projectId: 'fl1d284a',
    useCdn: true,
})

