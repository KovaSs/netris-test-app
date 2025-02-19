import React from 'react';
import { Provider } from "react-redux";

import { MainPage } from "pages/MainPage";
import { store } from "store";

export const  App: React.FC = () =>{
  return (
    <Provider store={store}>
      <MainPage />
    </Provider>
  );
}