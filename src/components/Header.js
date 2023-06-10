import { Avatar, Dropdown, Navbar } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <Navbar fluid rounded={true} className='bg-gray-50 fixed w-full z-20 top-0 left-0'>
                <Navbar.Brand to="/">
                    <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
                        Logo
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Dropdown
                        inline
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}>
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@gmail.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Link
                        to="/" className='text-2xl hover:underline'>
                        Home
                    </Link>
                    <Link to="/about" className='text-2xl hover:underline'>
                        About
                    </Link>
                    <Link to="/" className='text-2xl hover:underline'>
                        Categories
                    </Link>
                    <Link to="/products" className='text-2xl hover:underline'>
                        Products
                    </Link>
                    <Link to="/" className='text-2xl hover:underline'>
                        Contact
                    </Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header
