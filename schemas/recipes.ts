export default {
  name: 'recipes',
  type: 'document',
  title: 'Ricette',
  fields: [
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Ricetta attiva?',
      description: 'Selezionare se la ricetta è attiva',
      initialValue: false,
    },
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
      name: 'activity',
      title: 'Locale/i di riferimento',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'activities'}]}],
      description: 'Selezionare uno o più locali di riferimento',
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
