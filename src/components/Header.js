import { Link } from 'react-router-dom';
import logo from '../assets/article.png'
// import { increaseCount, getCount } from '../features/posts/postsSlice';
// import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  // const dispatch = useDispatch()
  // const count = useSelector(getCount)
  return (
    <header className='Header'>
      <div className='Nav'>
      <img src={logo} alt='loading'  style={{height: "50px", width:"50px"}}/>
        <h1>Blog Application</h1>
        </div>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="post">Post</Link></li>
                <li><Link to="user">Users</Link></li>
            </ul>
            {/* <button onClick={() => dispatch(increaseCount())}>{count}</button> */}
        </nav>
    </header>
  )
}

export default Header
