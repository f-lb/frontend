import happyCard from "../assets/happyCard.png";
import surprisedCard from "../assets/surprisedCard.png";
import anxietyCard from "../assets/anxietyCard.png";
import angryCard from "../assets/angryCard.png";
import sadCard from "../assets/sadCard.png";
import neutralCard from "../assets/neutralCard.png";

// const emotionColors = {
//   0: {
//     color: "#F8DF6C",
//     imageUrl: happyCard,
//     name: "행복",
//     description: "기쁨 가득했던",
//     highlightUrl: happinessHighlight,
//   },
//   1: {
//     color: "#FFB5E9",
//     imageUrl: surprisedCard,
//     name: "놀람",
//     description: "놀람 가득했던",
//     highlightUrl: surprisedHighlight,
//   },
//   2: {
//     color: "#A9E295",
//     imageUrl: angryCard,
//     name: "화남",
//     description: "화가났던",
//     highlightUrl: angerHighlight,
//   },
//   3: {
//     color: "#A9E295",
//     imageUrl: anxietyCard,
//     name: "불안",
//     highlightUrl: anxietyHighlight,
//   },
//   4: {
//     color: "#C5D6F5",
//     imageUrl: sadCard,
//     name: "슬픔",
//     description: "울적했던",
//     highlightUrl: sadnessHighlight,
//   },
//   5: {
//     color: "#C5C5C5",
//     imageUrl: neutralCard,
//     name: "중립",
//     description: "평화로웠던",
//     highlightUrl: neutralHighlight,
//   },
// };

const getColors = (color) => {
  switch (color) {
    case 0:
      return "#F8DF6C";
    case 1:
      return "#FFB5E9";
    case 2:
      return "#ffb394";
    case 3:
      return "#A9E295";
    case 4:
      return "#C5D6F5";
    default:
      return "#C5C5C5";
  }
};

const getEmotion = (type) => {
  switch (type) {
    case 0:
      return "기쁨";
    case 1:
      return "놀람";
    case 2:
      return "화남";
    case 3:
      return "불안";
    case 4:
      return "슬픔";
    default:
      return "중립";
  }
};

const getCover = (type) => {
  switch (type) {
    case 0:
      return happyCard;
    case 1:
      return surprisedCard;
    case 2:
      return angryCard;
    case 3:
      return anxietyCard;
    case 4:
      return sadCard;
    default:
      return neutralCard;
  }
};

export { getColors, getEmotion, getCover };
