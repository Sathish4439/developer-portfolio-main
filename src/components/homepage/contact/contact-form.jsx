import emailjs from '@emailjs/browser';
import { isValidEmail } from "@/utils/check-email";
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

function ContactForm() {
  const [error, setError] = useState({ email: false, required: false });
  const [isLoading, setIsLoading] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    message: "",
    projectType: "New Mobile App",
    budget: "Under $1,000",
    company: "",
  });

  const checkRequired = () => {
    if (userInput.email && userInput.message && userInput.name) {
      setError({ ...error, required: false });
    }
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    if (!userInput.email || !userInput.message || !userInput.name) {
      setError({ ...error, required: true });
      return;
    } else if (error.email) {
      return;
    } else {
      setError({ ...error, required: false });
    };

    try {
      setIsLoading(true);
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_0g4rqak';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_sgzh5es';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '7zCZqx6cwcEbqWaOL';

      // Checking if env vars are still default values
      if (!serviceId || !templateId || !publicKey) {
        toast.error("EmailJS credentials are not set!");
        setIsLoading(false);
        return;
      }

      // NOTE: Ensure your EmailJS template contains {{projectType}}, {{budget}}, and {{company}} fields
      const templateParams = {
        from_name: userInput.name,
        from_email: userInput.email,
        message: userInput.message,
        projectType: userInput.projectType,
        budget: userInput.budget,
        company: userInput.company,
      };

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        {
          publicKey: publicKey,
        }
      );

      toast.success("Message sent successfully!");
      setUserInput({
        name: "",
        email: "",
        message: "",
        projectType: "New Mobile App",
        budget: "Under $1,000",
        company: "",
      });
    } catch (error) {
      console.error(error);
      toast.error(error?.text || "Failed to send message. Please try again later.");
    } finally {
      setIsLoading(false);
    };
  };

  return (
    <div>
      <h2 className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Ready to Build Something Great?</h2>
      <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
        <p className="text-sm text-[#d3d8e8]">{"If you have any questions or concerns, please don't hesitate to contact me. I am open to any work opportunities that align with my skills and interests."}</p>
        <div className="mt-6 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-base">Your Name: </label>
            <input
              id="name"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
              onBlur={checkRequired}
              value={userInput.name}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-base">Your Email: </label>
            <input
              id="email"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="email"
              maxLength="100"
              required={true}
              value={userInput.email}
              onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
              onBlur={() => {
                checkRequired();
                setError({ ...error, email: !isValidEmail(userInput.email) });
              }}
            />
            {error.email && <p className="text-sm text-red-400">Please provide a valid email!</p>}
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="company" className="text-base">Company / Organization (Optional): </label>
            <input
              id="company"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              type="text"
              maxLength="100"
              value={userInput.company}
              onChange={(e) => setUserInput({ ...userInput, company: e.target.value })}
              placeholder="e.g. Acme Corp"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="projectType" className="text-base">Project Type: </label>
              <select
                id="projectType"
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white"
                value={userInput.projectType}
                onChange={(e) => setUserInput({ ...userInput, projectType: e.target.value })}
              >
                <option value="New Mobile App">New Mobile App</option>
                <option value="Web Application">Web Application</option>
                <option value="MVP / Startup">MVP / Startup</option>
                <option value="Full-Time Role">Full-Time Role</option>
                <option value="Freelance Help">Freelance Help</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="budget" className="text-base">Budget Range: </label>
              <select
                id="budget"
                className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-white"
                value={userInput.budget}
                onChange={(e) => setUserInput({ ...userInput, budget: e.target.value })}
              >
                <option value="Under $1,000">Under $1,000</option>
                <option value="$1,000 – $5,000">$1,000 – $5,000</option>
                <option value="$5,000 – $20,000">$5,000 – $20,000</option>
                <option value="Enterprise / Custom">Enterprise / Custom</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-base">Your Message: </label>
            <textarea
              id="message"
              className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
              maxLength="500"
              name="message"
              required={true}
              onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
              onBlur={checkRequired}
              rows="4"
              value={userInput.message}
            />
          </div>
          <div className="flex flex-col items-center gap-3">
            {error.required && <p className="text-sm text-red-400">
              Name, Email and Message fields are required!
            </p>}
            <button
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
              role="button"
              onClick={handleSendMail}
              disabled={isLoading}
            >
              {
                isLoading ?
                  <span>Sending Message...</span> :
                  <span className="flex items-center gap-1">
                    Send Message
                    <TbMailForward size={20} />
                  </span>
              }
            </button>
            <p className="text-xs text-gray-400 mt-2">I typically respond within 24 hours.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

