import styled from 'styled-components';
import ProductCard from '../components/productCard';
import bannerImage from '../images/banner-image.webp';

const Banner = styled.div`
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
`;

const BannerText = styled.p`
  font-family: 'Major Mono Display', 'Courier New', Courier, monospace;
  font-size: 3rem;
  z-index: 1;
  user-select: none;
`



function HomePage() {
  return (
    <main>
      <Banner title="Banner">
        <BannerText>Modern Shopping Made Easy</BannerText>
      </Banner>
      <ProductCard />
    </main>
  );
}

export default HomePage;