import  { useEffect, useRef, } from "react"
import ScrollReveal from 'scrollreveal';
import {ContainerWallpaper,
    TitleMain,
    ButtonStyle,
    StyleMainTitle,
    StyleSecondTitle
} from './style'


export default function CoverTitle() {

  const elementtitle = useRef(null);
  const elementsubtitle = useRef(null);
  const elemntspan = useRef(null)
  const elemntsubspan = useRef(null)


  useEffect(() => {
    const sr = ScrollReveal();

    if (elementtitle.current) {
      sr.reveal(elementtitle.current, {
        duration: 1000,
        delay: 200,
      });
    }

    if (elementsubtitle.current) {
      sr.reveal(elementsubtitle.current, {
        duration: 1000,
        delay: 200,
      });
    }

    if (elemntspan.current) {
      sr.reveal(elemntspan.current, {
        duration: 2000,
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease',
      });
    }

    if (elemntsubspan.current) {
      sr.reveal(elemntsubspan.current, {
        duration: 2000,
        delay: 200,
        distance: '30px',
        origin: 'bottom',
        opacity: 0,
        easing: 'ease',
      });
    }

    
    return () => {
      sr.destroy();
    };
  }, []); 

 
  function Registrationclick(){
    const linkregister = 'https://api.whatsapp.com/message/JJSARAA2643YE1?autoload=1&app_absent=0'
     window.location.href = linkregister
   }
 


    return (
        <>
            <ContainerWallpaper>
                <TitleMain>
                <StyleMainTitle ref={elementtitle} >ACADEMIA</StyleMainTitle>
                <StyleSecondTitle ref={elementsubtitle}>ATHENAS</StyleSecondTitle>
                <span ref={elemntspan}>"MAIS QUE UMA ARTE MARCIAL, UM ESTILO DE VIDA. DESAFIE SEUS LIMITES, LIBERE SUA FORÇA."</span>
                <ButtonStyle>
                    <button onClick={Registrationclick}>
                        Participe já
                      </button>
                </ButtonStyle>
                </TitleMain>
            </ContainerWallpaper>
        </>
    )
}


