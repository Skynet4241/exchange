import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  background: linear-gradient(
    89.96deg,
    #f3e8e8 0.04%,
    rgba(255, 255, 255, 0) 99.97%
  );
  color: #fff;
  height: 100px;
  padding: 0 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderLogo = styled(NavLink)`
  text-decoration: none;
  color: #c5010a;
  margin-right: 40px;
  font-weight: 700;
  font-size: 16px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const LeftTabs = styled.div`
  display: flex;
  align-items: center;
`;
export const TabLink = styled(NavLink)`
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.9;
  &:not(:last-child) {
    margin-right: 40px;
  }

  &.active {
    border-bottom: 2px solid #fff;
    padding-bottom: 6px;
    margin-bottom: -6px;
  }
`;

export const RightTabs = styled.div`
  display: flex;
  align-items: center;
`;
export const NavButton = styled(NavLink)`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
export const Button = styled.button`
  width: 128px;
  height: 48px;
  display: inline-block;

  font-weight: 700;
  font-size: 16px;
  color: ${props => (props.isActive ? '#ffffff' : '#333')};
  /* background-color: ${props => (props.isActive ? '#8b2d75' : '#FA3C45')}; */
  background-image: ${props =>
    props.isActive
      ? 'linear-gradient(to bottom right, #e98ed4, #562e67)'
      : 'linear-gradient(to bottom right, #FA3C45, #FFB199)'};
  border: 2px solid #333;
  border-radius: 8px;
  font-size: 16px;
  text-decoration: none;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
  }
`;
