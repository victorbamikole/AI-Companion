import React, {useEffect} from 'react';

import AppNavigation from './src/navigations/navigation';
import {apiCall} from './src/api/openAi';

function App(): React.JSX.Element {
  useEffect(() => {
    apiCall();
  });
  return <AppNavigation />;
}

export default App;
