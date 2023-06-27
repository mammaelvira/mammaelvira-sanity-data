export default {
  name: 'events',
  type: 'document',
  title: 'Eventi',
  fields: [
    {
      name: 'isActive',
      type: 'boolean',
      title: 'Evento attivo?',
      description: "Selezionare se l'evento è attivo",
      initialValue: false,
    },
    {
      name: 'activity',
      type: 'reference',
      to: [{type: 'activities'}],
      title: 'Attività/Locale',
      description: "Seleziona l'attività/locale nel quale verrà svolto l'evento",
    },

    {
      name: 'title',
      type: 'string',
      title: 'Nome',
      description: "Inserire titolo dell'evento",
      validation: (Rule) => Rule.required(),
    },

    {name: 'datetimeStart', type: 'datetime', title: 'Data e orario inizio evento'},
    {name: 'datetimeEnd', type: 'datetime', title: 'Data e orario fine evento'},

    {
      name: 'image',
      type: 'image',
      title: 'Immagine',
      description: "Caricare l'immagine/locandina dell'evento",
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
      title: 'Descrizione',
      name: 'description',
      type: 'array',
      of: [{type: 'block'}],
    },
  ],

  preview: {
    select: {title: 'title', subtitle: 'activity.name', datetimeStart: 'datetimeStart'},
    prepare(selection) {
      const {title, subtitle, datetimeStart} = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${new Date(datetimeStart).toLocaleDateString('it-IT', {})}`,
      }
    },
  },
}
