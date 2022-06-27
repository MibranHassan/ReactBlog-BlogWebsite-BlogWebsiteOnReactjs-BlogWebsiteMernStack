import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'
import Axios from "axios";

const baseURL = "http://localhost:3000/todos";




function CardExampleCard() {
    const [post1, setPost] = React.useState([]);

      
React.useEffect(() => {
  Axios.get(baseURL).then((response) => {
 
    setPost(response.data);
 
  });
}, []);



  return (
    <div>
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
{/* <Card style={{width:'335px',marginRight:'10px'}}>
    <Image style={{marginLeft:'100px'}}  src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80' width={120} wrapped ui={false} />
    <Card.Content>
      <Card.Header style={{color:'#000',fontSize:'22px',fontWeight:'600'}}>{post1.title}</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description style={{paddingBottom:'10px'}}>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    {/* <Card.Content extra>
      <a>
        <Icon name='user' />
        22 Friends
      </a>
    </Card.Content> */}
  {/* </Card> */}
    </div> 
  )
}

export default CardExampleCard