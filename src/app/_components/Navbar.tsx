/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='nav-header'>
      <div className='container flex justify-around items items-center'>
        <div>
          <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-1">
            <img
              style={{ width: 150 }}
              src="https://cdn.pixabay.com/photo/2016/11/07/13/04/yoga-1805784_1280.png"
              alt="logo"
            />
            <span>Samar</span>
          </a>
        </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/">Pages</Link>
                </li>
                <li>
                    <Link href="/">Services</Link>
                </li>
                <li>
                    <Link href="/">Post Layout</Link>
                </li>
                <li>
                    <Link href="/">Blog</Link>
                </li>
                <li>
                    <Link href="/">Contact Us</Link>
                </li>
                <li>
                <button className='btn'>GET A QUOTE </button>
                </li>
            </ul>
      </div>
    </div>
  );
};
export default Navbar;
