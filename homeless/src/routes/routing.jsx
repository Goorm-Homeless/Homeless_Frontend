import { Link, createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage/MainPage";
import MyPage from "../pages/MyPage/MyPage";
import CommunityPage from "../pages/CommunityPage/CommunityPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/mypage/:path",
        element: <MyPage />,
      },
      {
        path: "/community",
        element: <CommunityPage />,
      },
    ],
  },
]);

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>Hello World</h1>
//         <Link to="about">About Us</Link>
//       </div>
//     ),
//   },
//   {
//     path: "about",
//     element: <div>About</div>,
//   },
// ]);

export default router;
