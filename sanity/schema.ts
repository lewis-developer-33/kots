import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemaTypes/blockContent'
import category from './schemaTypes/category'
import post from './schemaTypes/post'
import author from './schemaTypes/author'
import notice from './schemaTypes/notice'
import college from './schemaTypes/college'
import school from './schemaTypes/school'
import department from './schemaTypes/department'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, author, category, blockContent,notice,college,school,department],
}
