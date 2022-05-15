import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
        <div>
            <Link to="/" className='Logo'>MyPokedex</Link>
        </div>
    </nav>
  )
}

export default Navbar