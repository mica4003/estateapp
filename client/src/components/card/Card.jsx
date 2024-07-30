import { Link } from "react-router-dom";
import "./card.scss";
import { SocketContext } from "../../context/SocketContext";
import { AuthContext } from "../../context/AuthContext";
import apiRequest from "../../lib/apiRequest";
import { useContext } from "react";

function Card({ item , onChatStart}) {
  const {socket} = useContext(SocketContext)
  const {currentUser} = useContext(AuthContext)

  const handleChatClick = async()=>{
    if(item.userId !== currentUser.id){
      try{
        const res = await apiRequest.post("/chats",{
          receiverId: item.userId
        })
        const chat=res.data
        socket.emit("newChat", chat)
      }catch(error){
        console.log("Error starting new chat",error)
      }
    }
  }

  return (
    <div className="card">
      <Link to={`/${item.id}`} className="imageContainer">
        <img src={item.images[0]} alt="" />
      </Link>
      <div className="textContainer">
        <h2 className="title">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="address">
          <img src="/pin.png" alt="" />
          <span>{item.address}</span>
        </p>
        <p className="price">$ {item.price}</p>
        <div className="bottom">
          <div className="features">
            <div className="feature">
              <img src="/bed.png" alt="" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="feature">
              <img src="/bath.png" alt="" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="icons">
            <div className="icon">
              <img src="/save.png" alt="" />
            </div>
            <div className="icon" onClick={handleChatClick}>
              <img src="/chat.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
