import Ctlogo from '../../../public/Ct.svg'
import {
  GroupComponents,
  ContainerBar,
  TitleHeader,
  BarDivision
} from './styled'


export default function Headerbar() {
    
  const Scroll = () => {
    const selectid = document.getElementById('Test')
    if(selectid){
      window.scrollTo({
        behavior:'smooth',
        top:selectid.offsetTop -  20,
      })
    } 
  }

  const Homesroll = () => {
    const selectid = document.getElementById('Homeref')
    if(selectid){
      window.scrollTo({
        behavior:'smooth',
        top:selectid.offsetTop -  100,
      })
    } 
  }


  function ClickEndress (){
    const location = 'https://www.google.com/maps?ll=-23.558353,-46.801738&z=15&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=Av.+Santiago+Rodilha,+199+-+Veloso+Osasco+-+SP+06154-000'
    window.location.href = location
  }

  function Registrationclick(){
   const linkregister = 'https://wa.me/message/JJSARAA2643YE1'
    window.location.href = linkregister
  }

  return (
    <>
    <ContainerBar>
      <div>
         <div>
          <img src={Ctlogo} alt="Logo" width={150} />
        </div>
      </div>
      <GroupComponents>
        <TitleHeader>
            <span onClick={Homesroll}>Home</span>
            <span onClick={Scroll}>Planos</span>
            <span onClick={ClickEndress}>Unidade</span>
          <button onClick={Registrationclick}>MATRICULAS ABERTAS</button>
            </TitleHeader>
      </GroupComponents>
    </ContainerBar>
    < BarDivision id='Homeref'/>
    </>
  );
}
