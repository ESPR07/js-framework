import React, { useEffect } from 'react';
import styled from 'styled-components';
import bannerImage from '../images/banner-image.webp';
import ProductGrid from '../components/productGrid';
import {Helmet} from "react-helmet";

export const Banner = styled.div`
  width: 100%;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url("${bannerImage}");
    background-size: cover;
    background-position: center;
    opacity: 40%;
  }

  @media screen and (max-width: 900px) {
    height: 200px;
    margin-top: 70px;
  }
`;

export const BannerText = styled.p`
  font-family: 'Major Mono Display', 'Courier New', Courier, monospace;
  font-size: 3rem;
  z-index: 1;
  user-select: none;

  @media screen and (max-width: 900px) {
   font-size: 1.7rem;
   text-align: center; 
  }
`



function HomePage() {
  
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  return (
    <main>
      <Helmet>
        <meta charSet='UTF-8'></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <meta name='description' content="Store Homepage"></meta>
        <title>Homepage</title>
      </Helmet>
      <Banner title="Banner">
        <BannerText>Modern Shopping Made Easy</BannerText>
      </Banner>
      <ProductGrid />
    </main>
  );
}

export default HomePage;