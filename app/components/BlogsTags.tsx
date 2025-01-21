"use client";
import { useSearchParams } from "next/navigation";
import Button from "./ui/Button";
import Link from "next/link";

export default function BlogsTags() {
  const params = useSearchParams();
  const category = params.get("cat") || "all";
  return (
    <>
      {["ALL", "language", "Databases", "Security", "AI"].map((tag) => (
        <Link href={`/blogs/?cat=${tag.toLowerCase()}`} key={tag}>
          <Button
            fontSize="15px"
            padding="10px 15px"
            backgroundColor={
              category?.toLowerCase() === tag.toLowerCase()
                ? "black"
                : "#D9D9D9"
            }
            textColor={
              category?.toLowerCase() === tag.toLowerCase() ? "white" : ""
            }
          >
            {tag}
          </Button>
        </Link>
      ))}
    </>
  );
}
