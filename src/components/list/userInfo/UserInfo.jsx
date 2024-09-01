import './userInfo.css'
import { useUserStore } from "../../../../lib/userStore";
import { auth } from '../../../../lib/firebase';

const UserInfo = () => {
    const { currentUser } = useUserStore();
    return (
        <div className='userInfo'>
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h4>{currentUser.email}</h4>
            </div>
            <div className="icons">
                {/* <img src="./more.png" alt="" />
                <img src="./video.png" alt="" /> */}
                {/* <img src="./l.png" alt="" /> */}
                <button className="sendButton" onClick={ ()=>auth.signOut()}>Log Out</button>
            </div>

        </div>
    );
}

export default UserInfo;
