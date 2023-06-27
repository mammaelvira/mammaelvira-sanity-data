export default {
  name: 'activities',
  type: 'document',
  title: 'Attività (Locali)',

  groups: [
    {name: 'colors', title: 'Colore attività'},
    {name: 'address', title: 'Indirizzo'},
    {name: 'contacts', title: 'Contatti'},
    {name: 'links', title: 'Link'},
  ],

  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Nome',
      description: "Inserire il nome dell'attività/locale",
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'payoff',
      type: 'string',
      title: 'Payoff',
      description: 'Inserire Payoff/frase identificativa locale',
    },
    {
      name: 'colorName',
      type: 'string',
      title: 'Colore - Nome',
      description: 'Inserire il nome del colore abbinato al locale/attività',
      group: 'colors',
    },
    {
      name: 'colorValue',
      type: 'color',
      title: 'Colore - Valore',
      description: 'Inserire/selezionare il valore del colore da abbinare al locale',
      options: {disableAlpha: true},
      group: 'colors',
    },

    // address group
    {
      name: 'street',
      type: 'string',
      title: 'Indirizzo - Via',
      description: "Inserire la via dell'attività/locale",
      group: 'address',
    },
    {
      name: 'streetNumber',
      type: 'string',
      title: 'Indirizzo - Numero Civico',
      description: 'Inserire il numero civico',
      group: 'address',
    },
    {
      name: 'cap',
      type: 'string',
      title: 'Indirizzo - CAP',
      description: 'Inserire il Codice di Avviamento Postale',
      group: 'address',
    },
    {
      name: 'city',
      type: 'string',
      title: 'Indirizzo - Città',
      description: 'Inserire la città',
      group: 'address',
    },
    {
      name: 'place',
      type: 'string',
      title: 'Indirizzo - Zona',
      description: 'Inserire la zona di riferimento',
      group: 'address',
    },

    {
      name: 'telephone',
      type: 'string',
      title: 'Contatti - Telefono',
      description: "Inserire il numero di telefono dell'attività (inziando con +39)",
      group: 'contacts',
    },
    {
      name: 'email',
      type: 'email',
      title: 'Contatti - E-Mail',
      description: "Inserire l'e-mail dell'attività",
      group: 'contacts',
    },

    {
      name: 'path',
      type: 'string',
      title: 'Path Pagina',
      description: 'Inserire il riferimento della pagina (path)',
      group: 'links',
    },
    {
      name: 'googleMapsUrl',
      type: 'url',
      title: 'Google Maps URL',
      description: "Inserire l'url completo di Google Maps per l'attività",
      group: 'links',
    },
  ],
}
