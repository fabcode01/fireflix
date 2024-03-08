import React, { useState } from "react";
import { Link } from "react-router-dom";

const HomeWithoutLogin = () => {
  var mainMovie = {
    movie1:
      "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/47/e0/51/47e05179-a9c2-106f-fd1d-d0c3c845576a/859728603235_cover.jpg/1200x1200bf-60.jpg",
    movie2: "https://br.web.img3.acsta.net/pictures/22/09/13/18/54/4484521.jpg",
  };
  return (
    <div>
      <nav className="bg-[#22033a] p-6 flex bg-opacity-70 items-center justify-between fixed w-full">
        <h1 className="Brand font-bold text-white text-2xl">
          <span className="text-red-500">Fire</span>flix
        </h1>

        <div className="flex items-center gap-x-6">
          <Link to="/login">
            <button
              className="text-white font-bold hover:text-gray-300 duration-150
            "
            >
              Entrar
            </button>
          </Link>

          <Link to="/register">
            <button
              className="text-white font-bold bg-red-500 p-2 rounded-md
             hover:bg-red-700 duration-150
            "
            >
              Cadastrar
            </button>
          </Link>
        </div>
      </nav>

      <main className="grid grid-cols-1 h-full gap-y-3 xl:grid-cols-3 xl:h-screen bg-purple-950    pt-28 pb-8">
        <div
          style={{
            width: "80%",
            maxWidth: "385px",
            background: `linear-gradient(to bottom, #0000002c,#190130c9, #000000), url(${mainMovie.movie1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="imagebg h-[500px] bg-black flex flex-col items-center justify-end p-3 m-auto rounded-xl"
        >
          <h3 className="text-red-600">Novo</h3>
          <h1
            className="main-movieTitle
          text-white font-extrabold text-3xl

          "
          >
            O Jovem Viking
          </h1>

          <div className="btn flex gap-4 mb-8 mt-3">
            <button className="bg-gray-200 py-1 px-4 rounded">
              <i className="fa-solid fa-play"></i> Assistir
            </button>
            <button className="text-white">Informações</button>
          </div>
        </div>

        <div
          style={{
            width: "80%",
            maxWidth: "385px",
            background: `linear-gradient(to bottom, #0000002c,#190130c9, #000000), url(${mainMovie.movie2})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="imagebg h-[500px] bg-black flex flex-col items-center justify-end p-3 m-auto rounded-xl"
        >
          <h3 className="text-red-600">Popular</h3>
          <h1
            className="main-movieTitle
          text-white font-extrabold text-3xl

          "
          >
            Ultraman R&B-O
          </h1>

          <div className="btn flex gap-x-4 mb-8 mt-3">
            <button className="bg-gray-200 py-1 px-4 rounded">
              <i className="fa-solid fa-play"></i> Assistir
            </button>
            <button className="text-white">Informações</button>
          </div>
        </div>

        <div className="main-desc m-auto h-auto pt-8 pb-10 flex flex-col items-center p-3 max-w-[650px]">
          <h1 className="mainTilte text-center uppercase text-2xl w-full font-medium text-white">
            Desfrute de filmes emocionantes, produções independentes
            inspiradoras e obras-primas internacionais.
          </h1>

          <p className="mainDesc text-center text-gray-400 mt-7">
            E o melhor de tudo, não há taxas de assinatura ou custos ocultos.
            Nosso objetivo é proporcionar a todos uma experiência
            cinematográfica de qualidade, sem nenhum custo. Então, junte-se a
            nós e mergulhe em um mundo de filmes emocionantes, tudo
            gratuitamente, cadastre-se!
          </p>

          <Link to="/register">
            <button
              className="text-white font-bold bg-red-500 p-2 rounded-md
             hover:bg-red-700 duration-150 mt-3 mb-4
            "
            >
              Cadastrar
            </button>
          </Link>

          <p className="text-white text-center">
            Não hospedamos nenhum filme, apenas os indexamos.
          </p>
        </div>
      </main>

      <footer className="bg-black flex p-2 justify-center items-center gap-x-3">
        <p className="text-purple-600 text text-sm cursor-pointer">
          Política de Privacidade
        </p>
        <p className="text-purple-600 text text-sm cursor-pointer">
          Termos de uso
        </p>
        <p className="text-purple-600 text text-sm cursor-pointer">
          Informações
        </p>
      </footer>
    </div>
  );
};

export default HomeWithoutLogin;
