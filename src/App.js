import './App.css';
import Routing from './Routing/Routing';
import { BrowserRouter } from 'react-router-dom';
import { getCookie, fallbackRender } from './GlobalFunction/GlobalFunction';
import { ONLINE } from './Constants';
import Offline from './GlobalComponent/Offline/Offline';
import { useEffect, useState } from 'react';
import { ErrorBoundary } from "react-error-boundary";
// import ErrorBoundries from './GlobalComponent/ErrorBoundries/ErrorBoundries';

function App() {
  const [online, setOnline] = useState(undefined);
  const isOnline = getCookie(ONLINE) == "true" ? true : false;


  useEffect(() => {
    setOnline(isOnline);
  }, [isOnline])

  return (
    <>
      {online ?
        <ErrorBoundary fallbackRender={fallbackRender}>
          <BrowserRouter>
            <Routing />
          </BrowserRouter>
        </ErrorBoundary>
        :
        <Offline />
      }
    </>
  );
}

export default App;
