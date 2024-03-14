import Image from "next/image";
import config from "@/config";
import cloud from "@/app/assets/cloud.svg"
import exportSVG from "@/app/assets/export.svg"
import multi from "@/app/assets/multi.svg"
import pixel from "@/app/assets/pixel.svg"
import punctuation from "@/app/assets/punctuation.svg"
import search from "@/app/assets/search.svg"
import speaker from "@/app/assets/speaker.svg"
import speech from "@/app/assets/speech.svg"




// The list of your testimonials. It needs 3 items to fill the row.
const list = [
  {
    // REQUIRED
    name: "DOMAIN-SPECIFIC MODELS",
    // REQUIRED
    text: "Speech text software provides multiple domain-optimized models for increased recognition accuracy",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: cloud,
  },
  {
    // REQUIRED
    name: "EXPORT TRANSCRIPT",
    // REQUIRED
    text: "Export audio transcription results in the format of your choice (txt, pdf, docx, etc.)",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: exportSVG,
  },
  {
    // REQUIRED
    name: "AUTOMATIC PUNCTUATION",
    // REQUIRED
    text: "Audio and video transcriptions include commas, full stops, question marks, periods, etc.",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: punctuation,
  },
];
const listdiv = [
  {
    // REQUIRED
    name: "AUDIO SEARCH ENGINE",
    // REQUIRED
    text: "Transcription service enables users to search audio data in natural language",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: search,
  },
  {
    // REQUIRED
    name: "MULTI LANGUAGE",
    // REQUIRED
    text: "Audio to text converter supports more than 90+ languages and non-native speaker accents",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: multi,
  },
  {
    // REQUIRED
    name: "SPEECH RECOGNITION",
    // REQUIRED
    text: "Powerful speech-to-text technology automatically converts voice to text in seconds",
    // Optional, a statically imported image (usually from your public folder—recommended) or a link to the person's avatar. Shows a fallback letter if not provided
    img: speaker,
  },
]

// A single testimonial, to be rendered in  a list
const Testimonial = ({ i , list}) => {
  const testimonial = list[i];

  if (!testimonial) return null;

  return (
    <li key={i}>
      <figure className="relative max-w-lg h-full p-6 md:p-10 bg-base-200 rounded-2xl max-md:text-sm flex flex-col">
        <blockquote className="relative flex-1">
        <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={list[i].img}
                  alt={`${list[i].name}'s testimonial for ${config.appName}`}
                  width={100}
                  height={100}
        />
          <p className="text-base-content/80 leading-relaxed">
            {testimonial.text}
          </p>
        </blockquote>
        <figcaption className="relative flex items-center justify-start gap-4 pt-4 mt-4 md:gap-8 md:pt-8 md:mt-8 border-t border-base-content/5">
          <div className="w-full flex items-center justify-between gap-2">
            <div>
              <div className="font-medium text-base-content md:mb-0.5">
                {testimonial.name}
              </div>
            </div>

            {/* <div className="overflow-hidden rounded-full bg-base-300 shrink-0">
              {testimonial.img ? (
                <Image
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover"
                  src={list[i].img}
                  alt={`${list[i].name}'s testimonial for ${config.appName}`}
                  width={48}
                  height={48}
                />
              ) : (
                <span className="w-10 h-10 md:w-12 md:h-12 rounded-full flex justify-center items-center text-lg font-medium bg-base-300">
                  {testimonial.name.charAt(0)}
                </span>
              )}
            </div> */}
          </div>
        </figcaption>
      </figure>
    </li>
  );
};

const Testimonials3 = () => {
  return (
    <section id="testimonials">
      <div className="py-24 px-8 max-w-7xl mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <div className="mb-8">
            <h2 className="sm:text-5xl text-4xl font-extrabold text-base-content">
                Why Transliterative?
            </h2>
          </div>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-base-content/80">
          Set of amazing features to help you transcribe audio in seconds
          </p>
        </div>

        <ul
          role="list"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} list={list} />
          ))}
        </ul>
        <div>

        </div>
        <ul
          role="listdiv"
          className="flex flex-col items-center lg:flex-row lg:items-stretch gap-6 lg:gap-8 mt-10"
        >
          {[...Array(3)].map((e, i) => (
            <Testimonial key={i} i={i} list={listdiv} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Testimonials3;
