const ContactSection = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col justify-center items-center text-center my-10">
            <div className="flex justify-center items-center gap-2 mb-4">
            <div className="w-6 h-1 bg-gradient-to-r from-blue-800 to-blue-500 rounded-full" />
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-blue-800 to-blue-500 text-transparent bg-clip-text">Contact Us</h2>
          </div>
          <p className="text-gray-900 text-4xl font-bold">
            If You Have Any Query, Please Contact Us
          </p>
        </div>
        
        

        <div className="max-w-3xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
               
                <input
                  type="text"
                  id="name"
                  className="w-full px-6 py-4 border bg-white border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                
                <input
                  type="email"
                  id="email"
                  className="w-full px-6 py-4 border bg-white border-blue-200  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Mobile Number Field */}
              <div>
                
                <input
                  type="tel"
                  id="mobile"
                  className="w-full px-6 py-4 border bg-white border-blue-200  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              {/* Subject Field */}
              <div>
                
                <input
                  type="text"
                  id="subject"
                  className="w-full px-6 py-4 border bg-white border-blue-200  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Enter subject"
                  required
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="col-span-2">
              
              <textarea
                id="message"
                rows="4"
                className="w-full px-6 py-4 border bg-white border-blue-200  rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-6 rounded-lg hover:bg-blue-900 transition-colors duration-300 font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;