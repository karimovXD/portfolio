import { Button } from "@/components/ui/moving-border";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-svh">
      <div className="h-full w-full dark:bg-[#020817] bg-white dark:bg-grid-white/[0.05] bg-grid-[#030712]/[0.1] relative">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-[#030712] bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="m-auto text-center h-full flex flex-col items-center justify-start pt-32 px-4">
          <div className="h-auto">
            <h1 className="text-4xl sm:text-6xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-gray-900 py-3">
              Hey, I&rsquo;m Iskandar
            </h1>
            <p className="text-lg sm:text-xl font-normal relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-400 to-gray-500 mb-10">
              Results-oriented web developer <br /> who creates websites
              ensuring the success of the entire product.
            </p>
            <Link href="/about">
              <Button className="py-2 px-10" borderRadius="1.75rem">
                About me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
