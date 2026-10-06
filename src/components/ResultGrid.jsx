import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPhotos, fetchVideos, fetchGIF } from '../api/mediaApi'
import { setLoading, setError, setResults } from '../redux/features/searchSlice'
import ResultCard from './ResultCard'

const ResultGrid = () => {
    const dispatch = useDispatch()
    const { query, activeTab, results, loading, error } = useSelector((store) => store.search)

    useEffect(() => {
        if (!query) return
        const getData = async () => {
            try {
                dispatch(setLoading())
                let data = []

                if (activeTab === 'photos') {
                    const hits = await fetchPhotos(query)
                    data = hits.map((item) => ({
                        id: item.id,
                        type: 'photo',
                        title: item.tags || 'Photo',
                        thumbnail: item.webformatURL,
                        src: item.largeImageURL || item.webformatURL,
                        url: item.pageURL,
                    }))
                }

                if (activeTab === 'videos') {
                    const hits = await fetchVideos(query)
                    data = hits.map((item) => ({
                        id: item.id,
                        type: 'video',
                        title: item.tags || 'Video',
                        thumbnail: item.videos?.medium?.thumbnail || item.picture_id,
                        src: item.videos?.medium?.url || item.videos?.small?.url || item.video_files?.[0]?.link,
                        url: item.pageURL,
                    }))
                }

                if (activeTab === 'gif') {
                    const hits = await fetchGIF(query)
                    data = hits.map((item) => ({
                        id: item.id,
                        title: item.title || 'GIF',
                        type: 'gif',
                        thumbnail: item.images?.fixed_height?.url || item.images?.original?.url,
                        src: item.images?.original?.url,
                        url: item.url,
                    }))
                }

                dispatch(setResults(data))

            } catch (err) {
                console.error("API Error:", err)
                dispatch(setError(err.message))
            }
        }

        getData()
    }, [query, activeTab, dispatch])

    // Error State (Warm Amber/Red styling)
    if (error) {
        return (
            <div className="flex justify-center items-center py-20">
                <div className="bg-[#FAF6EE] border border-amber-800/30 text-amber-950 px-6 py-4 rounded-2xl backdrop-blur-md shadow-lg text-sm font-semibold">
                    Failed to load media. Please try again.
                </div>
            </div>
        )
    }

    // Loading State (Warm Gold Spinner & Deep Amber Text)
    if (loading) {
        return (
            <div className="flex flex-col justify-center items-center py-32 gap-4">
                <div className="w-10 h-10 border-4 border-[#B9A175]/30 border-t-[#B0936C] rounded-full animate-spin"></div>
                <p className="text-sm font-semibold text-[#451a03] tracking-wide">Searching the universe...</p>
            </div>
        )
    }

    // Initial State (Updated Prominent Heading)
    if (!query) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h2 className="text-2xl md:text-3xl font-extrabold text-[#451a03] tracking-wide drop-shadow-sm">
                    Type something above to start exploring
                </h2>
                <p className="mt-2 text-sm md:text-base font-semibold text-[#8C6D46]">
                    Discover stunning photos, videos, and GIFs instantly.
                </p>
            </div>
        )
    }

    // Main Grid & No Results State
    return (
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10">
            {results.length === 0 ? (
                <div className="text-center py-16 text-[#451a03] font-semibold text-lg">
                    No results found for "{query}". Try searching for something else!
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {results.map((item) => (
                        <ResultCard key={item.id} item={item} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default ResultGrid