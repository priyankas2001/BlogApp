import { useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError } from './postsSlice';

import PostsExcerpt from './PostsExcerpt';


const PostsList = () => {

  const posts = useSelector(selectAllPosts);
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
      const orderedPosts = posts.posts.slice().sort((a, b) => b.date.localeCompare(a.date))
      console.log(">>>>>>>>",orderedPosts);
      content = orderedPosts.map((post,index) => <PostsExcerpt key = {index} post = {post} />)
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
