import { Fragment, useState } from 'react'
import { Dialog, Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  CursorArrowRaysIcon,
  TrophyIcon,
  XMarkIcon,
  UserCircleIcon,
  
  UserGroupIcon,
  ChevronDownIcon,
  CameraIcon,
  NewspaperIcon
} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import ImageDataDict from "../data/ImageData"

const uniqueValue = ImageDataDict.filter((value, index, self) =>
  index === self.findIndex((t) => (
    t.year === value.year && t.path === value.path
  ))
)

const products = [
  { name: 'About Us', description: 'Learn about our team and our values', route: "/aboutUs", icon: TrophyIcon },
  { name: 'FIRST', description: 'FIRST is a global robotics community', route: "https://www.firstinspires.org/robotics/frc", icon: CursorArrowRaysIcon, external: true },
  { name: 'Student Members', description: 'Meet our student members', route: "/students", icon: UserCircleIcon },
  { name: 'Coaches and Mentors', description: 'Meet our coaches and mentors.', route: "/mentors", icon: UserGroupIcon },
 
  { name: 'Newsletter', description: 'Read our monthly newsletter', route: "/newsletter", icon: NewspaperIcon },
  { name: 'Team Blog', description: '', route: "/news", icon: NewspaperIcon },
]

const navBarViewOptions = ["Sponsors", "Events", "Contact"]
const trojanRoboticsLogoPath = "/assets/images/trojanRoboticsLogoandText.png"

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav className="mx-auto flex items-center justify-between p-6 lg:px-8">
        <Link to="/home" className="flex lg:flex-1">
          <img className="h-8" src={trojanRoboticsLogoPath} alt="Trojan Robotics" />
        </Link>

        {/* MOBILE BUTTON */}
        <div className="flex lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center rounded-md p-2.5 text-gray-700"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
        {/* DESKTOP */}
<Popover.Group className="hidden lg:flex lg:gap-x-12">
  {/* ABOUT dropdown */}
  <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
      About
      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
    </Popover.Button>
    <Transition as={Fragment}>
      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {products.map((item) =>
            item.external ? (
              <a
                key={item.name}
                href={item.route}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50">
                  <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.route}
                className="group flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50">
                  <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="mt-1 text-gray-600">{item.description}</p>
                </div>
              </Link>
            )
          )}
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>

  {/* NEWS ROOM dropdown */}
  <Popover className="relative">
    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold text-gray-900">
      News Room
      <ChevronDownIcon className="h-5 w-5 text-gray-400" />
    </Popover.Button>
    <Transition as={Fragment}>
      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
        <div className="p-4">
          {uniqueValue.map((item) => (
            <a
              key={`${item.year}-${item.path}`}
              href={`imagegallery?year=${item.year}&event=${item.path}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-x-6 rounded-lg p-4 hover:bg-gray-50"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-gray-50">
                <CameraIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
              </div>
            </a>
          ))}
        </div>
      </Popover.Panel>
    </Transition>
  </Popover>

  {/* Other desktop links */}
  {navBarViewOptions.map((title) => (
    <Link
      key={title}
      to={`/${title.toLowerCase()}`}
      className="text-sm font-semibold text-gray-900"
    >
      {title}
    </Link>
  ))}
</Popover.Group>


        

        {/* MOBILE MENU */}
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <Dialog.Panel className="fixed inset-0 z-10 w-full bg-white p-6 overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <Link to="/home">
                <img className="h-8" src={trojanRoboticsLogoPath} alt="Trojan Robotics" />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile nav items */}
            <div className="space-y-4">
              {products.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.route}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-lg p-4 hover:bg-gray-50"
                  >
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.route}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block rounded-lg p-4 hover:bg-gray-50"
                  >
                    <p className="font-semibold text-gray-900">{item.name}</p>
                    {item.description && <p className="text-gray-600 text-sm">{item.description}</p>}
                  </Link>
                )
              )}

              {navBarViewOptions.map((title) => (
                <Link
                  key={title}
                  to={`/${title.toLowerCase()}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg p-4 hover:bg-gray-50 font-semibold text-gray-900"
                >
                  {title}
                </Link>
              ))}
            </div>
          </Dialog.Panel>
        </Dialog>
      </nav>
    </header>
  )
}

