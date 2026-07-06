// Local image imports from your assets folder
import step1Img from './assets/step1-idea.jpg';
import step2Img from './assets/step2-crafting.jpg';
import step3Img from './assets/step3-wrapping.jpg';
import step4Img from './assets/step4-delivery.jpg';

export const stepsData = [
  {
    num: '01',
    title: 'It Begins With an Idea',
    description: 'Every creation starts with inspiration and thoughtfulness, designed to touch hearts.',
    image: step1Img,
    iconKey: 'idea' // Key used to lookup the icon inside the JSX component
  },
  {
    num: '02',
    title: 'Crafted With Patience',
    description: 'Our artisans handcraft each piece with time, skill and unwavering attention to every little detail.',
    image: step2Img,
    iconKey: 'crafting'
  },
  {
    num: '03',
    title: 'Wrapped Like a Gift',
    description: 'Thoughtfully wrapped with elegant touches because the unboxing should be as special as what\'s inside.',
    image: step3Img,
    iconKey: 'wrapping'
  },
  {
    num: '04',
    title: 'Ready to Create a Memory',
    description: 'Delivered beautifully to their doorstep, ready to become a cherished memory that lasts forever.',
    image: step4Img,
    iconKey: 'delivery'
  }
];