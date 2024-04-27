"use client";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function SlideBar() {
  const [isCollapse, setIsCollapse] = useState(false);
  return (
    <Fragment>
      <button
        onClick={() => setIsCollapse(true)}
        className="lg:hidden w-12 h-12"
      >
        <Bars3Icon className="text-white w-full h-full" />
      </button>
      <Transition
        as={Fragment}
        show={isCollapse}
        enter="transition ease-in-out duration-300 transform overflow-x-hidden"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform overflow-x-hidden"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <nav className="fixed top-0 right-0 h-full z-20 w-3/5 bg-white text-black lg:hidden">
          <div className="flex justify-end w-full">
            <button
              onClick={() => setIsCollapse(false)}
              className="w-12 h-12 flex justify-center items-center"
            >
              <XMarkIcon className="text-black w-full h-full" />
            </button>
          </div>

          <ul className="lg:flex lg:gap-x-10 uppercase font-gohu mt-8 text-2xl">
            <li className="pt-2 px-5 h-12">
              <Link href={"#"}>about</Link>
            </li>
            <li className="pt-2 px-5 h-12">
              <Link href={"#"}>points</Link>
            </li>
            <li className="pt-2 px-5 h-12">
              <Link href={"#"}>waitlist</Link>
            </li>
          </ul>
        </nav>
      </Transition>
    </Fragment>
  );
}
