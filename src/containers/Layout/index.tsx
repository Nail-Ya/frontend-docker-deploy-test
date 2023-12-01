import React, { ReactNode } from "react";
import styled from "styled-components/macro";
import { Link } from "react-router-dom";
import URLS from "constants/urls";

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const LayoutChildrenContainer = styled.div`
  flex: 1 1 auto;
`;

interface Props {
  children: ReactNode;
};

const Layout = React.forwardRef(({ children }: Props, ref) => {
  return (
    <LayoutContainer ref={ref}>
      <LayoutChildrenContainer>
        <>
          <Link to={URLS.HOME}>home</Link>
          <Link to={URLS.MAIN}>main</Link>
          <Link to={URLS.MAIN1}>main1</Link>
          <Link to={URLS.MAIN2}>main2</Link>
        </>
        {children}
      </LayoutChildrenContainer>
    </LayoutContainer>
  );
});

export default Layout;
