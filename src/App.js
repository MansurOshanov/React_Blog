import './App.css';
import Posts from './components/Posts';
import { useEffect, useState } from 'react';
import PostLoadingComponent from './components/PostLoading';

function App() {
  const PostLoading = PostLoadingComponent(Posts);
  const [appState, setAppState] = useState({
    isLoading: false,
    posts: null
  });
  
  useEffect(()=>{
    setAppState({isLoading: true});
    const apiUrl = 'http://127.0.0.1:8000/api/'
    fetch(apiUrl)
      .then((data) => data.json())
      .then((posts) => {
        setAppState({
          isLoading: false,
          posts: posts
        });
      });
  }, [setAppState]);

  return (
    <div className="App">
      <PostLoading isLoading={appState.isLoading} posts={appState.posts} ></PostLoading>
        
    </div>
  );
}

export default App;
