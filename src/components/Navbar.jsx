import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "Ranking", href: "/rank", current: false },
  { name: "Reports", href: "/reports", current: false },
  { name: "News", href: "/news", current: false },
  { name: "About", href: "/aboutus", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-transparent  sticky top-0 left=0 w-screen z-40 p-2 backdrop-blur-lg"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-[#101F77]  hover:text-[#101F77] outline-none ring-[#101F77]">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-center sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <img
                src="https://freepngtransparent.com/wp-content/uploads/2023/03/earth-png-120.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    aria-current={item.current ? "page" : undefined}
                    className={classNames(
                      item.current
                        ? "bg-transparent text-[#101F77] font-bold text-2xl"
                        : "text-[#101F77]",
                      "rounded-md px-3 py-2 font-bold text-xl"
                    )}
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-transparent text-[#101F77]"
                  : "text-[#101F77] hover:text-[#101F77]",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
