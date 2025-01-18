import React from 'react';
import './App.css';
import Header from './widget/header/header.tsx';
import Body from './widget/body/body.tsx';
import Footer from './widget/footer/footer.tsx';
import Backtoptop from './components/backtoptop/backtoptop.tsx';
import HeaderMobile from './widget/header/headermobile.tsx';

function App() {
  
  return (
    <div className="App">
      <HeaderMobile />
      <Header />
      <Body />
      <Footer />
      <Backtoptop />
    </div>
  );
}

export default App;
