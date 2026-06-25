import { testimonialsData } from "@/utils/data/testimonials-data";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

function TestimonialsSection() {
  return (
    <div id="testimonials" className="relative z-50 my-12 lg:my-24">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex flex-col items-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <h2 className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Testimonials
          </h2>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
        <p className="text-gray-400 text-sm md:text-base mt-3 text-center max-w-lg px-4">
          What clients and partners say about working with me.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.id}
            className="group relative flex flex-col justify-between from-[#0d1224] border border-[#1b2c68a0] rounded-xl bg-gradient-to-r to-[#0a0d37] p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(22,242,179,0.2)] hover:-translate-y-2 hover:border-[#16f2b3]"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-2 text-pink-500/20 group-hover:text-pink-500/40 transition-colors duration-300">
              <FaQuoteLeft size={48} />
            </div>

            <div className="relative z-10">
              {/* Star Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.stars)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400" size={16} />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-gray-300 text-sm md:text-base italic leading-relaxed mb-6">
                {testimonial.quote}
              </p>
            </div>

            {/* Author Profile */}
            <div className="flex items-center gap-3 border-t border-[#353a52] pt-4 mt-auto">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 flex items-center justify-center text-white font-bold text-sm">
                {testimonial.initials}
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm md:text-base group-hover:text-[#16f2b3] transition-colors duration-300">
                  {testimonial.name}
                </h4>
                <p className="text-gray-400 text-xs md:text-sm">
                  {testimonial.role}, <span className="text-[#16f2b3]">{testimonial.company}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestimonialsSection;
