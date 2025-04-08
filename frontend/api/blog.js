export async function getBlogs() {
    const res = await fetch("http://localhost:3000/blogs");
    const data = await res.json();
    return data;
}

export async function createBlog (title,content) {
    const res = await fetch("http://localhost:3000/blogs", {
        method: "POST",
        body: JSON.stringify({ title, content }),
        headers:{
          'Content-type': 'application/json',
        },
      });
}

export async function getBlog(id) {
    const res = await fetch(`http://localhost:3000/blogs/${id}`);
    const data = await res.json();
    return data;
}

export async function updateBlog(id, title, content) {
    const res = await fetch(`http://localhost:3000/blogs/${id}`,{
        method: "PUT",
        body: JSON.stringify({ title, content }),
        headers:{
          'Content-type': 'application/json',
        },
    })
    const data = await res.json();
    return data;
}

export async function deleteBlog(id){
  const res = await fetch(`http://localhost:3000/blogs/${id}`,{
    method: "DELETE"
  })
  const data = await res.json();
  return data;
}