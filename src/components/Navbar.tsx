import { FunctionComponent } from "react";

interface NavbarProps {
  user:string
}

const Navbar: FunctionComponent<NavbarProps> = ({user}) => {
  return (
    <div>
      <h4>Welcome {user}</h4>
      <a href="/">Home</a>
      <a href="/contacts">Contacts</a>
    </div>
  );
};

export default Navbar;
