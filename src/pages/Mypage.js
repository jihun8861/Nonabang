import React from "react";
import { Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import styled from "styled-components";
import Main from "../components/Main";
import MyInfo from "../components/MyInfo";
import RecentlyView from "../components/RecentlyView";
import WishList from "../components/WishList";

const Container = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px 0 100px 0;
`;

const Frame = styled.div`
  width: 85%;
  height: auto;
`;

const HeaderListFrame = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
  border-bottom: solid 3px #f9f9f9;
`;

const HeaderList = styled.div`
  width: 230px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  color: ${(props) => (props.active ? "#FE8C12" : "black")};
  border-bottom: ${(props) => (props.active ? "solid 3px #FE8C12" : "none")};
  transition: border-bottom 0.3s ease, color 0.3s ease;
  margin-bottom: -3px;

  &:hover {
    color: #fe8c12;
  }
`;

const Mypage = () => {
  const location = useLocation();

  return (
    <Main>
      <Container>
        <Frame>
          <HeaderListFrame>
            <Link to="/Mypage/myinfo" style={{ textDecoration: 'none' }}>
              <HeaderList active={location.pathname === "/Mypage/myinfo" || location.pathname === "/Mypage"}>
                <h2>내 정보</h2>
              </HeaderList>
            </Link>
            <Link to="/Mypage/wishlist" style={{ textDecoration: 'none' }}>
              <HeaderList active={location.pathname === "/Mypage/wishlist"}>
                <h2>찜한 방</h2>
              </HeaderList>
            </Link>
            <Link to="/Mypage/recentlyview" style={{ textDecoration: 'none' }}>
              <HeaderList active={location.pathname === "/Mypage/recentlyview"}>
                <h2>최근본 방</h2>
              </HeaderList>
            </Link>
          </HeaderListFrame>

          <Routes>
            <Route path="/" element={<Navigate to="/Mypage/myinfo" />} />
            <Route path="myinfo" element={<MyInfo />} />
            <Route path="wishlist" element={<WishList />} />
            <Route path="recentlyview" element={<RecentlyView />} />
          </Routes>
        </Frame>
      </Container>
    </Main>
  );
};

export default Mypage;
