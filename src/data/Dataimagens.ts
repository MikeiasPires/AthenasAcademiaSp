import Boxe from '../../public/Cardsproducts/Boxe.jpg'
import Boxekids from '../../public/Cardsproducts/boxekids.jpg'
import Figthcircuit from '../../public/Cardsproducts/figthcircuit.jpg'
import Muaithay from '../../public/Cardsproducts/muaithay.jpg'

interface ProductInterface {
    id: number;
    images: string; 
    title: string;
    description: string; // Corrigido de 'desciption' para 'description'
    duration: string;
    days: string;
    price: number;
}

export const products: ProductInterface[] = [
    {
        id: 1,
        images: Boxe, 
        title: 'Boxe',
        description: '8 aulas por semana com grade aberta',
        duration: '1 hora de duração',
        days: 'segunda e sexta',
        price: 100
    },
    {
        id: 2,
        images: Muaithay, 
        title: 'Muai thay',
        description: '8 aulas por semana com grade aberta',
        duration: '1 hora de duração',
        days: 'segunda e sexta',
        price: 100
    },
    {
        id: 3,
        images: Boxekids, 
        title: 'Boxe kids',
        description: '8 aulas por semana com grade aberta',
        duration: '1 hora de duração',
        days: 'segunda e sexta',
        price: 100
    },
    {
        id: 4,
        images: Figthcircuit, 
        title: 'Figth circuit',
        description: '8 aulas por semana com grade aberta',
        duration: '1 hora de duração',
        days: 'segunda e sexta',
        price: 100
    }
];
