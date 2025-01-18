import React from 'react';
import './body.css';
import Trangchu from './trangchu.tsx';
import Gioithieu from './gioithieu.tsx';
import Nganhnghe from './tinhnang.tsx';
import Caidat from './caidat.tsx';
import Banggia from './banggia.tsx';

function Body() {
  
  return (
    <div className="body">
        <Trangchu />
        <Gioithieu />
        <Nganhnghe />
        <Caidat />
        <Banggia />
    </div>
  );
}

export default Body;
