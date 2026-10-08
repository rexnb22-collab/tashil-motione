import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initMosaicRuntime } from './utils/mosaicRuntime';

initMosaicRuntime();

createRoot(document.getElementById('root')!).render(<App />);
