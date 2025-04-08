import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteBlog, getBlog } from "../../api/blog";

export default function Blog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  const onDelete = async ()=>{
    deleteBlog(id);
    navigate('/');

  }

  useEffect(()=>{

    const load = async () => {
      const data = await getBlog(id);
      setBlog(data);
    }
  
    load();
  },[id])
  if(!blog) return <div>Loading..</div>
  return (
    <div>
      <h1>{blog.title}</h1>
      <div>
        <Link to='/'>Back</Link>
        <Link to='update/' style={{ marginLeft: "10px" }}>
          Edit
        </Link>
        <button style={{ marginLeft: "10px" }} onClick={onDelete}>Delete</button>
      </div>
      <hr />
      <p>{blog.content}</p>
    </div>
  );
}
