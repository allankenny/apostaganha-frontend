import logo from "../../assets/logo.svg";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { useNavigate } from "react-router-dom";

export function Nav(){
  const auth = useAuth();
  const history = useNavigate();
  
  async function logout(){
    try{
      await auth.logout();
      history('/login')
    }catch(error){
      console.log(error);
    }
  }

  return(
    <nav className="w-full h-20 bg-white border-b border-gray-200 flex justify-center items-center content-center">
      <div className="w-full max-w-7xl h-full m-auto flex items-center justify-between">
        <div>
          <img width={300} src={logo} alt="logo Aposta Ganha"/>
        </div>
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <p>Bem vindo</p>
          <button 
            className="py-2 px-4 rounded bg-primary text-white  hover:bg-orange-600 transition duration-150 ease-in-out"
            onClick={logout}
          >
            Logout
          </button> 
        </div>
      </div>
    </nav>
  )
}