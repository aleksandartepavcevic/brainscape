import React from "react";
import SignInForm from "./components/SignInForm/SignInForm";

const App = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-4">Homepage</h1>
      <SignInForm />
    </div>
  );
};

export default App;
