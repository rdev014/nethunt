'use client';

export default function Page() {
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 py-10 px-6">
      <div className="max-w-7xl mx-auto p-6">
        {/* Profile Section */}
        <div className="rounded-lg shadow-xl p-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <img
                className="h-24 w-24 rounded-full ring-4 ring-blue-500"
                src="https://via.placeholder.com/96"
                alt="Profile Avatar"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight">John Doe</h2>
              <p className="text-neutral-600 dark:text-neutral-400">
                Tech Enthusiast | NetHunter
              </p>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                Email: johndoe@example.com
              </p>
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
                className="flex flex-col items-center bg-white dark:bg-neutral-800 rounded-lg p-4 shadow-lg border border-neutral-200 dark:border-neutral-700"
              >
                <img
                  className="h-16 w-16"
                  src="https://via.placeholder.com/64"
                  alt={`${badge.name} Badge`}
                />
                <h4 className={`mt-2 font-bold ${badge.color}`}>{badge.name}</h4>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Unlocked on {badge.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Scorecard Section */}
        <div className="mt-10">
          <h3 className="text-2xl font-bold">Your Scorecard</h3>
          <div className="rounded-lg shadow-xl p-6 mt-6 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { label: 'Total Points', value: '1500', color: 'text-blue-500' },
                { label: 'Completion Rate', value: '75%', color: 'text-green-500' },
                { label: 'Challenges Completed', value: '10', color: 'text-yellow-500' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                  <h4 className={`text-3xl font-bold ${item.color}`}>{item.value}</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
