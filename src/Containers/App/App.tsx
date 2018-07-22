import * as React from 'react';
import CardScroller from '../../Components/CardScroller/CardScroller';
import Footer from '../../Components/Footer/Footer';
import Gallery from '../../Components/Gallery/Gallery';
import Navbar from '../../Components/Navbar/Navbar';
import './App.css';

interface IAppProps {
  language: any;
  handleLanguageChange(newLanguage: string): void;
}

class App extends React.Component<IAppProps> {
  public render() {
    const lang = this.props.language.MAIN;

    return (
      <div id="app">
        <Navbar language={this.props.language}/>
        <div className="content">
          <div className="intro-text">
            <div className="first" dangerouslySetInnerHTML={{__html: lang.INTRO_FIRST}}/>
            <div className="second" dangerouslySetInnerHTML={{__html: lang.INTRO_SECOND}}/>
          </div>
          <CardScroller language={this.props.language}/>
          <div className="gallery-text" dangerouslySetInnerHTML={{__html: lang.GALLERY_TEXT}}/>
          <Gallery language={this.props.language}/>
        </div>
        <Footer handleLanguageChange={this.props.handleLanguageChange} language={this.props.language}/>
      </div>
    );
  }
}

export default App;
