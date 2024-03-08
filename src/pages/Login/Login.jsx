import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import { useAuthentication } from "../../hooks/useAuthentication";

const Login = () => {
  // Alterar visibilidade da senha:
  const [type, setType] = useState("password");
  const handlePasswordVisibility = () => {
    if (type == "text") {
      setType("password");
    } else {
      setType("text");
    }
  };

  // usuario
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Erros
  const [error, setError] = useState();

  const { login, error: AuthError, loading } = useAuthentication();

  // Funcao para formulario

  const handleSubmit = async (e) => {
    

    e.preventDefault();
    setError("");

    const user = {
      email,
      password
    };

    const res = await login(user);
  };

  // mapear a chegada de erro do hook de autenticacao e juntar com erro do front

  useEffect(() => {
    if (AuthError) {
      setError(AuthError);
    }
  }, [AuthError]);

  return (
    <div>
      <nav className="bg-purple-950 p-6 flex items-center justify-between fixed w-full">
        <Link to="/">
          <h1 className="Brand font-bold text-white text-2xl text-center">
            <span className="text-red-500">Fire</span>flix
          </h1>
        </Link>

        <Link to="/register">
          <button
            className="text-white font-bold hover:text-gray-300 duration-150
            "
          >
            Cadastrar
          </button>
        </Link>
      </nav>

      <main className="bg-purple-950 h-screen flex flex-col items-center pt-32 ">
        <div>
          {error && <h3 className="text-center text-red-600">{error}</h3>}
        </div>

        <div>
          <h1 className="text-white font-bold text-2xl">Volte a assistir!</h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-2/3"
        >
          <input
            className="outline-none text-white  mb-4 mt-4 h-11 p-3 rounded bg-transparent border-2 focus:text-white"
            type="email"
            placeholder="Endereço de Email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="border-2 rounded flex justify-between items-center ">
            <input
              className="outline-none text-white h-11 p-3 rounded bg-transparent focus:text-white"
              type={type}
              placeholder="Senha"
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
            />

            <i
              className={
                type == "text"
                  ? "fa-solid fa-eye text-white mr-5 cursor-pointer"
                  : "fa-solid fa-lock text-white mr-5 cursor-pointer"
              }
              onClick={handlePasswordVisibility}
            ></i>
          </div>

          <p className="text-white mt-2 cursor-pointer">Esqueceu a senha?</p>

          <input
            type="submit"
            value="Login"
            className="bg-purple-900 text-white font-bold p-3 rounded-lg mt-5 hover:bg-purple-800 duration-150 cursor-pointer"
          />
        </form>

        <p className="text-white mt-3 text-sm">Problemas com login?</p>
      </main>

      <footer className="bg-black flex p-2 justify-center items-center gap-x-3 fixed bottom-0 w-full">
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

export default Login;
