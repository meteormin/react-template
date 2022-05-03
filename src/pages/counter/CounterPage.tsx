import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CounterButtons from './CounterButtons';
import { ApiClient } from '../../utils/ApiClient';
import {
  incrementByAmount,
  selectCount,
} from '../../store/reducers/counter';
import Content from '../../components/layouts/Content';

const CounterPage = () => {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(incrementByAmount(30));
  }, []);

  const client = new ApiClient('http://localhost');

  console.log(client.host);

  return (
    <Content header={'Counter'} subject={'Counter'}>
      <div>count: {count}</div>
      <CounterButtons />
    </Content>
  );
};

export default CounterPage;
