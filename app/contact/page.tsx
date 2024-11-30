

export default function ContactPage(){
   return (
   <div>
    <section className="relative flex flex-col items-center justify-center w-full bg-zinc-200 py-16 px-8 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Me</h2>
        <p className="text-gray-600 text-center mb-8 max-w-2xl">
          Have a question or want to work together? Feel free to drop me a message using the form below!
        </p>

        <form className="w-full max-w-3/4 bg-zinc-50 p-8 rounded-xl shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-blue-300"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="max-w-3/4 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </section>
      </div>
   )
}