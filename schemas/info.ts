import { defineField } from "sanity";
import { BiInfoCircle } from "react-icons/bi";

const info = {
  name: "info",
  title: "Information",
  type: "document",
  icon: BiInfoCircle,
  fields: [
    defineField({
      name: "metaData",
      title: "Metadata",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      description: "In one short sentence, what do you do?",
      validation: (Rule) => Rule.required().min(40).max(60),
    }),
    {
      name: "logo",
      title: "Logo",
      type: "file",
    },
    {
      name: "menu",
      title: "Menu",
      type: "array",
      description: "Add menu items",
      of: [{ type: "string" }],
    },
  ],
};

export default info;
