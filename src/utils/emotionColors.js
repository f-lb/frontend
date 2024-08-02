import happyCard from 'src/assets/happyCard.svg';
import surprisedCard from 'src/assets/surprisedCard.svg';
import anxietyCard from 'src/assets/anxietyCard.svg';
import angryCard from 'src/assets/angryCard.svg';
import sadCard from '/src/assets/sadCard.svg';
import neutralCard from 'src/assets/neutralCard.svg';

import happinessHighlight from 'src/assets/happinessHighlight.svg';
import surprisedHighlight from 'src/assets/surprisedHighlight.svg';
import anxietyHighlight from 'src/assets/anxietyHighlight.svg';
import angerHighlight from 'src/assets/angerHighlight.svg';
import sadnessHighlight from 'src/assets/sadnessHighlight.svg';
import neutralHighlight from 'src/assets/neutralHighlight.svg';

const emotionColors = {
  0: {
    color: "#F8DF6C",
    imageUrl: happyCard,
    name: "행복",
    description: "기쁨 가득했던",
    highlightUrl: happinessHighlight
  },
  1: {
    color: "#FFB5E9",
    imageUrl: surprisedCard,
    name: "놀람",
    description: "놀람 가득했던",
    highlightUrl: surprisedHighlight
  },
  2: {
    color: "#A9E295",
    imageUrl: angryCard,
    name: "화남",
    description: "화가났던",
    highlightUrl: angerHighlight
  },
  3: {
    color: "#A9E295",
    imageUrl: anxietyCard,
    name: "불안했던",
    highlightUrl: anxietyHighlight
  },
  4: {
    color: "#C5D6F5",
    imageUrl: sadCard,
    name: "슬픔",
    description: "울적했던",
    highlightUrl: sadnessHighlight
  },
  5: {
    color: "#C5C5C5",
    imageUrl: neutralCard,
    name: "중립",
    description: "평화로웠던",
    highlightUrl: neutralHighlight
  }
};

export default emotionColors;
