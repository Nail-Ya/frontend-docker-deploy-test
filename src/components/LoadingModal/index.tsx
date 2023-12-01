import React from 'react';
import styled from "styled-components/macro";
import LoadingIndicator from 'components/LoadingIndicator';

export const Spinner = styled(LoadingIndicator)`
  position: absolute;
  width: 50px;
  height: 80px;
  display: inline-block;
  left: calc(50% - 25px);
  top: calc(50% - 40px);
  margin: 0;
  padding: 0;
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;

interface Props {
  loading: boolean;
}

const LoadingModal = ({ loading }: Props) => {
  return (
    <>
      {
        loading &&
        <Container>
          <Spinner color='#FFFFFF' />
        </Container>
      }
    </>
  )
}

export default LoadingModal;
