// "use client";
// import { useSearchParams } from "next/navigation";
import { CATEGORY_BLOGS } from "../constants/blogs";
import Button from "./ui/Button";
import Link from "next/link";

type Props = {
  category: string;
};

export default function BlogsTags({ category }: Props) {
  return (
    <>
      {CATEGORY_BLOGS.map((cat) => (
        <Link href={`/blogs/?cat=${cat.category}`} key={cat.id} className="">
          <Button
            fontSize="15px"
            padding="10px 15px"
            backgroundColor={
              category?.toLowerCase() === cat.category.toLowerCase()
                ? "black"
                : "#D9D9D9"
            }
            textColor={
              category?.toLowerCase() === cat.category.toLowerCase()
                ? "white"
                : ""
            }
          >
            {cat.category}
          </Button>
        </Link>
      ))}
    </>
  );
}
