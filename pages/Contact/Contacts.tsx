import React, { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Toolbar from "../../component/Toolbar/Toolbar";
import SideDrawer from "../../component/SideDrawer/SideDrawer";
import Backdrop from "../../component/Backdrop/Backdrop";
import ContactUs from "../../component/Contact/ContactUs";

// import AuthContext from "../context/AuthContext";
// import { API_URL } from "../utils/urls";
// import Spinner from "../component/Spinner";

function Contact() {
  //form
  const [fullname, setFullname] = useState<String | undefined | null>(null);
  const [email, setEmail] = useState<String | undefined | null>(null);
  const [subject, setSubject] = useState<String | undefined | null>(null);
  const [message, setMessage] = useState<String | undefined | null>(null);

  //toolbar
  const [sideOpen, setSideOpen] = useState(false);
  let backdrop: React.ReactNode;
  const backdropClickHandler = () => {
    setSideOpen(false);
  };
  if (sideOpen) {
    backdrop = <Backdrop click={backdropClickHandler} />;
  }
  const drawerToggleClickHandler = () => {
    setSideOpen(!sideOpen);
  };

  return (
    <div>
      <Head>
        <title>Account</title>
        <meta name="description" content="view account and log out" />
      </Head>
      <div className="mb-8">

      <Toolbar drawerClickHandler={drawerToggleClickHandler} />
      {sideOpen && (
        <div
        className="h-screen w-screen bg-Purps fixed opacity-50 top-0"
        onClick={backdropClickHandler}
        />
        )}{" "}
      <SideDrawer show={sideOpen} />{" "}
        </div>

        {/*  
      <div className="flex h-screen mb-10 flex-wrap justify-center mt-8 items-center text-lg font-bold">
         <div className="text-center">
          {" "}
          How to contact the Owner Email Name Adress Telephone
          <div className="text-xl">
            <div></div>
          </div>
        </div> */}

        {/* <form
          // onSubmit={handleSubmit}
          className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
          >
          <h1 className="text-2xl font-bold dark:text-gray-50">
          Send a message
          </h1>

          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full name<span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            value={fullname}
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>

          <div className="flex flex-row items-center justify-start">
            <button
              type="submit"
              className="px-10 mt-8 py-2 bg-[#130F49] text-gray-50 font-light rounded-md text-lg flex flex-row items-center"
            >
              Submit
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-cyan-500 ml-2"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
                  fill="currentColor"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>

      agan: */}
      <ContactUs/>
    </div>
  );
}

export default Contact;
