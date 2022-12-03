
import React from 'react'
import cover from '../img/cover.jpg'

const OpenGraph = ({ title, description, image, path }) => {
  return (
    <>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/src/favicon.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title || 'React cards component'}</title>
      {/* OG meta */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title || 'React cards component'} />
      <meta
        property='og:description'
        content={description || 'React cards components with vite js and tailwindcss'}
      />
      <meta property='og:site_name' content={description || 'React cards components with vite js and tailwindcss'} />
      <meta
        property='og:url'
        content={path}
      />
      <meta
        property='og:image'
        content={image || cover}
      />
      <meta property='og:image:width' content='1660' />
      <meta property='og:image:height' content='876' />

      {/* Twitter meta */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:url'
        content={path}
      />
      <meta name='twitter:title' content={title || 'React cards component'} />
      <meta
        name='twitter:description'
        content={description || 'React cards components with vite js and tailwindcss'}
      />
      <meta
        name='twitter:image'
        content={image || cover}
      />
    </>
  )
}

export default OpenGraph
