<script>
export default {
    props: {
        current: Object,
        location: Object,
        degree: String
    }
}
</script>

<template>
    <h1 class="text-3xl mx-xs:text-2xl text-white pb-8">Today's Highlights</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        {{ console.log(current) }}
        {{ console.log(location) }}

        <div class="card bg-[#010735]">
            <div class="card-body text-white space-y-5">
                <p class="text-center opacity-75">Wind Status</p>
                <p class="text-center text-2xl lg:text-4xl">{{ current.wind_mph}}
                    <span class="-ml-2 text-lg lg:text-2xl">mph</span>
                </p>
                <p class="text-center opacity-75">
                    <span>{{ current.wind_degree }} {{ degree }}</span>
                    <span class="pl-2">{{ current.wind_dir}}</span>
                </p>
            </div>
        </div>

        <div class="card bg-[#010735]">
            <div class="card-body text-white space-y-5">
                <p class="text-center opacity-75">Humidity</p>
                <p class="text-center text-2xl lg:text-4xl">{{ current.humidity}}
                    <span class="-ml-2 text-2xl">%</span>
                </p>
                <div class="text-center opacity-75">
                    <p class="flex justify-between text-xs -mb-2 opacity-60">
                        <span class="text-left">0</span>
                        <span>50</span>
                        <span>100</span>
                    </p>
                    <progress class="progress progress-warning" :value="current.humidity" max="100"></progress>
                    <p class="opacity-60 text-white text-right -mt-2 text-xs">%</p>
                </div>
            </div>
        </div>

        <div class="card h-36 bg-[#010735]">
            <div class="card-body text-white space-y-5">
                <p class="text-center opacity-75">Visibility</p>
                <p class="text-center text-2xl lg:text-4xl">{{ current.vis_miles}}
                    <span class=" text-lg lg:text-2xl">miles</span>
                </p>
            </div>
        </div>

        <div class="card h-36 bg-[#010735]">
            <div class="card-body text-white space-y-5">
                <p class="text-center opacity-75">Air Pressure</p>
                <p class="text-center text-2xl lg:text-4xl">{{ current.pressure_mb}}
                    <span class="ml-2 text-2xl">mb</span>
                </p>
            </div>
        </div>
    </div>
</template>