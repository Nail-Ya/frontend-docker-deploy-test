import React, { useEffect } from 'react';
import Layout from 'containers/Layout';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { loadTestData } from 'store/user/ActionCreators';
import axios from 'axios';

function Utilities() {
  const dispatch = useAppDispatch();
  const {
    testData,
  } = useAppSelector(state => state.userReducer);

  useEffect(() => {
    dispatch(loadTestData());
  }, []);

  // console.log('testData', testData)

  // const request = axios.get('http://10.1.104.91:8080/api/v1/tasks/?limit=10&offset=1');
  // request.then((response)=>{
  //   console.log(response.headers);
  // });

  return (
    <Layout>
      <h1>TEST</h1>
    </Layout>
  );
}

export default Utilities;
