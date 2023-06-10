export default {
  name: 'staff',
  type: 'document',
  title: 'Staff',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome persona',
      description: 'Inserire il nome della persona dello staff',
    },

    {
      title: 'Immagine',
      name: 'image',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
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
      title: 'Ruolo persona',
      description: 'Inserire il ruolo della persona dello staff',
    },
    {
      name: 'nickname',
      type: 'string',
      title: 'Vineto',
      description: 'Inserire il nome del vineto associato (soprannome)',
    },
    {
      name: 'nickname2',
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
