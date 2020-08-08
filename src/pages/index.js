import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import PageLayout from '../components/PageLayout';

const IndexPage = () => (
  <PageLayout>
    <StaticQuery
      query={graphql`
        {
          allWordpressPage {
            edges {
              node {
                id
                title
                content
              }
            }
          }
        }
      `}
      render={props => (
        <div>
          {props.allWordpressPage.edges.map(page => (
            <div key={page.node.id}>
              <h1>{page.node.title}</h1>
              <p dangerouslySetInnerHTML={{ __html: page.node.content }} />
            </div>
          ))}
        </div>
      )}
    />
  </PageLayout>
);

export default IndexPage;
