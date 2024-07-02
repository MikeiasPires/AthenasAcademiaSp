import { useRef } from 'react';
import { products } from '../../data/Dataimagens';
import {
  ContainerMain,
  TitleInfo,
  ContainerProducts,
  Imageproduct,
  AlignContainer,
  VallueProducts,
  TitleProduct
} from './style';

export default function Mainpackage() {

const productRef = useRef<HTMLDivElement | null >(null)

function Productbuy () {
  const linkregister = 'https://wa.me/message/JJSARAA2643YE1'
  window.location.href = linkregister
}


  return (
    <ContainerMain>
      <TitleInfo>
        <h3 id='Test' ref={productRef}>ELEVE SEU TREINO</h3>
        <h4>ESCOLHA O QUE ENCAIXA COM VOCÊ</h4>
      </TitleInfo>
      <AlignContainer>
      {products.map((prod) => {
        return (
        <ContainerProducts key={prod.id} >
          <div>
        <Imageproduct productsImage={prod.images}>
          <span>{prod.title}</span>
        </Imageproduct>
          <TitleProduct style={{display:"flex"
            ,flexDirection:'column', textAlign:'center',
            marginTop:'20px'
          }}>
          <span>{prod.description}</span>
          <span>{prod.duration}</span>
          <span>{prod.days}</span>
        </TitleProduct>
        <VallueProducts>
          <label >apenas: </label>
          <button onClick={Productbuy}>
        {prod.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} / MÊS
          </button>
        </VallueProducts>
        </div>
      </ContainerProducts>
        )
      })}
      </AlignContainer>
    </ContainerMain>
  );
}
