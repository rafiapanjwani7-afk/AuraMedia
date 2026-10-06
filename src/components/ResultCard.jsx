import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCollection, removeCollection } from '../redux/features/collectionSlice'


const ResultCard = ({ item }) => {
    const dispatch = useDispatch()
    
    const collection = useSelector((state) => state.collection.items)
    const isSaved = collection.some((savedItem) => savedItem.id === item.id)

    return (
        <div className="group bg-[#B0936C]/20 backdrop-blur-xl rounded-2xl border border-[#B9A175]/50 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            {/* Media Container */}
            <div className="relative aspect-[16/11] overflow-hidden bg-black/5">
                <a target='_blank' rel="noopener noreferrer" href={item.url} className="block w-full h-full">
                    {item.type === 'photo' && (
                        <img src={item.src} alt={item.title || "Search photo"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                    {item.type === 'video' && (
                        <video autoPlay loop muted playsInline src={item.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></video>
                    )}
                    {item.type === 'gif' && (
                        <img src={item.src} alt={item.title || "Search GIF"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                </a>
            </div>

            {/* Content & Action Bar - Warm golden background with soft brown text instead of black */}
            <div id='bottom' className="p-4 flex items-center justify-between gap-3 border-t border-[#B9A175]/30 bg-[#B9A175]/30 backdrop-blur-md">
                <h2 className="text-xs font-bold text-amber-950 truncate tracking-wide" title={item.title}>
                    {item.title || "Untitled Media"}
                </h2>

                <button
                    onClick={() => {
                        if (isSaved) {
                            dispatch(removeCollection(item.id))
                        } else {
                            dispatch(addCollection(item))
                        }
                    }}
                    className={`px-5 py-2 rounded-full text-xs font-bold shadow-md active:scale-95 transition-all duration-200 shrink-0 ${
                        isSaved
                            ? ' text-amber-950 bg-rose-50 hover:bg-rose-100 hover:text-amber-950'
                            : 'bg-gradient-to-r from-[#B9A175] to-[#B0936C] text-amber-950 hover:brightness-105 shadow-amber-900/10'
                    }`}
                >
                    {isSaved ? 'Remove' : 'Save'}
                </button>
            </div>
        </div>
    )
}

ResultCard.displayName = 'ResultCard'

export default ResultCard