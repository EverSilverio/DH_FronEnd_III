import ProdutoCSS from './Produto.css';

const produtos = [
   {
     nome: "Macbook Air 13 Chip M1 256gb",
     image: "https://m.media-amazon.com/images/I/41O807iqbCL._AC_SX522_.jpg",
     preco: "R$ 7999.00",
   },
   {
     nome: "Echo Dot (4ª Geração)",
     image: "https://m.media-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg",
     preco: "R$ 379.00",
   },
   {
     nome: "Câmera Ip Sem Fio 360°",
     image: "https://m.media-amazon.com/images/I/51F70OM213S._AC_SL1000_.jpg",
     preco: "R$ 199.00",
   },
   {
     nome: "Fechadura Eletrônica Digital Inteligente Zigbee",
     image: "https://m.media-amazon.com/images/I/51RXeqMLceL._AC_SL1500_.jpg",
     preco: "R$ 1599.00",
   }
 ];   

function Produto() {
   return (
      <>
         <h1>Produtos</h1>
         <ul>
            {
               produtos.map( (produto, idx) => 
                  <li key={`list-produto${idx}`}>
                     <h2>{produto.nome}</h2>
                     <img src={produto.image} height="100px"/>
                     <h3>{produto.preco}</h3>
                  </li>   
                  )       
            }
         </ul>      
      </>
   )
}

export default Produto;