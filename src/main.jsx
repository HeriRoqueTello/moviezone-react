import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { PopularPage } from './routes/PopularPage';
import { RatingPage } from './routes/RatingPage';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "/popularmovies",
//     element: <PopularPage />
//   },
//   {
//     path: "/ratingmovies",
//     element: <RatingPage />
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>,
)
