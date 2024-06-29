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

  return (
    <ContainerMain>
      <TitleInfo>
        <h3>ELEVE SEU TREINO</h3>
        <h4>ESCOLHA O QUE ENCAIXA COM VOCÊ</h4>
      </TitleInfo>
      <AlignContainer>
      {products.map((prod) => {
        return (
        <ContainerProducts key={prod.id} ref={productRef}>
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
          <button>
            R$ 100 / MÊS
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
