import { createRoot } from 'react-dom/client';
import React from "react";
import App from './app';
import ContextProvider from './context/ContextProvider';


createRoot(document.getElementById('root')).render(
<ContextProvider>
     <App />
     </ContextProvider>
);