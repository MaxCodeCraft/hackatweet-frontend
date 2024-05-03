import Image from "next/image";
import { useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useRouter } from "next/router";

function UserInfo() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [image, setImage] = useState("");
  const user = useSelector((state) => state.user.value);

  useEffect(() => {
    const getImage = async () => {
      const obj = {
        username: user.username,
      };
      console.log(obj);
      const response = await fetch(`http://localhost:3000/users/find`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(obj),
      });
      const data = await response.json();
      setImage(data.data.image);
    };
    getImage();
  }, []);

  const handleLogout = () => {
    dispatch(logout());
    router.push("/");
  };

  return (
    <div className="pb-4">
      <div className="icone-user flex pb-5">
        <div className="avatar online">
          {image ? (
            <Image src={image} alt="icone-user" width={50} height={50} />
          ) : (
            <Image
              src="/userIcone.png"
              alt="icone-user"
              width={50}
              height={50}
            />
          )}
        </div>
        <div className="userInfo flex flex-col pl-5">
          <p className="name text-lg text-white font-semibold">{user.name}</p>
          <p className="username text-gray-400">@{user.username}</p>
        </div>
      </div>
      <button
        className="px-4 bg-transparent border-gray-500 border rounded-full text-white font-semibold"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
}

export default UserInfo;
