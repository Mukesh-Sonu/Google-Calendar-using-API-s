import { GoogleLogin } from "react-google-login";
import { useNavigate } from "react-router-dom";
function LoginPage() {
  const navigate = useNavigate();
  const clientId =
    "117866102906-b9008r7idhhtr1o8kkln2njgbbclrb76.apps.googleusercontent.com";

  const responseGoogle = (response) => {
    console.log(response);
    navigate("/addevent");
  };
  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}

export default LoginPage;
