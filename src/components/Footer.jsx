import React from 'react'

const Footer = () => {
    return (
        <footer className="flex justify-evenly footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
            <nav className='flex flex-col'>
                <h1 className="footer-title text-2xl font-semibold mb-4 border-b-2 text-center">Services</h1>
                <a className="link link-hover cursor-pointer text-lg">Marketing</a>
                <a className="link link-hover cursor-pointer text-lg">Buying</a>
                <a className="link link-hover cursor-pointer text-lg">Selling</a>

            </nav>
            <nav className='flex flex-col'>
                <h1 className="footer-title text-2xl font-semibold mb-4 border-b-2 text-center">Company</h1>
                <a className="link link-hover cursor-pointer text-lg">About us</a>
                <a className="link link-hover cursor-pointer text-lg">Contact Us</a>
            
            </nav>
            <nav className='flex flex-col'>
                <h1 className="footer-title text-2xl font-semibold mb-4 border-b-2 text-center">Legal</h1>
                <a className="link link-hover cursor-pointer text-lg">Terms of Use</a>
                <a className="link link-hover cursor-pointer text-lg">Privacy Policy</a>
                <a className="link link-hover cursor-pointer text-lg">Cookie Policy</a>
            </nav>
        </footer>
    )
}

export default Footer
