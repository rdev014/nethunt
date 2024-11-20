
export default function page() {


    return (
        <div>
            <div className="min-h-screen bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Profile Section */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6">
          <div className="flex items-center space-x-6">
            <div className="flex-shrink-0">
              <img
                className="h-24 w-24 rounded-full ring-2 ring-blue-500"
                src="https://via.placeholder.com/96"
                alt="Profile Avatar"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold">John Doe</h2>
              <p className="text-gray-400">Tech Enthusiast | NetHunter</p>
              <p className="mt-2 text-gray-400">Email: johndoe@example.com</p>
            </div>
          </div>
        </div>

        {/* Badges Section */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">Your Badges</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-lg">
              <img
                className="h-16 w-16"
                src="https://via.placeholder.com/64"
                alt="Beginner Badge"
              />
              <h4 className="mt-2 font-bold text-blue-400">Beginner</h4>
              <p className="text-sm text-gray-400">Unlocked on 10/10/2024</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-lg">
              <img
                className="h-16 w-16"
                src="https://via.placeholder.com/64"
                alt="Intermediate Badge"
              />
              <h4 className="mt-2 font-bold text-green-400">Intermediate</h4>
              <p className="text-sm text-gray-400">Unlocked on 10/15/2024</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-lg">
              <img
                className="h-16 w-16"
                src="https://via.placeholder.com/64"
                alt="Expert Badge"
              />
              <h4 className="mt-2 font-bold text-yellow-400">Expert</h4>
              <p className="text-sm text-gray-400">Unlocked on 10/20/2024</p>
            </div>
            <div className="flex flex-col items-center bg-gray-800 rounded-lg p-4 shadow-lg">
              <img
                className="h-16 w-16"
                src="https://via.placeholder.com/64"
                alt="Master Badge"
              />
              <h4 className="mt-2 font-bold text-red-400">Master</h4>
              <p className="text-sm text-gray-400">Unlocked on 10/25/2024</p>
            </div>
          </div>
        </div>

        {/* Scorecard Section */}
        <div className="mt-10">
          <h3 className="text-xl font-bold">Your Scorecard</h3>
          <div className="bg-gray-800 rounded-lg shadow-lg p-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-bold text-blue-400">1500</h4>
                <p className="text-gray-400">Total Points</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-bold text-green-400">75%</h4>
                <p className="text-gray-400">Completion Rate</p>
              </div>
              <div className="flex flex-col items-center">
                <h4 className="text-2xl font-bold text-yellow-400">10</h4>
                <p className="text-gray-400">Challenges Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
