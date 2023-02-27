import dotenv from "dotenv";
dotenv.config();

export default {
    port: process.env.PORT || 4000,
    clientId: process.env.CLIENT_ID || "",
    clientSecret: process.env.CLIENT_SECRET || "",
}
