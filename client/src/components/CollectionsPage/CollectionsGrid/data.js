// components/CollectionsPage/CollectionsGrid/data.js

// 1. Everlasting Florals Imports
import floralsHero from "../assets/florals-hero.jpg";
import roseThumb from "../assets/rose-thumb.jpg";
import tulipThumb from "../assets/tulip-thumb.jpg";
import sunflowerThumb from "../assets/sunflower-thumb.jpg";
import mixedThumb from "../assets/mixed-thumb.jpg";
import birthflowerThumb from "../assets/birthflower-thumb.jpg";

// 2. Personalized Keepsakes Imports
import keepsakesHero from "../assets/keepsakes-hero.jpg";
import coupleDollsImg from "../assets/couple-dolls.jpg";
import babyKeepsakeImg from "../assets/baby-keepsake.jpg";

// 3. Home & Lifestyle Imports
import lifestyleHero from "../assets/lifestyle-hero.jpg";
import craftsmanshipImg from "../assets/craftsmanship.jpg";
import plantsThumb from "../assets/plants-thumb.jpg";
import bagsThumb from "../assets/bags-thumb.jpg";
import decorThumb from "../assets/decor-thumb.jpg";
import keychainsThumb from "../assets/rose-keychain.jpg";

// 4. Seasonal & Exclusive Import
import seasonalHero from "../assets/seasonal-hero.jpg";

export const collectionsData = {
  florals: {
    num: "01",
    category: "Everlasting Florals",
    tagline: "Flowers that never fade,\nlike the moments they hold.",
    image: floralsHero,
    link: "/collections/florals",
    previews: [
      { name: "Roses", image: roseThumb },
      { name: "Tulips", image: tulipThumb },
      { name: "Sunflowers", image: sunflowerThumb },
      { name: "Mixed", image: mixedThumb },
      { name: "Birth Flowers", image: birthflowerThumb }
    ]
  },
  keepsakes: {
    num: "02",
    category: "Personalized Keepsakes",
    tagline: "Mini portraits of love,\nmade to be held close forever.",
    image: keepsakesHero,
    coupleDollsImage: coupleDollsImg,
    babyKeepsakeImage: babyKeepsakeImg,
    link: "/collections/keepsakes"
  },
  lifestyle: {
    num: "03",
    category: "Home & Lifestyle",
    tagline: "Thoughtful handmade pieces\nfor everyday warm moments.",
    image: lifestyleHero,
    craftsmanshipImage: craftsmanshipImg,
    link: "/collections/lifestyle",
    previews: [
      { name: "Plants", image: plantsThumb },
      { name: "Bags", image: bagsThumb },
      { name: "Home Décor", image: decorThumb },
      { name: "Keychains", image: keychainsThumb }
    ]
  },
  seasonal: {
    num: "04",
    category: "Seasonal &\nExclusive",
    tagline: "Limited collections and rare\ncollaborations, released\nwith the seasons.",
    image: seasonalHero,
    link: "/collections/exclusive"
  }
};