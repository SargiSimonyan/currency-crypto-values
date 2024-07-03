// import { useState, useEffect } from 'react';
// export default function Layout(){
  
//   const [name, setName] = useState(null);
//   const [value, setValue] = useState(null);
//   const [icon, setIcon] = useState(null);
//   const [priceChange, setPriceChange] = useState(null)


//   const [name1, setName1] = useState(null);
//   const [value1, setValue1] = useState(null);
//   const [icon1, setIcon1] = useState(null);
//   const [priceChange1, setPriceChange1] = useState(null)


//   const [name2, setName2] = useState(null);
//   const [value2, setValue2] = useState(null);
//   const [icon2, setIcon2] = useState(null);
//   const [priceChange2, setPriceChange2] = useState(null)

//   const data = [
//     {id: 0, name: name, surname: value, priceChange: priceChange, icon: icon },
//     {id: 1, name: name1, surname: value1, priceChange: priceChange1, icon: icon1 },
//     {id: 2, name: name2, surname: value2, priceChange: priceChange2, icon: icon2 },
//   ];
//   useEffect(()=>{
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         'X-API-KEY': 'jhJ9IDDpHbxG7UMByUEvhgoyT9wpANIfUJACRuI+D7k='
//       }
//     };
//     fetch('https://openapiv1.coinstats.app/coins', options)
//       .then(response => response.json())
//       .then((response) =>{
//               setName(response.result[0].id)
//               setValue(response.result[0].price)
//               setIcon(response.result[0].icon)
//               setPriceChange(response.result[0].priceChange1h)  
//       })
//       .catch(err => console.error(err));

//   }, [ name, value, icon, priceChange]);

    
//   useEffect(()=>{
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         'X-API-KEY': 'jhJ9IDDpHbxG7UMByUEvhgoyT9wpANIfUJACRuI+D7k='
//       }
//     };
//     fetch('https://openapiv1.coinstats.app/coins', options)
//       .then(response => response.json())
//       .then((response) =>{
//               setName1(response.result[1].id)
//               setValue1(response.result[1].price)
//               setIcon1(response.result[1].icon)
//               setPriceChange1(response.result[1].priceChange1h)  
//       })
//       .catch(err => console.error(err));

//   }, [ name1, value1, icon1, priceChange1]);

//   useEffect(()=>{
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         'X-API-KEY': 'jhJ9IDDpHbxG7UMByUEvhgoyT9wpANIfUJACRuI+D7k='
//       }
//     };
//     fetch('https://openapiv1.coinstats.app/coins', options)
//       .then(response => response.json())
//       .then((response) =>{
//               setName2(response.result[2].id)
//               setValue2(response.result[2].price)
//               setIcon2(response.result[2].icon)
//               setPriceChange2(response.result[2].priceChange1h)  
//       })
//       .catch(err => console.error(err));

//   }, [ name2, value2, icon2, priceChange2])

//   const priceUp = true
//   const peiceDown = false
//   return(
//     <>
//      <table border="1" style={{ width: '70%', margin: '20px auto', borderCollapse: 'collapse', backgroundColor: 'azure' }}>
//       <thead>
//         <tr>
//           <th></th>
//           <th>Name</th>
//           <th>Price</th>
//           <th></th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, index) => (
//           <tr key={index}>
//             <img width = "24px" src = {item.icon}/>
//             <td>{item.name}</td>
//             <td>{item.surname}</td>
//             <td>{item.priceChange}</td>
//             <RiseOutlined style={{fontSize: '25px', color: "green"}}/>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//     </>
//   )
// }
import PageLoader from './loader';
import React, { useEffect, useState } from 'react';
import {Pricechange} from './pricechange';
export default function Layout () {
  const [coins, setCoins] = useState([]);
  // const [load, setLoad] = useState(true);


  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'X-API-KEY': 'jhJ9IDDpHbxG7UMByUEvhgoyT9wpANIfUJACRuI+D7k='
      }
    };

    fetch('https://openapiv1.coinstats.app/coins', options)
      .then(response => response.json())
      .then(data => {
        const filteredCoins = data.result.filter(coin => 
             coin.symbol === 'BTC' 
          || coin.symbol === 'ETH'
          || coin.symbol === 'USDT' 
          || coin.symbol === 'BNB' 
          || coin.symbol === 'SOL' 
          || coin.symbol === 'STETH'   
          || coin.symbol === 'XRP' 
        );
        setCoins(filteredCoins);
      })
      .catch(err => console.error('Error fetching coins:', err));
  }, []);

  return (
    <table border="1" style={{ width: '80%', margin: '20px auto', borderCollapse: 'collapse', backgroundColor: 'none' }}>
      <thead>
        <tr>
          <th>Coin</th>
          <br/>
          <th>Price</th>
          <th>Price Change (1h)</th>
        </tr>
      </thead>
      <tbody>
        {coins.map((coin, index) => (
          <tr key={index}>
            <img src = {coin.icon} width = "30px" />
            <td>{coin.symbol}</td>
            <td>${coin.price.toFixed(2)}</td>
            <td>{coin.priceChange1h}%</td>
            <Pricechange coinprice = {coin.priceChange1h}/>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

