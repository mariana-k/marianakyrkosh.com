import React from 'react';
import PageLayout from '../components/PageLayout';

export default ({ pageContext }) => (
  <PageLayout>
    <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
    <p dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </PageLayout>
);
