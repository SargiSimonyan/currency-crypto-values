import { RiseOutlined, FallOutlined } from '@ant-design/icons'


export  function Pricechange (coinprice) {
  if(coinprice.coinprice >= 0){
    return (
      <RiseOutlined style={{fontSize: '25px', color: "green"}}/>
    )
  }else{
    return(
      <FallOutlined style={{fontSize: '25px', color: "red"}}/>
    )
  }
}