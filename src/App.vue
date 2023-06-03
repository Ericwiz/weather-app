<script>
import MainWeather from './components/MainWeather.vue'
import CurrentWeather from './components/CurrentWeather.vue'
import weather from './mixins/weather'
import TodaySHighlight from './components/Today\'sHighlight.vue'
export default {
  components: {MainWeather, CurrentWeather, TodaySHighlight},
  mixins: [weather],            
}
</script>

<template>
  <div class="drawer">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <main class="drawer-content flex flex-col md:flex-row">
    <!-- Page content here -->
    <div class="bg-custom-bg-image md:w-2/6 w-full bg-[#191b2b] bg-contain bg-center bg-no-repeat bg-blend-overlay h-full pl-6 pt-6">
      <label for="my-drawer" class="btn drawer-button">
      Search for places
      </label>

      <MainWeather 
      :location="location"
      :current="current"
      :date="date"
      :weatherImage="weatherImage"
      :text="text"
      :censius="censius"
       />
    </div>

    <div class="bg-[#000318] md:w-4/6 w-full px-24 pt-6">
      <div class="flex justify-end space-x-3">
        <button @click="censiusOn" 
        class="btn btn-circle btn-neutral active:bg-white active:text-black"
        :class="{'bg-white text-black hover:bg-white': censius}"
        >{{ degree }}C</button>
        <button @click="censiusOff" :class="{'bg-white text-black hover:bg-white': fereheit}" class="btn btn-circle btn-neutral active:bg-white active:text-black">{{ degree }}F</button>
      </div>
      <CurrentWeather :forecast="forecast" :censius="censius" />

      <TodaySHighlight :current="current" :degree="degree" />

      <div class="pt-16 pb-2">
        <h3 class="text-xs text-white underline text-center">Made with 💚 by King O. Wisdom</h3>
      </div>
    </div>
  </main> 
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay"></label>
    <div class="menu p-4 w-full md:w-2/6 h-full text-base-content bg-[#010537]">
      <!-- Sidebar content here -->
      <div class="pb-8 flex flex-col">
        <label for="my-drawer" class="pr-4 pb-4 cursor-pointer place-self-end">
          <svg class="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" color="white" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49"/></svg>
        </label>
        <div class="flex space-x-5">
          <input type="search" placeholder="Type here" class="input input-info outline-none w-full max-w-xs"  v-model="place"/>
          <button @click="searchCity" class="btn btn-primary lg:w-48 mx-md:w-[50%]">Search</button>
        </div>
      </div>
      <div class="flex flex-col space-y-5 text-white">
        <p @click="searchOptionCity(city)" v-for="city in optionalCities" :key="city"  class="text-lg py-2 hover:ring-1 pl-3 ring-inset ring-white transition-all duration-300 ease-in-out cursor-pointer">{{city}}</p>
      </div>
      
    </div>
  </div>
</div>
</template>