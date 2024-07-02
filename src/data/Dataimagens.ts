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
        description: 'Segunda, Quarta, e Terça feira',
        duration: '1 hora de duração',
        days: 'Apartir das 20:30H',
        price: 120
    },
    {
        id: 2,
        images: Muaithay, 
        title: 'Muai thay',
        description: 'Todos os dias da semana',
        duration: '1 hora de duração',
        days: 'Apartir das 15H',
        price: 120
    },
    {
        id: 3,
        images: Boxekids, 
        title: ' Thay kids',
        description: 'Aulas na Terça e  Quinta feira',
        duration: '1 hora de duração',
        days: 'Apartir das 19:30H',
        price: 90
    },
    {
        id: 4,
        images: Figthcircuit, 
        title: 'Figth circuit',
        description: 'Segunda, Quarta, e Terça feira',
        duration: '1 hora de duração',
        days: 'Apartir das 16H',
        price: 120
    }
];
