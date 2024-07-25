import React from "react";
import { useLocation, Link } from "react-router-dom";

const ViewUserDetails = (_) => {
  const { state } = useLocation();
  console.log(state);
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