import React from "react";
import PageLayout from "../components/PageLayout";

export default ({ pageContext }) => (
  <PageLayout>
    <h1>{pageContext.title}</h1>
  </PageLayout>
);
