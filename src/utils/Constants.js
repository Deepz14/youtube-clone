const API_KEY = "AIzaSyDeFipKfbdTr0BZzlokxzbfUFxV01AvU0A";

export const YOUTUBE_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + API_KEY;
export const YOUTUBE_VIDEO_BY_ID_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY;
export const YOUTUBE_SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const BUTTON_FILTER_LIST = [
    "All", "Music", "Live", "News", "Playlists", "Sitcoms", "Thrillers", "Computer Programming", "Gaming", "Recently uploaded"
]
