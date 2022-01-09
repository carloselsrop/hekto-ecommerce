import Brands from '../components/common/Brands'
import Footer from '../components/common/Footer'
import Navbar from '../components/common/Navbar'
import TitlePage from '../components/common/TitlePage'
import { useState } from 'react'

const Faq = () => {
  const [faq] = useState([
    {
      question: 'What is the difference between a brand and a brand name?',
      answer:
        'A brand is a company that has a product or service that is marketed to a specific demographic. A brand name is a name that is used to identify a brand. A brand name is not necessarily synonymous with a brand.'
    }
  ])

  return (
    <div>
      <Navbar />
      <TitlePage title="FAQ" />
      <div className="w-full flex justify-center">
        <div className="w-10/12 sm:w-8/12 py-24 flex flex-col space-y-8 md:justify-between md:flex-row md:space-y-0">
          {/* Frequent Questions */}
          <div className="w-full md:w-5/12 font-body">
            <div className="pb-8 sm:pb-12 text-center sm:text-left font-bold text-2xl text-hekto-navy-blue">
              General Information
            </div>
            {/* Questions */}
            <div className="space-y-8 flex flex-col items-center text-center sm:text-left">
              {faq.map(faq => {
                return (
                  <div key={faq.question}>
                    <div className="text-sm pb-2 text-hekto-navy-blue font-bold">{faq.question}</div>
                    <div className="text-sm text-gray-400">{faq.answer}</div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* Question Box */}
          <div className="w-full md:w-6/12 flex justify-center items-center font-body">
            <div className="w-full md:w-11/12  bg-hekto-sky-blue flex flex-col items-start py-6 px-8">
              <div className="font-bold text-xl py-8">
                Ask a Question
              </div>
              <div className="flex flex-col items-center w-full space-y-8 pb-8">
                <input className="w-full  py-2 focus:outline-none px-4 text-sm " placeholder="Your Name*" type="email" />
                <input type="text" className="w-full  py-2 focus:outline-none px-4 text-sm " placeholder="Subject*" />
                <textarea className="w-full  py-2 focus:outline-none px-4 text-sm resize-none" placeholder="Type Your Message*" name="" id="" cols="30" rows="5" />
              </div>
              <div className="w-full flex justify-center items-center">
                <button className="bg-hekto-pink px-4 py-2 rounded-sm text-white transform hover:scale-105 transition duration-300">
                  Send Mail
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Brands />
      <Footer />
    </div>
  )
}

export default Faq