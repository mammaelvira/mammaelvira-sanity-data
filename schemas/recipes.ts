export default {
  name: 'recipes',
  type: 'document',
  title: 'Ricette',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Titolo ricetta',
      description: 'Inserire il titolo della ricetta',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'image',
      type: 'image',
      title: 'Immagine',
      description: "Caricare un'immagine della ricetta",
      options: {
        hotspot: true, // <-- Default to false
      },
      fields: [
        // {
        //   name: 'caption',
        //   type: 'string',
        //   title: 'Caption',
        // },
      ],
    },
    {
      name: 'description',
      title: 'Descrizione',
      description: 'Inserire il testo della ricetta',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
