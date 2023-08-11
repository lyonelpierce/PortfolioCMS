import { defineField } from "sanity";
import { LiaAwardSolid } from "react-icons/lia";

const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  icon: LiaAwardSolid,
  fields: [
    defineField({
      name: "years",
      title: "Years",
      type: "number",
      validation: (rule) => rule.required(),
    }),
    {
      name: "companies",
      title: "Companies",
      type: "array",
      description: "Add company items",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "company",
              title: "Company",
              type: "string",
            },
            {
              name: "role",
              title: "Role",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              type: "text",
            },
            {
              name: "year",
              title: "Year",
              type: "number",
            },
          ],
        },
      ],
      validation: (rule: any) => rule.max(9),
    },
  ],
};

export default experience;
