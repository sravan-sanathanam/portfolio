// Renders the React app to static HTML after `vite build`, so search engines
// and link previews see the real page text without running JavaScript.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.dirname(fileURLToPath(import.meta.url))
const htmlPath = path.join(root, 'dist/index.html')
const ssrDir = path.join(root, 'dist-ssr')

const { render } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href)

const template = fs.readFileSync(htmlPath, 'utf8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error(`prerender: ${placeholder} not found in dist/index.html`)
}

fs.writeFileSync(htmlPath, template.replace(placeholder, `<div id="root">${render()}</div>`))
fs.rmSync(ssrDir, { recursive: true, force: true })
console.log('prerender: wrote dist/index.html')
