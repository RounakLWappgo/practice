import './App.css';
import  {useState} from 'react';
import axios from 'axios';

function App() {
  const [term, setterm] = useState('');
  const [videoid, setVideoid] = useState([]);
  const KEY = 'AIzaSyCOU_wy7UqLE_s87B2eF8Oq0Y2sErB9q8o'
  let SearchTerm = (e) =>{
    e.preventDefault();
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${term}&key=${KEY}`)
    .then(res => {
      setVideoid(res.data.items);
      
    })
    .catch(err => {
      console.log(err);
    })
  

  }
  console.log(videoid);
  const videoSrc = 'https://www.youtube.com/embed/';

  return (
    <div className="App">
      <form onSubmit={SearchTerm}>
        <input type="text" onChange={(e) => setterm(e.target.value)} placeholder="Search" />
        
        </form>
      {videoid.map((num) => {return (<div key={num.id.videoId}>
      <iframe src={videoSrc + num.id.videoId} allowFullScreen title='Video player'/>
      <h4>{num.snippet.title}</h4>
      <p>{num.snippet.description}</p>
       </div>)})}
    </div>
  );
}

export default App;
