import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0B0B0F] px-4 py-10 text-white sm:px-6 sm:py-12">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-center text-center">
        {/* 404 */}
        <h1 className="text-[90px] font-black leading-none tracking-tighter sm:text-[130px] md:text-[160px] lg:text-[190px]">
          4<span className="text-[#C2F800]">0</span>4{" "}
        </h1>
        {/* Title */}
        <h2 className="mt-4 text-2xl font-bold sm:mt-3 sm:text-3xl md:text-4xl">
          Workout Not Found!
        </h2>
        {/* Description */}
        <p className="mt-4 max-w-[320px] text-sm leading-6 text-gray-400 sm:mt-5 sm:max-w-lg sm:text-base sm:leading-7 md:text-lg">
          Looks like you took a wrong turn on your fitness journey. The workout
          or page you are looking for doesn&apos;t exist or may have been moved.
        </p>
        {/* Button */}
        <Link
          href="/"
          className=" mt-7 inline-flex items-center gap-2 rounded-xl bg-[#C2F800] px-5 py-3 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-[#d4ff33] sm:mt-8 sm:gap-3 sm:px-7 sm:py-3.5 sm:text-base "
        >
          Back to Home <span className="text-lg sm:text-xl">→</span>{" "}
        </Link>
      </div>
    </main>
  );
}
