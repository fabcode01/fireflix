import { useAuthentication } from "../../hooks/useAuthentication";

import { trailer } from "../../movies/trailer";
import CarrosselMovies from "../../componentes/CarrosselMovies";

import { Link } from "react-router-dom";

const HomeLogin = ({ name }) => {
  const { logout } = useAuthentication();

  //Mudar gradiente bg
  window.addEventListener("scroll", () => {
    
  });

  return (
    <div className="app">
      <div
        id="bg-app"
        className="app h-full"
        style={{
          background: `linear-gradient(to top, #3b0764, ${trailer.color})`,
        }}
      >
        <nav className="flex justify-between text-3xl relative  p-5">
          <Link to="/">
            <h1 className="Brand font-bold text-white text-2xl">
              <span className="text-red-500">Fire</span>flix
            </h1>
          </Link>

          <h1 className="text-lg text-white">{name}</h1>

          <div className="dropdown-menu px-1 ">
            <i className="dropIcon fa-solid fa-user text-red-500 cursor-pointer"></i>

            <div className="dropdown-content absolute flex flex-col gap-3 items-center right-1 w-56 p-3 user-container bg-black bg-opacity-50 rounded text-lg">
              <i className="fa-regular fa-user text-white border-2 p-1 rounded-full"></i>
              <Link to='/perfil'>
                <button className="text-white hover:text-gray-500">
                  Meu perfil
                </button>
              </Link>
              <button
                className="text-white hover:text-gray-500"
                onClick={logout}
              >
                Sair
              </button>
            </div>
          </div>
        </nav>

        <main className="mt-10 ">
          <section className="flex items-center justify-center">
            

            <div
              style={{
                background: `linear-gradient(to top, #0c0014, #00000000), url(${trailer.bgSrc})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
              className="bg-trailer w-[350px] max-w-[511px] rounded-xl border-2 h-[500px] border-purple-300 shadow-2xl text-white flex flex-col justify-end p-2"
            >
              <h1 className="text-white text-2xl text-center font-extrabold">
                {trailer.nome}
              </h1>

              <p className="text-white text-center">{trailer.descricao}</p>

              <div className="flex justify-center gap-x-3 mb-5 mt-3">
                <button className="bg-gray-200  py-2 px-5 rounded">
                  <i className="fa-solid fa-play"></i> Assistir
                </button>
                <button className=" p-2 text-white  rounded">
                  Informações
                </button>
              </div>
            </div>
          </section>

          {/* Movies */}
          <CarrosselMovies />
        </main>
      </div>

      <footer>
        <div className="bg-black flex p-2 justify-center items-center gap-x-3 w-full">
          <p className="text-purple-600 text text-sm cursor-pointer">
            Política de Privacidade
          </p>
          <p className="text-purple-600 text text-sm cursor-pointer">
            Termos de uso
          </p>
          <p className="text-purple-600 text text-sm cursor-pointer">
            Informações
          </p>
        </div>
        <div className="bg-black flex justify-center items-center w-full">
          <h2 className="text-white">
            <span className="text-red-600">Fire</span>flix, 2024 &copy;
          </h2>
        </div>
        <div className="bg-black flex pb-3 justify-center items-center w-full">

          <p className="text-white text-center">
            Projeto criado por
            <a
              className="text-purple-400 ml-1"
              href="https://github.com/fabcode01"
              target="_blank"
            >
              <i className="fa-brands fa-github text-purple-400 mr-1"></i>Fabricio Silva
            </a>
            , com fins educacionais.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomeLogin;
