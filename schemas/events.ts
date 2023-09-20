export default {
  name: 'events',
  type: 'document',
  title: 'Eventi',

  groups: [{name: 'social', title: 'Social Share Preview'}],

  fields: [
    {
      name: 'path',
      type: 'string',
      title: 'Path univoco evento',
      description:
        "Inserire il riferimento della pagina (lading page dell'evento); il riferimento deve essere univoco e iniziare con una barra '/' e contenere solo numeri e lettere separati da un trattino medio '-' (meno) ex. '/vera-di-lecce-25-luglio-23'",
    },
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

    {
      name: 'isSoldout',
      type: 'boolean',
      title: 'Evento Sold Out?',
      description: "Selezionare se l'evento è sold out",
      initialValue: false,
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
      name: 'ogImage',
      type: 'image',
      title: 'Immagine per Social Share',
      description:
        "Caricare l'immagine/locandina dell'evento per la card di condivisione social (formato 1200 x 630 pixel)",
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
      group: 'social',
    },
    {
      name: 'ogTitle',
      type: 'string',
      title: 'Titolo per Social Share',
      description:
        'Titolo visualizzato nella card di condivisione social (formato ottimale compreso tra 30 e 60 caratteri, massimo 70 caratteri)',
      validation: (Rule) => Rule.max(70),
      group: 'social',
    },
    {
      name: 'ogDescription',
      type: 'string',
      title: 'Descrizione per Social Share',
      description:
        'Testo per la card di condivisione social (formato ottimale compreso tra 55 e 200 caratteri)',
      validation: (Rule) => Rule.max(200),
      group: 'social',
    },

    {
      name: 'referenceName',
      title: 'Persona/organizzazione di riferimento (opzionale)',
      type: 'string',
      description:
        "Inserire il nome della persona o dell'organizzazione di riferimento, solitamente da abbinare al numero di telefono, ex. 'Roberto' o 'Delicatessen'",
    },
    {
      name: 'referencePhone',
      title: 'Numero di telefono per info/prenotazioni',
      type: 'string',
      description:
        'Inserire il numero telefonico (da abbinare al riferimento precedente) Formato con +39 e senza spaziature',
    },
    {
      name: 'referenceEmail',
      title: 'Email di riferimento',
      type: 'string',
      description: 'Inserire la email di riferimento per questo evento',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          },
        ),
    },

    {
      name: 'description',
      title: 'Descrizione',
      type: 'array',
      of: [{type: 'block'}],
      description:
        "Inserire i dettagli e le informazioni dell'evento che verranno visualizzate per prime (omettere programma, formula e bio artisti - da inserire poi negli appositi campi",
    },

    {
      name: 'program',
      title: "Programma dell'evento",
      type: 'array',
      of: [{type: 'programObject'}],
      description:
        "Inserire per ogni fascia oraria o lineup l'ora di inizio e la relativa descrizione",
    },

    {
      name: 'formula',
      title: "Formula dell'evento",
      type: 'string',
      description: 'NON UTILIZZARE - WORK IN PROGRESS',
    },

    // {
    //   name: 'performerName',
    //   title: 'Nome Artista/Performer',
    //   type: 'array',
    //   of: [{type: 'string'}],
    //   description:
    //     "Inserire il nome del'Artista/i rispettando l'ordine del campo successivo per associare i profili social o web di riferimento (1 per artista)",
    // },
    // {
    //   name: 'performerLink',
    //   title: "Link dell'Artista",
    //   type: 'array',
    //   of: [{type: 'string'}],
    //   description: `Inserire un link, può essere un profilo social o un sito web di riferimento,
    //     formato inizio comprensivo di protocollo 'https://..'
    //     (icone associate automaticamente in base al link fornito ex. Spotify, Instagram, YouTube, sito personale)
    //     INSERIRE UNA "x" minuscola se non ci sono riferimenti per un artista per rispettare l'ordine degli altri`,
    // },

    {
      name: 'performers',
      title: 'Performers',
      type: 'array',
      of: [{type: 'performerObject'}],
      description: 'Cliccare per inserire un nuovo performer (nome, bio, link social)',
    },
  ],

  preview: {
    select: {title: 'title', subtitle: 'activity.name', datetimeStart: 'datetimeStart'},
    prepare(selection: any) {
      const {title, subtitle, datetimeStart} = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${new Date(datetimeStart).toLocaleDateString('it-IT', {})}`,
      }
    },
  },
  orderings: [
    {
      name: 'datetimeStartASC',
      title: 'Ordine Cronologico (vecchi-nuovi)',
      by: [{field: 'datetimeStart', direction: 'asc'}],
    },
    {
      name: 'datetimeStartDESC',
      title: 'Ordine Cronologico (nuovi-vecchi)',
      by: [{field: 'datetimeStart', direction: 'desc'}],
    },
  ],
}
