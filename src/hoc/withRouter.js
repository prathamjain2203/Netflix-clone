import { useNavigate } from "react-router";

const withRouter = (Component) => {
  return (props) => {
    const navigate = useNavigate();
    return <Component {...props} navigate={navigate} />;
  };
};
export default withRouter;
