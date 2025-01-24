import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div
      id="error-page"
      className="min-h-screen flex justify-center items-center"
    >
      <div className="text-center">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
          <br />
          <br />
          <Link to={"/"} className="underline">
            Back to Home
          </Link>
        </p>
      </div>
    </div>
  );
}
