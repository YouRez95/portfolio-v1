import { client } from "@/app/lib/sanity";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
export function getUrl(source: string) {
  return builder.image(source).url();
}

export function getVideoUrl(fileAsset: any) {
  if (!fileAsset || !fileAsset.asset || !fileAsset.asset._ref) {
    return null;
  }
  const ref = fileAsset.asset._ref;

  // Extract the file ID and extension
  const [fileId, fileExtension] = ref.replace("file-", "").split("-");

  // Construct the video URL
  return `https://cdn.sanity.io/files/${client.config().projectId}/${client.config().dataset}/${fileId}.${fileExtension}`;
}

export function createRatingStars(rating: number, totalStars: number) {
  const stars = Array.from({ length: totalStars }, (_, index) => {
    const starValue = index + 1;
    if (rating >= starValue) return "full";
    if (rating >= starValue - 0.5) return "half";
    return "empty";
  });

  return stars;
}
