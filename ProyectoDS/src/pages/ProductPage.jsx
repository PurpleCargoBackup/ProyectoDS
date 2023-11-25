import React, { useState, useEffect } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Grid, Typography, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Card } from '@mui/material';
import backgroundImage from '../img/bg-test-2.jpg';

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
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Grid container spacing={2} justifyContent="center" alignItems="center" width="100%">
        {!isLoading && (
          <>
            {/* Left side - Product Image */}
            <Grid item xs={12} md={4} justifyContent="center" display="flex">
              <Card sx={{ border: '2px solid #D946EF', borderRadius: '10px', overflow: 'hidden', maxWidth: '200px' }}>
                <img src={data.image} alt={data.title} style={{ width: '100%', height: 'auto', maxHeight: '400px' }} />
              </Card>
            </Grid>
            {/* Right side - Product Details */}
            <Grid item xs={12} md={8}>
              <TableContainer component={Paper} sx={{ backgroundColor: '#222', color: '#D946EF', border: '2px solid #D946EF', borderRadius: '10px', maxHeight: '600px', overflow: 'auto', width: '400px' }}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{ color: '#D946EF', fontWeight: 'bold', borderBottom: '2px solid #D946EF' }}>Details</TableCell>
                      <TableCell sx={{ borderBottom: '2px solid #D946EF' }}></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell sx={{ color: '#D946EF', fontWeight: 'bold', borderBottom: '2px solid #D946EF' }}>Title</TableCell>
                      <TableCell sx={{ color: '#D946EF', borderBottom: '2px solid #D946EF' }}>{data.title}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: '#D946EF', fontWeight: 'bold', borderBottom: '2px solid #D946EF' }}>Price</TableCell>
                      <TableCell sx={{ color: '#D946EF', borderBottom: '2px solid #D946EF' }}>{data.price}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: '#D946EF', fontWeight: 'bold', borderBottom: '2px solid #D946EF' }}>Categoría</TableCell>
                      <TableCell sx={{ color: '#D946EF', borderBottom: '2px solid #D946EF' }}>{data.category}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell sx={{ color: '#D946EF', fontWeight: 'bold', borderBottom: 'none' }}>Descripción</TableCell>
                      <TableCell sx={{ color: '#D946EF', borderBottom: 'none' }}>{data.description}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
              <Grid item xs={12} md={8} sx={{ display: 'flex', marginTop: '1rem' }}>
                <Button component={RouterLink} to="/store" variant="outlined" sx={{ color: '#D946EF', borderColor: '#D946EF', '&:hover': { borderColor: '#D946EF' } }}>
                  Back to store
                </Button>
              </Grid>
            </Grid>
          </>
        )}
      </Grid>
    </div>
  );
};

export default ProductPage;
