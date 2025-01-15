import React from 'react';
import './body.css';
import Trangchu from './trangchu.tsx';
import Gioithieu from './gioithieu.tsx';
import Nganhnghe from './nganhnghe.tsx';
import Caidat from './caidat.tsx';
import Lienhe from './lienhe.tsx';

function Body() {
    // console.log(secondColor);
  return (
    <div>
        <Trangchu />
        <Gioithieu />
        <Nganhnghe />
        <Caidat />
        <Lienhe />
    </div>
  );
}

export default Body;
