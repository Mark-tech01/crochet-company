// Import local images from your local assets folder using your exact filenames
import roseBouquetsImg from './assets/rose-bouquets.jpg';
import tulipGardenImg from './assets/assettulip-garden.jpg'; // Matches your filename exactly
import coupleDollsImg from './assets/couple-dolls.jpg';
import plushCompanionsImg from './assets/plush-companions.jpg';
import sunflowerBouquetsImg from './assets/sunflower-bouquets.jpg';
import customMadeImg from './assets/custom-made.jpg';
import keychainsImg from './assets/keychains.jpg';
import readyToGiftImg from './assets/ready-to-gift.jpg';

export const collectionItems = [
  {
    id: 'rose-bouquets',
    tag: 'The Eternal Collection',
    title: 'Rose Bouquets',
    description: 'Timeless roses that never fade, made to be cherished forever.',
    image: roseBouquetsImg,
    ctaText: 'EXPLORE COLLECTION',
    linkTo: '/shop/rose-bouquets',
    layout: 'wide-dark',
  },
  {
    id: 'tulip-garden',
    tag: 'Blooming Beauty',
    title: 'Tulip Garden',
    description: 'Graceful, elegant & full of love.',
    image: tulipGardenImg,
    ctaText: 'EXPLORE',
    linkTo: '/shop/tulip-garden',
    layout: 'tall-light',
  },
  {
    id: 'couple-dolls',
    tag: 'Soulmates Collection',
    title: 'Couple Dolls',
    description: 'Made for each other, just like you two.',
    image: coupleDollsImg,
    ctaText: 'EXPLORE',
    linkTo: '/shop/couple-dolls',
    layout: 'medium-light',
  },
  {
    id: 'plush-companions',
    tag: 'Plush Friends',
    title: 'Plush Companions',
    description: 'Cute companions to hug and cherish.',
    image: plushCompanionsImg,
    ctaText: 'EXPLORE',
    linkTo: '/shop/plushies',
    layout: 'medium-dark',
  },
  {
    id: 'sunflower-bouquets',
    tag: 'Sunshine Collection',
    title: 'Sunflower Bouquets',
    description: "A little sunshine to brighten someone's day.",
    image: sunflowerBouquetsImg,
    ctaText: 'EXPLORE COLLECTION',
    linkTo: '/shop/sunflower-bouquets',
    layout: 'wide-light-flipped',
  },
  {
    id: 'made-for-you',
    tag: 'Custom Made',
    title: 'Made For You',
    description: 'Your vision, our hands, one-of-a-kind creations.',
    image: customMadeImg,
    ctaText: 'EXPLORE',
    linkTo: '/custom-order',
    layout: 'small-light',
  },
  {
    id: 'keychains-minis',
    tag: 'Little Extras',
    title: 'Keychains & Minis',
    description: 'Tiny details that bring big smiles.',
    image: keychainsImg,
    ctaText: 'EXPLORE',
    linkTo: '/shop/keychains-minis',
    layout: 'small-light',
  },
  {
    id: 'ready-to-gift',
    tag: 'Thoughtful Gifts',
    title: 'Ready to Gift',
    description: 'Beautifully wrapped creations for every special moment.',
    image: readyToGiftImg,
    ctaText: 'EXPLORE',
    linkTo: '/shop/ready-to-gift',
    layout: 'small-light',
  }
];