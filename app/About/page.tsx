import Image from 'next/image';
import { Card, CardContent } from '@/app/components/ui/card'
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className='bg-gray-900'>
      {/* Hero section */}
      <section className="relative w-screen h-screen flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full">
          <Image
            src="/images/about-hero.jpg" // Path relative to the "public" directory
            alt="Hero Background"
            layout="fill" // Fills the parent container
            objectFit="cover" // Ensures the image covers the container
            priority // Optimizes loading for the hero section
            className="transition-transform duration-500 group-hover:opacity-75"
          />
        </div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold sm:text-6xl">About Us</h1>
        </div>
      </section>

      <section className="py-16">
        <div className="grid md:grid-cols-2 gap-16 items-center mx-8">
          <div className="flex flex-col items-start">
            <h1 className="text-4xl font-semibold mb-4 text-white">Our Story</h1>
            <p className="text-white text-lg mb-4">
              From a young age, I was immersed in the world of construction. At 12, I began working alongside my father, learning the intricacies of the trade. This hands-on experience, coupled with a formal education, has equipped me with a deep understanding of the industry. My diverse background in light commercial, big box retail, single-family, and multi-family residential projects has allowed me to develop a versatile skill set and a keen eye for detail.
            </p>
          </div>
          <div>
            <Image
              src="/images/ben-profile.jpg"
              alt="Ben Co. Builders Founder"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      <section className="relative w-screen h-screen flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
                <div>
                    <Image
                    src="/images/about-hero.jpg"
                    alt="Image 1"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <Image
                    src="/images/thug-ben.jpg"
                    alt="Image 2"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <Image
                    src="/images/ben-scarlet.jpg"
                    alt="Image 3"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
       </section> 

      {/* Other sections with alternating layout */}
      <section className="py-16 bg-[#c6c6b2]">
        <div className="grid md:grid-cols-2 gap-16 items-center mx-8">
            <div className='items-center justify-center text-center'>
                <h2 className="text-4xl font-semibold mb-4 text-gray-800">Why BenCo Builders?</h2>
            </div>
        
          <div className='items-center justify-center text-right'>
            <Card className='border-none'>
              <CardContent className="p-6">
                <p className="text-gray-800 text-lg mb-4">
                  BenCo Builders is more than just a name. It's a commitment to quality, integrity, and lasting value. I strive to build homes that stand the test of time, crafted with the utmost care and attention to detail. In a world where shortcuts are tempting, I choose the path of excellence. Your trust is my priority, and I'm dedicated to delivering homes that you'll be proud to call your own.
                </p>
              </CardContent>
            </Card>
          </div>
          <div>
            {/* Add any relevant content here, such as an image or a quote */}
          </div>
        </div>
      </section>

      <section className="relative w-screen h-screen flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
                <div>
                    <Image
                    src="/images/construction-1.jpg"
                    alt="Image 1"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <Image
                    src="/images/construction-2.jpg"
                    alt="Image 2"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <Image
                    src="/images/construction-3.jpg"
                    alt="Image 3"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
       </section> 

      {/* ... other sections with alternating layout ... */}
      <section className='py-32 bg-gray-800'>
            <div className="grid md:grid-cols-2 gap-16 items-center mx-8">
                <div className='items-center justify-center text-center'>
                    <p className="text-white text-lg mb-4">
                    Wimberley is more than just a location; it's a way of life. I've chosen to raise my family here, and I'm dedicated to making a positive impact on this community for generations to come. Our commitment to Wimberley is unwavering. We're building homes that will stand the test of time, providing comfort and security for families for years to come.
                    </p>
                </div>
                <div className="items-center justify-center text-center">
                    <h2 className="text-4xl font-semibold mb-4 text-white">
                    Rooted in Wimberley
                    </h2>
                </div>
            </div>
        </section>

        <section className="relative w-screen h-screen flex items-center justify-center">
        <div className="grid grid-cols-3 gap-4">
                <div>
                    <Image
                    src="/images/home-1.jpg"
                    alt="Image 1"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <Image
                    src="/images/home-2.jpg"
                    alt="Image 2"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
                <div>
                    <Image
                    src="/images/home-3.jpg"
                    alt="Image 3"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
       </section> 

        <section className='py-32 mb-24 bg-[#c6c6b2]'>
            <div className='grid md:grid-cols-2 gap-16 items-center mx-8'>
                <div className="mt-10 text-center ">
                    <h2 className="text-4xl font-semibold mb-4 text-gray-700">
                    Our Promise
                    </h2>
                </div>
                <div className='items-center justify-center text-center'>
                    <p className="text-gray-600 text-lg mb-4">
                    Your satisfaction is our top priority. From the initial consultation to the final walkthrough, we're dedicated to providing a seamless and stress-free building experience. With BenCo Builders, you can expect high-quality craftsmanship, exceptional customer service, and a home that exceeds your expectations. We're not just building houses; we're building relationships.
                    </p>
                </div>
            </div>
         </section>


      <Footer />
    </div>
  );
}

