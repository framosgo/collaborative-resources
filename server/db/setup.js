import r from 'rethinkdb'

import resources from './data/resources.json'
import tags from './data/tags.json'
import {
  DB,
  TAG_INDEX,
  DATE_INDEX,
  TAGS_TABLE,
  RESOURCES_TABLE
} from './config'

export const checkDatabase = connection => (
  r.dbList()
    .contains(DB)
    .do(dbExists => (
      r.branch(
        dbExists,
        { dbs_created: 0 },
        r.expr([
          r.dbCreate(DB),

          r.db(DB).tableCreate(RESOURCES_TABLE),
          r.db(DB).tableCreate(TAGS_TABLE),

          r.db(DB).table(RESOURCES_TABLE).insert(formatedResources()),
          r.db(DB).table(TAGS_TABLE).insert(formatedTags()),

          r.db(DB).table(RESOURCES_TABLE).indexCreate(TAG_INDEX, { multi: true }),
          r.db(DB).table(RESOURCES_TABLE).indexCreate(DATE_INDEX)
        ]).forEach(t => t)
      )
    ))
    .run(connection)
)

const formatedTags = () => (
  tags.map(tag => ({
    name: tag,
    color: 'blue'
  }))
)

const formatedResources = () => (
  resources.reduce((resourceList, resource) => {
    resourceList.push(
      ...resource.msisdns.map(msisdn => ({
        lastModified: new Date(),
        modifiedBy: 'kami-sama',
        dni: resource.dni,
        tags: [],
        msisdn
      }))
    )
    return resourceList
  }, [])
)

/*

// Get resources
r.db('orange')
  .table('resources')
  .orderBy({ index: r.desc('lastModified') })
  .limit(10)

// Adding a tag
r.db('orange')
  .table('resources')
  .get('8f86d415-cd38-49a0-9bed-72a63209a20d')
  .update({
    lastModified: r.now(),
    modifiedBy: 'kami-sama',
    tags: r.row('tags').append('d728c81f-2eee-4587-ad9e-56ec57090826')
  })

// Removing a tag
  r.db('orange')
  .table('resources')
  .get('69458be3-e04c-466b-b01e-1fadebb04a6e')
  .update({
    lastModified: r.now(),
    modifiedBy: 'kami-sama',
    tags: r.row('tags').difference(['d728c81f-2eee-4587-ad9e-56ec57090826'])
  })

// Filtering by tags
r.db('orange')
  .table('resources')
  .getAll(r.args(['d728c81f-2eee-4587-ad9e-56ec57090826']), {index: 'tags'})
  .orderBy({ index: r.desc('lastModified') })
  .limit(10)

// Get all tags
r.db('orange')
  .table('tags')

// Creates a new tag
r.db('orange')
  .table('tags')
  .insert({
    name: 'ONLINE',
    color: 'red'
  })

// Updates a tag
r.db('orange')
  .table('tags')
  .get('526f18b4-a3bd-4cb2-ba42-463ecaa8d5d8')
  .update({
    name: 'BONO-100',
    color: 'green'
  })

// Delete tag
r.db('orange')
  .table('tags')
  .get('526f18b4-a3bd-4cb2-ba42-463ecaa8d5d8')
  .delete()

// Delete of resources table
r.db('orange')
  .table('resources')
  .getAll(r.args(['d728c81f-2eee-4587-ad9e-56ec57090826']), { index: 'tags' })
  .update(resource => ({
    lastModified: r.now(),
    modifiedBy: 'kami-sama',
    tags: resource('tags').difference(['d728c81f-2eee-4587-ad9e-56ec57090826'])
  }))
*/
