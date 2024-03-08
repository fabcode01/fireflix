// Hook
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { useAuthentication } from "./hooks/useAuthentication";

// Contextos
import { AuthProvider } from "./context/AuthContext";

//pages
import HomeWithoutLogin from "./pages/HomeWithoutLogin/HomeWithoutLogin";
import HomeLogin from "./pages/HomeLogin/HomeLogin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { Movie } from "./pages/Movie/Movie";

function App() {
  const [user, setUser] = useState(undefined);

  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return (
      <div className="flex flex-col bg-purple-950 items-center justify-center h-screen">
        <i
          className="fa-solid fa-circle-notch text-white
            animate-spin text-3xl
            "
        ></i>
        <p className="text-white">Aguarde</p>
      </div>
    );
  }

  return (
    <>
      <AuthProvider value={{ user }}>
        <BrowserRouter>
          <Routes>
            {/* Pagina de Home | se tiver usuario leva pra HomeLogin se não leva pra Home pra cadastrar */}

            <Route
              path="/"
              element={user ? <HomeLogin name={user.displayName} /> : <HomeWithoutLogin />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />

            <Route
              path='/filmes/:id' element={<Movie/>}/>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
