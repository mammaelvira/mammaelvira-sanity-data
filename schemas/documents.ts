export default {
  name: 'documents',
  type: 'document',
  title: 'Documenti',

  fields: [
    {
      name: 'file',
      title: 'File',
      type: 'file',
      description: 'Caricare un file (ex. PDF) per il download dal sito',
      fields: [
        {
          name: 'filename',
          title: 'Nome documento (preview)',
          type: 'string',
          description: 'Inserire il nome del documento (deve essere univoco)',
        },
        {
          name: 'slug',
          title:
            'Nome documento (slug) valido per URL (nome finale del file senza spazi o punteggiatura)',
          type: 'slug',
          description:
            'Premere il tasto GENERATE per creare un nome scaricabile per il file (dal precedente campo)',
          options: {
            source: 'file.filename',
            slugify: (input: string) =>
              input
                .toLowerCase()
                .replace(/[^a-zA-Z0-9]+/g, '-')
                .slice(0, 200),
          },
        },
      ],
    },
  ],

  preview: {select: {title: 'file.slug.current'}},
}
