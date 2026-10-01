import { context } from "@/context/contextProvider";
import { useContext } from "react";
import Empty from "../EmptyWorkout";
import Image from "next/image";
import { MdOutlineAccessTime } from "react-icons/md";
import { FaFire, FaRegStar } from "react-icons/fa6";
import Link from "next/link";
import MarkAsDoneButton from "../save/MarkAsDoneButton";
import HandelRemoveItem from "../HandelPlanRemoveItem";

const PlanSelectedCard = () => {
  const { plan } = useContext(context);
  const {} = plan;
  return (
    <div>
      {plan.length === 0 ? (
        <Empty />
      ) : (
        <div>
          {plan.map((item) => (
            <div key={item.id} className=" p-2">
              {/* card */}
              <div className=" w-full overflow-hidden rounded-2xl border border-white/10 bg-[#11111A] p-4 shadow-lg shadow-black/10 transition-all duration-300 hover:border-[#C2F800]/30 sm:p-5 lg:flex lg:justify-between lg:items-center   ">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                  <div className="h-44 w-full shrink-0 overflow-hidden rounded-md sm:h-28 sm:w-36 md:h-30 md:w-44 lg:w-50">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={800}
                      height={600}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-lg font-bold text-white sm:text-xl">
                      {item.name}
                    </h2>
                    <p className="mt-1 text-sm text-gray-400">
                      {item.equipment}
                    </p>

                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-gray-400">
                      <p className="flex items-center gap-1.5">
                        <MdOutlineAccessTime className="text-[#C2F800]" />
                        {item.duration}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <FaFire className="text-[#C2F800]" />
                        {item.caloriesBurned}
                      </p>
                      <p className="flex items-center gap-1.5">
                        <FaRegStar className="text-[#C2F800]" />
                        {item.rating}
                      </p>
                    </div>
                  </div>
                </div>
                {/* buttons */}
                <div className=" mt-5 lg:mt-0 flex flex-col gap-2 border-t lg:border-0 border-white/10 pt-4 lg:pt-0 sm:flex-row sm:items-center sm:justify-end ">
                  <Link
                    href="/"
                    className=" w-full rounded-lg border border-white/10 px-4 py-2.5 text-sm font-medium text-gray-300 transition-all duration-300 hover:border-[#C2F800]/50 hover:text-[#C2F800] sm:w-auto "
                  >
                    View Details
                  </Link>
                  <MarkAsDoneButton item={item} />
                  <HandelRemoveItem item={item} />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PlanSelectedCard;
