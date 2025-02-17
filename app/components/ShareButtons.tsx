import Link from "next/link";
import React from "react";

type Props = {
  url: string;
  title: string;
};

const ShareButtons = ({ url, title }: Props) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareLinks = [
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: "X (Twitter)",
      url: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    },
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
    {
      name: "WhatsApp",
      url: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
    },
  ];

  return (
    <div className="flex items-center gap-2 md:gap-5 text-sm md:text-base mt-1 md:mt-2">
      {shareLinks.map(({ name, url }) => (
        <Link key={name} href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default ShareButtons;
