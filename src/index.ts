import config from "./config";
import * as discord from "./discord";
import express from "express";

const app = express();

app.get("/", async (req, res) => {
  const { code } = req.query;
  if (code) {
    try {
      const tokenResp = await discord.getAccessToken(code as string);
      const user = await discord.getProfile(
        tokenResp.data.token_type,
        tokenResp.data.access_token
      );
      console.log(user.data);
    } catch (e) {
      console.log(e);
    }
  }
  return res.sendFile("public/index.html", { root: "." });
});

app.listen(config.port, () => {
  console.log(`Server listening on http://localhost:${config.port}`);
});
