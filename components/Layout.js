import Header from "./Header";
import { useStateValue } from "../stateProvider";
const Layout = ({ children }) => {
  const [{ darkmode }, dispatch] = useStateValue();
  return (
    <div
      data-theme={darkmode ? "forest" : "lemonade"}
      className={" overflow-hidden bg-base-100"}
    >
      <Header />
      <main>{children}</main>
    </div>
  );
};
export default Layout;
