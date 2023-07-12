import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import {} from './pages';

const queryClient = new QueryClient();

function App() {
    return <QueryClientProvider client={queryClient}>
        
    </QueryClientProvider>
}

function mountApp() {
    let el = document.querySelector('#spectrum-mount');
    if (!el) {
        el = document.createElement('div');
        el.id = 'spectrum-mount';
        document.body.appendChild(el);
    }
    createRoot(el).render(<App />);
}

mountApp();
