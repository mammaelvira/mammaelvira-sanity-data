import { defineType, defineField } from "sanity";

export default defineType({
  name: "contact",
  type: "document",
  title: "Contatti",
  fields: [
    defineField({
      name: "user",
      type: "string",
      title: "Nome e Cognome",
      validation: (Rule) => Rule.required().min(3).error("Inserisci un nome valido"),
    }),
    defineField({
      name: "email",
      type: "string",
      title: "Email",
      validation: (Rule) => Rule.email().error("Inserisci un'email valida"),
    }),
    defineField({
      name: "phone",
      type: "string",
      title: "Numero di telefono",
      validation: (Rule) => Rule.min(10).max(20).error("Numero di telefono non valido"),
    }),
  ],
});
