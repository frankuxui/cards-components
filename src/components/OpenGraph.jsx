
import React from 'react'
import { Helmet } from 'react-helmet'

const OpenGraph = ({ title, description, image, path }) => {
  return (
    <Helmet>
      <meta charSet='UTF-8' />
      <link rel='icon' type='image/svg+xml' href='/src/favicon.svg' />
      <link rel='canonical' href={path} />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title || 'React cards component'}</title>
      <meta property='og:type' content='website' />
      <meta property='og:title' content={title || 'React cards component'} />
      <meta property='og:description' content={description} />
      <meta property='og:site_name' content={description} />
      <meta property='og:url' content={path} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='1660' />
      <meta property='og:image:height' content='876' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:url' content={path} />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />
    </Helmet>
  )
}

export default OpenGraph
