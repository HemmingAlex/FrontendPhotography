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
    backdrop = "h-full w-1/2 bg-Purps left-1/2 fixed opacity-50 top-0"
  }
   else{ backdrop= 'hidden z-0';}
  return (
    <div>
      <Head>
        <title>Login</title>
        <meta name="description" content="Login here to be able to purchase" />
      </Head>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      <div         
              style={{ zIndex: 0 }}
              className="block md:hidden h-screen w-screen z-99 fixed top-0"
>

      <SideDrawer 
      show={sideOpen} />
            {sideOpen && (
        <div
        className={backdrop}
          onClick={backdropClickHandler}
        />
      )}
      </div>
      <div
        className="w-full h-full flex justify-center items-center fixed"
      >
        <form onSubmit={handleSubmit}>
          <input
            className="m-5 p-2 h-max w-max hover:bg-red-100 rounded transition border-2"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="email"
            placeholder="Email address..."
          />
          <button className="m-2 text-green-400" 
                        style={{ zIndex: 4 }}

          type="submit">
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
export default Login;
