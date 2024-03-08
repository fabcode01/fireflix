import { filmes } from "../movies/movies2";
import { Link } from "react-router-dom";

// import Swiper core and required modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

const CarrosselMovies = () => {
  return (
    <div className="mt-8">
      <div className="flex ml-5 gap-2">
        <h1 className="text-white font-bold text-2xl mb-5">Filmes de ação</h1>
      </div>

      {/* Swiper Filmes de Acao */}
      <Swiper
        slidesPerView={3}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {filmes
          .filter(
            (filme) => filme.genero[0] == "Ação" || filme.genero[1] == "Ação"
          )
          .map((filme) => (
            <SwiperSlide key={filme.id}>
              <Link to={`/filmes/${filme.id}`}>
                <div
                  style={{
                    background: `url(${filme.capa})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                  className="h-[200px] auto hover:scale-105 cursor-pointer p-1 w-[120px] mb-4"
                ></div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>

      {/* Fim Swiper filmes de Acao */}

      {/* Swiper Filmes em Alta */}
      <div className="flex ml-5 gap-2">
        <h1 className="text-white font-bold text-2xl mb-5">Em Alta🔥</h1>
      </div>

      <Swiper
        slidesPerView={3}
        loop={true}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {filmes
          .filter((filme) => filme.emAlta == true)
          .map((filme) => (
            
              <SwiperSlide key={filme.id}>
                <Link to={`/filmes/${filme.id}`}>
                  <div
                    style={{
                      background: `url(${filme.capa})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                    }}
                    className="h-[200px] auto hover:scale-105 cursor-pointer p-1 w-[120px] mb-4"
                  ></div>
                </Link>
              </SwiperSlide>
           
          ))}
      </Swiper>
      {/* Fim filmes em alta */}

      {/* Romance */}
      <div className="flex ml-5 gap-2">
        <h1 className="text-white font-bold text-2xl mb-5">
          Filmes com Romance ❤️
        </h1>
      </div>
      <Swiper
        slidesPerView={3}
        loop={true}
        freeMode={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[FreeMode, Pagination, Autoplay]}
      >
        {filmes
          .filter(
            (filme) =>
              filme.genero[0] == "Romance" || filme.genero[1] == "Romance"
          )
          .map((filme) => (
            <SwiperSlide key={filme.id}>
              <Link to={`/filmes/${filme.id}`}>
                <div
                  style={{
                    background: `url(${filme.capa})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                  }}
                  className="h-[200px] auto hover:scale-105 cursor-pointer p-1 w-[120px] mb-4"
                ></div>
              </Link>
            </SwiperSlide>
          ))}
      </Swiper>

      
    </div>
  );
};

export default CarrosselMovies;
