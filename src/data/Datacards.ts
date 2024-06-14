// Importe as imagens corretamente usando a sintaxe de módulo do TypeScript
import Gympass from '../../public/Cards/gympass.png';
import Mastercard from '../../public/Cards/mastercard.png';
import Pix from '../../public/Cards/pix.png';
import Totalpass from '../../public/Cards/totalpass.png';
import Visa from '../../public/Cards/visa.png';

interface Card {
    id: number;
    img: string;
}

 export const cards: Card[] = [
    { id: 1, img: Gympass },
    { id: 2, img: Mastercard },
    { id: 3, img: Pix },
    { id: 4, img: Totalpass },
    { id: 5, img: Visa }
];


console.log(cards);