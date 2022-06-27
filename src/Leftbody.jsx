import * as React from 'react'
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Axios from "axios";

const baseURL = "http://localhost:3000/todos";


function Leftbody() {

  const [post1, setPost] = React.useState([]);

      
  React.useEffect(() => {
    Axios.get(baseURL).then((response) => {
   
      setPost(response.data);
   
    });
  }, []);

  const theme = useTheme();
  return (
    <div>
      <h1 style={{color:'#009270',fontSize:'24px',marginTop:'5px'}}>Recent Blogs</h1>

      {
  post1.map((n)=>{
    return(
      <Card sx={{ display: 'flex' , marginLeft:'10px' ,marginRight:'10px',marginTop:'20px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column', width:'250px' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography  component="div" variant="h5">
            {n.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {n.category}
          </Typography>
        </CardContent>
      </Box>
      <CardMedia style={{}}
        component="img"
        sx={{ width: 101 }}
        // image="/static/images/cards/live-from-space.jpg"
      src={n.image}
        alt="Live from space album cover"
      />
    </Card>
      )
    })
  }

      {/* <Card sx={{ display: 'flex' , marginLeft:'10px' ,marginRight:'10px',marginTop:'20px'}}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography  component="div" variant="h5">
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Mac Miller
          </Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 101 }}
        // image="/static/images/cards/live-from-space.jpg"
      src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"
        alt="Live from space album cover"
      />
    </Card> */}

    

    </div>
  )
}

export default Leftbody