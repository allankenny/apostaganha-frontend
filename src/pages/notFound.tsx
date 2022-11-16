import logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";
export const NotFound = () => {
  const history = useNavigate();
  function goToLogin(){
    history('/login');
  }
  return (
    <div className="w-full h-screen flex flex-1 justify-center items-center flex-col">
      <div className="mb-6">
        <img width={300} src={logo} alt="logo Aposta Ganha"/>
      </div>
      <div className="flex mb-6">
        <h1>404</h1>
        <p> Pagina não encontrada</p>
      </div>
      <button 
        className="py-2 px-4 rounded bg-primary text-white  hover:bg-orange-600 transition duration-150 ease-in-out"
        onClick={goToLogin}
      >
        Login
      </button> 
    </div>
  )
}