import { Link } from "react-router-dom";

const navbar = () => {
return (
<div className='NavButton'>
<Link to="/">
  <button>
    See Players
  </button>
</Link>
<br />
<Link to="/matches">
  <button>
    See Matches
  </button>
</Link>
<br />
<Link to="/addData">
  <button>
    Add Data
  </button>
</Link>
</div>
);
}

export default navbar;