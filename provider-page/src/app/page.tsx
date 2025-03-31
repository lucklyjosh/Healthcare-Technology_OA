import Image from 'next/image';

interface DoctorCardProps {
  name: string;
  imageSrc: string;
  clinic: string;
}

export default function Home() {
  return (
    <main className="h-screen bg-gradient-to-b from-[#000000] to-[#1a1a1a] text-white">
      {/* First Section */}
      <section className="h-full grid grid-rows-2">
        <div className="flex flex-col justify-center items-start px-8 md:px-24 translate-y-[130px]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[96px] leading-[100%] font-extralight">Measure Aging</h1>
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-[52px] leading-[56px] italic font-light text-gray-400 mt-4">
            with golden standard
          </p>
          <button className="mt-8 flex items-center justify-center gap-4 bg-[#3A4155] text-white py-4 px-10 rounded-full hover:bg-[#4A5066] transition-all text-[36px] leading-[100%] font-extralight antialiased">
            <span className="text-[32px] translate-y-[-2px]">←</span>
            <span className="align-middle translate-y-[-1px]">Learn about our test</span>
          </button>
        </div>

        <div className="flex flex-col justify-center items-end px-8 md:px-24">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[96px] leading-[100%] font-extralight">Intervene Health</h1>
          <p className="text-xl sm:text-2xl md:text-4xl lg:text-[52px] leading-[56px] italic font-light text-gray-400 mt-4">
            with scientific confidence
          </p>
          <button className="mt-8 flex items-center gap-2 bg-gray-700 text-white py-3 px-8 rounded-full hover:bg-gray-600 transition-all text-[36px] leading-[100%] font-extralight">
            <span className="align-middle translate-y-[-1px]">Learn about action plan</span>
            <span className="text-[32px] translate-y-[-2px]">→</span>
          </button>
        </div>
      </section>

      {/* Second Section */}
      <section className="min-h-screen bg-black text-white py-20">

        {/* Title and Button Section */}
        <div className="flex justify-between items-center mb-12 px-8 md:px-24">
          <h2 className="text-5xl font-light">Elevate Your Practice</h2>
          <button className="bg-[#F6E7CD] text-black text-lg md:text-xl font-semibold py-3 md:py-4 px-6 md:px-8 rounded-full shadow-lg hover:shadow-2xl transition-all">
            Become a Provider
          </button>
        </div>

        {/* Scrollable Card Section */}
        <div className="overflow-x-auto scrollbar-hide scroll-snap-type snap-x snap-mandatory scroll-smooth">
          <div className="flex space-x-8 px-8 md:px-24">
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
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 mx-auto flex flex-col md:flex-row">
        {/* Left Number - Consistent with Section 4 */}
        <div className="w-[120px] xl:w-[160px] flex-shrink-0 bg-white flex justify-center items-center rounded-r-3xl border-l-2 border-gray-200 shadow-md">
          <h1 className="text-[64px] lg:text-[80px] font-light text-gray-800">1</h1>
        </div>
        
        {/* Right Content */}
        <div className="flex-1 p-8 md:p-16 lg:p-[120px] flex flex-col lg:flex-row justify-between">
          <div className="max-w-[600px]">
            <h2 className="text-[48px] md:text-[64px] lg:text-[96px] font-normal leading-[100%] tracking-[0%] text-gray-900" style={{ fontFamily: 'Optima, sans-serif' }}>
              SAMPLE PROCESSING
            </h2>

            <h3 className="text-[32px] md:text-[48px] lg:text-[64px] font-normal leading-[100%] tracking-[0%] text-gray-900 font-light mt-8" style={{ fontFamily: 'Optima, sans-serif' }}>
              Measure with Precision
            </h3>
            <p
              className="text-gray-600 text-[20px] md:text-[28px] lg:text-[36px] font-extralight leading-[120%] md:leading-[100%] tracking-[0%] align-middle mt-8"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              Generation Lab partners with Tempus and Illumina to ensure gold-standard accuracy in our
              SystemAge Test, leveraging Illumina&apos;s sequencing and Tempus&apos; CLIA-certified lab for precise aging insights.
            </p>
          </div>

          {/* Right Logo */}
          <div className="flex flex-col justify-center gap-8 mt-8 lg:mt-0">
            <img src="/tempus.png" alt="Tempus Logo" className="h-[60px] md:h-[80px] w-auto" />
            <img src="/illumina.png" alt="Illumina Logo" className="h-[60px] md:h-[80px] w-auto" />
          </div>
        </div>
      </section>

      {/* Fourth Section */}
      <section className="min-h-screen bg-[#FDF8F2] text-gray-900 flex flex-col md:flex-row">
        {/* Left Number - Consistent with Section 3 */}
        <div className="w-[120px] xl:w-[160px] flex-shrink-0 bg-white flex justify-center items-center rounded-r-3xl border-l-2 border-gray-200 shadow-md">
          <h1 className="text-[64px] lg:text-[80px] font-light text-gray-800">2</h1>
        </div>

        {/* Main Content */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-16">
          <div className="lg:col-span-7 bg-gray-50 p-6 md:p-8 rounded-xl">
            <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold">MOST ADVANCED ANALYSIS</h2>
            <p className="text-lg md:text-xl">Go Beyond Just A Number</p>

            {/* BioNoise Level */}
            <p className="mt-6 md:mt-8 text-base md:text-lg">
              <span className="font-bold">BioNoise Level: </span>
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>

            {/* Aging Trajectory */}
            <p className="mt-6 md:mt-8 text-base md:text-lg">
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
              <img src="/aging-curve.png" alt="Aging Curve" className="w-full rounded-lg" />
            </div>

            {/* Research Papers */}
            <p className="italic font-semibold mb-4">Read our papers:</p>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              <img src="/paper1.png" alt="Paper 1" className="w-24 h-32 object-cover" />
              <img src="/paper2.png" alt="Paper 2" className="w-24 h-32 object-cover" />
              <img src="/paper3.png" alt="Paper 3" className="w-24 h-32 object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
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

