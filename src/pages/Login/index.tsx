import { login } from "api/auth";
import { PATH_DASHBOARD } from "constants/paths";
import { useNavigate } from "react-router";

export default function LoginPage() {
  const navigate = useNavigate();

  const onLogin = async () => {
    try {
      await login();
      navigate(PATH_DASHBOARD);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <button onClick={onLogin}>Fake login</button>
    </>
  );
}
