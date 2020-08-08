import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
  margin: auto 0;
`;

const SiteTitle = styled.div`
  font-weight: bold;
`;

const SiteLogo = styled.img`
  display: block;
  border-radius: 50%;
  height: 50px;
`;

const getLogoUrl = data => {
  if (data.alt_text !== 'Logo') return null;
  return <SiteLogo key={data.id} src={data.source_url} alt={data.alt_text} />;
};

const SiteInfo = () => (
  <>
    <StaticQuery
      query={graphql`
        {
          allWordpressSiteMetadata {
            edges {
              node {
                name
                description
              }
            }
          }
          allWordpressWpMedia {
            edges {
              node {
                source_url
                alt_text
                id
              }
            }
          }
        }
      `}
      render={props => (
        <SiteInfoWrapper>
          <Link to="/">{props.allWordpressWpMedia.edges.map(edge => getLogoUrl(edge.node))}</Link>
          <SiteTitle>{props.allWordpressSiteMetadata.edges[0].node.name}</SiteTitle>
          <div>{props.allWordpressSiteMetadata.edges[0].node.description}</div>
        </SiteInfoWrapper>
      )}
    />
  </>
);

export default SiteInfo;
