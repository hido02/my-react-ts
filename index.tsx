import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // react-redux의 Provider 임포트
import store from './store'; // Redux 스토어 임포트
import App from './App'; // 애플리케이션 컴포넌트 임포트

// 애플리케이션을 <Provider>로 감싸고 Redux 스토어를 제공
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
