import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getBlogs } from "../../api/blog";



export default function Blogs() {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);

  const load = async () => {

    const data = await getBlogs();

    setLoading(false);
    setBlogs(data);
  };

  useEffect(() => {
    load();
  }, []);

  if (loading) return <div>Loading</div>;
  return (
    <div>
      <h1>Blogs</h1>
      <hr />
      <Link to="create/">Create</Link>
      <ol>
        {blogs.map((blog)=>(
          <li key={blog.ID} ><Link to={`${blog.ID}`}>{blog.title}</Link></li>
        ))}
      </ol>

    </div>
  );
}
