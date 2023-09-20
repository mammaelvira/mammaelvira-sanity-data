export default {
  name: 'images',
  type: 'document',
  title: 'Immagini',
  fields: [
    {
      name: 'imagesSection',
      type: 'string',
      title: 'Nome della sezione relativa alle immagini',
      description: `NON modificare questo campo. \nQuesto titolo serve per identificare i vari posizionamenti delle immagini. \nNON cancellare il questo file nè il relativo id per non interrompere il collegamento con l'interfaccia del sito.`,
    },
    {
      name: 'imagesSectionSlug',
      type: 'slug',
      title: 'Identificativo sezione del sito',
      description: 'NON modificare questo campo.',
    },
    {
      name: 'imagesList',
      type: 'array',
      title: 'Lista Immagini',
      description:
        "Inserire in questo documento tutte le immagini da visualizzare in homepage.\nL'ordine di questa lista rispecchia (alto-basso) la visualizzazione da sinistra a destra delle immagini in scorrimento in homepage. \n Consigliamo di alternare i formati (non tutte le stesse immagini ex. quadrate in successione).",
      of: [
        {
          type: 'image',
          name: 'image',
          title: 'Immagine',
          description: "Caricare l'immagine per il carousel in prima pagina",
          options: {
            hotspot: true, // <-- Default to false
          },
          fields: [
            {
              name: 'caption',
              type: 'string',
              title: 'Caption',
            },
          ],
        },
      ],
    },
  ],
}
