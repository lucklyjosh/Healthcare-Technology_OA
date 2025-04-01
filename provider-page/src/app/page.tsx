import Image from 'next/image';

interface DoctorCardProps {
  name: string;
  imageSrc: string;
  clinic: string;
}

function DoctorCard({ name, imageSrc, clinic }: DoctorCardProps) {
  return (
    <div className="min-w-[350px] p-8 border border-[#D4AF37] rounded-2xl text-center snap-center">
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#D4AF37] snap-center">
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
      <section className="section-one min-h-screen md:h-full grid grid-rows-2 gap-8 md:gap-0">
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

        {/* Display Desktop screen*/}
        <div className="hidden md:block">
          <div className="overflow-x-auto pb-8 scrollbar-hide scroll-snap-type-x snap-x snap-mandatory scroll-smooth">
            <div className="flex justify-center space-x-8 px-8 md:px-24">
              <div className="snap-center">
                <DoctorCard
                  name="Dr. James Pattinson, MD"
                  imageSrc="/Dr_James.png"
                  clinic="Explore Longevity Clinic, Los Angeles"
                />
              </div>
              <div className="snap-center">
                <DoctorCard
                  name="Dr. Clayton Anderson, MD"
                  imageSrc="/Dr_Clayton.png"
                  clinic="Peek Longevity Clinic, New York"
                />
              </div>
              <div className="snap-center">
                <DoctorCard
                  name="Dr. Kate Ma, MD"
                  imageSrc="/Dr_Kate.png"
                  clinic="Peek Longevity Clinic, New York"
                />
              </div>
              
              
              
            </div>
          </div>
        </div>

        {/* Display Mobile screen*/}
        <div className="md:hidden">
          <div className="relative">
            <div className="overflow-x-auto pb-8 scrollbar-hide scroll-snap-type-x snap-x snap-mandatory scroll-smooth pl-6">
              <div className="flex gap-6 w-max">
                <div className="snap-start flex-shrink-0 w-[85vw]">
                  <DoctorCard
                    name="Dr. James Pattinson, MD"
                    imageSrc="/Dr_James.png"
                    clinic="Explore Longevity Clinic, Los Angeles"
                  />
                </div>
                <div className="snap-start flex-shrink-0 w-[85vw]">
                  <DoctorCard
                    name="Dr. Clayton Anderson, MD"
                    imageSrc="/Dr_Clayton.png"
                    clinic="Peek Longevity Clinic, New York"
                  />
                </div>
                <div className="snap-start flex-shrink-0 w-[85vw] pr-6">
                  <DoctorCard
                    name="Dr. Kate Ma, MD"
                    imageSrc="/Dr_Kate.png"
                    clinic="Peek Longevity Clinic, New York"
                  />
                </div>
                <div className="snap-start flex-shrink-0 w-[85vw]">
                  <DoctorCard
                    name="Dr. James Pattinson, MD"
                    imageSrc="/Dr_James.png"
                    clinic="Explore Longevity Clinic, Los Angeles"
                  />
                </div>
                <div className="snap-start flex-shrink-0 w-[85vw]">
                  <DoctorCard
                    name="Dr. Clayton Anderson, MD"
                    imageSrc="/Dr_Clayton.png"
                    clinic="Peek Longevity Clinic, New York"
                  />
                </div>
                <div className="snap-start flex-shrink-0 w-[85vw] pr-6">
                  <DoctorCard
                    name="Dr. Kate Ma, MD"
                    imageSrc="/Dr_Kate.png"
                    clinic="Peek Longevity Clinic, New York"
                  />
                </div>
                
                
              </div>
            </div>
          </div>
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </section>

      <div className="background-gradient">
        {/* Third Section */}
        <section className="min-h-screen text-gray-900 flex flex-col md:flex-row">
          {/* Number Column for Mobile */}
          <div className="md:hidden w-full h-[80px] bg-white flex justify-center items-center border-b-2 border-gray-200 shadow-md"
            style={{ backgroundColor: 'transparent' }}
          >
            <h1 className="text-[64px] font-light text-gray-800">1</h1>
          </div>

          {/* Number Column for Desktop*/}
          <div
            className="hidden md:flex w-[120px] xl:w-[160px] flex-shrink-0 justify-center items-start pt-16 rounded-r-3xl border-l-2 border-gray-200 shadow-md relative min-h-screen"
            style={{ backgroundColor: 'transparent' }}
          >
            <h1 className="text-[64px] lg:text-[80px] font-light text-gray-800">1</h1>
          </div>



          {/* Content Area */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-8 p-8 md:p-16">
            <div className="col-span-12">
              <h2 className="text-[32px] md:text-[64px] lg:text-[96px] font-normal leading-[1.2] text-gray-900">
                SAMPLE PROCESSING
              </h2>
            </div>

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

            <div className="col-span-12 md:col-span-5 flex flex-col justify-center gap-4 md:gap-8 mt-6 md:mt-0">
              <div className="w-full flex justify-center md:justify-start">
                <Image
                  src="/section_03_01.png"
                  alt="Tempus Logo"
                  width={200}
                  height={80}
                  className="h-[40px] md:h-[60px] lg:h-[80px] w-auto"
                />
              </div>
              <div className="w-full flex justify-center md:justify-start">
                <Image
                  src="/section_03_02.png"
                  alt="Illumina Logo"
                  width={200}
                  height={80}
                  className="h-[40px] md:h-[60px] lg:h-[80px] w-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative flex flex-col md:flex-row min-h-screen md:min-h-[200vh] text-gray-900 overflow-x-visible">

          {/* Number Column for Mobile */}
          <div className="md:hidden w-full h-[80px] bg-white flex justify-center items-center border-b-2 border-gray-200 shadow-md"
            style={{ backgroundColor: 'transparent' }}
          >
            <h1 className="text-[64px] font-light text-gray-800">2</h1>
          </div>

          {/* Number Column for Desktop (Shared for both sections) */}
          <div
            className="hidden md:flex w-[120px] xl:w-[160px] flex-shrink-0 justify-center items-start pt-16 rounded-r-3xl border-l-2 border-gray-200 shadow-md relative min-h-screen"
            style={{ backgroundColor: 'transparent' }}
          >
            <h1 className="text-[64px] lg:text-[80px] font-light text-gray-800">2</h1>
          </div>

          {/* Content Area for Sections 4 & 5 */}
          <div className="flex-1 flex flex-col">
            {/* Section 4 Content */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 md:p-16">
              <div className="lg:col-span-12 mb-8">
                <h2 className="text-[32px] md:text-[48px] lg:text-[64px] font-semibold leading-[1.2] text-[#170D00]">
                  MOST ADVANCED ANALYSIS
                </h2>
              </div>

              <div className="lg:col-span-7 p-6 md:p-8 rounded-xl">
                <p className="text-black text-[20px] md:text-[25px] lg:text-[46px] font-extralight leading-[120%] md:leading-[100%] mt-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  Go Beyond Just A Number
                </p>
                <p className="text-black text-[20px] md:text-[25px] lg:text-[36px] font-extralight leading-[120%] md:leading-[100%] mt-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <span className="font-bold">BioNoise Level: </span>
                  consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="text-black text-[20px] md:text-[25px] lg:text-[36px] font-extralight leading-[120%] md:leading-[100%] mt-8" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  <span className="font-bold">Aging Trajectory: </span>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className="mt-8 bg-gradient-to-b from-[#FDF6EB] to-[#F6E7CD] text-gray-800 text-lg font-semibold py-3 px-6 rounded-full border border-[#E8D7BA] shadow-sm hover:shadow-md transition-all">
                  Read more in our white paper
                </button>
              </div>

              <div className="lg:col-span-5">
                <div className="mb-8">
                  <p className="italic font-semibold mb-4">An Example of Aging Entropy Curve for Cardiac System</p>
                  <div className="relative aspect-video w-full rounded-lg overflow-hidden">
                    <Image src="/section_04_01.png" alt="Aging Curve" fill className="object-cover" />
                  </div>
                </div>
                <p className="italic font-semibold mb-4">Read our papers:</p>
                <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
                  {["section_04_02.png", "section_04_03.png", "section_04_04.png"].map((img, i) => (
                    <div key={i} className="flex-shrink-0 w-24 h-32 relative">
                      <Image src={`/${img}`} alt={`Research Paper ${i + 1}`} fill className="object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 5 Content */}
            <div className="px-8 md:px-24 py-16 grid grid-cols-1 md:grid-cols-12 gap-8">

              <div className="col-span-6 -translate-y-[120px] relative overflow-visible overflow-x-visible overflow-y-auto max-h-[calc(100vh-6rem)] pr-4 scrollbar-hide space-y-12">

                {/* First circle */}
                <div className="w-[640px] h-[640px] rounded-full bg-white shadow-lg flex items-center justify-end relative z-10 ml-[-200px] ">
                  <div className="text-left px-12 scale-100 translate-x-[120px]">
                    <div className="inline-flex items-center px-4 py-1 gap-2 border-2 border-orange-500 rounded-full w-[126px] h-[28px]">
                      <div className="w-[16px] h-[16px] bg-orange-500 rounded-full"></div>
                      <span className="text-orange-500 font-semibold text-sm">Attention</span>
                    </div>

                    <h3 className="text-2xl font-semibold mt-4">Cardiac System</h3>
                    <p className="text-gray-600 mt-2">
                      <span className="font-bold">38.2</span> years old, <span className="font-bold">8.2</span> years older than expected,<br />
                      contributing <span className="font-bold">28.6%</span> to your overall aging process
                    </p>
                  </div>
                </div>

                {/* Second circle */}
                <div className="w-[480px] h-[480px] rounded-full bg-white shadow-lg flex items-center justify-end relative z-20 ml-[-100px]">
                  <div className="text-left px-12 scale-95 translate-x-[180px]">
                    <div className="inline-flex items-center px-4 py-1 gap-2 border-2 border-orange-500 rounded-full w-[126px] h-[28px]">
                      <div className="w-[16px] h-[16px] bg-orange-500 rounded-full"></div>
                      <span className="text-orange-500 font-semibold text-sm">Attention</span>
                    </div>

                    <h3 className="text-xl font-semibold mt-4">Reproductive System</h3>
                    <p className="text-gray-600 mt-2">
                      <span className="font-bold">36.2</span> years old, <span className="font-bold">6.2</span> years older than expected,<br />
                      contributing <span className="font-bold">20.1%</span> to your overall aging process
                    </p>
                  </div>
                </div>

                {/* Third circle */}
                <div className="w-[380px] h-[380px] rounded-full bg-white shadow-lg relative z-30 ml-[-60px]">
                  <div className="absolute left-full top-1/2 -translate-y-1/2 translate-x-[-160px] w-[260px] text-left scale-90">
                    <div className="inline-flex items-center px-4 py-1 gap-2 border-2 border-orange-500 rounded-full w-[126px] h-[28px]">
                      <div className="w-[16px] h-[16px] bg-orange-500 rounded-full"></div>
                      <span className="text-orange-500 font-semibold text-sm">Attention</span>
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Immune System</h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      <span className="font-bold">35.2</span> years old, <span className="font-bold">5.2</span> years older than expected,<br />
                      contributing <span className="font-bold">18.7%</span> to your overall aging process
                    </p>
                  </div>
                </div>

                {/* Fourth circle */}
                <div className="w-[240px] h-[240px] rounded-full bg-white shadow-lg relative z-30 ml-[10px]">
                  <div className="absolute left-full top-1/2 -translate-y-1/2 translate-x-[-90px] w-[260px] text-left scale-90">
                    <div className="inline-flex items-center px-4 py-1 gap-2 border-2 border-yellow-500 rounded-full w-[126px] h-[28px]">
                      <div className="w-[16px] h-[16px] bg-yellow-500 rounded-full"></div>
                      <span className="text-yellow-500 font-semibold text-sm">Average</span>
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Digestive System</h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      <span className="font-bold">33.8</span> years old, <span className="font-bold">3.8</span> years older than expected,<br />
                      contributing <span className="font-bold">8.7%</span> to your overall aging process
                    </p>
                  </div>
                </div>


                {/* Fifth circle */}
                <div className="w-[160px] h-[160px] rounded-full bg-white shadow-lg relative z-30 ml-[40px]">
                  {/* absolute 讓內容浮出圓圈外 */}
                  <div className="absolute left-full top-1/2 -translate-y-1/2 translate-x-[-30px] w-[260px] text-left scale-90">
                    <div className="inline-flex items-center px-4 py-1 gap-2 border-2 border-yellow-500 rounded-full w-[126px] h-[28px]">
                      <div className="w-[16px] h-[16px] bg-yellow-500 rounded-full"></div>
                      <span className="text-yellow-500 font-semibold text-sm">Average</span>
                    </div>
                    <h3 className="text-lg font-semibold mt-4">Neurodegeneration</h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      <span className="font-bold">31.0</span> years old, <span className="font-bold">1.0</span> years older than expected,<br />
                      contributing <span className="font-bold">2.1%</span> to your overall aging process
                    </p>
                  </div>
                </div>

              </div>


              <div className="col-span-6 flex flex-col justify-center">
                <h2 className="text-[48px] font-semibold leading-tight mb-8 text-[#170D00]">
                  Identify Top Aging Factors
                </h2>

                <div className="space-y-6 max-w-[700px] text-[18px] leading-relaxed text-gray-700">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>

                <button className="mt-10 bg-[#F6E7CD] text-black text-lg md:text-xl font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all w-fit">
                  View sample report
                </button>
              </div>

            </div>
          </div>
        </section >


        {/* Sixth Section */}
        < section className="min-h-screen flex flex-col md:flex-row items-stretch" >
          {/* Number Column for Mobile */}
          <div className="md:hidden w-full h-[80px] bg-white flex justify-center items-center border-b-2 border-gray-200 shadow-md"
            style={{ backgroundColor: 'transparent' }
            }
          >
            <h1 className="text-[64px] font-light text-gray-800">3</h1>
          </div >

          {/* Number Column for Desktop */}
          <div
            className="hidden md:flex w-[120px] xl:w-[160px] flex-shrink-0 justify-center items-start pt-16 rounded-r-3xl border-l-2 border-white shadow-md relative"
            style={{ backgroundColor: 'transparent' }}
          >
            <h1 className="text-[64px] lg:text-[80px] font-light text-white">3</h1>
          </div >

          {/* Content Area - Modified structure */}
          <div className="flex-1 flex flex-col" >
            {/* Top Content */}
            < div className="flex-1 flex flex-col gap-6 p-6 md:p-8 lg:p-10" >
              <h2 className="text-[68px] sm:text-[80px] md:text-[96px] font-light mb-2"
                style={{ fontFamily: 'Optima, sans-serif' }}>
                Intervene with Confidence
              </h2>

              {/* CTA button */}
              <div className="flex justify-end pr-6 md:pr-10 lg:pr-12 mb-6">
                <button className="bg-[#F6E7CD] text-black text-lg md:text-xl font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl transition-all">
                  Try it!
                </button>
              </div>

              {/* Subsection */}
              <div className="space-y-4">
                <h3 className="text-[28px] sm:text-[64px] font-normal"
                  style={{ fontFamily: 'Optima, sans-serif' }}>
                  Intelligent Interventions
                </h3>
                <p className="text-lg leading-relaxed text-[36px]">
                  <strong>Intelligent Recommendations:</strong> Tailored for each test taker and for each report,
                  we generate a clinically-relevant action plan powered by our XXX algorithm.
                </p>
                <p className="text-lg leading-relaxed text-[36px]">
                  <strong>Tracking:</strong> Send the action plan to your clients and track their completion rates.
                  Make informed adjustment each cycle to dynamically achieve the health goals.
                </p>
              </div>
            </div >

            {/* Bottom Images */}

            < div className="mt-auto px-4 md:px-8 pt-6 pb-0" >
              <div className="flex justify-between items-end w-full gap-4 h-[200px] sm:h-[240px] md:h-[260px] lg:h-[300px]">

                {/* Left Image */}
                <div className="flex-1 relative h-full">
                  <Image
                    src="/section_06_01.png"
                    alt="Intervention Table"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

                {/* Right Image */}
                <div className="relative h-full w-[30%] max-w-[260px]">
                  <Image
                    src="/section_06_02.png"
                    alt="Phone App Preview"
                    fill
                    className="object-contain object-bottom"
                  />
                </div>

              </div>
            </div >



          </div >
        </section >


      </div >

    </main >
  );
}