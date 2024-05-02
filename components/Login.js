import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useSelector } from "react";
import { useDispatch } from "react-redux";
import { login } from "../reducers/user";

function Login() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSignUp = () => {
    const userData = {
      name: name,
      username: username,
      password: password,
    };

    const signUpUser = async () => {
      const res = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      dispatch(
        login({ token: data.data.token, username: username, name: name })
      );
      setName("");
      setUsername("");
      setPassword("");
      router.push("/");
    };

    signUpUser();
  };

  const handleSignIn = () => {
    const userData = {
      username: username,
      password: password,
    };

    const signInUser = async () => {
      const res = await fetch("http://localhost:3000/users/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      const data = await res.json();
      dispatch(
        login({
          token: data.data.token,
          username: username,
          name: data.data.name,
        })
      );
      setName("");
      setUsername("");
      setPassword("");
      router.push("index");
    };

    signInUser();
  };

  return (
    <div className="Main flex w-screen h-screen">
      <div className="Left-column flex justify-center items-center w-2/5 bg-[url('/twitterImage.png')]">
        <Image
          src="/twitterIcone180.png"
          alt="icone-Twitter"
          width={400}
          height={400}
        />
      </div>
      <div className="Right-column flex flex-col pl-10 w-3/5 pt-8 bg-black text-white ">
        <div className="Content-of-rigth w-1/2">
          <Image
            src="/twitterIcone180.png"
            alt="icone-Twitter"
            width={50}
            height={50}
          />
          <h1 className="font-montheavy text-7xl font-extrabold my-20 leading-normal ">
            See what's happening
          </h1>
          <h2 className="text-3xl font-extrabold mb-5">
            {" "}
            Join Hackatweet today
          </h2>
          <div className="buttons-already w-2/5">
            <button
              className="button-signUp bg-[#3790ED] hover:bg-[#2D78C6] hover:duration-100 rounded-full p-3 my-5 w-full font-semibold"
              onClick={() =>
                document.getElementById("signUp-modal").showModal()
              }
            >
              Sign up
            </button>
            <p className="font-extrabold">Already have an account</p>
            <button
              className="button-signIn hover:bg-gray-500 hover:duration-100 hover:text-white rounded-full border border-gray-500 p-3 my-5 w-full  font-semibold text-[#1E6AC4]"
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
                <Image
                  src="/twitterIcone180.png"
                  alt="icone-Twitter"
                  width={50}
                  height={50}
                />
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
                <Image
                  src="/twitterIcone180.png"
                  alt="icone-Twitter"
                  width={50}
                  height={50}
                />
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
