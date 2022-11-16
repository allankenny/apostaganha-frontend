import { useAuth } from "../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/logo.svg";

export const Login = () => {
  const auth = useAuth();
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {

    if(email && password) {
      try{
        await auth.authenticate(email, password);
        history('/bets');
      }catch(error){
        console.log(error);
        alert('Email ou senha inválido');
      }
    }else{
      alert('Informe email e senha');
    }

  }

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-1 justify-center items-center">
      <div className="w-[40rem] bg-white rounded-lg p-8">
        <form>
          <div className="flex items-center justify-center mb-8">
            <img width={200} src={logo} alt="logo" />
          </div>
          <div className="mb-4">
            <input
              type="text"
              className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#f60] focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              className="form-control block w-full px-3 py-2.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-[#f60] focus:outline-none"
              id="exampleFormControlInput1"
              placeholder="Password"
              required
              value={password}
              onChange={e=> setPassword(e.target.value)}
            />
          </div>
          <div className="text-center pt-1 mb-5 pb-1">
            <button
              className="inline-block px-6 py-4 text-white font-medium text-sm leading-tight uppercase rounded shadow-md bg-[#f60] hover:bg-orange-600 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              onClick={handleLogin}
            >
              Entrar
            </button>
            <p className="mt-5 text-sm text-gray-500">Faça o login para acessar a conta</p>
          </div>
        </form>
      </div>
    </div>
  )
}
