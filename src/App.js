
import './App.css';
import Nav from '../src/Nav/Nav'
import Header from '../src/Container/Header/Header'
import Footer from './footer/footer'
import Aboutus from '../src/Container/Aboutus/aboutUs'
import Intro from '../src/Container/Intro/Intro'
import Gallery from '../src/Container/Gallery/Gallery'


function App() {
  return (
    <div className="App">
      <Nav/>
      <Header/>
      <Aboutus/>
      <Intro/>
      <Gallery/>
      <Footer/>
    </div>
  );
}
export default App;
