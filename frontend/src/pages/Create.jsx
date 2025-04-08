import { Link, useNavigate } from "react-router-dom";
import { createBlog } from "../../api/blog";

export default function Create() {
  const navigate = useNavigate();
  const create = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const content = e.target.content.value;
    await createBlog(title,content);
    navigate('/')
  };

  return (
    <form onSubmit={create}>
      <h1>Create</h1>
      <Link to="/">Back</Link>
      <br />
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" name="title" />
      <br />
      <label htmlFor="content">Content</label>
      <br />
      <textarea name="content"></textarea>
      <br />
      <input type="submit" value="Create" />
    </form>
  );
}
