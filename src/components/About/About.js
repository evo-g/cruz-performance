import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { StyledAbout } from './About.styled'

export default function About() {
  const [gram, setGram] = useState([]);

  const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/);

  const fetchInstagramPhotos = async (accountUrl) => {
    const response = await axios.get(accountUrl)
    const json = JSON.parse(response.data.match(instagramRegExp)[1])
    const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 8)
    const photos = edges.map(({ node }) => {
      return {
        url: `https://www.instagram.com/p/${node.shortcode}/`,
        thumbnailUrl: node.thumbnail_src,
        displayUrl: node.display_url,
        caption: node.edge_media_to_caption.edges[0].node.text
      }
    })
    return photos
  }

  useEffect(() => {
    (async () => {
      try {
        const photos = await fetchInstagramPhotos('https://www.instagram.com/_cruzperformance_/')
        setGram(photos);
      } catch (e) {
        console.error('Fetching Instagram photos failed', e)
      }
    })()
  }, [])

  return (
    <StyledAbout>
      <div className='about-container'>
        <h3>Ford Powerstroke Diesel Specialist</h3>
        <h4>Specializing in (7.3, 6.0, 6.4, 6.7 engine repairs)</h4>
        <h2>Check us out on instagram</h2>
        <a className='insta-logo' href='https://www.instagram.com/_cruzperformance_/' target='_blank' alt='instagram page'>
          <img src={require('../../images/insta-logo.png')} alt='insta-logo' />
        </a>
        <h3>Our Latest Posts</h3>
      </div>
      <div className='insta-grid'>
        <ul >
          {gram.map(photo => (
            <li key={photo.url}>
              <a href={photo.url} target='_blank'>
                <img src={photo.displayUrl} alt={photo.caption} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </StyledAbout>
  )
}
