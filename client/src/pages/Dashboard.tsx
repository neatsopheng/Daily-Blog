import { useUserContext } from "../features/auth/authSlice";



const Dashboard = () => {
  const {payloadToken} = useUserContext()

  return (
    <div>
      <h1>Dashboard</h1>
      <h4>Decoded Token</h4>
      <p>ID: {payloadToken?.id}</p>
      <p>Email: {payloadToken?.email}</p>
      {/* <p>Token: {token}</p> */}
      <p></p>
      <h4>
        Note: Future request to any resource will use this token as
        authorization
      </h4>
      <h4>Make sure to include the token in the header when doing request</h4>

    </div>
  );
};

export default Dashboard;
