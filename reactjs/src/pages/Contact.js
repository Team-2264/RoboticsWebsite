
import NavBar from "../components/NavBar";

import { useFormik } from "formik";
import * as Yup from 'yup'
export default function Contact() {
    // Formik Logics
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        }
    })

    // Validate form
   Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid Email").required("Email is required"),
        message: Yup.string().required("Message is required")
    })
    console.log(formik.values)
    return (
        <div className="max-w-full">
            <div>
                <NavBar />
                <br></br>
                <main className="h-screen flex justify-center">
                    <form className="bg-white flex-rounded-lg w-1/2" action="https://formsubmit.co/trojanrobotics2264@gmail.com" method="POST">
                        <h1 className="md:text-2xl sm:text-xl font-bold pb-2">Let's get in touch!</h1>
                        <p className="text-gray-700">Have a quesion, comment or concern? Please feel free to get in contact with us today, and we will get back to you as soon as possible</p>

                        <div className="mt-6">
                            {/* name Input field */}
                            <div className="pb-4 text-sm pb-2">
                                <label className="block pb-1 text-gray-700"
                                    htmlFor="name">Name
                                </label>
                                <input className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-blue-800 focus:ring-blue-800"
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    value={formik.values.name}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            {/* Email Input field */}
                            <div className="pb-4 text-sm pb-2">
                                <label className="block pb-1 text-gray-700"
                                    htmlFor="Email">
                                    Email
                                </label>
                                <input className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-blue-800 focus:ring-blue-800"
                                    type="text"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={formik.values.email}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            {/* Message Input field */}
                            <div className="pb-4 text-sm pb-2">
                                <label className="block pb-1 text-gray-700"
                                    htmlFor="Message">Message
                                </label>
                                <input className="border-2 border-gray-500 p-2 rounded-md w-full focus:border-blue-800 focus:ring-blue-800"
                                    type="text"
                                    name="message"
                                    placeholder="Enter your message"
                                    value={formik.values.message}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="bg-blue-800 text-white px-2 py-1 rounded-lg shadow-xl w-1/4">
                            Submit
                        </button>
                    </form>
                </main>
            </div>
        </div>
    )
}

