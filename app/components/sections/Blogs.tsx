import { bagel } from "@/fonts/fonts";
import {
  faHandPointDown,
  faHeart,
  faLightbulb,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../ui/Button";
import Link from "next/link";
import Image from "next/image";
import { getThreeBlogs } from "@/app/actions";
import { url } from "inspector";
import { getUrl } from "@/utils";

export default async function Blogs() {
  const blogs = await getThreeBlogs();
  console.log(blogs);

  return (
    <section
      id="blogs"
      className="lg:max-w-[1728px] relative space-y-10 mx-auto pb-20"
    >
      <div className="text-center bg-black lg:bg-transparent text-primary lg:text-black py-5 lg:py-0">
        <h1
          className={`${bagel.className} flex items-end justify-center text-3xl ml:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`}
        >
          Latest
          <span className="relative w-8 h-8 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center scale-75">
            <FontAwesomeIcon icon={faLightbulb} className="text-secondary" />
          </span>
          Thoughts
        </h1>
        <h1
          className={`${bagel.className} flex items-end justify-center text-3xl ml:text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl`}
        >
          Just for
          <span className="relative w-8 h-8 lg:w-16 lg:h-16 2xl:w-20 2xl:h-20 flex items-center justify-center scale-75">
            <FontAwesomeIcon icon={faHeart} className="text-secondary" />
          </span>
          You
        </h1>
      </div>

      <div className="h-[400px] lg:h-[700px] flex flex-col lg:flex-row items-start justify-between gap-5">
        <div className="w-full lg:w-1/6 h-fit lg:h-full flex items-start flex-col justify-center p-4 gap-10">
          <h2
            className={`${bagel.className} text-3xl lg:text-6xl lg:leading-[70px]`}
          >
            MY Latest Blogs
          </h2>
          <div className="w-[70%] hidden lg:flex">
            <Link href={"/blogs"}>
              <Button backgroundColor="black">See All Blogs</Button>
            </Link>
          </div>
        </div>
        <div className="w-full lg:w-5/6 h-full lg:pl-12 pr-5 lg:pr-20">
          <div className="flex items-center justify-start mx-4 lg:mx-10 gap-10 h-full w-full overflow-x-scroll scrollbar-hide">
            {blogs.map((blog) => (
              <Link
                key={blog._id}
                href={`blogs/${blog.slug}`}
                className="h-full flex flex-col items-start justify-between group flex-shrink-0 max-w-[300px] min-w-[300px] lg:min-w-[400px]"
              >
                <div className="h-[95%] w-full relative overflow-hidden">
                  <div className="hidden lg:flex absolute bg-black/80 underline transition-all duration-500 ease-out rounded-full top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-10 items-center justify-center text-primary text-4xl w-0 h-0 group-hover:w-[900px] group-hover:h-[900px]">
                    <span className="opacity-0 group-hover:opacity-100 transition-all group-hover:delay-300">
                      Read Post →
                    </span>
                  </div>
                  <Image
                    src={getUrl(blog.image)}
                    alt="image"
                    fill
                    className="object-cover rounded-lg group-hover:object-[50%_10%]"
                  />
                </div>
                <h2 className={`text-xl line-clamp-2 py-2 ${bagel.className}`}>
                  {blog.title}
                </h2>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="px-4 w-fit flex ml-auto lg:hidden">
        <Button backgroundColor="black">See All Blogs</Button>
      </div>
    </section>
  );
}
