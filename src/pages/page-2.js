import React from 'react';
import { Link } from 'gatsby';

import PageLayout from '../components/PageLayout';
import Meta from '../components/Meta';

const SecondPage = () => (
  <PageLayout>
    <Meta title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </PageLayout>
);

export default SecondPage;
