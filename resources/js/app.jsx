import './bootstrap';
import '../css/app.css';

import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa solo 'react-dom/client'
import { createInertiaApp } from '@inertiajs/react';
import { InertiaProgress } from '@inertiajs/progress';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = ReactDOM.createRoot(el); // Usar createRoot aquí
        root.render(<App {...props} />); // Renderiza la aplicación
    },
});

InertiaProgress.init();
// InertiaProgress.init({ color: '#4B5563' });

