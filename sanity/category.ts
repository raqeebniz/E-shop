import { defineType, defineField } from "sanity"


export const category = defineType(
    {
    name: "category",
    title: "Caegory",
    type: "document",
    fields:[
       defineField({
        name: "name",
        title:"category Name",
        type: "string"
        })
    ] 
   }   
)