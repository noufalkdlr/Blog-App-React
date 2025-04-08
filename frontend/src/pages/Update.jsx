import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getBlog, updateBlog } from "../../api/blog";

export default function Update() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [blog, setBlog] = useState(null);

  const load = async () => {
    const data = await getBlog(id);
    setBlog(data);
  };

  useEffect(() => {
    load();
  }, []);

  const handleUpdate = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    await updateBlog(id, title, content);
    navigate("/");
  };

  if (!blog) return <div>Loading</div>;

  return (
    <form onSubmit={handleUpdate}>
      <h1>Update Blog {id}</h1>
      <Link to={`/${id}/`}>Back</Link>
      <br />
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" name="title" defaultValue={blog.title} />
      <br />
      <label htmlFor="content">Content</label>
      <br />
      <textarea name="content" defaultValue={blog.content}></textarea>
      <br />
      <input type="submit" value="Update" />
    </form>
  );
}
