import { FaHome, FaSignInAlt, FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const botaoClicado = useSelector(state => state.example.botaoClicado);
  return (
    <nav className="bg-primary p-4 flex items-center content-center justify-center">
      <Link className="text-white mr-3 font-bold " to="/">
        <FaHome size="24" />
      </Link>
      <Link className="text-white mr-3 font-bold " to="/login">
        <FaSignInAlt size="24" />
      </Link>
      <Link className="text-white mr-3 font-bold " to="/users">
        <FaUserAlt size="24" />
      </Link>
      {botaoClicado ? 'Clicado' : 'Nao clicado'}
    </nav>
  );
}
