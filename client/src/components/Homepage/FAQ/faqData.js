// Local image imports from your assets folder
import faqCollageImg from './assets/faq-collage.jpg';
import faqDogImg from './assets/faq-dog.jpg';
import faqBouquetImg from './assets/faq-bouquet.jpg';

export const faqIntroData = {
  subtitle: 'FAQ',
  title: "We're Here",
  titleCursive: 'to Help',
  description: 'Every crochet piece has a story. Here are some answers to the most common questions you might have before we create yours.',
  collageImage: faqCollageImg,
  footerBouquetImage: faqBouquetImg
};

export const faqAccordionData = [
  {
    id: 'recreate-pet',
    question: 'Can you recreate my pet or a real person?',
    answer: "Absolutely! Send us clear photos and any special details you'd like to include. Our artisans will carefully handcraft a piece that captures their unique charm and personality.",
    iconKey: 'heart',
    expandedImage: faqDogImg // Uses the custom dog-profile layout
  },
  {
    id: 'completion-time',
    question: 'How long does it take to complete a custom order?',
    answer: 'Typically, it takes 2 to 3 weeks to design, stitch, and pack a custom order depending on its complexity and our current queue.',
    iconKey: 'yarn'
  },
  {
    id: 'colors-details',
    question: 'Can I choose the colors and details?',
    answer: 'Yes! We discuss and finalize all color palettes, yarn types, and micro-details with you during the planning phase before stitching begins.',
    iconKey: 'palette'
  },
  {
    id: 'gift-wrapping',
    question: 'Do you offer gift wrapping and notes?',
    answer: 'Every elnor creation is beautifully wrapped with care and can include a hand-written premium parchment card with your personalized message.',
    iconKey: 'gift'
  },
  {
    id: 'shipping-destinations',
    question: 'Do you ship across India and internationally?',
    answer: 'We offer secure, tracking-enabled shipping across India. International shipping is also available upon request based on destination rates.',
    iconKey: 'shipping'
  },
  {
    id: 'keepsake-care',
    question: 'How should I care for my crochet keepsake?',
    answer: 'We recommend gentle spot cleaning with a damp cloth and mild soap. Avoid machine washing or harsh scrubbing to preserve the delicate hand-stitching.',
    iconKey: 'leaf'
  },
  {
    id: 'returns-refunds',
    question: 'What if I’m not happy with my order?',
    answer: 'Because every custom order is handcrafted to your specific story, we share progress photos before shipping to ensure you are completely happy with the piece.',
    iconKey: 'heart-outline'
  }
];