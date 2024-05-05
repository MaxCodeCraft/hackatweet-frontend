import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";
import { motion } from "framer-motion";

function Login() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [coockies, setCoockies] = useState(false);

  const dispatch = useDispatch();

  const handleCookiesAccept = () => {
    setCoockies(true);
  };

  const handleSignUp = () => {
    const userData = {
      name: name,
      username: username,
      password: password,
    };

    const signUpUser = async () => {
      const res = await fetch(
        "https://zweeper-backend.vercel.app/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await res.json();
      if (data.result) {
        dispatch(
          login({
            token: data.data.token,
            username: username,
            name: name,
            image: data.data.image,
          })
        );
        setName("");
        setUsername("");
        setPassword("");
        router.push("/");
      }
    };

    signUpUser();
  };

  const handleSignIn = () => {
    const userData = {
      username: username,
      password: password,
    };

    const signInUser = async () => {
      const res = await fetch(
        "https://zweeper-backend.vercel.app/users/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );
      const data = await res.json();
      dispatch(
        login({
          token: data.data.token,
          username: username,
          name: data.data.name,
          image: data.data.image,
        })
      );
      setName("");
      setUsername("");
      setPassword("");
      router.push("/");
    };

    signInUser();
  };

  return (
    <div className="Main flex w-screen h-screen">
      {coockies ? (
        <></>
      ) : (
        <div
          role="alert"
          className="alert absolute bottom-4 left-1/2 -translate-x-1/2 w-8/12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>We use cookies for no reason.</span>
          <div>
            <button className="btn btn-sm">Deny</button>
            <button
              className="btn btn-sm bg-[#26ff49]"
              onClick={() => handleCookiesAccept()}
            >
              Accept
            </button>
          </div>
        </div>
      )}
      <div className="Left-column flex justify-center items-center w-2/5 bg-[url('/bg-cybercity.jpg')] bg-cover">
        <svg
          fill="#26ff49"
          width="400px"
          height="400px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#26ff49"
          stroke-width="0.00032"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>Zweeper</title>{" "}
            <path d="M13.817 24.742c-0.35 0.556-0.805 0.407-1.146 0.427-1.582-1.166-3.123-2.292-4.65-3.438-0.689-0.463-1.187-1.164-1.377-1.984l-0.004-0.022 5.822-9.123h1.355z"></path>{" "}
            <path d="M25.335 19.733c-0.11 0.763-0.535 1.41-1.137 1.814l-0.009 0.006c-0.897 0.679-1.865 1.261-2.765 1.937-0.696 0.527-1.335 1.146-1.96 1.673h-0.885l-0.384-0.384v-14.178h1.364z"></path>{" "}
            <path d="M16.484 28.619h1.499c0.719 0.453 0.335 1.080 0.501 1.659h-4.871l-0.057-1.229 0.415-0.395h1.542v-23.163c-0.192-0.602-0.831-0.287-1.269-0.407-0.375-0.533-0.387-0.53-0.355-1.344h4.203c0.097 0.435 0.206 0.911-0.287 1.301-0.381 0.269-1.009-0.246-1.315 0.716z"></path>{" "}
            <path d="M31.759 19.957h-1.433q-5.587-8.45-11.266-17.077l0.378-1.94z"></path>{" "}
            <path d="M0.241 19.966l12.321-19.037 0.358 1.98-11.246 17.057z"></path>{" "}
            <path d="M29.158 19.722h-1.393c-0.968-1.533-1.974-3.060-2.917-4.625-0.86-1.456-1.883-2.819-2.711-4.298s-1.883-2.946-2.865-4.395c-0.61-0.905-0.63-0.891-0.378-2.272 1.424 1.599 2.264 3.473 3.47 5.106s2.103 3.53 3.287 5.201 2.14 3.516 3.507 5.284z"></path>{" "}
            <path d="M13.238 4.258v1.312l-8.986 14.117h-1.347c3.378-5.198 6.705-10.315 10.029-15.427 0.017-0.023 0.095-0.003 0.304-0.003z"></path>{" "}
            <path d="M13.639 2.785l-0.421-2.785h5.467c0.025 0.265 0.040 0.573 0.040 0.885 0 0.203-0.006 0.404-0.018 0.604l0.001-0.027c-0.113 0.51-0.256 0.952-0.435 1.375l0.019-0.051z"></path>{" "}
            <path d="M2.178 23.209h1.146l9.384 7.163v0.785l-0.573 0.037c-1.768-1.335-3.519-2.579-5.181-3.937-1.607-1.307-3.381-2.407-4.917-3.799z"></path>{" "}
            <path d="M19.865 31.18h-0.507v-0.86l9.335-7.112h1.181c0 0.16 0.054 0.361 0 0.41-0.934 0.722-1.888 1.433-2.834 2.135-0.573 0.438-1.172 0.86-1.745 1.321-1.009 0.794-2.006 1.619-3.017 2.398-0.768 0.573-1.564 1.103-2.413 1.708z"></path>{" "}
            <path d="M27.054 22.172l1.115 0.544c-1.519 1.146-3.046 2.275-4.544 3.438s-2.814 2.436-4.542 3.496v-1.536z"></path>{" "}
            <path d="M3.834 22.739c0.86-0.653 1.524-0.335 2.292 0.252 1.355 1.046 2.688 2.129 4.138 3.063 0.951 0.613 1.788 1.407 2.711 2.149v1.309c-0.624-0.217-1.159-0.548-1.607-0.97l0.002 0.002c-1.433-1.215-2.98-2.275-4.41-3.496-0.825-0.705-1.794-1.246-2.579-2.032-0.157-0.115-0.338-0.209-0.533-0.274l-0.014-0.004z"></path>{" "}
            <path d="M18.699 30.946v1.054h-5.372l-0.054-1.054z"></path>{" "}
            <path d="M1.55 20.954l0.805 1.536-1.092 0.335-1.003-1.871z"></path>{" "}
            <path d="M29.636 22.501l0.842-1.576h1.244l-0.951 1.897z"></path>{" "}
            <path d="M2.679 20.63h1.461l0.327 0.957-1.014 0.476-0.774-1.080z"></path>{" "}
            <path d="M29.304 20.63v0.679l-0.696 0.754-1.032-0.447 0.235-0.974z"></path>{" "}
          </g>
        </svg>
      </div>
      <div className="Right-column flex flex-col pl-10 w-3/5 pt-8 bg-black text-white ">
        <div className="Content-of-rigth w-1/2">
          <svg
            fill="#26ff49"
            width="50px"
            height="50px"
            viewBox="0 0 32 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Zweeper</title>
            <path d="M13.817 24.742c-0.35 0.556-0.805 0.407-1.146 0.427-1.582-1.166-3.123-2.292-4.65-3.438-0.689-0.463-1.187-1.164-1.377-1.984l-0.004-0.022 5.822-9.123h1.355z"></path>
            <path d="M25.335 19.733c-0.11 0.763-0.535 1.41-1.137 1.814l-0.009 0.006c-0.897 0.679-1.865 1.261-2.765 1.937-0.696 0.527-1.335 1.146-1.96 1.673h-0.885l-0.384-0.384v-14.178h1.364z"></path>
            <path d="M16.484 28.619h1.499c0.719 0.453 0.335 1.080 0.501 1.659h-4.871l-0.057-1.229 0.415-0.395h1.542v-23.163c-0.192-0.602-0.831-0.287-1.269-0.407-0.375-0.533-0.387-0.53-0.355-1.344h4.203c0.097 0.435 0.206 0.911-0.287 1.301-0.381 0.269-1.009-0.246-1.315 0.716z"></path>
            <path d="M31.759 19.957h-1.433q-5.587-8.45-11.266-17.077l0.378-1.94z"></path>
            <path d="M0.241 19.966l12.321-19.037 0.358 1.98-11.246 17.057z"></path>
            <path d="M29.158 19.722h-1.393c-0.968-1.533-1.974-3.060-2.917-4.625-0.86-1.456-1.883-2.819-2.711-4.298s-1.883-2.946-2.865-4.395c-0.61-0.905-0.63-0.891-0.378-2.272 1.424 1.599 2.264 3.473 3.47 5.106s2.103 3.53 3.287 5.201 2.14 3.516 3.507 5.284z"></path>
            <path d="M13.238 4.258v1.312l-8.986 14.117h-1.347c3.378-5.198 6.705-10.315 10.029-15.427 0.017-0.023 0.095-0.003 0.304-0.003z"></path>
            <path d="M13.639 2.785l-0.421-2.785h5.467c0.025 0.265 0.040 0.573 0.040 0.885 0 0.203-0.006 0.404-0.018 0.604l0.001-0.027c-0.113 0.51-0.256 0.952-0.435 1.375l0.019-0.051z"></path>
            <path d="M2.178 23.209h1.146l9.384 7.163v0.785l-0.573 0.037c-1.768-1.335-3.519-2.579-5.181-3.937-1.607-1.307-3.381-2.407-4.917-3.799z"></path>
            <path d="M19.865 31.18h-0.507v-0.86l9.335-7.112h1.181c0 0.16 0.054 0.361 0 0.41-0.934 0.722-1.888 1.433-2.834 2.135-0.573 0.438-1.172 0.86-1.745 1.321-1.009 0.794-2.006 1.619-3.017 2.398-0.768 0.573-1.564 1.103-2.413 1.708z"></path>
            <path d="M27.054 22.172l1.115 0.544c-1.519 1.146-3.046 2.275-4.544 3.438s-2.814 2.436-4.542 3.496v-1.536z"></path>
            <path d="M3.834 22.739c0.86-0.653 1.524-0.335 2.292 0.252 1.355 1.046 2.688 2.129 4.138 3.063 0.951 0.613 1.788 1.407 2.711 2.149v1.309c-0.624-0.217-1.159-0.548-1.607-0.97l0.002 0.002c-1.433-1.215-2.98-2.275-4.41-3.496-0.825-0.705-1.794-1.246-2.579-2.032-0.157-0.115-0.338-0.209-0.533-0.274l-0.014-0.004z"></path>
            <path d="M18.699 30.946v1.054h-5.372l-0.054-1.054z"></path>
            <path d="M1.55 20.954l0.805 1.536-1.092 0.335-1.003-1.871z"></path>
            <path d="M29.636 22.501l0.842-1.576h1.244l-0.951 1.897z"></path>
            <path d="M2.679 20.63h1.461l0.327 0.957-1.014 0.476-0.774-1.080z"></path>
            <path d="M29.304 20.63v0.679l-0.696 0.754-1.032-0.447 0.235-0.974z"></path>
          </svg>
          <h1 className="font-cannet text-5xl my-20 leading-normal ">
            See what's happening
          </h1>
          <h2 className="text-3xl font-extrabold mb-5">
            {" "}
            Join Zweeper today !
          </h2>
          <div className="buttons-already w-2/5">
            <button
              className="button-signUp text-black bg-[#26ff49] hover:bg-[#26ff49]/30 hover:text-white hover:duration-100 rounded-full p-3 my-5 w-full font-semibold"
              onClick={() =>
                document.getElementById("signUp-modal").showModal()
              }
            >
              Sign up
            </button>
            <p className="font-extrabold">Already have an account ?</p>
            <button
              className="button-signIn hover:bg-gray-500 hover:duration-100 hover:text-white rounded-full border border-gray-500 p-3 my-5 w-full  font-semibold text-[#26ff49]"
              onClick={() =>
                document.getElementById("signIn-modal").showModal()
              }
            >
              Sign in
            </button>

            <dialog id="signUp-modal" className="modal">
              <div className="modal-box bg-[#151D26] flex flex-col items-center">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <svg
                  fill="#26ff49"
                  width="50px"
                  height="50px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>gambit_mote</title>
                  <path d="M13.817 24.742c-0.35 0.556-0.805 0.407-1.146 0.427-1.582-1.166-3.123-2.292-4.65-3.438-0.689-0.463-1.187-1.164-1.377-1.984l-0.004-0.022 5.822-9.123h1.355z"></path>
                  <path d="M25.335 19.733c-0.11 0.763-0.535 1.41-1.137 1.814l-0.009 0.006c-0.897 0.679-1.865 1.261-2.765 1.937-0.696 0.527-1.335 1.146-1.96 1.673h-0.885l-0.384-0.384v-14.178h1.364z"></path>
                  <path d="M16.484 28.619h1.499c0.719 0.453 0.335 1.080 0.501 1.659h-4.871l-0.057-1.229 0.415-0.395h1.542v-23.163c-0.192-0.602-0.831-0.287-1.269-0.407-0.375-0.533-0.387-0.53-0.355-1.344h4.203c0.097 0.435 0.206 0.911-0.287 1.301-0.381 0.269-1.009-0.246-1.315 0.716z"></path>
                  <path d="M31.759 19.957h-1.433q-5.587-8.45-11.266-17.077l0.378-1.94z"></path>
                  <path d="M0.241 19.966l12.321-19.037 0.358 1.98-11.246 17.057z"></path>
                  <path d="M29.158 19.722h-1.393c-0.968-1.533-1.974-3.060-2.917-4.625-0.86-1.456-1.883-2.819-2.711-4.298s-1.883-2.946-2.865-4.395c-0.61-0.905-0.63-0.891-0.378-2.272 1.424 1.599 2.264 3.473 3.47 5.106s2.103 3.53 3.287 5.201 2.14 3.516 3.507 5.284z"></path>
                  <path d="M13.238 4.258v1.312l-8.986 14.117h-1.347c3.378-5.198 6.705-10.315 10.029-15.427 0.017-0.023 0.095-0.003 0.304-0.003z"></path>
                  <path d="M13.639 2.785l-0.421-2.785h5.467c0.025 0.265 0.040 0.573 0.040 0.885 0 0.203-0.006 0.404-0.018 0.604l0.001-0.027c-0.113 0.51-0.256 0.952-0.435 1.375l0.019-0.051z"></path>
                  <path d="M2.178 23.209h1.146l9.384 7.163v0.785l-0.573 0.037c-1.768-1.335-3.519-2.579-5.181-3.937-1.607-1.307-3.381-2.407-4.917-3.799z"></path>
                  <path d="M19.865 31.18h-0.507v-0.86l9.335-7.112h1.181c0 0.16 0.054 0.361 0 0.41-0.934 0.722-1.888 1.433-2.834 2.135-0.573 0.438-1.172 0.86-1.745 1.321-1.009 0.794-2.006 1.619-3.017 2.398-0.768 0.573-1.564 1.103-2.413 1.708z"></path>
                  <path d="M27.054 22.172l1.115 0.544c-1.519 1.146-3.046 2.275-4.544 3.438s-2.814 2.436-4.542 3.496v-1.536z"></path>
                  <path d="M3.834 22.739c0.86-0.653 1.524-0.335 2.292 0.252 1.355 1.046 2.688 2.129 4.138 3.063 0.951 0.613 1.788 1.407 2.711 2.149v1.309c-0.624-0.217-1.159-0.548-1.607-0.97l0.002 0.002c-1.433-1.215-2.98-2.275-4.41-3.496-0.825-0.705-1.794-1.246-2.579-2.032-0.157-0.115-0.338-0.209-0.533-0.274l-0.014-0.004z"></path>
                  <path d="M18.699 30.946v1.054h-5.372l-0.054-1.054z"></path>
                  <path d="M1.55 20.954l0.805 1.536-1.092 0.335-1.003-1.871z"></path>
                  <path d="M29.636 22.501l0.842-1.576h1.244l-0.951 1.897z"></path>
                  <path d="M2.679 20.63h1.461l0.327 0.957-1.014 0.476-0.774-1.080z"></path>
                  <path d="M29.304 20.63v0.679l-0.696 0.754-1.032-0.447 0.235-0.974z"></path>
                </svg>
                <p className="font-extrabold my-5 text-xl">
                  Create yout Hackatweet account
                </p>
                <div className="Inputs-button w-2/5 flex flex-col gap-3">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Firstname"
                    className="bg-transparent rounded border border-gray-500 p-2 "
                  ></input>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="bg-transparent rounded border border-gray-500 p-2 "
                  ></input>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    className="bg-transparent rounded border border-gray-500 p-2 "
                  ></input>
                  <button
                    className="button-signUp bg-white hover:bg-gray-200 hover:duration-100 rounded-full px-3 py-2 my-2 w-full font-semibold text-black"
                    onClick={() => handleSignUp()}
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </dialog>

            <dialog id="signIn-modal" className="modal">
              <div className="modal-box bg-[#151D26] flex flex-col items-center">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <svg
                  fill="#26ff49"
                  width="50px"
                  height="50px"
                  viewBox="0 0 32 32"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>gambit_mote</title>
                  <path d="M13.817 24.742c-0.35 0.556-0.805 0.407-1.146 0.427-1.582-1.166-3.123-2.292-4.65-3.438-0.689-0.463-1.187-1.164-1.377-1.984l-0.004-0.022 5.822-9.123h1.355z"></path>
                  <path d="M25.335 19.733c-0.11 0.763-0.535 1.41-1.137 1.814l-0.009 0.006c-0.897 0.679-1.865 1.261-2.765 1.937-0.696 0.527-1.335 1.146-1.96 1.673h-0.885l-0.384-0.384v-14.178h1.364z"></path>
                  <path d="M16.484 28.619h1.499c0.719 0.453 0.335 1.080 0.501 1.659h-4.871l-0.057-1.229 0.415-0.395h1.542v-23.163c-0.192-0.602-0.831-0.287-1.269-0.407-0.375-0.533-0.387-0.53-0.355-1.344h4.203c0.097 0.435 0.206 0.911-0.287 1.301-0.381 0.269-1.009-0.246-1.315 0.716z"></path>
                  <path d="M31.759 19.957h-1.433q-5.587-8.45-11.266-17.077l0.378-1.94z"></path>
                  <path d="M0.241 19.966l12.321-19.037 0.358 1.98-11.246 17.057z"></path>
                  <path d="M29.158 19.722h-1.393c-0.968-1.533-1.974-3.060-2.917-4.625-0.86-1.456-1.883-2.819-2.711-4.298s-1.883-2.946-2.865-4.395c-0.61-0.905-0.63-0.891-0.378-2.272 1.424 1.599 2.264 3.473 3.47 5.106s2.103 3.53 3.287 5.201 2.14 3.516 3.507 5.284z"></path>
                  <path d="M13.238 4.258v1.312l-8.986 14.117h-1.347c3.378-5.198 6.705-10.315 10.029-15.427 0.017-0.023 0.095-0.003 0.304-0.003z"></path>
                  <path d="M13.639 2.785l-0.421-2.785h5.467c0.025 0.265 0.040 0.573 0.040 0.885 0 0.203-0.006 0.404-0.018 0.604l0.001-0.027c-0.113 0.51-0.256 0.952-0.435 1.375l0.019-0.051z"></path>
                  <path d="M2.178 23.209h1.146l9.384 7.163v0.785l-0.573 0.037c-1.768-1.335-3.519-2.579-5.181-3.937-1.607-1.307-3.381-2.407-4.917-3.799z"></path>
                  <path d="M19.865 31.18h-0.507v-0.86l9.335-7.112h1.181c0 0.16 0.054 0.361 0 0.41-0.934 0.722-1.888 1.433-2.834 2.135-0.573 0.438-1.172 0.86-1.745 1.321-1.009 0.794-2.006 1.619-3.017 2.398-0.768 0.573-1.564 1.103-2.413 1.708z"></path>
                  <path d="M27.054 22.172l1.115 0.544c-1.519 1.146-3.046 2.275-4.544 3.438s-2.814 2.436-4.542 3.496v-1.536z"></path>
                  <path d="M3.834 22.739c0.86-0.653 1.524-0.335 2.292 0.252 1.355 1.046 2.688 2.129 4.138 3.063 0.951 0.613 1.788 1.407 2.711 2.149v1.309c-0.624-0.217-1.159-0.548-1.607-0.97l0.002 0.002c-1.433-1.215-2.98-2.275-4.41-3.496-0.825-0.705-1.794-1.246-2.579-2.032-0.157-0.115-0.338-0.209-0.533-0.274l-0.014-0.004z"></path>
                  <path d="M18.699 30.946v1.054h-5.372l-0.054-1.054z"></path>
                  <path d="M1.55 20.954l0.805 1.536-1.092 0.335-1.003-1.871z"></path>
                  <path d="M29.636 22.501l0.842-1.576h1.244l-0.951 1.897z"></path>
                  <path d="M2.679 20.63h1.461l0.327 0.957-1.014 0.476-0.774-1.080z"></path>
                  <path d="M29.304 20.63v0.679l-0.696 0.754-1.032-0.447 0.235-0.974z"></path>
                </svg>
                <p className="font-extrabold my-5 text-xl">
                  Connect to Hackatweet
                </p>
                <div className="Inputs-button w-2/5 flex flex-col gap-3">
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    className="bg-transparent rounded border border-gray-500 p-2 "
                  ></input>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    type="password"
                    className="bg-transparent rounded border border-gray-500 p-2 "
                  ></input>
                  <button
                    className="button-signIn bg-white hover:bg-gray-200 hover:duration-100 rounded-full px-3 py-2 my-2 w-full font-semibold text-black"
                    onClick={() => handleSignIn()}
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
