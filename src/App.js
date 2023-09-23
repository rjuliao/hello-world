
import { ThemeProvider } from 'styled-components';
import Home from './views/Home';
import theme from './theme';
import { createContext } from 'react';

function App() {
    const ThemeContext = createContext({theme})

    return (
      <>
        <ThemeContext.Provider value={theme}>
          <Home/>
        </ThemeContext.Provider>
      </>
    );
}

export default App;
