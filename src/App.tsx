import React from 'react';
import './App.css';
import Header from './widget/header/header.tsx';
import Body from './widget/body/body.tsx';
import Footer from './widget/footer/footer.tsx';
import Backtoptop from './components/backtoptop/backtoptop.tsx';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
      <Backtoptop />
      
    </div>
  );
}

export default App;
