import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Created a new Room");
  };

  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("RoomId and UserName is Required !");
      return;
    }
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  const handleInputEnter = (e) => {
    if (e.code === "Enter") {
      joinRoom();
    }
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <img className="homePageLogo" src="/Code SYNCa.png" alt="" />
        <h4 className="mainlable">Paste invitation ROOM ID</h4>
        <div className="inputgroup">
          <input
            type="text"
            className="inputBox"
            value={roomId}
            placeholder="ROOM ID"
            onChange={(e) => setRoomId(e.target.value)}
          />
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="inputBox"
            placeholder="USER NAME"
            onKeyUp={handleInputEnter}
          />
          <button onClick={joinRoom} className="btn joinBtn">
            JOIN
          </button>
          <span className="createInfo">
            If you don't have an invite then create &nbsp;{" "}
            <a onClick={createNewRoom} href="/" className="createNewBtn">
              new room
            </a>
          </span>
        </div>
      </div>
      <footer>
        <h4>
          create with 💛 by &nbsp;
          <a href="https://github.com/DivyanshGupta-07">Divyansh Gupta</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
