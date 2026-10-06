import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setQuery } from '../redux/features/searchSlice'

const SearchBar = () => {
    const [text, setText] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(setQuery(text.trim()))
    }

    return (
        <div className="w-full flex justify-center items-center py-8 px-4">
            <form
                onSubmit={submitHandler}
                className="w-full max-w-2xl flex items-center bg-[#B0936C]/20 backdrop-blur-xl border border-[#B9A175]/50 rounded-full shadow-xl p-2 focus-within:border-[#B0936C] focus-within:ring-4 focus-within:ring-[#B9A175]/30 transition-all duration-300"
            >
                <input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    required
                    type="text"
                    placeholder="Search anything (e.g. nature, tech, animals)..."
                    className="w-full px-6 py-3 text-amber-950 bg-transparent placeholder:text-amber-900/50 focus:outline-none text-sm font-semibold"
                />

                <button
                    type="submit"
                    className="px-8 py-3 rounded-full text-sm font-bold text-amber-950 bg-gradient-to-r from-[#B9A175] to-[#B0936C] hover:brightness-105 shadow-md active:scale-95 transition-all duration-200 shrink-0"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

SearchBar.displayName = 'SearchBar'

export default SearchBar