// import Image from 'next/image';
// import { Card, CardContent } from '@/app/components/ui/card'
// import Footer from '../components/Footer';


// export default function AboutPage() {
//     return(
//     <>
//     {/* Hero section */}
//         <section className="relative w-screen h-screen flex items-center justify-center">
//         {/* Background Image */}
//         <div className="absolute top-0 left-0 w-full h-full">
//             <Image
//             src="/images/about-hero.jpg" // Path relative to the "public" directory
//             alt="Hero Background"
//             layout="fill" // Fills the parent container
//             objectFit="cover" // Ensures the image covers the container
//             priority // Optimizes loading for the hero section
//             className="transition-transform duration-500 group-hover:opacity-75"
//             />
//         </div>

//     {/* Overlay Content */}
//         <div className="relative z-10 text-center text-white">
//             <h1 className="text-4xl font-bold sm:text-6xl">About Us</h1>
//         </div>
//         </section>

//         <section className='py-8 bg-gray-900'>
//         <h1 className="text-4xl font-semibold mb-4 mx-8 text-white">
//                 Our Story
//         </h1>
//         <div className="grid md:grid-cols-2 gap-2 items-center my-6 mx-8 bg-[#c6c6b2] rounded-lg ">
//             <div>
//             <Image 
//                 src="/images/ben-profile.jpg" 
//                 alt="Ben Co. Builders Founder" 
//                 width={600} 
//                 height={400} 
//                 className="rounded-lg shadow-lg"
//             />
//             </div>
//             <div>
            
//             <p className="text-white mb-4">
//             From a young age, I was immersed in the world of construction. At 12, I began working alongside my father, learning the intricacies of the trade. This hands-on experience, coupled with a formal education, has equipped me with a deep understanding of the industry. My diverse background in light commercial, big box retail, single-family, and multi-family residential projects has allowed me to develop a versatile skill set and a keen eye for detail.
//             </p>
//             </div>
//         </div>
//         </section>

//         <section className="bg-[#c6c6b2] py-8">
//         <h2 className="text-2xl font-semibold mb-4 text-gray-800">
//             Why BenCo Builders?
//         </h2>
//             <div className="relative w-3/4 p-10 mx-auto rounded-lg flex items-center space-x-6">
//                 <Card className="bg-gray-800 rounded-lg">
//                 <CardContent className="p-6">
//                     <p className="text-white">
//                     BenCo Builders is more than just a name. It's a commitment to quality, integrity, and lasting value. I strive to build homes that stand the test of time, crafted with the utmost care and attention to detail. In a world where shortcuts are tempting, I choose the path of excellence. Your trust is my priority, and I'm dedicated to delivering homes that you'll be proud to call your own.
//                     </p>
//                 </CardContent>
//                 </Card>
//             </div>
//         </section>
//         <section className='my-8 '>
//             <div className="bg-gray-50 p-8 rounded-lg">
//                 <h2 className="text-2xl font-semibold mb-4 text-gray-700">
//                 Rooted in Wimberley
//                 </h2>
//                 <p className="text-gray-600">
//                 Wimberley is more than just a location; it's a way of life. I've chosen to raise my family here, and I'm dedicated to making a positive impact on this community for generations to come. Our commitment to Wimberley is unwavering. We're building homes that will stand the test of time, providing comfort and security for families for years to come.
//                 </p>
//             </div>
//         </section>
//         <section className='py-8 bg-gray-900'>
//             <div className="mt-10 text-center bg-[#c6c6b2]">
//                 <h2 className="text-2xl font-semibold mb-4 text-gray-700">
//                 Our Promise
//                 </h2>
//                 <p className="text-gray-600 max-w-2xl mx-auto">
//                 Your satisfaction is our top priority. From the initial consultation to the final walkthrough, we're dedicated to providing a seamless and stress-free building experience. With BenCo Builders, you can expect high-quality craftsmanship, exceptional customer service, and a home that exceeds your expectations. We're not just building houses; we're building relationships.
//                 </p>
//         </div>
//         </section>
//         <Footer/>
//     </>
//     )
// };

