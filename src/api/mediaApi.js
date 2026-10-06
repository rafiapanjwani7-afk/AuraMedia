import axios from 'axios';

const PIXABAY_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const GIPHY_KEY = import.meta.env.VITE_GIPHY_API_KEY;

// 📸 Fetch Photos from Pixabay
export async function fetchPhotos(query, page = 1, per_page = 20) {
    const res = await axios.get('https://pixabay.com/api/', {
        params: {
            key: PIXABAY_KEY,
            q: query,
            page,
            per_page,
            image_type: 'photo'
        }
    });
    return res.data.hits;
}

// 📹 Fetch Videos from Pixabay
export async function fetchVideos(query, page = 1, per_page = 15) {
    const res = await axios.get('https://pixabay.com/api/videos/', {
        params: {
            key: PIXABAY_KEY,
            q: query,
            page,
            per_page
        }
    });
    return res.data.hits;
}

// 🎞️ Fetch GIFs from Giphy
export async function fetchGIF(query, page = 1, per_page = 15) {
    const offset = (page - 1) * per_page; // Giphy pagination ke liye offset use hota hai
    const res = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
            api_key: GIPHY_KEY,
            q: query,
            limit: per_page,
            offset: offset
        }
    });
    return res.data.data;
}