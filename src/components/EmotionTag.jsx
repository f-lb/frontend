
import styled from 'styled-components';
const EmotionTag = ({ emotion }) => {
    // 감정에 따른 색상을 매핑하기 위한 객체 정의
    const emotionColors = {
        행복: '#ffe156',   // Happiness
        불쾌감: '#AEE39B', // Displeasure
        두려움: '#8A8A8A', // Fear
        놀람: '#FFB0E0',   // Surprise
        분노: '#FFB199',   // Anger
        슬픔: '#C5D6F5'   // Sadness
    };

    // emotion prop에 따라 배경색 가져옴
    const backgroundColor = emotionColors[emotion] || 'transparent';

    return (
        <Tag backgroundColor={backgroundColor}>
            #{emotion}
        </Tag>
    );
};

// 태그를 위한 스타일 컴포넌트
const Tag = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  background-color: ${props => props.backgroundColor};
  color: #404040;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 600;
  border-radius: 20px;
  border: 0.5px solid #8A8A8A;
  margin: 4px;
`;

export default EmotionTag;
