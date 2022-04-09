const TikTokScraper = require("tiktok-scraper");

async function getVideoURL(tiktokURL) {
  try {
    const videoMeta = await TikTokScraper.getVideoMeta(tiktokURL);
    return videoMeta.collector[0].videoUrl;
  } catch (error) {
    return error;
  }
}

module.exports.getVideoURL = getVideoURL;
