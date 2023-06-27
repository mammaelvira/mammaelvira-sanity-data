export default {
  name: 'staff',
  type: 'document',
  title: 'Staff',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome',
      description: 'Inserire il nome della persona dello staff',
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'image',
      type: 'image',
      title: 'Immagine',
      description: "Caricare l'immagine della persona",
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
      name: 'role',
      type: 'string',
      title: 'Ruolo',
      description: 'Inserire il ruolo della persona dello staff',
    },
    {
      name: 'nickname',
      type: 'string',
      title: 'Vineto',
      description: 'Inserire il nome del vineto associato (soprannome)',
    },
    {
      title: 'Descrizione',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],
}
