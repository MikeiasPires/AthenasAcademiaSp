import ScrollReveal from 'scrollreveal';
import { imagePost } from '../../data/Datactphoto';
import { useEffect, useRef } from 'react';
import {
    ContainerHistory,
    TextTitle,
    BarDivision,
    GroupContainer
} from './style';


export default function ContentHistory() {

    const title = useRef(null);

    useEffect(() => {
        if(title.current){
            ScrollReveal().reveal(title.current, {
                duration: 1000,
                delay: 200
            });
        }
    }, []);


    return (
        <ContainerHistory>
            <GroupContainer>
                <TextTitle>
                    <h1 ref={title}>NÃO SÓ UMA ACADEMIA </h1>
                    <BarDivision />
                    <span>Explore nossa academia especializada em
                        <br/> Muay Thai,
                        Boxe e Fight Circuit, onde oferecemos<br />
                        treinos desafiadores para todos os níveis.<br />
                        Garanta já sua matrícula<br />
                        e comece sua jornada de bem-estar conosco.<br />
                        Comprometidos com a excelência,<br />
                        estamos aqui para impulsionar seus objetivos.</span>
                </TextTitle>
                {imagePost.map((post) => {
                    return <div key={post.id}>
                    </div>;
                })}
            </GroupContainer>
        </ContainerHistory>
    );
}
