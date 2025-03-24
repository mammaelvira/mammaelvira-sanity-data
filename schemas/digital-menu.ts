interface PreviewSelection {
  title: string
}

export default {
  name: 'digital-menu',
  type: 'document',
  title: 'Menù digitali',
  fields: [
    {
      name: 'activity',
      type: 'reference',
      to: [{type: 'activities'}],
      title: 'Attività/Locale',
      description: "Selezionare un'attività (locale) dal menù sottostante",
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'link',
      type: 'url',
      title: 'Link menù digitale',
      description: "Inserire il link del menù digitale per l'attività selezionata",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {title: 'activity.name'}, // referenced schema field with dotnotation
    prepare(selection: PreviewSelection) {
      const {title} = selection

      return {title: title}
    },
  },
}
