import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full">
      <div className="w-full mx-auto p-10 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse font-extrabold">
            <span className="self-center text-2xl font-semibold whitespace-nowrap tracking-wide text-sky-700">
              VON ISAAC
            </span>
          </div>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="mailto:vonbaban1@gmail.com" className="hover:underline me-4 md:me-6">
                <EmailIcon className="text-sky-700" />
              </a>
            </li>
            <li>
              <a href="https://github.com/VonIsaac?tab=repositories" className="hover:underline me-4 md:me-6">
                <GitHubIcon className="text-sky-700" />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/vonisaac23/" className="hover:underline me-4 md:me-6">
                <LinkedInIcon className="text-sky-700" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/von.von0323" className="hover:underline">
                <FacebookIcon className="text-sky-700" />
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-5 border-gray-200 sm:mx-auto dark:border-gray-700" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400 tracking-wider py-1">© 2025 - All right reserved.</span>
      </div>
    </footer>
  )
}