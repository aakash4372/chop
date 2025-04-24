import React, { useState } from 'react';
import { Button, Card, CardContent, CardMedia, Grid, Pagination, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import { GiChicken, GiGoat } from "react-icons/gi";
import AOS from 'aos';
import 'aos/dist/aos.css';



const products = [
  { id: 1, name: 'Chicken Regular - WithSkin', image: '/chicken/regular.jpg', type: 'Chicken', discount: 10 },
  { id: 2, name: 'Chicken Regular - Skinless', image: '/chicken/regular2.webp', type: 'Chicken', discount: 15 },
  { id: 3, name: 'Chicken Lollipop', image: '/chicken/lollipop.jpg', type: 'Chicken', discount: 20 },
  { id: 4, name: 'Chicken Leg Piece', image: '/chicken/leg.webp', type: 'Chicken', discount: 5 },
  { id: 5, name: 'Chicken Wings', image: '/chicken/wings.webp', type: 'Chicken', discount: 10 },
  { id: 6, name: 'Chicken Bone Less', image: '/chicken/boneless.webp', type: 'Chicken', discount: 15 },
  { id: 7, name: 'Goat Heat Meat', image: '/mutton/head.jpg', type: 'Mutton', discount: 20 },
  { id: 8, name: 'Goat Meat With Bone', image: '/mutton/meatbone.jpg', type: 'Mutton', discount: 5 },
  { id: 9, name: 'Goat Meat Without Bone', image: '/mutton/meatles.avif', type: 'Mutton', discount: 10 },
  { id: 10, name: 'Goat Minced Meat(Kheema)', image: '/mutton/kheema.jpg', type: 'Mutton', discount: 15 },
  { id: 11, name: 'Goat Liver', image: '/mutton/liver.jpg', type: 'Mutton', discount: 20 },
  { id: 12, name: 'Mutton Chops Curry cut', image: '/mutton/chops.jpg', type: 'Mutton', discount: 5 },
  { id: 13, name: 'Mutton Nalli', image: '/mutton/nalli.avif', type: 'Mutton', discount: 10 },
  { id: 14, name: 'Goat Brain', image: '/mutton/brain.jpg', type: 'Mutton', discount: 15 },
  { id: 15, name: 'Goat Boti/Intestine', image: '/mutton/boti.jpg', type: 'Mutton', discount: 20 },
  { id: 16, name: 'Goat Trotters/Paaya Bones', image: '/mutton/feet.jpg', type: 'Mutton', discount: 5 },
];

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: 'auto',
  border: '1px solid #e0e0e0',
  borderRadius: '12px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
  },
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '16px',
});

const StyledButton = styled(Button)({
  margin: '0 8px',
  borderColor: 'white',
  color: 'white',
  '&:hover': {
    borderColor: 'white',
    backgroundColor: 'rgba(255, 0, 0, 0.1)',
  },
  '&.MuiButton-contained': {
    backgroundColor: '#9c0202',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#9c0202',
    },
  },
});

const StyledPagination = styled(Pagination)({
  '& .MuiPaginationItem-root': {
    color: 'white',
  },
  '& .Mui-selected': {
    backgroundColor: '#9c0202 !important',
    color: '#ffffff',
  },
  '& .MuiPaginationItem-root:hover': {
    backgroundColor: '#f580809a',
  },
});

const ImageContainer = styled('div')({
  position: 'relative',
  height: '200px',
  overflow: 'hidden',
});

const StyledCardMedia = styled(CardMedia)({
  height: '100%',
  width: '100%',
  objectFit: 'cover',
});

const DiscountBadge = styled(Box)({
  position: 'absolute',
  top: 0,
  right: 6,
  backgroundColor: '#ff0000',
  color: '#ffffff',
  padding: '5px 15px',
  fontSize: '12px',
  fontWeight: 'bold',
  clipPath: 'polygon(0 0, 100% 0, 85% 50%, 100% 100%, 0 100%, 15% 50%)',
  transform: 'translateX(25%)',
});

const ProductCardApp = () => {
  const [filter, setFilter] = useState('Chicken'); // Default to Chicken instead of All
  const [page, setPage] = useState(1);
  const itemsPerPage = 4;

  const filteredProducts = products.filter(product => product.type === filter);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const displayedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const handleFilter = (type) => {
    setFilter(type);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true,     // Trigger animation only once
    });
  }, []);
  

  return (
    <div className="bg-[#191716] p-8 flex flex-col items-center" id='services'>
      <p className="text-[#ffecad] text-3xl pt-8 font-dancing mb-2"  data-aos="fade-up">
        Our Services
      </p>
      <h2 className="text-4xl md:text-5xl font-bold pt-3 text-white  font-opensans leading-tight mb-6"  data-aos="zoom-in">
        Best Products
      </h2>

      <div className="flex justify-center mb-6 pt-7">
        <StyledButton
          variant={filter === 'Chicken' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Chicken')}
          startIcon={<GiChicken />}
        >
          Chicken
        </StyledButton>
        <StyledButton
          variant={filter === 'Mutton' ? 'contained' : 'outlined'}
          onClick={() => handleFilter('Mutton')}
          startIcon={<GiGoat />}
        >
          Mutton
        </StyledButton>
      </div>

      <Grid container spacing={4} justifyContent="center">
        {displayedProducts.map((product) => (
          <Grid item xs={12} sm={6} md={3} className="pt-10" key={product.id} sx={{ display: 'flex' }}>
            <StyledCard>
              <ImageContainer>
                <StyledCardMedia
                  component="img"
                  image={product.image}
                  alt={product.name}
                />
                {/* {product.discount > 0 && (
                  <DiscountBadge>
                    {product.discount}% OFF
                  </DiscountBadge>
                )} */}
              </ImageContainer>
              <StyledCardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  className="font-dancing"
                  sx={{
                    textAlign: 'center',
                    color: 'black',
                    minHeight: '64px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {product.name}
                </Typography>
              </StyledCardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      <div className="flex justify-center mt-8">
        <StyledPagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          size="large"
        />
      </div>
    </div>
  );
};

export default ProductCardApp;