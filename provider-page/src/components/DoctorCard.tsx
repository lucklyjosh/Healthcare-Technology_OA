import Image from "next/image";

interface DoctorCardProps {
  name: string;
  imageSrc: string;
  clinic: string;
}

export default function DoctorCard({ name, imageSrc, clinic }: DoctorCardProps) {
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
