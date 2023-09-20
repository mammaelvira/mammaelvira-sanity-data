export default {
  title: 'Performer',
  name: 'performerObject',
  type: 'object',
  fieldsets: [{name: 'performerInfo', title: 'Informazioni Performer'}],
  fields: [
    {
      title: 'Performer Name',
      name: 'name',
      type: 'string',
      description: "Inserire il nome del'Artista o del Gruppo",
    },

    {
      title: 'Performer Link',
      name: 'link',
      type: 'url',
      description: `Inserire un link, può essere un profilo social o un sito web di riferimento,
        formato inizio comprensivo di protocollo 'https://..'
        (icone associate automaticamente in base al link fornito ex. Spotify, Instagram, Facebook, YouTube, SoundCloud, sito personale)`,
    },

    {
      title: 'Performer Bio',
      name: 'bioText',
      type: 'array',
      of: [{type: 'block'}],
      description:
        "Inserire un testo descrittivo dell'artista che verrà visualizzato nella descrizione (dettaglio da espandere)",
    },
  ],
}
