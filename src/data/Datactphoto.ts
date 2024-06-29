import image1 from '../../public/Academiapost/photo1.jpg'
import image2 from '../../public/Academiapost/photo2.jpg'
import image3 from '../../public/Academiapost/photo3.jpg'
import image4 from '../../public/Academiapost/photo4.jpg'
import image5 from '../../public/Academiapost/photo5.jpg'
import image6 from '../../public/Academiapost/photo6.jpg'

interface post {
id: number,
image: string,
}

export const imagePost: post[] = [ 
    {
        id:1,
        image: image1
    },
    {
        id:2,
        image: image2
    },
    {
        id:3,
        image: image3
    },
    {
        id:4,
        image: image4
    },
    {
        id:5,
        image: image5
    },
    {
        id:6,
        image: image6
    },

]