import "./App.css";
import { LoginProvider } from "./context/loginContext";
import Router from "./routes";
import { BreakpointProvider } from "react-socks";

export default function App() {
  return (
    <BreakpointProvider>
      <LoginProvider>
        <Router />
      </LoginProvider>
    </BreakpointProvider>
  );
}
