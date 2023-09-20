import activities from './activities'

import images from './carousel-images'

import digitalMenu from './digital-menu'
import staff from './staff'
import recipes from './recipes'
import events from './events'

import documents from './documents'

import performerObject from './performerObject'
import programObject from './programObject'

export const schemaTypes = [
  activities,

  images,

  digitalMenu,
  staff,
  recipes,
  events,

  documents, // for PDFs and similar files to download

  // custom object for Program / Lineup
  programObject,
  // custom object for Performers
  performerObject,
]
