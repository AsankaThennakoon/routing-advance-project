// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditeEventPage from "./pages/EditeEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
  action
} from "./pages/EventDetail";
import EventRootLayout from "./pages/EventRoot";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage, { action as newEventsAction } from "./pages/NewEvent";
import RootLayout from "./pages/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    // errorElement:<ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      {
        path: "events",
        element: <EventRootLayout />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId",
            loader: eventDetailLoader,
            id: "event-detail",
            children: [
              { index: true, element: <EventDetailPage /> ,action:deleteEventAction},

              { path: "edit", element: <EditeEventPage /> },
            ],
          },

          { path: "new", element: <NewEventPage />, action: newEventsAction },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
