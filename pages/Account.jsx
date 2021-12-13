import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Toolbar from "../component/Toolbar/Toolbar";
import SideDrawer from "../component/SideDrawer/SideDrawer";
import Backdrop from "../component/Backdrop/Backdrop";

import AuthContext from "../context/AuthContext";
import { API_URL } from "../utils/urls";
import Spinner from "../component/Spinner";

const useOrders = (user, getToken) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      if (user) {
        try {
          const token = await getToken();
          const orderRes = await fetch(`${API_URL}/orders`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const data = await orderRes.json();
          setOrders(data);
        } catch (err) {
          setOrders([]);
        }
      }
      setLoading(false);
    };

    fetchOrders();
  }, [user]);

  return { orders, loading };
};

function Account() {
  const [sideOpen, setSideOpen] = useState(false);
  let backdrop;
  if (sideOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  const drawerToggleClickHandler = () => {
    setSideOpen(!sideOpen);
  };

  const backdropClickHandler = () => {
    setSideOpen(false);
  };
  const { user, logoutUser, getToken } = useContext(AuthContext);
  const orders = useOrders(user, getToken);
  return (
    <div>
      <Head>
        <title>Account</title>
        <meta name="description" content="view account and log out" />
      </Head>
      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      {sideOpen && (
  <div
    className="h-screen w-screen bg-Purps fixed opacity-50 top-0"
    onClick={backdropClickHandler}
  />
)}{" "}
      <SideDrawer 
                    show={sideOpen} />
      {!user ? (
        <div className="grid place-content-center">
          login please
          <h1 onClick={() => logoutUser()}>Logout</h1>
        </div>
      ) : (
        <div
          className="flex h-screen mb-10 flex-wrap justify-center items-center text-lg font-bold"
        >
          <div className="text-center">
            Email <br />
            <span className="text-purple-600 inline"> {user?.email}</span>
            <div>
              <hr />
              <h4>Orders</h4>
              {orders.loading ? (
                <Spinner />
              ) : orders.orders ? (
                orders.orders.map((order) => (
                  <div className="text-purple-600" key={order.id}>
                    {new Date(order.created_at).toLocaleDateString("en-EN")}{" "}
                    {order.gallery.name} ${order.total} {order.status}
                  </div>
                ))
              ) : (
                <div>none </div>
              )}
            </div>
            <hr />
            <button
              style={{ zIndex: 1 }}
              className="button mx-auto flex justify-center"
              onClick={() => logoutUser()}
            >
              Logout?
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Account;
