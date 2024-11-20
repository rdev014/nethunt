import Link from "next/link"
import Head from 'next/head';
import FeaturedPosts from "./featurePost/page";
import NewsletterSection from "@/components/Newsletter/Newsletter";


export default function Home() {
  return (
    <div>
      <Head>
        <title>NetHunt - Explore Tech Insights</title>
      </Head>
      <div className="min-h-screen dark:bg-gray-900 bg-gradient-to-b from-gray-800 to-blue-950 text-white flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-orange-500">
              Innovative features
            </span>{" "}
            to elevate your tech journey
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Stay updated with the latest tech trends, participate in challenges, and earn badges with NetHunt – where tech enthusiasts connect and grow.
          </p>
          <button className="mt-6 px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-gray-900 transition">
            Explore Features
          </button>
        </div>
      </div>

      
      {/* Featured Posts Section */}
      <FeaturedPosts/>

      {/* Previous section code */}

      {/* "What is NetHunt" and "What NetHunt Does" section */}
      <section className="bg-gray-900 text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* What is NetHunt */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
              What is NetHunt?
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              NetHunt is a tech-focused blogging platform designed for tech enthusiasts, professionals, and innovators. Our mission is to provide the latest in tech news, trends, and insights, while fostering a vibrant community of tech enthusiasts.
            </p>
          </div>

          {/* What NetHunt Does */}
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400">
              What NetHunt Does
            </h2>
            <p className="text-lg md:text-xl text-gray-300">
              NetHunt empowers users with access to tech-related content, engaging challenges, and the opportunity to earn badges and achievements. Connect with like-minded individuals, grow your skills, and stay ahead in the tech world.
            </p>
          </div>
        </div>
      </section>
{/* Badges Section */}
<section className="bg-gray-800 text-white py-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500">
            Earn Skill-Based Badges
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Unlock badges based on your <span className="font-semibold text-orange-400">knowledge</span> and <span className="font-semibold text-orange-400">skill level</span>. Track your progress, grow through challenges, and showcase your achievements!
          </p>
          
          {/* Badge Examples */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Badge 1 - Novice */}
            <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-blue-300">Tech Novice</h3>
              <p className="text-gray-400 mt-2 text-center">
                Awarded for taking your first steps. Complete beginner-level challenges and grow your skills!
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-green-400 font-semibold">Level 1</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-300 text-sm">Beginner</span>
              </div>
            </div>

            {/* Badge 2 - Intermediate */}
            <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-orange-400 rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl text-white">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-orange-300">Skill Enhancer</h3>
              <p className="text-gray-400 mt-2 text-center">
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
            <div className="flex flex-col items-center p-6 bg-gray-700 rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
              <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mb-4">
                <span className="text-5xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-green-300">Tech Guru</h3>
              <p className="text-gray-400 mt-2 text-center">
                Conquer advanced challenges and reach expert level! Show your expertise with the ultimate badge.
              </p>
              <div className="mt-4 flex items-center">
                <span className="text-red-400 font-semibold">Level 3</span>
                <span className="text-gray-400 mx-2">|</span>
                <span className="text-gray-300 text-sm">Expert</span>
                <div className="ml-3 text-green-400">➚➚</div>
              </div>
            </div>
          </div>
        </div>
      </section>
   
      {/* Newsletter Section */}
      <NewsletterSection/>

    </div>
    
  )
}
