import Image from 'next/image';

interface DoctorCardProps {
  name: string;
  imageSrc: string;
  clinic: string;
}

function DoctorCard({ name, imageSrc, clinic }: DoctorCardProps) {
  return (
    <div className="min-w-[350px] p-8 border border-[#D4AF37] rounded-2xl text-center snap-center">
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#D4AF37]">
        <Image
          src={imageSrc}
          alt={name}
          width={160}
          height={160}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-2xl font-semibold text-[#D4AF37]">{name}</h3>
      <p className="text-gray-400 mb-4">{clinic}</p>
      <p className="text-gray-500">
        &quot;Lobortis leo pretium facilisis amet nisl at nec. Scelerisque
        risus tortor donec ipsum consequat semper consequat adipiscing ultrices.&quot;
      </p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-b from-[#000000] to-[#1a1a1a] text-white">
      {/* First Section */}
      <section className="min-h-screen md:h-full grid grid-rows-2 gap-8 md:gap-0">
        {/* Top Section */}
        <div className="flex flex-col justify-center items-start px-4 sm:px-8 md:px-24 pt-20 md:pt-0 md:translate-y-24 lg:translate-y-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] leading-[100%] font-extralight">
            Measure Aging
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] leading-[120%] md:leading-[56px] italic font-light text-gray-400 mt-2 sm:mt-4">
            with golden standard
          </p>
          <button className="mt-4 sm:mt-6 md:mt-8 flex items-center justify-center gap-2 sm:gap-4 bg-[#3A4155] text-white py-2 px-6 sm:py-3 sm:px-8 md:py-4 md:px-10 rounded-full hover:bg-[#4A5066] transition-all text-lg sm:text-xl md:text-2xl lg:text-[36px] leading-[100%] font-extralight">
            <span className="text-base sm:text-lg md:text-xl lg:text-[32px]">←</span>
            <span>Learn about our test</span>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col justify-center items-end px-4 sm:px-8 md:px-24 pb-10 md:pb-0">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[96px] leading-[100%] font-extralight">
            Intervene Health
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[52px] leading-[120%] md:leading-[56px] italic font-light text-gray-400 mt-2 sm:mt-4">
            with scientific confidence
          </p>
          <button className="mt-4 sm:mt-6 md:mt-8 flex items-center gap-2 bg-gray-700 text-white py-2 px-6 sm:py-3 sm:px-8 rounded-full hover:bg-gray-600 transition-all text-lg sm:text-xl md:text-2xl lg:text-[36px] leading-[100%] font-extralight">
            <span>Learn about action plan</span>
            <span className="text-base sm:text-lg md:text-xl lg:text-[32px]">→</span>
          </button>
        </div>
      </section>

      {/* Second Section */}
      <section className="min-h-screen bg-black text-white py-20">
        <div className="flex justify-between items-center mb-12 px-8 md:px-24">
          <h2 className="text-5xl font-light">Elevate Your Practice</h2>
          <button className="bg-[#F6E7CD] text-black text-lg md:text-xl font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-2xl transition-all">
            Become a Provider
          </button>
        </div>

        {/* Scrollable Card Section */}
        <div className="overflow-x-auto pb-8 scrollbar-hide scroll-snap-type-x snap-x snap-mandatory scroll-smooth">
          <div className="flex justify-center space-x-8 px-8 md:px-24">
            <DoctorCard
              name="Dr. James Pattinson, MD"
              imageSrc="/Dr_James.png"
              clinic="Explore Longevity Clinic, Los Angeles"
            />
            <DoctorCard
              name="Dr. Clayton Anderson, MD"
              imageSrc="/Dr_Clayton.png"
              clinic="Peek Longevity Clinic, New York"
            />
            <DoctorCard
              name="Dr. Kate Ma, MD"
              imageSrc="/Dr_Kate.png"
              clinic="Peek Longevity Clinic, New York"
            />
          </div>
        </div>
      </section>

      {/* Third Section */}
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 flex flex-col">
        {/* Number Column for Mobile */}
        <div className="md:hidden w-full h-[80px] bg-white flex justify-center items-center border-b-2 border-gray-200 shadow-md">
          <h1 className="text-[64px] font-light text-gray-800">1</h1>
        </div>

        {/* Number Column for Desktop */}
        <div className="hidden md:flex w-[120px] xl:w-[160px] flex-shrink-0 bg-white justify-center items-start pt-[1.2em] rounded-r-3xl border-l-2 border-gray-200 shadow-md relative">
          <h1 className="text-[64px] lg:text-[80px] font-light text-gray-800 absolute top-[1.2em]">1</h1>
        </div>

        {/* Content Area */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-16">

          {/* Title Section with Full Width */}
          <div className="col-span-12">
            <h2 className="text-[32px] md:text-[64px] lg:text-[96px] font-normal leading-[1.2] text-gray-900"
              style={{ fontFamily: 'Optima, sans-serif' }}>
              SAMPLE PROCESSING
            </h2>
          </div>

          {/* Left Section - Text */}
          <div className="col-span-12 md:col-span-7">
            <h3 className="text-[28px] md:text-[48px] lg:text-[64px] font-normal leading-[100%] text-gray-900 font-light mt-4 md:mt-8"
              style={{ fontFamily: 'Optima, sans-serif' }}>
              Measure with Precision
            </h3>
            <p className="text-gray-600 text-[18px] md:text-[28px] lg:text-[36px] font-extralight leading-[140%] md:leading-[120%] mt-4 md:mt-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}>
              Generation Lab partners with Tempus and Illumina to ensure gold-standard accuracy in our
              SystemAge Test, leveraging Illumina&apos;s sequencing and Tempus&apos; CLIA-certified lab for precise aging insights.
            </p>
          </div>

          {/* Right Section - Logos */}
          <div className="col-span-12 md:col-span-5 flex flex-col justify-center gap-4 md:gap-8 mt-6 md:mt-0">
            {/* Responsive image display */}
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src="/tempus.png"
                alt="Tempus Logo"
                width={200}
                height={80}
                className="h-[40px] md:h-[60px] lg:h-[80px] w-auto"
              />
            </div>
            <div className="w-full flex justify-center md:justify-start">
              <Image
                src="/illumina.png"
                alt="Illumina Logo"
                width={200}
                height={80}
                className="h-[40px] md:h-[60px] lg:h-[80px] w-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 flex flex-col">

        {/* Number Column for Mobile */}
        <div className="md:hidden w-full h-[80px] bg-white flex justify-center items-center border-b-2 border-gray-200 shadow-md">
          <h1 className="text-[64px] font-light text-gray-800">2</h1>
        </div>

        {/* Number Column for Desktop */}
        <div className="hidden md:flex w-[120px] xl:w-[160px] flex-shrink-0 bg-white justify-center items-start pt-[1.2em] rounded-r-3xl border-l-2 border-gray-200 shadow-md relative">
          <h1 className="text-[64px] lg:text-[80px] font-light text-gray-800 absolute top-[1.2em]">2</h1>
        </div>

        {/* Content Area */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-16">

          {/* Title - Full Width */}
          <div className="lg:col-span-12 mb-8">
            <h2
              className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.2]"
              style={{ color: 'var(--Assist-Neutral-black, #170D00)' }}
            >
              MOST ADVANCED ANALYSIS
            </h2>
          </div>

          {/* Left Side - Text Section */}
          <div className="lg:col-span-7 bg-gray-50 p-6 md:p-8 rounded-xl">
            <p
              className="text-lg md:text-xl"
              style={{ color: 'var(--Assist-Neutral-black, #170D00)' }}
            >
              Go Beyond Just A Number
            </p>

            {/* BioNoise Level */}
            <p
              className="text-black text-[20px] md:text-[25px] lg:text-[36px] font-extralight leading-[120%] md:leading-[100%] tracking-[0%] align-middle mt-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <span className="font-bold">BioNoise Level: </span>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>

            {/* Aging Trajectory */}
            <p
              className="text-black text-[20px] md:text-[25px] lg:text-[36px] font-extralight leading-[120%] md:leading-[100%] tracking-[0%] align-middle mt-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              <span className="font-bold">Aging Trajectory: </span>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            {/* Call-to-Action Button */}
            <button className="mt-8 bg-gradient-to-b from-[#FDF6EB] to-[#F6E7CD] text-gray-800 text-lg font-semibold py-3 px-6 rounded-full border border-[#E8D7BA] shadow-sm hover:shadow-md transition-all">
              Read more in our white paper
            </button>
          </div>

          {/* Right Side - Graph and Papers */}
          <div className="lg:col-span-5">
            {/* Graph Section */}
            <div className="mb-8">
              <p className="italic font-semibold mb-4">An Example of Aging Entropy Curve for Cardiac System</p>
              <Image
                src="/aging-curve.png"
                alt="Aging Curve"
                width={600}
                height={400}
                className="w-full rounded-lg"
              />
            </div>

            {/* Research Papers - Horizontal Scroll */}
            <p className="italic font-semibold mb-4">Read our papers:</p>
            <div className="flex space-x-4 overflow-x-auto pb-4 scrollbar-hide">
              <Image src="/paper1.png" alt="Research Paper 1" width={96} height={128} className="w-24 h-32 object-cover" />
              <Image src="/paper2.png" alt="Research Paper 2" width={96} height={128} className="w-24 h-32 object-cover" />
              <Image src="/paper3.png" alt="Research Paper 3" width={96} height={128} className="w-24 h-32 object-cover" />
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}