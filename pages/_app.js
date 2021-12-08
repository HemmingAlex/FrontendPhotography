import "../styles/globals.css";
import "tailwindcss/tailwind.css";

import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <content>
        <Component {...pageProps} />
      </content>
    </AuthProvider>
  );
}

export default MyApp;
