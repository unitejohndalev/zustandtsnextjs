"use client";

import { useIsOpen } from "@store/useStore";



export default function Home() {
  const isToOpen = useIsOpen();
  return (
    <>
      <div className="h-[100vh] flex flex-col justify-center items-center gap-5">
        {isToOpen.isOpen && <p>Hello everyone!</p>}
        <button
          className="bg-yellow-300 py-2 px-6"
          onClick={isToOpen.setIsOpen}>{`${
          isToOpen.isOpen ? "Close" : "Open"
        }`}</button>
      </div>
    </>
  );
}
