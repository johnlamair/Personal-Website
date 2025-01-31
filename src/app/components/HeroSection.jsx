import React from 'react'
import Image from 'next/image'
import Link from "next/link";

// The HeroSection component displays a personal introduction with a title, paragraph, and action buttons for hiring, downloading a resume, and linking to LinkedIn and GitHub profiles, all styled with gradient backgrounds and responsive layout.

const HeroSection = () => {
  return (
    <section className="flex min-h-screen -translate-y-20 items-center justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-12 place-self-center text-center sm:text-left">
        
          {/*name title*/}
          <h1 className="text-black mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <div className="text">Hello, I'm </div>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-black text-8xl sm:text-[120px] lg:text-[140px] sm:text-center">
              John LaMair
            </span>
          </h1>


          {/*intro. paragraph*/}
          <p className="text-black text-base sm:text-lg mb-6 lg:text-xl">
            I'm a second year student at NYU Gallatin studying computer science, data, and energy.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
            {/* Hire Me Button */}
            <a 
              href="mailto:john.lamair@nyu.edu" 
            className="px-6 py-3 h-[50px] w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:text-slate-200 text-white font-medium"
            >
              Hire Me
            </a>

            {/* Download Resume Button */}
            <Link 
                href="/resume-unfinished.pdf"
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-3 h-[50px] w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:text-slate-200 text-white font-medium">
                Download Resume
            </Link>

            {/* GitHub & LinkedIn Buttons in Flex Container */}
            <div className="flex w-full sm:w-auto gap-4">
                {/* LinkedIn Button */}
                <Link
                    href="https://www.linkedin.com/in/johnlamair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-fit h-[50px] px-1 py-1 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mx-auto"
                >
                    <span className="bg-black hover:bg-slate-800 rounded-full w-full sm:w-fit px-5 py-2 flex items-center justify-center">
                    <Image src="/linkedin-icon.png" alt="Linkedin Icon" width={25} height={25} />
                    </span>
                </Link>

              {/* GitHub Button */}
              <Link
                    href="https://www.github.com/johnlamair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-fit h-[50px] px-1 py-1 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white mx-auto"
                >
                    <span className="bg-black hover:bg-slate-800 rounded-full w-full sm:w-fit px-5 py-2 flex items-center justify-center">
                    <Image src="/github-icon.png" alt="Github Icon" width={25} height={25} />

                    </span>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection