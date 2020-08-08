import React from "react";
import { graphql, StaticQuery } from "gatsby";
import styled from "styled-components";

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

const SiteInfo = () => (
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
            }
          }
        }
      }
    `}
    render={props => (
      <SiteInfoWrapper>
        <a href="/">
          <SiteLogo
            src={props.allWordpressWpMedia.edges[1].node.source_url}
            alt={props.allWordpressWpMedia.edges[1].node.alt_text}
          />
        </a>
        <SiteTitle>
          {props.allWordpressSiteMetadata.edges[0].node.name}
        </SiteTitle>
        <div>{props.allWordpressSiteMetadata.edges[0].node.description}</div>
      </SiteInfoWrapper>
    )}
  />
);

export default SiteInfo;
