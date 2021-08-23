import './App.scss';
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio/Portfolio";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route exact path="/about" component={About}/>
            <Route path="/blog" component={Blog}/>
            <Route path="/portfolio" component={Portfolio}/>
          </Switch>
        </header>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
