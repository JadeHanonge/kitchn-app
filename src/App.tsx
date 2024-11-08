import { createTheme, KitchnProvider, DefaultTheme, AreaProps } from 'kitchn';
import Template from './Template';
import Services from './Services';

const App = () => {
  return (
    <KitchnProvider>
      <Services></Services>
    </KitchnProvider>
  );
};

export default App;
