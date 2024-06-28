import ScrollReveal from 'scrollreveal';
import {imagePost} from  '../../data/Datactphoto'
import { useEffect, useRef, useState } from 'react';
import {
    ContainerHistory,
    TextTitle,
    BarDivision,
    GroupContainer
} from './style';

import './styleCarrs.css'

export default function ContentHistory() {

    const title = useRef(null)

    useEffect(()=> {
          ScrollReveal().reveal(title.current, {
            duration: 1000,
            delay: 200 
          });
      },[])
    
 console.log(imagePost)     

    return (
        <ContainerHistory>
            <GroupContainer>
                <TextTitle>
                    <h1 ref={title}>NÃO SÓ UMA ACADEMIA </h1>
                    <BarDivision />
                    <span>Explore nossa academia especializada em Muay Thai,
                        Boxe e Fight Circuit, onde oferecemos<br />
                        treinos desafiadores para todos os níveis.<br />
                        Garanta já sua matrícula<br />
                        e comece sua jornada de bem-estar conosco.<br />
                        Comprometidos com a excelência,<br />
                        estamos aqui para impulsionar seus objetivos.</span>
                </TextTitle>
                {imagePost.map((post) => {
                    return <>
                      <image src={}/>
                    </>
                })}
            </GroupContainer>
        </ContainerHistory>
    );
}
