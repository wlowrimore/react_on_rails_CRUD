import './App.css';
import Navbar from './app/components/navigation/Navbar';
import Posts from './features/posts/Posts';


function App() {
  return (
    <>
    <Navbar />
      <div className='App'>
        <Posts />
      </div>
    </>
  )
}

export default App;
