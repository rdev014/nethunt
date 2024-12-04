import Link from "next/link";
import ThemeSwitch from "../ThemeSwitch";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 dark:bg-gray-800 text-white py-14">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <Link href="https://nethunt.io/" className="text-5xl font-bold tracking-wide">
              NetHunt
            </Link>
            <p className="mt-4 text-gray-400">
              Your go-to platform for all things tech. Discover, connect, and grow with NetHunt.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#" className="hover:text-gray-300">Home</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Products</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Resources</Link></li>
              <li><Link href="#" className="hover:text-gray-300">Blogs</Link></li>
              <li><Link href="/support" className="hover:text-gray-300">Support</Link></li>
            </ul>
          </div>

          {/* Social Media and Theme Switch */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex justify-center md:justify-end space-x-6">
              <Link href="#" className="hover:text-blue-600"><i className="fab fa-twitter text-xl"></i></Link>
              <Link href="#" className="hover:text-blue-600"><i className="fab fa-facebook text-xl"></i></Link>
              <Link href="#" className="hover:text-blue-600"><i className="fab fa-instagram text-xl"></i></Link>
              <Link href="#" className="hover:text-blue-600"><i className="fab fa-youtube text-xl"></i></Link>
            </div>
            <div className="mt-6">
              <ThemeSwitch />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500">
          <p>
            © <Link href="https://nethunt.io/" className="hover:text-white">NetHunt</Link> 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
