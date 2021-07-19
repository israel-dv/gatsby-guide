import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        // src="https://pbs.twimg.com/media/E1oMV3QVgAIr1NT?format=jpg&name=large"
        src="../assets/images/logo.png"
        alt="The best dog in the world"
      />
    </Layout>
  );
};

export default IndexPage;
