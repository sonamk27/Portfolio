"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLocationArrow } from "react-icons/fa6";

import { ContactForm } from "@/components/contact-form";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";

export const Footer = () => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1260}
          height={863}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Reach out to me today and let&apos;s discuss how I can help your
          achieve your goals.
        </p>

        <button
          onClick={() => setIsContactFormOpen(true)}
          className="md:mt-10"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </button>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <p className="text-sm font-light md:text-base md:font-normal">
          Copyright &copy; {new Date().getFullYear()} Sonam Korade
        </p>

        <div className="flex items-center gap-6 md:gap-3">
          {socialMedia.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.img}
                alt={`profile-${profile.name}`}
                width={28}
                height={28}
              />
            </Link>
          ))}
        </div>
      </div>

      <ContactForm 
        isOpen={isContactFormOpen} 
        onClose={() => setIsContactFormOpen(false)} 
      />
    </footer>
  );
};
