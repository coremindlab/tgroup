import { Link } from "react-router-dom";
import "./NotFound.scss"; 


export default function NotFound() {
  return (
    <div className="notfound">
      <div className="notfound__content">
        <h1>404</h1>
        <p>The page you’re looking for isn’t here.</p>
        <Link to="/" className="notfound__link">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
