import { defineField, defineType } from "sanity";

export const product = defineType(
    {
    name: "product",
    type: 'document',
    title: "Product",
    fields: [
        defineField({
            name: "title",
            title: "Product title",
            type: "string",
        }),
        defineField({
            name: "description",
            title: "Product Description",
            type: "string"
        }),
        defineField({
            name: "price",
            title: "Product Price",
            type: "number"
        }),
        defineField({
            name: "image",
            title: "Product Image",
            type: "image"
        }),
        defineField({
            name: "category",
            title: "Product Category",
            type: "reference",
            to: [
                {
                type: "category"
            }
        ],
        }),
    ],
}
)