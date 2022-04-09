const express = require("express");
const hbs = require("hbs");

const tiktok = require("./tiktok");
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "hbs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});

app.get("/:user/video/:videoid", async (req, res) => {
  let tiktokURL = `https://www.tiktok.com/${req.params.user}/video/${req.params.videoid}`;
  let videoURL = await tiktok.getVideoURL(tiktokURL);
  res.render("main", {
    video_url: videoURL,
    user: req.params.user,
    original_url: tiktokURL,
  });
});

app.listen(port, () => console.log(`Running at http://localhost:${port}`));
