import React, { useState, useEffect } from 'react';
import { Grid, Box, Divider, Typography, } from '@mui/material';
import { StoreItem } from '../components/StoreItem';
import { useShoppingCart } from '../context/ShoppingCartContext';

const Store = () => {
    const [storeItems, setStoreItems] = useState([]);
    const { cartQuantity } = useShoppingCart();
  
    useEffect(() => {
      // Fetch store items from the Fake Store API
      fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data) => setStoreItems(data))
        .catch((error) => console.log(error));
    }, []);
  
    return (
      <Box mt={4} display="flex" flexDirection="column" alignItems="center" width="80%" margin="auto">
        {/* Filter Bar */}
        <Box display="flex" justifyContent="space-between" mb={2} width="100%">
            <Box display="flex" alignItems="center" marginLeft="auto">
                {/* Left side: Number of results by category */}
                <Typography variant="subtitle1">
                    {`Resultados: ${storeItems.length}`}
                </Typography>
            </Box>
            <Box display="flex" gap={2} alignItems="center" marginRight="auto">
                {/* Right side: Filter options (Category, Price Sort, etc.) */}
                {/* Add your filter options here */}
                <div>Category Filter</div>
                <div>Price Sort</div>
            </Box>
        </Box>
        <Divider sx={{ width: '100%', my: 2 }} />
  
        {/* Store Items */}
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {storeItems.map((item) => (
            <Grid item key={item.id} xs={2} sm={4} md={4}>
              <StoreItem
                id={item.id}
                title={item.title}
                price={item.price}
                category={item.category}
                image={item.image}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  };
  
  export default Store;