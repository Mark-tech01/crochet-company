// Local image imports from your assets folder
import storyHeroImg from './assets/story-hero.jpg';
import step1Img from './assets/story-step1.jpg';
import step2Img from './assets/story-step2.jpg';
import step3Img from './assets/story-step3.jpg';
import step4Img from './assets/story-step4.jpg';
import promiseImg from './assets/story-promise.jpg';

export const storyHeroData = {
  subtitle: 'THE HEART OF KOVV',
  title: "We don't make gifts.\nWe create keepsakes.",
  description: "Some moments deserve more than a photograph. They deserve something you can hold, gift, and treasure for years. That's why every KOVV piece is handcrafted slowly—with patience, purpose, and love.",
  tagline: 'Made slowly. Loved forever.',
  image: storyHeroImg
};

export const storyStepsData = [
  {
    num: '01',
    title: 'It Starts With A Story',
    description: 'Every keepsake begins with a person, a memory, or someone worth celebrating.',
    image: step1Img,
    iconKey: 'story'
  },
  {
    num: '02',
    title: 'Crafted By Hand',
    description: 'Thousands of tiny stitches, placed one by one without rushing the process.',
    image: step2Img,
    iconKey: 'hand'
  },
  {
    num: '03',
    title: 'Wrapped With Meaning',
    description: 'Every order is prepared to feel as thoughtful as the gift inside.',
    image: step3Img,
    iconKey: 'meaning'
  },
  {
    num: '04',
    title: 'Made To Be Remembered',
    description: 'Long after fresh flowers fade, your keepsake continues telling the same story.',
    image: step4Img,
    iconKey: 'remembered'
  }
];

export const storyPromiseData = {
  title: 'A Promise In Every Stitch',
  description: "We believe the most meaningful gifts aren't measured by their price. They're measured by the smile they create, the memories they preserve, and the people they bring closer. That's the promise we make—every single time.",
  tagline: 'With love,',
  signature: 'Kovv',
  image: promiseImg
};