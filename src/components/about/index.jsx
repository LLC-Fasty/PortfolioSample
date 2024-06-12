import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";
import Image from "next/image";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Architect of Enchantment
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
            Artificial Intelligence Engineer with 2+ years in Center of Excellence G.H.Raisoni College of Engineering, Nagpur.Also
worked as a Web Developer Intern for 6 months in 10xGrowth. I am Open for any Software Development and AI/ML
and Blockchain Related work. I am also a part of a Startup which is working on Blockchain Technology.

          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            25+ <sub className="font-semibold text-base">clients</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            4+{" "}
            <sub className="font-semibold text-base">years of experience</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <Image className="w-full h-auto"
            src={'/SD.png'}
            alt="CodeBucks"
            loading="lazy" width={500} height={500} />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <Image className="w-full h-auto" src={`/LOGO.png`} width={500} height={500} alt="CodeBucks" loading="lazy" />
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <Image className="w-full h-auto"
            src={`/bicons.svg`}
            alt="CodeBucks"
            loading="lazy" width={500} height={500} />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
        <Image className="w-full h-auto"
            src={'/Icon.png'}
            alt="CodeBucks"
            loading="lazy" width={500} height={500} />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="/"
            target="_blank"
            className="w-full"
          >
            <Image className="w-full h-auto"
            src={'/Bill Icon.png'}
            alt="CodeBucks"
            loading="lazy" width={500} height={500} />
          </Link>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
