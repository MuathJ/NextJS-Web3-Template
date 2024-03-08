# NextJS Web3 Template

This NextJS template is tailored for modern web development, leveraging TypeScript, Tailwind CSS, and a suite of custom hooks and components for rapid development of web applications with a focus on Web3 functionalities.

## Features and Components

- **Developer Tools**: Configured with ESLint and Prettier for code quality and consistency, alongside custom Next.js API routing to facilitate backend integration.

- **Web3Modal Integration**: For seamless connection to Ethereum wallets and DApp interaction.

- **ConnectWallet Component**: Manages wallet connection with loading states, disconnect functionality, and auto-reloads on account changes.

- **SWR Integration**: Configured with a custom fetcher for efficient data fetching, caching and state management.

- **Zustand State Management**: Utilizes Zustand for simple and effective global state management, Includes an example store (`useDataStore`) with a usage example to demonstrate state management across the application.

- **Global Styles (`globals.css`)**: Incorporates custom global styles for a uniform appearance. Includes Google Fonts integration, custom selection color, custom scrollbars, and base styles for elements, in addition to tailwind components and utility layers for buttons, cards, backgrounds, icons, modals, and more.

- **Custom Hooks**:

  - `useDataAPI`: For API calls utilizing SWR with examples and usage of GET and POST requests.
  - `useModal`: Manages modal visibility and body scroll behavior.
  - `useOutsideClick`: Detects clicks outside of a specified element to trigger actions like closing a modal.
  - `usePersistentState`: Syncs state with localStorage for persistent state management across sessions.

- **Custom Viewport for Mobile**: A utility function `customViewport` ensures optimal viewing on mobile devices with screen widths less than 500px.

- **Homepage**: Features a Connect Wallet button, displays the wallet address, a disconnect option, and a modal component for additional user interactions.

- **Favicons, Manifest, and Meta Tags**: Includes setup for favicons across devices, web app manifest for PWA capabilities, and meta tags for SEO.

- **Configuration Files**: Includes configurations for Web3Modal and SWR to easily adjust settings as needed.

- **Type Definitions (`types.ts`)** and **Utility Functions (`utils.ts`)**: For common types and utility functions like address formatting and number formatting.

- **Reusable Modal Component (`Modal.tsx`)**: A versatile modal component for displaying overlays with ease.

- **Not Found Page (`not-found.tsx`)**: Redirects users to the homepage if they visit a non-existent route.

- **Environment Setup**: `.env.example` file to guide the setup of environment variables such as `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID` and `NEXT_PUBLIC_API_URL`.

## File Structure

Outlined below is the basic file structure highlighting the main components and utilities included in this template:

```
src/
├── app/
│   ├── globals.css
│   └── layout.tsx
│   └── page.tsx
├── components/
│   └── reusable/
│       ├── ConnectWallet.tsx
│       └── Modal.tsx
├── context/
│   └── Web3Modal.tsx
├── hooks/
│   ├── useDataAPI.ts
│   ├── useModal.ts
│   ├── useOutsideClick.ts
│   └── usePersistentState.ts
├── providers/
│   └── swr.tsx
├── stores/
│   └── useDataStore.ts
├── config.tsx
├── types.ts
└── utils.ts
```

## Setup and Configuration

- Clone the repository and install dependencies with `npm install`.
- Create and configure `.env` based on `.env.example` to include your Web3Modal project ID and API URL, the project ID can be generated from "https://cloud.walletconnect.com/app".
- Customize the `config.tsx` as needed to adjust Web3Modal and SWR settings.
