
import { useState } from 'react';
import './App.css';
import Post from './Post';

function App() {
  const[posts, setPosts] = useState([
    {
      username: "cyb.x",
      caption: "1st Day of React 🔥",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w600/2023/04/zustand.png"
    },
    {
      username: "mark",
      caption: "travalling",
      imageUrl: "https://tinyurl.com/3hev4p6n"
    },
    {
      username: "john",
      caption: "1st Day of React 🔥",
      imageUrl: "https://www.freecodecamp.org/news/content/images/size/w600/2023/04/zustand.png"
    }




  ]);
  return (
    <div className="app">
     
      <div className="app__header">
        <img
          className="app__headerImage"
          src="https://th.bing.com/th/id/OIP.OW6qyzpbzGUanvm7aRG9KQHaEK?pid=ImgDet&rs=1"
          alt=""
        
        />
        
      </div>
      
      {
        posts.map(post => (
          <Post username={posts.username} caption={posts.caption} imageUrl={posts.imageUrl}/>
          ))
      }



      <div>  <Post username={"cyb.x "} caption={"1 st day of React 🔥"} imageUrl={"https://www.freecodecamp.org/news/content/images/size/w600/2023/04/zustand.png"}/></div>
      <div>  <Post username={"mark "} caption={"while travelling"} imageUrl={"https://tinyurl.com/3hev4p6n"}/></div>
    



    </div>
  );
}

export default App;
