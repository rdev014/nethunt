'use client'
import { useEffect } from "react";
import gsap from "gsap";
import ShimmerButton from "@/components/ui/shimmer-button";
import Link from "next/link";


import { DotPattern } from "@/components/ui/dot-pattern";
import FlipText from "@/components/ui/flip-text";
import { Orbit } from "@/components/Orbit/Orbit";

// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "NetHunt",
//   description: "Start Hunting",


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
        y: "80vh",  // Move the star to the bottom
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
  {/* Hero Section */}
  <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-lg border bg-background h-[85vh] px-6 md:px-12 md:shadow-xl">
    <div className="z-10 flex flex-col items-center justify-center text-center p-12">
      <h1 className="text-3xl md:text-8xl font-bold tracking-tight leading-tight">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
          Innovative Features
        </span>
        <FlipText
          className="text-lg md:text-4xl lg:text-5xl mt-6 mb-2 space-x-1 font-bold -tracking-widest text-black dark:text-white md:leading-[4rem]"
          word="To Elevate Your Tech Journey"
        />
      </h1>
      <p className="mt-4 text-sm md:text-lg lg:text-xl max-w-3xl">
        Stay updated with the latest tech trends, participate in challenges, and earn badges with NetHunt – where tech enthusiasts connect and grow.
      </p>
      <Link href="/blogs" className="z-10 flex  items-center justify-center mt-6">
        <ShimmerButton className="shadow-lg transform  transition-transform duration-300 hover:scale-105">
          <span className="text-sm font-medium  tracking-tight text-white dark:from-orange-600 dark:to-orange-200/10 lg:text-lg">
            Explore Now
          </span>
        </ShimmerButton>
      </Link>
    </div>
    <DotPattern
      width={20}
      height={20}
      cx={1}
      cy={1}
      cr={1}
      className="[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
    />
  </div>

 {/* Badges Section */}
 <section className="py-10 mt-12 px-6 md:px-12 dark:bg-gray-900 dark:text-gray-100">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-300">
        Earn Skill-Based Badges
      </h2>
      <p className="mt-4 text-sm md:text-xl dark:text-gray-200">
        Unlock badges based on your <span className="font-semibold text-orange-400 dark:text-orange-300">knowledge</span> and <span className="font-semibold text-orange-400 dark:text-orange-300">skill level</span>. Track your progress, grow through challenges, and showcase your achievements!
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Badge 1 - Novice */}
        <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-md transform transition-transform  duration-500 hover:scale-105 dark:bg-gray-600">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
            <span className="text-5xl text-white">🌱</span>
          </div>
          <h3 className="text-xl font-semibold text-blue-300 dark:text-blue-200">Tech Novice</h3>
          <p className="text-gray-400 mt-2 text-center dark:text-gray-300">
            Awarded for taking your first steps. Complete beginner-level challenges and grow your skills!
          </p>
        </div>

        {/* Badge 2 - Intermediate */}
        <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-md transform transition-transform duration-500 hover:animate-pulse dark:bg-gray-600">
          <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center mb-4">
            <span className="text-5xl text-white">📈</span>
          </div>
          <h3 className="text-xl font-semibold text-orange-300 dark:text-orange-200">Skill Enhancer</h3>
          <p className="text-gray-400 mt-2 text-center dark:text-gray-300">
            For those progressing up the ladder! Complete 10 intermediate challenges and level up.
          </p>
        </div>

        {/* Badge 3 - Expert */}
        <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 dark:bg-gray-600">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-4">
            <span className="text-5xl text-white">🚀</span>
          </div>
          <h3 className="text-xl font-semibold text-green-400 dark:text-green-300">Tech Master</h3>
          <p className="text-gray-400 mt-2 text-center dark:text-gray-300">
            The highest honor! Unlock this badge by completing expert challenges and demonstrating mastery.
          </p>
        </div>
      </div>
    </div>
  </section>


{/* how it works */}

<section id="how-it-works" className="py-16 bg-gray-900 text-white">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
    <div className="mt-10 grid grid-cols-1 md:grid-cols-4 gap-8">
      {[
        { step: "1", title: "Sign Up", desc: "Create your free account." },
        { step: "2", title: "Take Challenges", desc: "Engage in exciting tech tasks." },
        { step: "3", title: "Earn Badges", desc: "Showcase your skills." },
        { step: "4", title: "Join Community", desc: "Connect and grow with peers." },
      ].map((item) => (
        <div key={item.step} className="space-y-2">
          <div className="text-4xl font-bold text-orange-400">{item.step}</div>
          <h3 className="text-xl font-semibold">{item.title}</h3>
          <p className="text-gray-300">{item.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
{/* <section id="demo" className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">Try It Out</h2>
    <p className="mt-4 text-lg text-gray-600">Interact with our demo challenges and earn your first badge!</p>
    <div className="mt-10">
      <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
        Launch Demo
      </button>
    </div>
  </div>
</section> */}


  {/* "What is NetHunt" and "What NetHunt Does" Section */}
  <section className="py-10 px-6 md:px-12 dark:bg-gray-900 dark:text-gray-100">
    <div className="max-w-7xl mx-auto grid gap-10 md:gap-12 sm:grid-cols-1 md:grid-cols-2 items-start">
      {/* What is NetHunt */}
      <div className="space-y-6 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-500 dark:text-blue-300">
          What is NetHunt?
        </h2>
        <p className="text-base md:text-xl dark:text-gray-200">
          NetHunt is a tech-focused blogging platform designed for tech enthusiasts, professionals, and innovators. Our mission is to provide the latest in tech news, trends, and insights, while fostering a vibrant community of tech enthusiasts.
        </p>
      </div>

      {/* What NetHunt Does */}
      <div className="space-y-6 rounded-lg shadow-lg shadow-orange-600">
        <Orbit/>
      </div>
    </div>
  </section>

 
</div>


  );
}