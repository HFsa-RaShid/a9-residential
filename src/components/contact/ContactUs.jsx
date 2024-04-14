import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { TbWorld } from "react-icons/tb";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ContactUs = () => {

    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <div className="flex gap-28 container mx-auto h-[900px] mt-10">
            <div className="md:w-[30%] rounded-2xl " data-aos = "fade-down">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.836846021132!2d90.35953117435601!3d22.65987092976782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755348ec0558363%3A0x71825eb40c8459a6!2sUniversity%20of%20Barishal!5e0!3m2!1sen!2sbd!4v1713001477250!5m2!1sen!2sbd" width="400" height="600"  allowFullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <div data-aos = "fade-up">
                <h1 className="text-[40px] font-bold mb-3">Get in Touch</h1>
                <p className="text-[18px] mb-10">Have a question, feedback, or just want to say hello? We'd love to hear from you! Feel free to reach out to us using the form below or through any of the contact methods listed. Our team is ready to assist you and will get back to you as soon as possible.</p>

                <div className="flex gap-7 items-center text-[18px]">
                    <FaPhoneAlt />
                    <p>(880)1734528340</p>
                </div >
                <div className="flex gap-7 items-center text-[18px]">
                    <MdEmail />
                    <p>sweethome@gmail.com</p>

                </div>
                <div className="flex gap-7 items-center text-[18px]">
                <FaLocationDot />
                <p>University of Barishal, Barishal-8254</p>

                </div>
                <div className="flex gap-7 items-center text-[18px]">
                <IoLogoFacebook />
                <p>SweetHome Official</p>

                </div>
                <div className="flex gap-7 items-center text-[18px]">
                <TbWorld />
                <p>www.sweethome.com</p>

                </div>
                <h2 className="text-[30px] font-bold mt-10">Send us a message</h2>
                <form className="form-body grid grid-cols-2 gap-5">
                    <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold text-Black">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold text-Black">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold text-Black">Phone</span>
                    </label>
                    <input type="text" name="phone" placeholder="Your Phone Number" className="input input-bordered" required />
                    </div>
                    <div className="form-control ">
                    <label className="label">
                        <span className="label-text font-bold text-Black">Subject</span>
                    </label>
                    <input type="text" name="name" placeholder="Enter Subject" className="input input-bordered" required />
                    </div>
                    <div className="form-control col-span-2 row-span-5 border rounded-2xl">
                    <textarea id="message" name="message" rows="4" cols="40" placeholder="Enter your message"></textarea>
                    
                    </div>
                    <button className="bg-black text-white py-2 px-4 rounded-2xl">Send Message</button>

                </form>

            </div>
        </div>
    );
};

export default ContactUs;