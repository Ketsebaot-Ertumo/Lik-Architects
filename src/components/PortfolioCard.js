import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';



const portfolioCard = ({ id, title, content, file, showPosts, }) => {



  return(
    <div className="mb-5">
      <Card  sx={{bgcolor: '#F5F6FC',width: {
        xs: 300, // Full width on extra small screens (up to 600px)
        sm: 300, // Fixed width on small screens (up to 960px)
        md: 450, // Fixed width on medium screens (up to 1280px)
        lg: 580, // Fixed width on large screens (up to 1920px)
        xl: 580, // Fixed width on extra large screens (above 1920px)
        
      }, borderRadius: '4px', boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.25)'}} 
      className="h-[100%] fold-width font-inter sm:mr-3 sm:mb-0">

        <CardMedia
          component={file.includes('.mp4') ? 'video' : 'img'}
          height="194"
          src={file}
          alt=""
          controls={file.includes('.mp4')}
          className='bg-white-grey w-[100%] sm:h-[80%]'
        />


        <CardActions className='bg-white-grey'>
          <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-between',}} className='text-blue-black text-2xl pl-2 pr-2' >
                  
                <Box>
                  {title}
                </Box>

          </Box>
        </CardActions>  
        
     </Card>
    </div>
  );
}

export default portfolioCard;

    
