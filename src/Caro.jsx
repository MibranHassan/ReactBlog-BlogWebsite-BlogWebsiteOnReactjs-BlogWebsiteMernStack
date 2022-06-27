import React, { Component } from "react";
import Slider from "react-slick";
import './Caro.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardExampleCard from "./CardExampleCard";
import { Card, Icon, Image } from 'semantic-ui-react'
import Axios from "axios";

const baseURL = "http://localhost:3000/todos";

function Caro() {

  const [post1, setPost] = React.useState([]);

      
  React.useEffect(() => {
    Axios.get(baseURL).then((response) => {
   
      setPost(response.data);
   
    });
  }, []);
    
    const settings = {
        className: "center",
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 5,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        }
    }
  return (
    <div>
      
        <Slider {...settings}>
         
        {
  post1.map((n)=>{
    return(
<Card style={{width:'335px',marginRight:'10px'}}>
    <Image style={{marginLeft:'100px'}}  src={n.image} width={120} wrapped ui={false} />
    <Card.Content>
      <Card.Header style={{color:'#000',fontSize:'22px',fontWeight:'600'}}>{n.title}</Card.Header>
      <Card.Meta>
        <span className='date'>{n.tag}</span>
      </Card.Meta>
      <Card.Description style={{paddingBottom:'10px'}}>
        {n.content}
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
  </Card>
    
    )
  })
}
         
      
        </Slider>
      </div>
    );
  }

export default Caro