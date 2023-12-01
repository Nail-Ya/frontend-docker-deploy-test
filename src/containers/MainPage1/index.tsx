import React from 'react';
import Layout from 'containers/Layout';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { loadTestData } from 'store/test/ActionCreators';
import { resetTestData } from 'store/test/TestSlice';

function MainPage1() {
  const dispatch = useAppDispatch();
  const { testData } = useAppSelector(state => state.testReducer);

  return (
    <Layout>
      <h1>MainPage1</h1>
    </Layout>
  );
}

export default MainPage1;
