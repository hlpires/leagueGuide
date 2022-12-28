import Content from './components/Content';
import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Footer from './components/Footer';



function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Content />
      <Footer/>
    </div>
  );
}

export default App;
