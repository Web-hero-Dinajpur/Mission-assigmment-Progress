import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';
import { GrWebcam } from 'react-icons/gr';
import { RiXboxLine } from 'react-icons/ri';

const Footer = () => {
    return (
        <>
            <footer className="footer md:footer-horizontal bg-black text-white p-10 md:grid md:grid-cols-4">
                <aside>
                    <a className="btn-ghost text-2xl font-bold">CS — Ticket System</a>
                    <p className='md:w-[250px] text-justify'>
                        Smart, secure, and reliable ticket management system designed for modern support teams. Easily create, track, and resolve customer issues with efficiency. Improve communication, boost productivity, and deliver exceptional service experiences through an organized and user-friendly platform built for success.
                    </p>
                </aside>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Mission</a>
                    <a className="link link-hover">Contact Saled</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Products & Services</a>
                    <a className="link link-hover">Customer Stories</a>
                    <a className="link link-hover">Download Apps</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Information</h6>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Terms & Conditions</a>
                    <a className="link link-hover">Join Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Social Links</h6>
                    <a className="link link-hover flex gap-2 items-center"><RiXboxLine />@CS — Ticket System</a>
                    <a className="link link-hover flex gap-2 items-center"><FaFacebook />P@CS — Ticket System</a>
                    <a className="link link-hover flex gap-2 items-center"><FaLinkedin />@CS — Ticket System</a>
                    <a className="link link-hover flex gap-2 items-center"><GrWebcam />support@cst.com</a>
                </nav>
            </footer>
            <hr className='' />
            <footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
                <aside>
                    <p>Copyright © {new Date().getFullYear()}2026 CS — Ticket System. All rights reserved.</p>
                </aside>
            </footer>
        </>

    );
};

export default Footer;