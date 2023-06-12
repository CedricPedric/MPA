import './App.scss';
import image from './images/ArticMonkeys.jpg';
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

const App = () =>{
  return (
    <div className='MainContainer'>
      <nav className='NavBarVertical'>
        <h2 className='NavBarTitle'>CF Music</h2>
        <a className='NavBarText'>Home</a>
        <a className='NavBarText'>Search</a>
        <a className='NavBarText'>Library</a>
      </nav>

      <div className='ImageDiv'>
        <h1>This is a Page!</h1>

        <div className='GenreContainer'>
          <div className='GenreCard'>
            <h2 className='GenreText'>Rock</h2>
          </div>

          <div className='GenreCard'>
            <h2 className='GenreText'> Pop</h2>
          </div>

          <div className='GenreCard'>
            <h2 className='GenreText'>Classical</h2>
          </div>

          <div className='GenreCard'>
            <h2 className='GenreText'>Rap</h2>
          </div>

          <div className='GenreCard'>
            <h2 className='GenreText'>Jazz</h2>
          </div>
        </div>


        <div className='MusicCardContainers'>
        <div className='MusicContainer'>
          <img className='CardImages' src={image} alt="Logo"></img>
          <h2 className='MusicTitle'>Insert Music Title</h2>
          <p className='Description'>description</p>
        </div>

        <div className='MusicContainer'>
          <img className='CardImages' src={image} alt="Logo"></img>
          <h2 className='MusicTitle'>Insert Music Title</h2>
          <p className='Description'>description</p>
        </div>

        </div>

      </div>
    </div>
  );
}

export default App;
