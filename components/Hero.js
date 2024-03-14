import Image from "next/image";
import TestimonialsAvatars from "./TestimonialsAvatars";
import config from "@/config";
import hero from "@/app/assets/hero-img.png"
import image from "@/app/assets/images.jpeg"
import image1 from "@/app/assets/images-1.jpeg"
import image2 from "@/app/assets/images-2.jpg"
import recording from "@/app/assets/recording.jpg"
import pakFlag from "@/app/assets/pakFlag.jpeg"
import nedLogo from "@/app/assets/ned-logo.png"


const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto bg-base-100 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 px-8 py-8 lg:py-20">
      <div className="flex flex-col gap-10 lg:gap-14 items-center justify-center text-center lg:text-left lg:items-start">
   
      <div className="flex justify-between w-full"> {/* Add a container for Pak flag and NED logo */}
          <Image
            src={pakFlag}
            viewBox="0 0 122 37"
            className="w-32 h-25 md:w-32 fill-base-content/80 group-hover:fill-base-content"
          />
          <Image
            src={nedLogo}
            alt="NED Logo"
            className="w-32 h-25 md:w-32 fill-base-content/80 group-hover:fill-base-content"
          />
        </div>


        <h1 className="font-extrabold text-4xl lg:text-6xl tracking-tight md:-mb-4">
        Transcribe audio into text
        </h1>
        <p className="text-lg opacity-80 leading-relaxed">
           Transliterative quickly and automatically transcribes your audio, allowing you to focus on more important tasks. When time is of the essence, get searchable, 90%+-accurate AI transcriptions in just minutes.
          
        </p>
        <button className="btn btn-primary btn-wide">
          Get AI Transcript
        </button>

        <TestimonialsAvatars priority={true} />
      </div>
      <div className="lg:w-full">
        <Image
          src={recording}
          alt="Product Demo"
          className="w-full"
          priority={true}
          width={500}
          height={300}
        />
      </div>
    </section>
  );
};

export default Hero;
