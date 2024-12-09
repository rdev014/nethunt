'use client';

import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-950 text-neutral-50 py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto p-4 sm:p-6">
        {/* Profile Section */}
        <div className="rounded-lg shadow-xl p-6 bg-gray-900 border border-neutral-200">
          <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
            <div className="flex-shrink-0">
              <Image
                className="h-24 w-24 sm:h-32 sm:w-32 rounded-full ring-4 ring-blue-500"
                src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png"
                alt="Profile Avatar"
                width={200}
                height={200}
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-extrabold tracking-tight">John Doe</h2>
              <p className="text-neutral-400">Tech Enthusiast | NetHunter</p>
              <p className="mt-2 text-neutral-400">Email: johndoe@example.com</p>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Your Badges</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
              { name: 'Beginner', color: 'text-blue-500', date: '10/10/2024' },
              { name: 'Intermediate', color: 'text-green-500', date: '10/15/2024' },
              { name: 'Expert', color: 'text-yellow-500', date: '10/20/2024' },
              { name: 'Master', color: 'text-red-500', date: '10/25/2024' },
            ].map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-gray-900 rounded-lg p-4 shadow-lg border border-neutral-200"
              >
                <Image
                  className="h-16 w-16 sm:h-20 sm:w-20"
                  src="https://cdn.pixabay.com/photo/2017/01/31/23/42/animal-2028258_960_720.png"
                  alt={`${badge.name} Badge`}
                  width={200}
                  height={200}
                />
                <h4 className={`mt-2 font-bold ${badge.color}`}>{badge.name}</h4>
                <p className="text-sm text-neutral-400">Unlocked on {badge.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scorecard Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Your Scorecard</h3>
          <div className="rounded-lg shadow-xl p-6 mt-6 bg-gray-900 border border-neutral-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Total Points', value: '1500', color: 'text-blue-500' },
                { label: 'Completion Rate', value: '75%', color: 'text-green-500' },
                { label: 'Challenges Completed', value: '10', color: 'text-yellow-500' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <h4 className={`text-3xl font-bold ${item.color}`}>{item.value}</h4>
                  <p className="text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
