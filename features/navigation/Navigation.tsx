import Menu from "./components/Menu";
import User from "./components/User";

export const Navigation = async () => {
  return (
    <div className="fixed top-5 left-5 right-5 max-w-md mx-auto flex items-center justify-between">
      <Menu />
      <User />
    </div>
  );
};
