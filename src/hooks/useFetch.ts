import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch<T = unknown>(url:string, token:string){
  const [data, setData] = useState<T | null>(null);
  useEffect(()=>{
    axios.get(url, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    .then((res) => {
      setData(res.data)
    })
    .catch((error) => {
      console.error(error)
    })
  },[]);

  return {data}
}