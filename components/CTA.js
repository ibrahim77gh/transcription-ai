'use client';
import Image from "next/image";
import Form from "./Form";
import cars from "@/app/assets/autofraudbuster.png"
import Link from "next/link";
import { Paint } from '@/app/assets/svgs/Paint/Paint';

const CTA = () => {

  return (
    <section className="relative hero overflow-hidden min-h-screen bg-black">
      <div className="flex flex-col md:flex-row items-center justify-between px-12 md:px-6 sm:px-4 pt-8 md:pt-3">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-10xl md:text-5xl text-white font-semibold mb-6">Transliterative</h1>
          <h2 className="text-3xl text-green-500 font-semibold rounded">
            Pakistan's First Multilingual Transcription Service
          </h2>
        </div>

        <div className="md:w-1/2 md:ml-12">
          <Paint />
        </div>
      </div>
    </section>




  );
};

export default CTA;
