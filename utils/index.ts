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

export const emailTemplate = (name: string, email: string, message: string) => {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, sans-serif; line-height: 1.6; background-color: #f4f4f4;">
    <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center" style="padding: 20px;">
                <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
                    <!-- Header -->
                    <tr>
                        <td style="padding: 40px 30px; text-align: center; background-color: #ff5500; border-radius: 8px 8px 0 0;">
                            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">${name}</h1>
                            <p style="margin: 10px 0 0; color: #ffffff; font-size: 16px;">${email}</p>
                        </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                        <td style="padding: 30px;">
                            <p style="margin: 0; color: #374151; font-size: 16px; line-height: 1.6;">
                                ${message}
                            </p>
                        </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                        <td style="padding: 20px 30px; background-color: #f9fafb; border-radius: 0 0 8px 8px; text-align: center;">
                            <p style="margin: 0; color: #6b7280; font-size: 14px;">
                                This email was sent from Portfolio "yourez.dev" contact form.
                            </p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;
};
