import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Menu from '../../Components/Menu';
import BannerMain from '../../Components/BannerMain';
import Carousel from '../../Components/Carousel';
import Footer from '../../Components/Footer';
import categoryRepository from '../../repositories/categories';

const AppWrapper = styled.div`
  background: var(--grayDark);
  padding-top: 94px;
  @media (max-width: 800px){
    padding-top: 40px;
  }
`;

function App() {
  const [initialData, setInitialData] = useState([]);

  useEffect(() => {
    categoryRepository.getAllCategoriesWithVideos()
      .then((categoryWithVideos) => {
        setInitialData(categoryWithVideos);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <AppWrapper>
      <Menu />

      {initialData.length === 0 && (<div>Loading...</div>)}

      {initialData.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={initialData[0].videos[0].title}
                url={initialData[0].videos[0].url}
                videoDescription=""
              />
              <Carousel
                ignoreFirstVideo
                category={initialData[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}

      <Footer />
    </AppWrapper>
  );
}

export default App;
