import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo_color_break from '../assets/images/logo_color_break.svg';
import TeamProjects from '../components/TeamProjectsSection/TeamProjects';
import _ from 'lodash';

const Layout: React.FC = () => {
  // 메인 페이지 레이아웃입니다. 컴포넌트는 Main태그 안에 넣어주세요.
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = _.throttle(() => {
      const viewPosition = window.scrollY;
      const isScrollingDown = scrollPosition < viewPosition;
      const isScrollingUp = scrollPosition > viewPosition;
      setIsHidden(isScrollingDown && viewPosition > 200);

      if (isScrollingUp) {
        setIsHidden(false);
      }

      setScrollPosition(viewPosition);
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);

  return (
    <>
      <Header $isHide={isHidden}>
        <h1>
          <a href='#'>
            <img src={logo_color_break} alt='main logo' />
          </a>
        </h1>
        <GlobalNavBar>
          <ul>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'>Member</a>
            </li>
            <li>
              <a href='#'>Portfolio</a>
            </li>
          </ul>
        </GlobalNavBar>
      </Header>
      <Main>
        {/* 컴포넌트는 이곳에 넣어주세요. */}
        <TeamProjects />
      </Main>
    </>
  );
};

export default Layout;

interface HeaderProps {
  $isHide: boolean;
}

const Header = styled.header<HeaderProps>`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #fff;
  height: 80px;
  width: 100%;
  position: sticky;
  top: ${({ $isHide }) => ($isHide ? '-80px' : '0')};
  margin-bottom: 100vh;
  transition: top 0.3s ease-in-out;
  z-index: 100;
  & > h1 {
    & > a {
      display: block;
      height: 100%;
      & > img {
        height: 100%;
      }
    }
  }
`;
const GlobalNavBar = styled.nav`
  & > ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    & > li {
      margin: 0 1rem;
      & > a {
        text-decoration: none;
        color: #000;
        font-size: 16px;
        font-weight: bold;
        transition: color 0.2s ease-in-out;
        &:hover {
          color: #b88f63;
        }
      }
    }
  }
`;
const Main = styled.main`
  width: 100%;
  overflow-x: clip;
`;
