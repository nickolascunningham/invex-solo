import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Item({item}) {
   
    return (
        <p className="item">
            { item.title }
        </p>
    )
}

export default Item;