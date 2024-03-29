import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import HomePage from "./components/Home.page";
import RQSuperHeroesPage from "./components/RQSuperHeroes.page";
import SuperHeroesPage from "./components/SuperHeroes.page";
import SuperHeroesIIIPage from "./components/SuperHeroesIII.page";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="super-heroes">Super Heroes</Link>
              </li>
              <li>
                <Link to="super-heroes-iii">Super Heroes III</Link>
              </li>
              <li>
                <Link to="rq-super-heroes">RQ Super Heroes</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="super-heroes" element={<SuperHeroesPage />} />
            <Route path="rq-super-heroes" element={<RQSuperHeroesPage />} />
            <Route path="super-heroes-iii" element={<SuperHeroesIIIPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
