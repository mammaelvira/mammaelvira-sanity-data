export default {
  name: 'activitiesExternal',
  type: 'document',
  title: 'Attività (Link esterni)',

  fields: [
    {
      name: 'sortingOrder',
      type: 'number',
      title: 'Numero di apparizione',
      description:
        "Inserire un numero che determina l'ordine di apparizione nelle card (attività con link esterno dopo i locali)",
    },

    {
      name: 'name',
      type: 'string',
      title: 'Nome',
      description: "Inserire il nome dell'attività",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'payoff',
      type: 'string',
      title: 'Payoff',
      description: 'Inserire Payoff/frase identificativa locale',
    },
    {
      name: 'colorValue',
      type: 'color',
      title: 'Colore - Valore',
      description: 'Inserire/selezionare il valore del colore da abbinare al locale (sfondo card)',
      options: {disableAlpha: true},
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      description: 'Caricare il logo del locale, preferito il formato .svg o .png con trasparenza',
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
      validation: (Rule) => Rule.required(),
    },

    {
      name: 'link',
      type: 'url',
      title: 'Link esterno',
      description:
        "Inserire il link esterno di collegamento con la card attività, inserire l'indirizzo completo di protocollo (ex. https://mammaelvira.com)",
    },

    {
      name: 'path',
      type: 'string',
      title: 'Path Pagina',
      description: 'Inserire il riferimento della pagina (path)'
    }
  ],
}
