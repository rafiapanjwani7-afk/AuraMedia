import { createSlice } from "@reduxjs/toolkit"
import Swal from 'sweetalert2'

// Luxury styled Toast configuration matched with your gold/beige theme
export const showToast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#FAF6EE', // Soft cream background
    color: '#451a03', // Rich amber-950 text
    didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer
        toast.onmouseleave = Swal.resumeTimer
    },
    customClass: {
        popup: 'rounded-2xl border border-[#B9A175]/60 shadow-2xl backdrop-blur-xl px-4 py-3 font-medium',
        title: 'text-sm font-bold text-[#451a03]',
        timerProgressBar: 'bg-gradient-to-r from-[#B9A175] to-[#B0936C] h-1 rounded-full'
    }
})

// Function to trigger it easily with refined icon styling
export const showCustomAlert = (title, icon = 'success') => {
    showToast.fire({
        icon: icon,
        title: title,
        iconColor: '#8C6D46' // Deep warm gold icon tint
    })
}

const initialState = {
    items: JSON.parse(localStorage.getItem('collection')) || []
}

const collectionSlice = createSlice({
    name: 'collection',
    initialState,
    reducers: {
        addCollection: (state, action) => {
            const alreadyExists = state.items.find(
                item => item.id == action.payload.id
            )
            if (!alreadyExists) {
                state.items.push(action.payload);
                localStorage.setItem('collection', JSON.stringify(state.items));
                showCustomAlert('Added To Collection', 'success');
            }
        },
        removeCollection: (state, action) => {
            state.items = state.items.filter(
                item => item.id !== action.payload
            )
            localStorage.setItem('collection', JSON.stringify(state.items));
            showCustomAlert('Removed From Collection', 'warning');
        },
        clearCollection: (state) => {
            state.items = []
            localStorage.removeItem('collection')
            showCustomAlert('Collection Cleared', 'info');
        },
    }
})

export const {
    addCollection,
    removeCollection,
    clearCollection,
} = collectionSlice.actions;

export default collectionSlice.reducer;