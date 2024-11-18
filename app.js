const express = require("express");
const app = express();
const port = 3000;
const posts = [
  { title: "", content: "", img: "", tags: ["", "", ""] },
  { title: "", content: "", img: "", tags: ["", "", ""] },
  { title: "", content: "", img: "", tags: ["", "", ""] },
  { title: "", content: "", img: "", tags: ["", "", ""] },
  { title: "", content: "", img: "", tags: ["", "", ""] },
];

app.get("/bacheca", (req, res) => {
    const postCount = posts.length;
    res.json({ posts: posts, count: postCount });
});

app.listen(port, () => {
  console.log("server");
});
