import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Home from "../components/Home";

function Index() {
  const router = useRouter();
  const user = useSelector((state) => state.user.value);

  if (user.token) {
    return (
      <>
        <Home />
      </>
    );
  } else {
    router.push("/login");
  }

  return null;
}
export default Index;
