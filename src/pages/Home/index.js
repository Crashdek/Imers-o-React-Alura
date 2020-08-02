import React, { useEffect, useState } from 'react';
import BannerMain from '../../componentes/BannerMain';
import Carousel from '../../componentes/Carousel';
import PageDefault from '../../componentes/PageDefault';
import categoriasRepository from '../../repositories/categorias';

function Home() {
  const [initialValues, setinitialValues] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setinitialValues(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
     {initialValues.length === 0 && (<div>Será que deu ruim irmão?</div>)}

      {initialValues.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={initialValues[0].videos[0].titulo}
                url={initialValues[0].videos[0].url}
                videoDescription={initialValues[0].videos[0].description}
              />
              <Carousel
                ignoreFirstVideo
                category={initialValues[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}

export default Home;