import "./ActionMessage.css"
import like from "../../images/rates/like.png"

const ActionMessage =(props)=>{
    return(
        <div className="messageBody">

            <div className="messageTime">
                {props.data.time}
            </div>

            <div className="messageText">
                Image ID: {props.data.id} was added to {props.data.type}
            </div>

            <div className="messageType">

            </div>
        </div>
    )

}

export default ActionMessage