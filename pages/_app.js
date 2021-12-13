import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import Layout from "../component/layout"
import { AuthProvider } from '../context/AuthContext'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
