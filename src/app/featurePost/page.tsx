import Image from 'next/image';

export default function FeaturedPosts() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Tips to Master JavaScript",
      description: "Boost your JS skills with these essential tips and tricks for both beginners and advanced learners.",
      imageUrl: "/images/javascript-tips.jpg",
      author: "Rahul Dev",
      date: "Nov 10, 2024",
      badge: "Popular",
    },
    {
      id: 2,
      title: "Understanding React Lifecycle",
      description: "Explore React’s component lifecycle methods to build dynamic, efficient applications.",
      imageUrl: "/images/react-lifecycle.jpg",
      author: "Tech Guru",
      date: "Nov 8, 2024",
      badge: "Trending",
    },
    {
      id: 3,
      title: "UI/UX Design Essentials",
      description: "A deep dive into designing user interfaces that are both beautiful and functional.",
      imageUrl: "/images/uiux-design.jpg",
      author: "Design Maven",
      date: "Nov 5, 2024",
      badge: "New",
    },
  ];

  return (
    <div className="bg-gray-900 text-white py-16 px-4 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Posts</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id} className="relative bg-gray-800 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
              <div className="relative h-48 w-full">
                <Image src={post.imageUrl} alt={post.title} layout="fill" objectFit="cover" className="opacity-80" />
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                  {post.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{post.description}</p>
                <div className="mt-4 flex items-center text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span className="mx-2">•</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition">
            Explore All Posts
          </button>
        </div>
      </div>
    </div>
  );
}
