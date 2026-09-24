export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Navbar */}
      <nav className="border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Fit Log Logo"
              className="h-10 w-10 object-contain"
            />

            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Fit Log
              </h1>
              <p className="text-xs text-gray-500">
                Workout & Planning
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <a href="/" className="font-medium text-gray-900">
              Home
            </a>

            <a
              href="/workouts"
              className="font-medium text-gray-600 hover:text-gray-900"
            >
              Workouts
            </a>

            <a
              href="/my-plan"
              className="font-medium text-gray-600 hover:text-gray-900"
            >
              My Plan
            </a>
          </div>

          {/* My Plan Button */}
          <button className="rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white">
            My Plan
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gray-50">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
          
          {/* Hero Text */}
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500">
              Your Fitness Journey
            </p>

            <h2 className="max-w-xl text-4xl font-extrabold leading-tight text-gray-900 md:text-6xl">
              Train Smarter.
              <br />
              Get Stronger.
              <br />
              Stay Consistent.
            </h2>

            <p className="mt-6 max-w-lg text-lg leading-8 text-gray-600">
              Discover effective workouts, build your daily plan,
              and stay consistent with your fitness journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/workouts"
                className="rounded-lg bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
              >
                Explore Workouts
              </a>

              <a
                href="/my-plan"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 font-semibold text-gray-900 transition hover:bg-gray-100"
              >
                View My Plan
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/banner.png"
              alt="Fitness Workout"
              className="w-full max-w-lg object-contain"
            />
          </div>

        </div>
      </section>

      {/* Intro Section */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Fit Log
          </p>

          <h3 className="mt-2 text-3xl font-bold text-gray-900">
            Build Your Workout Plan
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Browse workouts, check detailed instructions, save your
            favorites, and create your own daily workout plan.
          </p>
        </div>
      </section>

    </main>
  );
}