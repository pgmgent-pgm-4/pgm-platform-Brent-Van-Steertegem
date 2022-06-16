import { NavLink } from 'react-router-dom';
import { Card } from 'reactstrap';

const PostSummaryComponent = ({post}) => {
  return (
    <Card className='post'>
      <NavLink className='post__link' to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </NavLink>   
    </Card>
  )
};

export default PostSummaryComponent;