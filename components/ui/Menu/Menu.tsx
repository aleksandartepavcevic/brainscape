"use client";

import { Button } from "@/components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import { createContext, useContext, useId, useState } from "react";

type MenuContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const MenuContext = createContext<MenuContextType | null>(null);

const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) throw new Error(`MenuContext is null`);

  return context;
};

const Menu = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      <div className="relative">{children}</div>
    </MenuContext.Provider>
  );
};

const Trigger = ({ children }: { children: React.ReactNode }) => {
  const { setOpen } = useMenuContext();

  return (
    <Button key="trigger" onClick={() => setOpen((s) => !s)} variant="icon">
      {children}
    </Button>
  );
};

Menu.Trigger = Trigger;

const Content = ({ children }: { children: React.ReactNode }) => {
  const { open } = useMenuContext();

  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          key="menu-content"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute left-0 z-10 min-w-[150px] mt-3 flex"
        >
          <div className="flex-auto overflow-hidden rounded-xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
            <div className="p-4">{children}</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

Menu.Content = Content;

const Item = ({ children }: { children: React.ReactNode }) => {
  const { setOpen } = useMenuContext();
  return (
    <div className="group relative flex gap-x-6 rounded-lg p-2 hover:bg-gray-50">
      <div onClick={() => setOpen(false)}>{children}</div>
    </div>
  );
};

Menu.Item = Item;

export default Menu;
