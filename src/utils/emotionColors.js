// import happyCard from "../assets/happyCard.svg";
// import surprisedCard from "../assets/surprisedCard.svg";
// import anxietyCard from "../assets/anxietyCard.svg";
// import angryCard from "../assets/angeryCard.svg";
// import sadCard from "../assets/sadCard.svg";
// import neutralCard from "../assets/neutralCard.svg";

// import happinessHighlight from "../assets/happinessHighlight.svg";
// import surprisedHighlight from "../assets/surprisedHighlight.svg";
// import anxietyHighlight from "../assets/anxietyHighlight.svg";
// import angerHighlight from "../assets/angerHighlight.svg";
// import sadnessHighlight from "../assets/sadnessHighlight.svg";
// import neutralHighlight from "../assets/neutralHighlight.svg";

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
//     name: "불안했던",
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

export { getColors };
