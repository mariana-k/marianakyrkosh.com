import React from 'react';

import PageLayout from '../components/PageLayout';
import Meta from '../components/Meta';

const NotFoundPage = () => (
  <PageLayout>
    <Meta title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </PageLayout>
);

export default NotFoundPage;
