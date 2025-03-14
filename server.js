const express = require("express");
const dotenv = require("dotenv");
const http = require("http");
const { Server } = require("socket.io");
const router = require("./src/routes/userRoute.js");
const handleChatEvents = require("./src/events/chatEvents.js");
const connectDB = require("./config/DB.js");
dotenv.config({ path: "./config/.env" });

const app = express();
const server = http.createServer(app);
const io = new Server(server, {cors: {origin: "*",}});

connectDB();

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    handleChatEvents(io, socket);
});
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);


const PORT = process.env.PORT;
server.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});