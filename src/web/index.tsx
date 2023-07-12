import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ConfigureView, FormView, Heading } from './pages';
import { Divider } from './components/_base';

import '../spectrum.css';

const queryClient = new QueryClient();

function App() {
    const [view, setView] = useState<'configure' | 'form'>('configure');
    return (
        <QueryClientProvider client={queryClient}>
            <div className="frame">
                <Heading current={view} update={(next) => setView(next)} />
                <Divider />
                <main>

                </main>
            </div>
        </QueryClientProvider>
    )
}

function mountApp() {
    console.log('im being called during the page mount')
    let el = document.querySelector('#spectrum-mount');
    if (!el) {
        el = document.createElement('div');
        el.id = 'spectrum-mount';
        document.body.appendChild(el);
    }
    createRoot(el).render(<App />);
}

mountApp();
