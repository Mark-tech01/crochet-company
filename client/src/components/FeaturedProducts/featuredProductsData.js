// Import local images from your assets folder matching your filenames exactly
import foreverRoseImg from './assets/forever-rose.jpg';
import tulipBouquetImg from './assets/tulip-bouquet.jpg';
import sunflowerBouquetImg from './assets/sunflower-bouquets.jpg';
import coupleDollsImg from './assets/couple-dolls.jpg';
import teddyBearImg from './assets/teddy-bear.jpg';
import roseKeychainImg from './assets/rose-keychain.jpg';
import bunnyLoveImg from './assets/bunny-love.jpg';
import roseToteImg from './assets/rose-tote.jpg';

export const featuredProducts = [
  // Top Row Products
  {
    id: 'forever-rose-bouquet',
    tag: 'BEST SELLER',
    title: 'Forever Rose Bouquet',
    description: 'A bouquet that never fades, made to celebrate moments that last forever.',
    price: '₹1,899',
    image: foreverRoseImg,
    rating: 5,
    reviewsCount: 120,
    layout: 'hero',
    row: 'top'
  },
  {
    id: 'tulip-bouquet',
    tag: 'NEW',
    title: 'Tulip Bouquet',
    price: '₹1,699',
    image: tulipBouquetImg,
    rating: 5,
    reviewsCount: 42,
    layout: 'standard',
    row: 'top'
  },
  {
    id: 'sunflower-bouquet',
    tag: 'BEST SELLER',
    title: 'Sunflower Bouquet',
    price: '₹1,599',
    image: sunflowerBouquetImg,
    rating: 5,
    reviewsCount: 38,
    layout: 'standard',
    row: 'top'
  },
  // Bottom Row Products
  {
    id: 'couple-doll',
    tag: 'CUSTOMIZABLE',
    title: 'Couple Doll',
    price: '₹2,199',
    image: coupleDollsImg,
    rating: 5,
    reviewsCount: 57,
    layout: 'standard',
    row: 'bottom'
  },
  {
    id: 'teddy-bear',
    tag: 'NEW',
    title: 'Teddy Bear',
    price: '₹1,499',
    image: teddyBearImg,
    rating: 5,
    reviewsCount: 31,
    layout: 'standard',
    row: 'bottom'
  },
  {
    id: 'rose-keychain',
    tag: 'POPULAR',
    title: 'Rose Keychain',
    price: '₹599',
    image: roseKeychainImg,
    rating: 5,
    reviewsCount: 26,
    layout: 'standard',
    row: 'bottom'
  },
  {
    id: 'bunny-love',
    tag: 'NEW',
    title: 'Bunny Love',
    price: '₹1,299',
    image: bunnyLoveImg,
    rating: 5,
    reviewsCount: 19,
    layout: 'standard',
    row: 'bottom'
  },
  {
    id: 'rose-tote-bag',
    tag: 'LIMITED',
    title: 'Rose Tote Bag',
    price: '₹1,899',
    image: roseToteImg,
    rating: 5,
    reviewsCount: 17,
    layout: 'standard',
    row: 'bottom'
  }
];