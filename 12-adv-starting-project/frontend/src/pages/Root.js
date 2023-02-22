import MainNavigation from "../components/MainNavigation";

import { Outlet, useNavigation } from "react-router-dom";
function RootLayout() {
  const navigation = useNavigation();
  return (
    <>
      <MainNavigation></MainNavigation>
      <mai>
        {navigation.state === "loading" && <p>Loading ...</p>}
        <Outlet></Outlet>
      </mai>
    </>
  );
}

export default RootLayout;
