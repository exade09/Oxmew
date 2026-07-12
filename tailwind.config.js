/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        ink: '#050608', panel: '#0B0D12', charcoal: '#151720',
        blue: '#1677FF', cyan: '#19C7FF', pink: '#FF2AA3',
        magenta: '#7A124E', green: '#8BFF5A', muted: '#A8ABB5', soft: '#F4F5F7',
      },
      transitionTimingFunction: { cinematic: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
}
