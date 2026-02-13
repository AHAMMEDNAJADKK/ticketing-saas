import Layout from "./app/layout";
import { TicketProvider } from "./context/TicketContext";

function App() {
  return (
    <TicketProvider>
      <Layout />
    </TicketProvider>
  );
}

export default App;
