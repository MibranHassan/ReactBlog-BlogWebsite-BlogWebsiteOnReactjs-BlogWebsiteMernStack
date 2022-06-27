import React,{useState,useEffect} from 'react'
import { ListGroup, ListGroupItem , Card,Pagination } from 'react-bootstrap';
import JsonData from "./MOCK_DATA.json";
import ReactPaginate from "react-paginate";
import Axios from "axios";

// let active = 1;
// let items = [];
// for (let number = 1; number <= 10; number++) {
//   items.push(
//     <Pagination.Item key={number} active={number === active}>
//       {number}
//     </Pagination.Item>,
//   );
// }
const baseURL = "http://localhost:3000/todos";


function Centerbody() {

  const [post1, setPost] = React.useState([]);
      
  React.useEffect(() => {
    Axios.get(baseURL).then((response) => {
   
      setPost(response.data);
   
    });
  }, []);

  // const [users, setUsers] = useState(JsonData.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 5;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = post1
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="user">
         <Card style={{ width: '100%',padding:'40px 40px 40px 40px' }}>
  {/* <Card.Img style={{ width: '80%',marginLeft:'90px',height:'430px',borderRadius:'9px' }} variant="top" src='https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0='  /> */}
  <Card.Img style={{ width: '80%',marginLeft:'90px',height:'430px',borderRadius:'9px' }} variant="top" src={user.image} />

  <Card.Body style={{marginLeft:'80px',marginRight:'80px',marginTop:'10px'}}>
    <Card.Title style={{fontSize:'28px',fontWeight:'800',textTransform:'capitalize'}}> {user.title}</Card.Title>
    <Card.Text style={{textAlign:'left',fontSize:'18px',}}>
    {user.content}
      
    </Card.Text>

    <Card.Text style={{color:'#1866e2',fontWeight:'600',marginTop:'-10px',textAlign:'left'}}>
      {/* {user.email} */}
      Click Here To View More
    </Card.Text>

  </Card.Body>
  
</Card>
        </div>
      );
    });

  const pageCount = Math.ceil(post1.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };


  return (
    <div>
 {displayUsers}
 <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next >>"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
        
      />

{/* <Card style={{ width: '100%',padding:'40px 40px 40px 40px' }}>
  <Card.Img style={{ width: '80%',marginLeft:'90px',height:'430px',borderRadius:'9px' }} variant="top" src='https://media.istockphoto.com/photos/writing-a-blog-blogger-influencer-reading-text-on-screen-picture-id1198931639?k=20&m=1198931639&s=612x612&w=0&h=1OjzKK3oXsuHkX9Fhro-e_fU-aSgCaV4swBai80HLx0='  />
  <Card.Body style={{marginLeft:'80px',marginRight:'80px',marginTop:'10px'}}>
    <Card.Title style={{fontSize:'28px',fontWeight:'800',textTransform:'capitalize'}}> Some quick example text to build on the card title and make up the bulk of
      the card's content.</Card.Title>
    <Card.Text style={{textAlign:'left',fontSize:'18px',}}>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.Some quick example text to build on the card title and make up the bulk of
      the card's content.
      
    </Card.Text>

    <Card.Text style={{color:'#1866e2',fontWeight:'600',marginTop:'-10px',textAlign:'left'}}>
      Click here to view more
    </Card.Text>

  </Card.Body>
  
</Card> */}
{/* <Pagination style={{justifyContent:'right',marginTop:'10px',marginRight:'10px',color:'#009270'}}>{items}</Pagination>
    <br /> */}
    </div>
  )
}

export default Centerbody