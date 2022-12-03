
import React from 'react'
const cover = 'https://cards-components.vercel.app/assets/cover.jpg'

const OpenGraph = ({ title, description, image }) => {
  return (
    <>
      {/* OG meta */}
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title || 'Cards components'} />
      <meta
        property='og:description'
        content={description || 'React cards components with vite js and tailwindcss'}
      />
      <meta property='og:site_name' content={description || 'React cards components with vite js and tailwindcss'} />
      <meta
        property='og:url'
        content='https://cards-components.vercel.app/'
      />
      <meta
        property='og:image'
        content={image || cover}
      />
      <meta property='og:image:width' content='1200' />
      <meta property='og:image:height' content='630' />

      {/* Twitter meta */}
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:url'
        content='https://cards-components.vercel.app/'
      />
      <meta name='twitter:title' content={title || 'Cards components'} />
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
