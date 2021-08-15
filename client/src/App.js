import './App.scss';
import HomePage from "./pages/HomePage/HomePage";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
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
            <Route path="/contact" component={Contact}/>
            <Route path="/portfolio" component={Portfolio}/>
          </Switch>
        </header>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
