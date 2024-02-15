import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'college',
  title: 'College',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
