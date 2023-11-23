import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { formatCurrency } from './../utilities/formatCurrency';
import { useShoppingCart } from '../context/ShoppingCartContext'
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
  } from '@mui/material';

export function StoreItem({ id, title, price, category, image }) {
    const {
      getItemQuantity,
      increaseCartQuantity,
      decreaseCartQuantity,
      removeFromCart,
    } = useShoppingCart();
    const quantity = getItemQuantity(id);
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
  
    const handleCardClick = () => {
      // Navigate to the product page when the card is clicked
      navigate(`/products/${id}`);
    };
  
    return (
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardActionArea onClick={handleCardClick}>
          <CardMedia
            component="img"
            height="250"
            image={image}
            alt={title}
            sx={{ objectFit: 'cover' }}
          />
          <CardContent>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                mb: '4',
              }}
            >
              <Typography>{title}</Typography>
              <Typography>{formatCurrency(price)}</Typography>
            </div>
            <Typography sx={{ display: 'flex' }}>
              <span>{category}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          sx={{
            marginTop: 'auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {quantity === 0 ? (
            <Button onClick={() => increaseCartQuantity(id)} sx={{ width: 1 }}>
              + Agregar al carrito
            </Button>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <Button
                  onClick={() => decreaseCartQuantity(id)}
                  variant="outlined"
                  size="small"
                >
                  -
                </Button>
                <div>
                  <span>{quantity}</span> en orden
                </div>
                <Button
                  onClick={() => increaseCartQuantity(id)}
                  variant="outlined"
                  size="small"
                >
                  +
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                size="small"
                variant="outlined"
                color="warning"
              >
                Eliminar
              </Button>
            </div>
          )}
        </CardActions>
      </Card>
    );
  }