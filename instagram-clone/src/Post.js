import React from 'react';
import './Post.css';


function Post() {
  return (
    <div>
        {/* header -> avatar + username */}
        <h3>Username</h3>

        <img className="post__image" src="https://www.freecodecamp.org/news/content/images/size/w600/2023/04/zustand.png" alt=''/>
        


        <h4 className='post__text'><strong>cyb.x: </strong>day 01 of learning 🔥</h4>
       

    </div>
  )
}

export default Post