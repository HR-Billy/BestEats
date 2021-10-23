import * as React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
// import { Container, Box } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const ProductHeroLayoutRoot = styled('section')(({ theme }) => ({
  color: theme.palette.common.white,
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.up('sm')]: {
    height: '75vh',
    minHeight: 600,
    maxHeight: 1000,
  },
}));

const Background = styled(Box)(() => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  zIndex: -2,
}));

function ProductHeroLayout(props) {
  const { sxBackground, children } = props;

  return (
    <ProductHeroLayoutRoot>
      <Container
        sx={{
          mt: 15,
          mb: 14,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* <img
          src="/static/themes/onepirate/productHeroWonder.png"
          alt="wonder"
          width="147"
          height="80"
        /> */}
        {children}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            backgroundColor: 'common.black',
            opacity: 0.0,
            zIndex: -1,
          }}
        />
        <Background sx={sxBackground} />
        {/* <Box
          component="img"
          src="/static/themes/onepirate/productHeroArrowDown.png"
          height="16"
          width="12"
          alt="arrow down"
          sx={{ position: 'absolute', bottom: 32 }}
        /> */}
      </Container>
    </ProductHeroLayoutRoot>
  );
}

// ProductHeroLayout.propTypes = {
//   children: PropTypes.node,
//   sxBackground: PropTypes.object,
// };

export default ProductHeroLayout;