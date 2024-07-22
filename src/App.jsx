import Auth from "@/containers/Auth/Auth";
import MainPage from "@/containers/Main/MainPage";
import ToastList from "@/containers/ToastList/ToastList";
import { AppContext } from "@/context/AppContext";
import { useContext, useState } from "react";

import('./mocks/browser').then(({ worker }) => {
  worker.start({
    serviceWorker: {
      url: '/auth-form-spa/mockServiceWorker.js',
    },
  });
});

function App() {
  const { isLogged } = useContext(AppContext);

  return (
    <div className="container">
      {isLogged ? <MainPage /> : <Auth />}
      <ToastList />
    </div>
  )
}

export default App
