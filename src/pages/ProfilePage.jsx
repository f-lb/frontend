import styled from "styled-components";
import ProfileImg from "../assets/profile_img.svg";
import BasicImg from "../assets/basic.svg";
import ArrowRight from "../assets/arrowRight.svg";
import NewIcon from "../assets/new.svg";

export default function ProfilePage() {
  return (
    <Wrapper>
      <Nav>프로필</Nav>
      <ProfileSection>
        <ProfileImageWrapper>
          <ProfileImage src={ProfileImg} alt="Profile" />
          <Badge src={BasicImg} alt="Basic Badge" />
        </ProfileImageWrapper>
        <ProfileName>티라미수1</ProfileName>
        <ProfileEmail>fill_intheblank@filb.com</ProfileEmail>
      </ProfileSection>
      <Menu>
        <MenuItem>
          <MenuItemContent>
            <span>회원정보 수정</span>
            <Arrow src={ArrowRight} alt="Arrow Right" />
          </MenuItemContent>
        </MenuItem>
        <MenuItem>
          <MenuItemContent>
            <span>구독 관리</span>
            <Arrow src={ArrowRight} alt="Arrow Right" />
          </MenuItemContent>
        </MenuItem>
        <MenuItem>
          <MenuItemContent>
            <MenuItemText>
              공지사항
              <New src={NewIcon} alt="New" />
            </MenuItemText>
            <Arrow src={ArrowRight} alt="Arrow Right" />
          </MenuItemContent>
        </MenuItem>
        <MenuItem>
          <MenuItemContent>
            <span>이벤트</span>
            <Arrow src={ArrowRight} alt="Arrow Right" />
          </MenuItemContent>
        </MenuItem>
      </Menu>
      <Footer>
        <FooterButton>로그아웃</FooterButton>|
        <FooterButton>회원 탈퇴</FooterButton>
      </Footer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  box-sizing: border-box;
  width: 375px;
  height: 100vh; /* 화면 높이에 맞춤 */
  margin: 0 auto;
  font-family: Pretendard, sans-serif;
  background: #FFF;
  display: flex;
  flex-direction: column;
  position: relative; /* 상대 위치 지정 */
`;

const Nav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  font-size: 18px;
  font-weight: bold;
`;

const ProfileSection = styled.div`
  height: 171px; 
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  background: var(--750, #1F1F1F);
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  margin-bottom: 16px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const Badge = styled.img`
  position: absolute;
  bottom: -17px; 
  left: 50%;
  transform: translateX(-50%);
  width: 68px;  
  height: 26px; 
`;

const ProfileName = styled.div`
  color: var(--gray-50, #FAFAFA);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%; /* 24px */
  letter-spacing: -0.4px;
  margin-top: 16px;
`;

const ProfileEmail = styled.div`
  margin-top: 4px;
  color: var(--gray-600, #828282);
  text-align: center;
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: -0.42px;
`;

const Menu = styled.div`
  display: flex;
  height: 244px;
  flex-direction: column;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 62px;
  padding: 0 16px;
  box-sizing: border-box;
  cursor: pointer;
`;

const MenuItemContent = styled.div`
  display: flex;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  width: 344px;
  height: 26px;
  border-bottom: 1px solid var(--gray-300, #E0E0E0);
`;

const MenuItemText = styled.span`
  display: flex;
  align-items: center;
`;

const New = styled.img`
  margin-left: 4px;
  width: 16px;
  height: 16px;
`;

const Arrow = styled.img`
  width: 24px;
  height: 24px;
`;

const Footer = styled.div`
  color: var(--gray-400Neutral, #C5C5C5);
  margin-top: 230px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const FooterButton = styled.button`
  color: var(--gray-400Neutral, #C5C5C5);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;
