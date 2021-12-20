import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Item(props) {
    const dispatch = useDispatch();
    return (
        <li>
            { props.items.title }
        </li>
    )
}

export default Item;