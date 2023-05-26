import React from 'react'
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import './Assets/styles.css'

function Footer(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/sktvera">
      CHALLENGE CARDS
      </Link>{' '}
      {new Date().getFullYear()}
      {'All rights reserved SKTVERA-DEV.'}
    </Typography>
  );
}

export default Footer
