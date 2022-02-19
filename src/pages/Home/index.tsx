import { useSelector } from "react-redux";

export default function HomePage() {
  const user = useSelector((x: any) => x.auth.user);
  return <>This is home page {JSON.stringify(user)}</>;
}
