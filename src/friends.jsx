import { use } from "react";
import Friend from "./friend";

export default function Friends({friendsPromize}){
    const friends = use(friendsPromize)
    return (
        <div className="borderCard">
            <h3>Friends: {friends.length} </h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}