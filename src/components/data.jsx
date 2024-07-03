import { useEffect, useState } from "react";
import request from "./request";
export default function Data () {
  const [text, setText] = useState("")
  
      ///FOR COINSTATE///
              useEffect(()=>{
                const options = {
                  method: 'GET',
                  headers: {
                    accept: 'application/json',
                    'X-API-KEY': 'jhJ9IDDpHbxG7UMByUEvhgoyT9wpANIfUJACRuI+D7k='
                  }
                };
                fetch('https://openapiv1.coinstats.app/coins', options)
                  .then(response => response.json())
                  .then((response) => setText(response.result[0].id + " " + "=" + " " + response.result[0].price) )
                  .catch(err => console.error(err));
              }, [text])


      ///FOR COINGECO///
    // useEffect(()=>{
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //       accept: 'application/json',
    //       'x-cg-demo-api-key': 'CG-2LeUCHApWKy9xEHsownjXrLV	'
    //     }
    //   };
    //   fetch('https://api.coingecko.com/api/v3/coins/list', options)
    //     .then(response => response.json())
    //     .then((response) => setText(response[0].id) )
    //     .catch(err => console.error(err));
    // }, [text])
  return (
    <>
    <br/>
    <div style={{
      width: "200px",
      height: "200px",
      backgroundColor: "white"
    }}>
      {text}
    </div>
    </>
  )
}

