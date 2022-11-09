import './App.css';
import Footer from './app/components/Footer';
import Navbar from './app/components/Navbar';
import HomePage from './app/pages/HomePage';
import Posts from './features/posts/Posts';


function App() {
  return (
    <>
    <Navbar />
      <div className='App h-full'>
        <HomePage />
        {/* <Posts /> */}
      </div>
    <Footer />
    </>
  )
}

export default App;
