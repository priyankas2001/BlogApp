import { useSelector } from 'react-redux';
import { selectPostIds, getPostsStatus, getPostsError } from './postsSlice';

import PostsExcerpt from './PostsExcerpt';


const PostsList = () => {

  const orderedPostIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);
  // console.log(posts.posts);
  // console.log(postStatus);
    let content;
    if (postStatus === 'loading') 
    {
      content = <p>"Loading Page.."</p>;
    } 
    else if (postStatus === 'succeeded') 
    {
      content = orderedPostIds.map(postId => <PostsExcerpt key={postId} postId={postId} />)
    }
    else if (postStatus === 'failed')
    {
      content = <p>{error}</p>;
    }

  return (
    <section>
        {/* <h2>Posts</h2> */}
        {content}
    </section>
  )
}

export default PostsList
