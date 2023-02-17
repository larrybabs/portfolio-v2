import './App.css';
import AnimCursor from './components/AnimCursor';
import Landing from './pages/landing';
import { Analytics } from '@vercel/analytics/react';

function App() {
  return (
    <div className="App">
      <AnimCursor />
      <Landing />
      <Analytics />
    </div>
  );
}

export default App;
