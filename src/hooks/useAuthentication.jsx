// Registro

import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);

  // cleanUp MemoryLeek
  const [cancelarAcoes, setCancelarAcoes] = useState(false);

  //auth
  const auth = getAuth();

  function checkarSeEstaCancelado() {
    if (cancelarAcoes) {
      return;
    }
  }

  //Registrar usuario
  const createUser = async (data) => {
    checkarSeEstaCancelado(); //MemoryLeek

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.name,
      });

      setLoading(false);
      return user;
    } catch (error) {
      let errosDoSistema;

      if (error.message.includes("email-already")) {
        errosDoSistema = "Email já cadastrado";
      } else {
        errosDoSistema = "Ocorreu um erro, tente mais tarde";
      }

      setLoading(false);
      setError(errosDoSistema);
    }
  };

  // FIM DO REGISTER

  // Logout - sign out

  const logout = () => {
    checkarSeEstaCancelado();
    signOut(auth);
  };
  // FIM DO LOGIN

  // Login

  const login = async (data) => {
    checkarSeEstaCancelado();

    setLoading(true);
    setError(true);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      setLoading(false);
    } catch (error) {
      let errosDoSistema;

      if (error.message.includes("invalid-credential")) {
        errosDoSistema = "Email ou senha inválidos";
      } else {
        errosDoSistema = "Ocorreu um erro, tente mais tarde";
      }

      setError(errosDoSistema);
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => setCancelarAcoes(true);
  }, []); //Memory Leek

  //   Retorno das coisas para utilizar

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
