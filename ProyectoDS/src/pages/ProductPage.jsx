import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Typography, Link, Grid, Button } from '@mui/material';

const ProductPage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((response) => {
        setData(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2}>
      {!isLoading && (
        <>
          {/* Left side - Product Image */}
          <Grid item xs={12} md={6} sx={{ marginRight: '40px' }}>
            <img src={data.image} alt={data.title} style={{ maxWidth: '100%', height: 'auto', maxHeight: '400px', width: 'auto' }} />
          </Grid>
          {/* Right side - Product Details */}
          <Grid item xs={12} md={6}>
            <Typography sx={{ mb: 2 }}>{data.title}</Typography>
            <Typography sx={{ mb: 2 }}>Price: {data.price}</Typography>
            <Typography sx={{ mb: 2 }}>Categoría: {data.category}</Typography>
            <Typography sx={{ mb: 2 }}>Descripción: {data.description}</Typography>
            <Button component={RouterLink} to="/store" variant="contained">
              Back to store
            </Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};

export default ProductPage;