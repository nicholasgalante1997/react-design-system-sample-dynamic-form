import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ConfigureView, FormView, Heading } from './pages';

import '../spectrum.css';

const queryClient = new QueryClient();

function App() {
  const [formKey, setFormKey] = useState<'default' | 'beta' | 'gamma'>('default');
  return (
    <QueryClientProvider client={queryClient}>
      <div className="frame">
        <Heading />
        <main className="main-section">
          <aside className="config-section">
            <ConfigureView formKey={formKey} set={setFormKey} />
          </aside>
          <div className="form-section">
            {formKey === 'default' && <FormView set={setFormKey} formKey={'default'} />}
            {formKey === 'beta' && <FormView set={setFormKey} formKey={'beta'} />}
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
