import Link from "next/link";

export default function ResourcesPage() {
  const resources = [
    {
      id: 1,
      title: "GitHub Repos",
      description: "Handpicked GitHub projects to explore & contribute....",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 2,
      title: "PDFs",
      description: "Handpicked developer PDFs – guides & handbooks......",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      id: 3,
      title: "Dev Tools",
      description: "Time-saving dev tools & extensions to boost productivity",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
    },
    {
      id: 4,
      title: "Roadmaps",
      description:
        "Structured guides to master tech stacks, roles, and skills—one step at a time.",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
          />
        </svg>
      ),
    },
    {
      id: 5,
      title: "Free courses",
      description: "Time-saving dev tools & extensions to boost productivity",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14v7M5 10.5h14"
          />
        </svg>
      ),
    },
    {
      id: 6,
      title: "DSA Sheets",
      description: "Crack coding rounds with top-rated DSA prep sheets",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      id: 7,
      title: "Resume Tips",
      description: "Resume templates, tips & dos/dont's to land interviews",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
    },
    {
      id: 8,
      title: "Projects",
      description: "Mini & major projects to build, showcase & stand out",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Purple gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-purple-800/10 pointer-events-none"></div>
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 bg-purple-600/20 rounded-md backdrop-blur-sm border border-purple-500/30">
                <span className="text-white font-bold text-lg">CODE</span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <Link
                href="/"
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/events"
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Events
              </Link>
              <Link
                href="/projects"
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Projects
              </Link>
              <Link
                href="/hall-of-fame"
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Hall Of Fame
              </Link>
              <Link
                href="/resources"
                className="text-purple-400 hover:text-purple-300 transition-colors font-semibold"
              >
                Resources
              </Link>
              <Link
                href="/contact"
                className="text-white/80 hover:text-purple-400 transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto px-6 py-12">
          <div className="mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">
              Explore Top Resources from CodeHub
            </h1>
            <p className="text-xl text-white/70">
              Curated PDFs, Repos, Tools & More – all in one place
            </p>
          </div>

          {/* Resource Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource) => (
              <div
                key={resource.id}
                className="bg-gray-900/80 backdrop-blur-sm rounded-lg p-6 hover:bg-gray-900 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/30 border border-purple-500/30 hover:border-purple-400/50"
              >
                <p className="text-white/60 mb-4 text-sm leading-relaxed">
                  {resource.description}
                </p>
                <button className="flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 transition-colors">
                  {resource.icon}
                  <span>{resource.title}</span>
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}

