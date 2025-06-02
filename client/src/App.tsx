import { Route, Switch } from "wouter";
import HomePage from "@/pages/HomePage";
import ResumePage from "@/pages/ResumePage";
import PublicationsPage from "@/pages/PublicationsPage";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/resume" component={ResumePage} />
      <Route path="/publications" component={PublicationsPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
