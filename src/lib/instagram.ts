export interface InstagramPost {
  id: string;
  caption?: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

export async function fetchInstagramPosts(): Promise<InstagramPost[]> {
  const token = process.env.INSTAGRAM_TOKEN;
  if (!token) {
    console.warn("No INSTAGRAM_TOKEN set, skipping Instagram feed");
    return [];
  }

  try {
    const res = await fetch(
      `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,timestamp&limit=8&access_token=${token}`
    );
    if (!res.ok) {
      console.warn("Instagram API error:", res.status);
      return [];
    }
    const data = await res.json();
    return data.data || [];
  } catch (error) {
    console.warn("Failed to fetch Instagram posts:", error);
    return [];
  }
}
