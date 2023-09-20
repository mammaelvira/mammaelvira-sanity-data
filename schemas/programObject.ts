export default {
  title: 'Fascia oraria programma',
  name: 'programObject',
  type: 'object',
  fielsets: [{name: 'programTimeSlot', title: 'Fasce orarie programma'}],
  fields: [
    {name: 'timeSlotStart', title: 'Inizio fascia oraria', type: 'datetime'},
    {name: 'timeSlotDescription', title: 'Descrizione della fascia oraria', type: 'string'},
  ],

  preview: {
    select: {title: 'timeSlotStart', subtitle: 'timeSlotDescription'},
    prepare(selection: any) {
      const {title, subtitle} = selection
      return {
        title: new Date(title).toLocaleTimeString('it-IT', {hour: 'numeric', minute: '2-digit'}),
        subtitle,
      }
    },
  },
}
