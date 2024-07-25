import React from "react";
import { useLocation, Link } from "react-router-dom";

const Blogs = (_) => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <div>
        <div>
         blog
        </div>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};
export default Blogs;