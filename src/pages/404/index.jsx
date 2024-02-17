import { useNavigate } from "react-router-dom";
import "./style.scss";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <main data-testid="not found" className="main bg-dark notFound">
      <div className="notFound-content">
        <h2>404 - Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <button onClick={handleGoBack} className="btn ">Go Back</button>
      </div>
    </main>
  );
};

export default NotFoundPage;
