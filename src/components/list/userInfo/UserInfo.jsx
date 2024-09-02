import './userInfo.css'
import { useUserStore } from "../../../../lib/userStore";
import { auth } from '../../../../lib/firebase';

const UserInfo = () => {
    const { currentUser } = useUserStore();
    return (
        <div className='userInfo'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h4 id="userTitle">{currentUser.username}</h4>
            </div>
            <div className="icons">
                <button  id="signOut" className="sendButton" onClick={ ()=>auth.signOut()}>Log Out</button>
            </div>

        </div>
    );
}

export default UserInfo;
