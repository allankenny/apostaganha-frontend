import { useEffect, useState,useContext } from "react";
import { Nav } from "../components/Nav"
import { useFetch } from "../hooks/useFetch";
import { AuthContext } from "../context/AuthProvider";
import { format } from "date-fns";
import { Loading } from "../components/Loading"

type Bets = { 
  time1: string;
  time2: string;
  createdAt: string;
  _id: string;
  hash: string;
  betQuote: string;
  amount: string;
}

export const Bets = () =>{
  const context = useContext(AuthContext);
  const {data} = useFetch<Bets[]>(`${import.meta.env.VITE_APP_API_URL}/bets/${context.id}`, `${context.token}`);

  function formatDate(date: string){
    const dateConvert = Date.parse(date)
    return format(new Date(dateConvert), 'dd/MM/yyyy - hh:mm');
  }

  return (
    <>
      <Nav />
      <div className="w-full max-w-7xl bg-white m-auto p-6 mt-4 rounded">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-lg font-semibold text-gray-800">Confira suas apostas</h1>
          <span className="text-gray-400 text-xs">Boa sorte!</span>
        </div>
        <div>
          {!data ? (
            <Loading />
          ):(
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="border-b">
                        <tr>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                          Jogo  
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Cotação
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Valor da Aposta
                          </th>
                          <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-right">
                            Data das apostas
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                      {data?.map(bet =>{
                        return (
                          <tr className="border-b" key={bet._id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 text-left">
                              {bet.time1} X {bet.time2}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                              {bet.betQuote}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left">
                              {bet.amount}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-right">
                              {formatDate(bet.createdAt)}
                            </td>
                          </tr>
                        )  
                      })}  
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}