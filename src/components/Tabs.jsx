import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveTabs } from '../redux/features/searchSlice'

const Tabs = () => {
    const tabs = ['photos', 'videos', 'gif']
    const dispatch = useDispatch()
    const activeTab = useSelector((state) => state.search.activeTab)

    return (
        <div className="flex justify-center items-center gap-3 py-4 px-4">
            <div className="flex bg-[#B0936C]/20 backdrop-blur-xl p-1.5 rounded-full border border-[#B9A175]/50 shadow-xl">
                {tabs.map((elem, idx) => {
                    const isActive = activeTab === elem
                    return (
                        <button
                            key={idx}
                            onClick={() => dispatch(setActiveTabs(elem))}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                                isActive
                                    ? 'bg-gradient-to-r from-[#B9A175] to-[#B0936C] text-amber-950 shadow-md scale-[1.02]'
                                    : 'text-amber-950/80 hover:text-amber-950 hover:bg-[#B9A175]/30'
                            }`}
                        >
                            {elem}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}

Tabs.displayName = 'Tabs'

export default Tabs