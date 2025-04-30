import { Route, Switch } from "wouter";
import HomePage from "@/pages/HomePage";
import ResumePage from "@/pages/ResumePage";
import PublicationsPage from "@/pages/PublicationsPage";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/publications" component={PublicationsPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
