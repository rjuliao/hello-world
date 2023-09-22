import './App.css';
import AppBarMenu from './components/AppBarMenu';
import LikeBox from './components/LikeBox';

function App() {

    

    return (
      <>
        <div>
          <AppBarMenu/>
        </div>
        <body className='Body-Item'>
          <div>
            <LikeBox/>
          </div>
        </body>
      </>
    );
}

export default App;
