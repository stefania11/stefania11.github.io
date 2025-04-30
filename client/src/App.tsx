import { Route, Switch } from "wouter";
import HomePage from "@/pages/HomePage";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
