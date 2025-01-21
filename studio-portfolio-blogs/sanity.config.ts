import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'portfolio-blogs',

  projectId: '3usq0tzq',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), codeInput()],

  schema: {
    types: schemaTypes,
  },
})
