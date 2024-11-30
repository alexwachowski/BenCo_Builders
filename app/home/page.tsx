import Image from "next/image";
import HouseGallery from "../components/HouseGallery";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export default function Hero() {
  return (
  <div className="bg-grey-900">
    {/* <NavBar /> */}
    {/* Hero section */}
    <section className="relative w-screen h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src="/house.jpeg" // Path relative to the "public" directory
          alt="Hero Background"
          layout="fill" // Fills the parent container
          objectFit="cover" // Ensures the image covers the container
          priority // Optimizes loading for the hero section
          className="opacity-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-center text-white">
        <h1 className="text-4xl font-bold sm:text-6xl">Ben Co. Builders</h1>
        <p className="mt-4 text-lg sm:text-xl">Quality | Integrity | Experience.</p>
      </div>
    </section>

    {/* Gallery */}
    <section>
      <div className="relative top-0 w-full h-full text-white">
      <h1 className="text-center text-4xl font-bold mt-10 mb-6">Our Houses</h1>
      <HouseGallery />
      </div>
    </section>

    {/* About Me */}
    <section className="relative flex items-center justify-center w-full h-screen my-8">
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Optional Background for the About Section */}
        <Image
          src="/images/about-background.jpg" // Replace with your actual image path
          alt="About Section Background"
          layout="fill"
          objectFit="cover"
          className="opacity-50" // Dim the background for better readability
        />
      </div>
      <div className="relative z-10 w-3/4 p-10 mx-10 bg-zinc-100 rounded-lg shadow-lg flex items-center space-x-6">
        {/* Circular Image */}
        <div className="w-42 h-42 rounded-full overflow-hidden mb-6 flex-none">
          <Image
            src="/images/ben-profile.jpg" // Replace with your actual image path
            alt="Profile Picture"
            width={300}
            height={300}
            objectFit="cover" // Ensures the image is cropped to fit the circle
            objectPosition="center" // Centers the image within the circle
            className="rounded-full"
          />
        </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-600 sm:text-3xl">Your Trusted Hometown Builder</h2>
        <p className="mt-4 text-gray-600">
        With roots in construction that run as deep as a solid foundation, Ben Co. Builders brings decades of hands-on experience and genuine commitment to every project. Born from a family legacy of craftsmanship and refined through years of diverse residential and commercial building experience, we don't just construct houses—we create homes where memories take root.
        Proudly local to Wimberley, our approach combines time-honored building techniques with modern standards of excellence. Every home we build reflects our core promise: uncompromising quality, transparent processes, and a dedication to doing things right the first time.
        When you choose Ben Co. Builders, you're not just hiring a contractor. You're partnering with a lifelong community member who understands that a home is more than just walls and a roof—it's the backdrop of your life's most cherished moments.
        Quality. Integrity. Community. That's the Ben Co. promise.
        </p>
      </div>
      </div>
    </section>

    {/* Contact */}
    <section className="relative flex flex-col items-center justify-center w-full bg-zinc-200 py-16 px-8">
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

      <section>
        <Footer></Footer>
      </section>

  </div>
  );
}
