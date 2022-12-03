
import React from 'react'
import { Helmet } from 'react-helmet'

const OpenGraph = ({ title, description, image, path }) => {
  return (
    <Helmet>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/src/favicon.svg' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content='React card components' />
      <meta
        property='og:description'
        content=''
      />
      <meta property='og:site_name' content='React cards components with vite js and tailwindcss' />
      <meta
        property='og:url'
        content='https://react-tailwind-components-xi.vercel.app/'
      />
      <meta
        property='og:image'
        content='https://cards-components.vercel.app/assets/cover.ce42f005.jpg'
      />
      <meta property='og:image:width' content='1660' />
      <meta property='og:image:height' content='876' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta
        name='twitter:url'
        content='https://react-tailwind-components-xi.vercel.app/'
      />
      <meta name='twitter:title' content='React cards component' />
      <meta
        name='twitter:description'
        content='React cards components with vite js and tailwindcss'
      />
      <meta
        name='twitter:image'
        content='https://cards-components.vercel.app/assets/cover.ce42f005.jpg'
      />
      <title>React card components</title>
    </Helmet>
  )
}

export default OpenGraph
