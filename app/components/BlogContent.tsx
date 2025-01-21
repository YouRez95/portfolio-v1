import { PortableText } from "next-sanity";
import { fullBlog } from "../lib/interface";
import Image from "next/image";
import { getUrl } from "@/utils";
import { codeToHtml, createHighlighter, getHighlighter } from "shiki";

export default function BlogContent({
  content,
}: {
  content: fullBlog["content"];
}) {
  const components = {
    types: {
      image: (props: { value: string }) => {
        return (
          <div className="w-full">
            <Image
              src={getUrl(props.value)}
              alt="image"
              width={800}
              height={800}
              className="object-cover"
              priority
            />
          </div>
        );
      },

      code: async (props: { value: { language: string; code: string } }) => {
        const { language, code } = props.value;
        const highlighter = await createHighlighter({
          themes: ["catppuccin-mocha"],
          langs: [language],
        });
        const html = highlighter.codeToHtml(code, {
          lang: language,
          theme: "catppuccin-mocha",
        });
        return <div dangerouslySetInnerHTML={{ __html: html }} />;
      },
    },
  };

  return <PortableText value={content} components={components} />;
}
