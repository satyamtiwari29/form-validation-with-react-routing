import "./style.css";
import {Link} from "react-router-dom";



function Navbar(props)
{
  function getClassName ()
  {
    return `${props.className? props.className: ''}`
  }
  return(
    <>
    <nav className={getClassName()}>
    <ul>
    <li>
<Link to='/'> Homepage</Link>
</li>
<li>
<Link to='/about'>About Us</Link>
</li>
<li>
<Link to='/contact'>Contact</Link>
</li>
<li>
<Link to='/logIn'>LogIn</Link>
</li>
<li>
<Link to='/register'>Register</Link>
</li>


</ul>
</nav>
    </>
  )
};
export default Navbar;