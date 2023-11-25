import React, { useState, useEffect } from 'react';
import { Grid, Box, Divider, Typography, Select, MenuItem, Button } from '@mui/material';
import { StoreItem } from '../components/StoreItem';
import backgroundImage from '../img/bg-test-1.jpg';
import { useNavigate, useLocation } from 'react-router-dom';


const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayMessage, setDisplayMessage] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Fetch store items from the Fake Store API
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setStoreItems(data))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('search');
    setSearchQuery(query || '');
    // Clear the selected category when searching
    setSelectedCategory('All');
  }, [location.search]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortToggle = () => {
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };

  const handleQueryChange = (filteredItems) => {
    setDisplayMessage(searchQuery !== ''
    ? `Mostrando resultados para "${searchQuery}"`
    : `Resultados: ${filteredItems ? filteredItems.length : 0}`
  );
  }

  const filterStoreItems = () => {
    // Filter and sort store items based on the selected category and sort order
    let filteredItems = storeItems;
  
    if (selectedCategory !== 'All') {
      filteredItems = filteredItems.filter((item) => item.category === selectedCategory);
    }
  
    if (searchQuery !== '') {
      // Filter based on search query
      filteredItems = filteredItems.filter((item) =>
        item.title.toLowerCase().startsWith(searchQuery.toLowerCase())
      );
    }
  
    return filteredItems.sort((a, b) => (sortOrder === 'asc' ? a.price - b.price : b.price - a.price));
  };

  useEffect(() => {
    const filteredItems = filterStoreItems();
    
    if (searchQuery !== '' && selectedCategory !== 'All') {
      setDisplayMessage(`Mostrando resultados para "${searchQuery}" en ${selectedCategory}`);
    } else if (searchQuery !== '') {
      setDisplayMessage(`Mostrando resultados para "${searchQuery}"`);
    } else if (selectedCategory !== 'All') {
      setDisplayMessage(`Mostrando resultados en ${selectedCategory}`);
    } else {
      setDisplayMessage(`Resultados: ${filteredItems.length}`);
    }
  }, [searchQuery, storeItems, selectedCategory, sortOrder]);

  return (
    <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', margin: 'auto', paddingTop: '4rem' }}>
      <Box display="flex" flexDirection="column" alignItems="center" width="80%" margin="auto">
        {/* Filter Bar */}
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          backgroundColor="#222"
          borderRadius={2}
          border="2px solid #D946EF"
          color="#D946EF"
          paddingTop={1}
          paddingBottom={1}
        >
          <Typography variant="subtitle1" marginLeft={2}>
            {displayMessage || `Resultados: ${filterStoreItems().length}`}
          </Typography>
          <Box display="flex" gap={2} alignItems="center" marginRight={2}>
            {/* Right side: Filter options (Category, Price Sort, etc.) */}
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              variant="outlined"
              sx={{
                color: '#D946EF',
                '& fieldset': {
                  borderColor: '#D946EF',
                },
                '&:hover fieldset': {
                  borderColor: '#D946EF',
                },
                '& .MuiSelect-icon': {
                  color: '#D946EF',
                },
                '& .MuiOutlinedInput-root': {
                  '&.Mui-focused': {
                    borderColor: '#D946EF',
                  },
                },
                '& .MuiPaper-root': {
                  backgroundColor: '#222',
                },
                '& .MuiMenuItem-root': {
                  color: '#D946EF',
                },
                '& .MuiListItem-button:hover': {
                  backgroundColor: '#333',
                },
              }}
              MenuProps={{
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                transformOrigin: {
                  vertical: 'top',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              }}
            >
              <MenuItem value="All">All Categories</MenuItem>
              <MenuItem value="electronics">Electronics</MenuItem>
              <MenuItem value="men's clothing">Men's Clothing</MenuItem>
              <MenuItem value="women's clothing">Women's Clothing</MenuItem>
              <MenuItem value="jewelery">Jewelery</MenuItem>
              {/* Add more categories as needed */}
            </Select>
            {/* Sorting buttons */}
            <Button
              onClick={handleSortToggle}
              variant="outlined"
              sx={{
                color: '#D946EF',
                borderColor: '#D946EF',
                '&:hover': {
                  borderColor: '#D946EF',
                },
              }}
            >
              {sortOrder === 'asc' ? 'Menor precio' : 'Mayor precio'}
            </Button>
          </Box>
        </Box>
        <Divider sx={{ width: '100%', my: 2 }} />

        {/* Store Items */}
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {filterStoreItems().map((item) => (
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
    </div>
  );
};

export default Store;
