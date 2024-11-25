import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as exampleActions from '../../store/modules/example/actions';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotaoRequest());
  }
  return (
      <div className="bg-primaryDark flex justify-center h-screen">
        <div className="bg-gray-100 h-3/6 flex-col mt-4 items-center justify-center justify-self-center drop-shadow-md text-black text-lg font-sans w-80 p-5 rounded-md">
          <h1>Login</h1>
          <button
            className="bg-primary border-none text-white px-2 py-4 rounded-md font-medium"
            type="button"
            onClick={handleClick}
          >
            Enviar
          </button>
        </div>
      </div>
  );
}
