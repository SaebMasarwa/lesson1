import { FunctionComponent } from "react";

interface NavbarProps {}

const Navbar: FunctionComponent<NavbarProps> = () => {
  return (
    <div>
      <a href="/">Home</a>
      <a href="/contacts">Contacts</a>
    </div>
  );
};

export default Navbar;
