import React from 'react'
import{ Button,Grid,Box }  from '@mui/material'
import { useNavigate } from "react-router-dom";

import './Assets/styles.css'

function WelcomeHome() {
  const navigate = useNavigate();

  const navigateTologin = () => {
    navigate(`/cards`);
    }

  return (
    <div className='containerWelcome'>
        <Grid >
              <Box className='itemWelcome'>
                  <h1>The Challenge Cards</h1>
                  
              </Box>
              <Box className='itemWelcome'>
                  <label>I'm ready to see the challenge</label>
              </Box>
              <Box className='itemWelcome'>
                <div className='buttonContainer'>
                <Button
                  onClick={navigateTologin} 
                  variant="contained" 
                  className='buttonWelcome'>I'm ready!</Button>
                </div>
                
              </Box>
        </Grid>
    </div>
  )
}

export default WelcomeHome
