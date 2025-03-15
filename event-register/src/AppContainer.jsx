import App from './App';
import Event from './Event';

export default function AppContainer() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
      <App />
      <Event />
    </div>
  );
}
