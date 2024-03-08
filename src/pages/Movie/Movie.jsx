import { useParams } from "react-router-dom";
import { filmes } from "../../movies/movies2";
import { Link } from "react-router-dom";

export const Movie = () => {
  const { id } = useParams();
  // trazer filme
  const filme = filmes.filter((filme) => id == filme.id);

  const handleBackBtn = ()=>{
    history.back()
  }

  return (
    <div className="flex flex-col items-center bg-purple-950 h-screen p-5">
      <Link to="/">
            <h1 className="Brand font-bold text-white text-2xl">
              <span className="text-red-500">Fire</span>flix
            </h1>
          </Link>
      <div className="player w-full h-[203px] bg-white mt-10"></div>

      <div className="titulo w-full mt-3">
        <h1 className="text-start text-3xl font-bold text-white">
          {filme[0].titulo}
        </h1>
      </div>

      <div className="diretor-nota flex items-center w-full gap-10">
        <p className="text-red-600">{filme[0].diretor}</p>
        <p className="text-white">
          <i className="fa-solid fa-star text-yellow-500 mr-1"></i>
          {filme[0].nota}/10
        </p>
      </div>

      <div className="w-full mt-3">
        <p className="text-center text-gray-300">{filme[0].descricao}</p>
      </div>

      <div className="flex flex-col">
        <button className="bg-red-600 text-white font-bold p-2 rounded mt-5">
          <i class="fa-solid fa-heart"></i> Adicionar aos Favoritos
        </button>
        
          <button onClick={handleBackBtn} className="bg-purple-300 text-black font-bold p-2 w-full rounded mt-5">
            <i class="fa-solid fa-chevron-left"></i> Voltar
          </button>
        
      </div>

      <footer className="fixed bottom-0 w-full">
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
            Fire<span className="text-red-600">flix</span>, 2024 &copy;
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
              <i class="fa-brands fa-github text-purple-400 mr-1"></i>Fabricio Silva
            </a>
            , com fins educacionais.
          </p>
        </div>
      </footer>
    </div>
  );
};
