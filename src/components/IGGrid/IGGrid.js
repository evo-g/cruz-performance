import React, { useEffect, useState } from 'react';
import { StyledIGGrid } from './IGGrid.styled';
import axios from 'axios';

function IGGrid() {
  const [gram, setGram] = useState([]);

  const instagramRegExp = new RegExp(/<script type="text\/javascript">window\._sharedData = (.*);<\/script>/);

  const fetchInstagramPhotos = async (accountUrl) => {
    const response = await axios.get(accountUrl)
    const json = JSON.parse(response.data.match(instagramRegExp)[1])
    const edges = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(0, 6)
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
    <StyledIGGrid>
      <ul >
        {gram.map(photo => (
          <li key={photo.url}>
            <a href={photo.url} target='_blank'>
              <img src={photo.displayUrl} alt={photo.caption} />
            </a>
          </li>
        ))}
      </ul>
    </StyledIGGrid>
  )
};

export default IGGrid;
