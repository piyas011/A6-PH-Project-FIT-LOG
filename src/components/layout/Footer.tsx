import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className=" border-t border-[#ffffff3b] bg-[#00000050]  ">
      <div className=" sm:flex-row sm:gap-5 sm:px-6 sm:text-left flex flex-col items-center justify-between container mx-auto px-4 py-4 text-center mt-5   gap-3">
        <div>
          <Link
            href="/"
            className="flex items-center justify-center gap-2 text-md font-medium sm:justify-start text-2xl"
          >
            <Image
              src="/favicon.ico"
              width={25}
              height={25}
              alt="FitLog Icon"
            />
            FITLOG
          </Link>
        </div>

        <div>
          <p className="flex flex-wrap justify-center gap-x-2 gap-y-1 text-xl leading-5 sm:justify-end md:text-lg">
            <span>© 2026 FitLog —</span>
            <span>Workout Library.</span>
            <span>Train hard, log honest.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
