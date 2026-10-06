import React from 'react'
import { useSelector } from 'react-redux'
import SearchBar from '../components/SearchBar'
import Tabs from '../components/Tabs'
import ResultGrid from '../components/ResultGrid'

const HomePage = () => {
    const { query } = useSelector((store) => store.search)

    return (
        <div className="min-h-screen pb-20">
            {/* Search Bar Section */}
            <div className="pt-6">
                <SearchBar />
            </div>

            {/* Tabs & Results (Always render container so state changes smoothly) */}
            <div className="transition-all duration-300">
                {query && <Tabs />}
                <ResultGrid />
            </div>
        </div>
    )
}

export default HomePage