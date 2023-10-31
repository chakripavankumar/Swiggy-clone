import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/aboutUs";
import Contact from "./components/contact";
import Error from "./components/error";
import RestaurantMenu from "./components/restoMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import UserContext from "./utils/userContext";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Cart from "./components/Cart"

 

const AppLayout = () => {
  const [username, setUserName] = useState();
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:username}}>
        <div className="app">
          <Header />
          <Outlet />
      </div>
      </UserContext.Provider>
      </Provider>
  );
};

const appRouter = createBrowserRouter([

  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
    
       {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact/>,
      },
  {
    path: "/restaurants/:resId",
    element: <RestaurantMenu/>,
      },
      {
        path:"/register",
     element:<Register/>
      },
      {
        path:"/login",
     element:<Login/>
      },
      {
        path: "/cart",
        element:<Cart/>
      }
      
    ],
    errorElement: <Error/>,
  },
]);

      const root= ReactDOM.createRoot(document.getElementById("root"));
  root.render(<RouterProvider router={appRouter} />);
  