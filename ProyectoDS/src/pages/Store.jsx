import React, { useState, useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { StoreItem } from '../components/StoreItem';

const Store = () => {
  const [storeItems, setStoreItems] = useState([]);

  useEffect(() => {
    // Fetch store items from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setStoreItems(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
        <Typography variant="h1" gutterBottom textAlign='center'>
            Store nav placeholder
        </Typography>
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
    </div>
  );
};

export default Store;
