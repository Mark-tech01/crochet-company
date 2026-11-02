import catFloralsImg from '../assets/cat-florals.jpg';
import catCompanionsImg from '../assets/cat-companions.jpg';
import catCommissionsImg from '../assets/cat-commissions.jpg';

export const categoriesData = [
  {
    id: 'everlasting-florals',
    num: '01',
    romanNum: 'I',
    title: 'Everlasting Florals',
    description: 'Handcrafted bouquets and floral arrangements designed to capture the beauty of fresh blooms forever.',
    image: catFloralsImg,
    linkTo: '/shop/florals'
  },
  {
    id: 'keepsake-companions',
    num: '02',
    romanNum: 'II',
    title: 'Keepsake Companions',
    description: 'Soft, meaningful plush creations crafted to become treasured companions and comforting keepsakes.',
    image: catCompanionsImg,
    linkTo: '/shop/companions'
  },
  {
    id: 'bespoke-commissions',
    num: '03',
    romanNum: 'III',
    title: 'Bespoke Commissions',
    description: 'Work directly with us to transform your favorite ideas, photos, or memories into a one-of-a-kind crochet piece.',
    image: catCommissionsImg,
    linkTo: '/custom-order'
  }
];