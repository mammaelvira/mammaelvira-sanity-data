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
      name: 'activity',
      title: 'Locale/i di riferimento',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'activities'}]}],
      description: 'Selezionare uno o più locali di riferimento',
    },
    {
      name: 'roles',
      type: 'array',
      of: [{type: 'string'}],
      title: 'Ruolo/i',
      description:
        'Inserire il/i ruolo/i della persona dello staff nello stesso ordine del locale di riferimento',
    },

    {
      name: 'sortingOrder',
      type: 'number',
      title: 'Numero di apparizione',
      description: "Inserire un numero che determina l'ordine di apparizione nelle pagine",
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
  preview: {
    select: {title: 'name', subtitle: 'sortingOrder', media: 'image'},
  },
  orderings: [
    {
      name: 'sortingOrder',
      title: 'Ordine di Apparizione',
      by: [{field: 'sortingOrder', direction: 'asc'}],
    },
  ],
}
