'use client'
import { useEffect } from "react";
import gsap from "gsap";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";
import FlipText from "@/components/ui/flip-text";
import IconCloud from "@/components/ui/icon-cloud";
import { BorderBeam } from "@/components/ui/border-beam";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "NetHunt",
//   description: "Start Hunting",
const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

// };
export default function Home() {

  useEffect(() => {
    const createShootingStar = () => {
      // Create the shooting star element
      const star = document.createElement("div");
      star.classList.add("shooting-star");

      // Randomize the initial position of the star
      star.style.left = `${Math.random() * 10}vw`;
      star.style.top = `${Math.random() * 50}vh`;

      // Add the star to the body
      document.body.appendChild(star);

      // GSAP animation for the shooting star
      gsap.to(star, {
        x: "85vw",  // Move the star to the right
        y: "50vh",  // Move the star to the bottom
        duration: Math.random() * 2 + 1, // Randomize the duration
        ease: "power1.in",
        onComplete: () => {
          // Splash effect when the star reaches the bottom-right
          gsap.to(star, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "expo.out",
            onComplete: () => {
              star.remove(); // Remove star after animation completes
            },
          });
        },
      });
    };

    // Create a shooting star every 1-3 seconds
    const interval = setInterval(createShootingStar, 1000);

    // Cleanup function to stop the shooting stars when the component is unmounted
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="dark:bg-gray-900 dark:text-white">

<div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background p-6 md:p-12 md:shadow-xl">

<div className="z-10 whitespace-pre-wrap text-center text-2xl md:text-5xl font-medium tracking-tighter text-black dark:text-white">
  <div className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 overflow-hidden">
    <div className="text-center space-y-6 md:space-y-8">
      <h1 className="text-2xl md:text-6xl font-bold tracking-tight leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
          Innovative Features
        </span>{" "}
        <FlipText
          className="text-xl md:text-4xl lg:text-5xl space-x-1 font-bold -tracking-widest text-black dark:text-white  md:leading-[5rem]"
          word="To Elevate Your Tech Journey"
        />
      </h1>
      <p className="text-base md:text-lg lg:text-xl max-w-xl mx-auto">
        Stay updated with the latest tech trends, participate in challenges, and earn badges with NetHunt – where tech enthusiasts connect and grow.
      </p>
      <Link
        href="/blogs"
        className="z-10 flex items-center justify-center">
        <ShimmerButton className="shadow-2xl">
          <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-orange-600 dark:to-orange-200/10 lg:text-lg">
            Explore Now
          </span>
        </ShimmerButton>
      </Link>
    </div>
  </div>
</div>

<DotPattern
  width={20}
  height={20}
  cx={1}
  cy={1}
  cr={1}
  className={cn(
    "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
  )}
/>
</div>


      {/* "What is NetHunt" and "What NetHunt Does" section */}
      <section className=" py-20 px-4 md:px-8  dark:bg-gray-900 dark:text-gray-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* What is NetHunt */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-300">
              What is NetHunt?
            </h2>
            <p className="text-lg md:text-xl  dark:text-gray-200">
              NetHunt is a tech-focused blogging platform designed for tech enthusiasts, professionals, and innovators. Our mission is to provide the latest in tech news, trends, and insights, while fostering a vibrant community of tech enthusiasts.
            </p>
          </div>

          {/* What NetHunt Does */}
          <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg border border-white bg-background px-20 pb-20 pt-8 ">
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </section>

      {/* Badges Section */}
      <section className=" py-10 px-4 md:px-8 dark:bg-gray-700 dark:text-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-300">
            Earn Skill-Based Badges
          </h2>
          <p className="mt-4 text-lg md:text-xl  dark:text-gray-200">
            Unlock badges based on your <span className="font-semibold text-orange-400 dark:text-orange-300">knowledge</span> and <span className="font-semibold text-orange-400 dark:text-orange-300">skill level</span>. Track your progress, grow through challenges, and showcase your achievements!
          </p>

          {/* Badge Examples */}
          <div className="relative mt-6 flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              Explore What you get
            </span>
            <BorderBeam size={250} duration={12} delay={9} />
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Badge 1 - Novice */}
            <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-md shadow-white transform transition duration-500 hover:scale-105 dark:bg-gray-600">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-300 dark:text-blue-200">Tech Novice</h3>
              <p className="text-gray-400 mt-2 text-center dark:text-gray-300">
                Awarded for taking your first steps. Complete beginner-level challenges and grow your skills!
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-green-400 font-semibold">Level 1</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-300 text-sm">Beginner</span>
              </div>
            </div>

            {/* Badge 2 - Intermediate */}
            <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-md shadow-white transform transition duration-500 hover:scale-105 dark:bg-gray-600">
              <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl text-white">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-300 dark:text-orange-200">Skill Enhancer</h3>
              <p className="text-gray-400 mt-2 text-center dark:text-gray-300">
                For those progressing up the ladder! Complete 10 intermediate challenges and level up.
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-yellow-400 font-semibold">Level 2</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-300 text-sm">Intermediate</span>
                <div className="ml-3 text-green-400">➚</div>
              </div>
            </div>

            {/* Badge 3 - Expert */}
            <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-md shadow-white transform transition duration-500 hover:scale-105 dark:bg-gray-600">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-green-400 dark:text-green-300">Tech Master</h3>
              <p className="text-gray-400 mt-2 text-center dark:text-gray-300">
                The highest honor! Unlock this badge by completing expert challenges and demonstrating mastery.
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-green-400 font-semibold">Level 3</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-300 text-sm">Expert</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}