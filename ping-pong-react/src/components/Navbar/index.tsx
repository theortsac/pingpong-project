import { Link } from "react-router-dom";
import './styles.css';

const navbar = () => {
return (
<div>
<div className='PageLinkF'>
<Link to="/">
  <button className='NavButton'>
    See Players
  </button>
</Link>
</div>
<br />
<div className='PageLink'>
<Link to="/matches">
  <button className='NavButton'>
    See Matches
  </button>
</Link>
</div>
<br />
<div className='PageLink'>
<Link to="/addData">
  <button className='NavButton'>
    Add Data
  </button>
</Link>
</div>
</div>
);
}

export default navbar;