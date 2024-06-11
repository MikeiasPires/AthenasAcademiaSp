import ScrollReveal from 'scrollreveal';
import { useEffect, useRef, useState } from 'react';
import {
    ContainerHistory,
    TextTitle,
    BarDivision,
    GroupContainer
} from './style';
import image1 from '../../../public/Academiapost/photo2.jpg'
import image2 from '../../../public/Academiapost/photo4.jpg'
import image3 from '../../../public/Academiapost/photo3.jpg'
import image4 from '../../../public/Academiapost/photo1.jpg'
import image5 from '../../../public/Academiapost/photo5.jpg'
import image6 from '../../../public/Academiapost/photo6.jpg'
import './styleCarrs.css'

export default function ContentHistory() {

    const title = useRef(null)

    const photos = [image1,image2,image3,image4,image5,image6]
    const [width, setWidth] = useState(0)
    const  carros  = useRef()

    useEffect(()=> {
          ScrollReveal().reveal(title.current, {
            duration: 1000,
            delay: 200 
          });
      },[])
    
     

    useEffect(() => {
        console.log(carros.current?.scrollWidth,carros.current?.offsetWidth)
        setWidth(carros.current?.scrollWidth - carros.current?.offsetWidth)
    },[])



    return (
        <ContainerHistory>
            <GroupContainer>
                <TextTitle>
                    <h1 ref={title}>NÃO SÓ UMA ACADEMIA </h1>
                    <BarDivision />
                    <span>Explore nossa academia especializada em Muay Thai,<br />
                        Boxe e Fight Circuit, onde oferecemos<br />
                        treinos desafiadores para todos os níveis.<br />
                        Garanta já sua matrícula<br />
                        e comece sua jornada de bem-estar conosco.<br />
                        Comprometidos com a excelência,<br />
                        estamos aqui para impulsionar seus objetivos.</span>
                </TextTitle>
                <img src={image3} width={580} height={360} alt="" />
            </GroupContainer>
        </ContainerHistory>
    );
}
