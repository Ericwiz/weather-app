<script>
// import weather from '../mixins/weather'
// import WeatherCard from './WeatherCard.vue'
export default {
  // components: { WeatherCard },
  // mixins: [weather],
  props: {
    forecast: Array,
    censius: Boolean
  },

  data() {
    return {
      degree: '\u00B0'
    }
  }
}
</script>

<template>
   <div class="flex flex-col mb-16">
       <div class="grid grid-cols-1 gap-6 xl:gap-16  sm:grid-cols-2 xl:grid-cols-4 pt-12">
        <div class="card lg:w-40 lg-xl:w-60 bg-[#010735]" v-for="(myDay, index) in forecast" :key="myDay">
            <div class="card-body">
                <p  class="card-title text-white text-center mx-auto text-sm xl:text-xs">
                <template v-if="index === 0">
                    Tomorrow
                </template>
                <template v-else>
                    {{ new Date(myDay.date).toDateString() }}
                </template>
                </p>
                <img :src="myDay.day.condition.icon" alt="">
                <div class="">
                    <p v-if="censius"  class="flex justify-between text-white text-center text-sm xl:text-xs mx-auto pt-4">
                        <span >
                            {{ myDay.day.maxtemp_c }} {{ degree }}C
                            <!-- {{ console.log(censius) }} -->
                        </span>
                        <span class="opacity-50">
                            {{ myDay.day.mintemp_c }} {{ degree }}C
                        </span>
                    </p>

                    <p v-else  class="flex justify-between text-white text-sm xl:text-xs text-center mx-auto pt-4">
                        <span>
                            {{ myDay.day.maxtemp_f }} {{ degree }}F
                        </span>
                        <span class="opacity-50">
                            {{ myDay.day.mintemp_f }} {{ degree }}F
                        </span>
                    </p>
                </div>
            </div>    
       </div>
    </div>
   </div>
</template>