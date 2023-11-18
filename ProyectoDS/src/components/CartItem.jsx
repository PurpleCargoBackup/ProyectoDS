import { useShoppingCart } from "../context/ShoppingCartContext";
import React, { useState, useEffect } from "react";
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'
import { formatCurrency } from "../utilities/formatCurrency";

export function CartItem({ id, quantity }) {
    const { removeFromCart } = useShoppingCart()
    const [storeItems, setStoreItems] = useState([]);

    useEffect(() => {
        // Fetch store items from the Fake Store API
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setStoreItems(data))
        .catch((error) => console.log(error));
    }, []);

    const item = storeItems.find(i => i.id === id)
    if (item == null) return null

    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <img src={item.image} style={{ width: "125px", 
            height: "75px", objectFit: "cover" }} />
            <div className="me-auto">
                <div>
                    {item.title}{" "}{quantity > 1 && (<span className="text-muted" style={{ fontSize: ".75rem"}}>x{quantity}</span>)}
                </div>
                <div className="text-muted" style={{ fontSize: '0.85rem' }}>
                    {formatCurrency(item.price)}
                </div>
            </div>
            <div>
            {formatCurrency(item.price * quantity)}  
            </div>
            <Button variant='outlined' size='small' onClick={() => removeFromCart(id)}>&times;</Button>
        </Stack>
    )
}