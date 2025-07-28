import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function AppLayouts() {
  const navigation = useNavigation();
  console.log(navigation);
  const loadering = navigation.state === "loading";

  return (
    <div className="layout">
      {loadering && <Loader />}

      <Header />

      <main>
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayouts;
