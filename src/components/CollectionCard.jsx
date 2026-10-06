import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCollection } from '../redux/features/collectionSlice'

const CollectionCard = ({ item }) => {
    const dispatch = useDispatch()

    const removeFromCollection = (item) => {
        dispatch(removeCollection(item.id))
    }

    return (
        <div className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between">
            {/* Media Container with zoom effect on hover */}
            <div className="relative aspect-[4/3] overflow-hidden bg-slate-50">
                <a target='_blank' rel="noopener noreferrer" href={item.url} className="block w-full h-full">
                    {item.type === 'photo' && (
                        <img src={item.src} alt={item.title || "Saved photo"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                    {item.type === 'video' && (
                        <video autoPlay loop muted playsInline src={item.src} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"></video>
                    )}
                    {item.type === 'gif' && (
                        <img src={item.src} alt={item.title || "Saved GIF"} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    )}
                </a>
            </div>

            {/* Content & Action Bar */}
            <div id='bottom' className="p-4 flex items-center justify-between gap-4 border-t border-slate-50">
                <h2 className="text-sm font-semibold text-slate-800 truncate" title={item.title}>
                    {item.title || "Untitled Media"}
                </h2>

                <button
                    onClick={() => removeFromCollection(item)}
                    className="px-4 py-2 rounded-full text-xs font-semibold text-amber-950 bg-rose-50 hover:bg-rose-100 hover:text-amber-950 active:scale-95 transition-all duration-200 shrink-0"
                >
                    Remove
                </button>
            </div>
        </div>
    )
}

export default CollectionCard