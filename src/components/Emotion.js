import styled from "styled-components";

export const Emotions = styled.div`
  display: flex;
  gap: 3px;
`;

export const Emotion = styled.div`
  background-color: ${({ $color }) => $color};
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;