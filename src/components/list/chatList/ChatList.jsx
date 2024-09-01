import { useState } from 'react';
import './chatList.css'

const ChatList = () => {
    const [addMode, setAddmode]=useState(false)
    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="/search.png" alt="" />
                    <input type="text" placeholder='Search' />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} className="addBtn" alt="" onClick={()=>setAddmode((prev) =>!prev)} />
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Raul</span>
                    <p>Hello Raul</p>
                </div>
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Raul</span>
                    <p>Hello Raul</p>
                </div>
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Raul</span>
                    <p>Hello Raul</p>
                </div>
            </div>
            <div className='item'>
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Raul</span>
                    <p>Hello Raul</p>
                </div>
            </div>
        </div>
    );
}

export default ChatList;
