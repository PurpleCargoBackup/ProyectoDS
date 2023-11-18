import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import Drawer from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { formatCurrency } from "../utilities/formatCurrency";
import { useEffect, useState } from "react";

export function ShoppingCart({ isOpen }) {
    const { closeCart, cartItems } = useShoppingCart();
    const [storeItems, setStoreItems] = useState([]);
  
    useEffect(() => {
      // Fetch store items from the Fake Store API
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setStoreItems(data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <Drawer anchor="right" open={isOpen} onClose={closeCart}>
        <div style={{ width: '550px', padding: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={closeCart}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h6" gutterBottom>
            Carro de compras
          </Typography>
          <Stack spacing={3}>
            {cartItems.map((cartItem) => (
              <CartItem key={cartItem.id} id={cartItem.id} quantity={cartItem.quantity} />
            ))}
          </Stack>
          <div style={{ marginRight: 'auto', fontWeight: 'bold', fontSize: '1.25rem' }}>
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </div>
      </Drawer>
    );
  }