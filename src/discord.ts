import axios from "axios";
import config from "./config";

const discordEndpoint = "https://discord.com/api";

export const getAccessToken = async (code: string) => {
  const body = new URLSearchParams({
    client_id: config.clientId,
    client_secret: config.clientSecret,
    code: code,
    grant_type: "authorization_code",
    redirect_uri: "http://localhost:4000/",
    scope: "identify",
  }).toString();
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
  };

  return axios.post(`${discordEndpoint}/oauth2/token`, body, { headers });
};

export const getProfile = async (tokenType: string, token: string) => {
  return axios.get(`${discordEndpoint}/users/@me`, {
    headers: {
      authorization: `${tokenType} ${token}`,
    },
  });
};
