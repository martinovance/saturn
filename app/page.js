import React from 'react';

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';

const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData?.length && bannerData[0]} />
    {console.log(bannerData)}

    <div className="products-heading">
      <h2>Best Seller Products</h2>
      <p>speaker There are many variations passages</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
      {console.log(products)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

// export async function getServerSideProps() {
//   const products = [
//     {
//       _createdAt: "2023-01-31T08:29:47Z",
//       _id: "de3d15be-63eb-4f58-8d73-0bc1cad8d169",
//       _rev: "P2uRfeHfJGlW9IJSvLdrbX",
//       _type: "product",
//       _updatedAt: "2023-01-31T08:29:47Z",
//       name: "Headphones"
//     }
//   ];

//   return {
//     props: {
//       products
//     }
//   };
// }

export default Home;