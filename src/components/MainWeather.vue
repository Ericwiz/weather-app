<script>
export default {
    props: {
        weatherImage: String,
            // Cencius degree symbol
            // Weather condition text
            text: String,

            // weather date
            date: String,

            current: Object,
            location: Object,
            censius: Boolean
    },
    data() {
        return {
            degreeSymbol: '\u00B0C',
            degreeSymbolf: '\u00B0F'
        }
    }
}
</script>

<template>
    <div class="flex flex-col mt-20 pb-10">
        <div class="m-auto md:pb-24">
            <img :src="weatherImage" alt="weather condition weatherImage" class="w-44 h-44">
        </div>
        <p v-if="censius === true" class="text-6xl text-white pb-16 md:pb-32 text-center">
            {{ current.temp_c }} 
            <span class="text-2xl text-gray-400 -ml-4">{{ degreeSymbol }}</span>
        </p>

        <p v-else  class="text-6xl text-white pb-16 md:pb-32 text-center">
            {{ current.temp_f }} 
            <span class="text-2xl text-gray-400 -ml-4">{{ degreeSymbolf }}</span>
        </p>
        <p class="text-gray-300 text-3xl md:text-lg xl:text-3xl md:pb-24 text-center">{{ text }}</p>
        <p class="m-auto text-center pb-8">
            <span class="text-sm text-gray-400">Today</span>
            <span class="text-3xl text-gray-400 pl-2">.</span>
            <span class="text-gray-400 text-sm pl-2">{{date}}</span>
        </p>
        <p class="text-gray-400 text-3xl flex justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" class=""/></svg>
            <span class="text-sm pl-2">{{ location.name }}</span>
        </p>
    </div>
</template>