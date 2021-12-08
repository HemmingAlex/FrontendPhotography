import Head from "next/head";
import { useContext, useState } from "react";
import Toolbar from "../component/Toolbar/Toolbar";
import SideDrawer from "../component/SideDrawer/SideDrawer";
import Backdrop from "../component/Backdrop/Backdrop";
import AuthContext from "../context/AuthContext";

function Login() {
  const [sideOpen, setSideOpen] = useState(false);

  const [input, setInput] = useState("");
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(input);
  };

  const drawerToggleClickHandler = () => {
    setSideOpen(!sideOpen);
  };

  const backdropClickHandler = () => {
    setSideOpen(false);
  };
  let backdrop;
  if (sideOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }

  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to be able to purchase" />
      </Head>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <SideDrawer show={sideOpen} />
      {backdrop}
      <div
        style={{ zIndex: -1 }}
        className="w-full h-full flex justify-center items-center fixed"
      >
        {/* <h2>Login</h2> */}
        <form onSubmit={handleSubmit}>
          <input
            className="m-5 p-2 hover:bg-red-100 rounded transition border-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="email"
            placeholder="Email address..."
          />
          <button className="m-2 text-green-400" type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
