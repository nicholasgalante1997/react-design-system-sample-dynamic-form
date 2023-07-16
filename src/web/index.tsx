import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ConfigureView, FormView, Heading } from './pages';
import { Divider } from './components/_base';

import '../spectrum.css';

const queryClient = new QueryClient();

const pages = [
  {
    order: 1,
    parentFormId: 'mobile-plans',
    sections: []
  }
];

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="frame">
        <Heading />
        <main className="main-section">
          <aside className="config-section"></aside>
          <div className="form-section">
            <FormView pages={pages} title="Mobile Plans" />
          </div>
        </main>
      </div>
    </QueryClientProvider>
  );
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
