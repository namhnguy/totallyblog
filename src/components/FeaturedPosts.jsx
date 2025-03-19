import { Link } from "react-router-dom";
import Image from "./Image";
// import axios from "axios";
// import { useQuery } from "@tanstack/react-query";
// import { format } from "timeago.js";

// const fetchPost = async () => {
//   const res = await axios.get(
//     `${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`
//   );
//   return res.data;
// };

const FeaturedPosts = () => {
  //   const { isPending, error, data } = useQuery({
  //     queryKey: ["featuredPosts"],
  //     queryFn: () => fetchPost(),
  //   });

  //   if (isPending) return "loading...";
  //   if (error) return "Something went wrong!" + error.message;

  //   const posts = data.posts;
  //   if (!posts || posts.length === 0) {
  //     return;
  //   }

  return (
    <div className="mt-8 flex flex-col lg:flex-row gap-8">
      {/* First */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {/* image */}
        {
          <Image
            src="featured2.jpeg"
            className="rounded-3xl object-cover"
            w="895"
          />
        }
        {/* details */}
        <div className="flex items-center gap-4">
          <h1 className="font-semibold lg:text-lg">01.</h1>
          <Link className="text-blue-800 lg:text-lg">Web design</Link>
          <span className="text-gray-500">2 days ago</span>
        </div>
        {/* title */}
        <Link
          to="/test"
          className="text-xl lg:text-3xl font-semibold lg:font-bold"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        </Link>
      </div>
      {/* Others */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        {[0, 1, 2].map(() => {
          return (
            <div className="lg:h-1/3 flex justify-between gap-4">
              <div className="w-1/3 aspect-video">
                <Image
                  src="featured2.jpeg"
                  className="rounded-3xl object-cover w-full h-full"
                  w="298"
                />
              </div>

              {/* details and title */}
              <div className="w-2/3">
                {/* details */}
                <div className="flex items-center gap-4 text-sm lg:text-base mb-4">
                  <h1 className="font-semibold">02.</h1>
                  <Link className="text-blue-800">Web Design</Link>
                  <span className="text-gray-500 text-sm">2 Days ago</span>
                </div>
                {/* title */}
                <Link
                  to="/test"
                  className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-2xl font-medium"
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedPosts;
