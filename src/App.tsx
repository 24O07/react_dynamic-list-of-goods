import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const loadAll = () => {
    getAll()
      .then(setGoods)

      
  };

  const loadFirstFive = () => {
    get5First()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  const loadRed = () => {
    getRedGoods()
      .then(setGoods)
      .catch(() => setGoods([]));
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" onClick={loadAll} data-cy="all-button">
        Load all goods
      </button>

      <button type="button" onClick={loadFirstFive} data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button type="button" onClick={loadRed} data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
