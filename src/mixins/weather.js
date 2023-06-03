import axios from "axios"
export default {
    data () {
        return {
            // toggle between degrees/f and c
            censius: true,
            fereheit: false,
            forecast: [],
            current: '',
            location: '',
            url: 'https://api.weatherapi.com/v1/',
            // Weather image
            weatherImage: '',
            forecastImage: '',
            // Cencius degree symbol
            degreeSymbol: '\u00B0C',
            degree: '\u00B0',
            // Weather condition text
            text: '',

            // weather date
            date: null,
            place: '',
            optionalCities: ['London', 'Barcelona', 'Long Beach', 'Madrid', 'Abuja', 'Accra', 'Lagos']
        }
    },
    created() {
        axios.get(this.url + 'forecast.json', {
                params: {
                    key: 'ffe957c4c28248cc9a203254230206',
                    q: 'Lagos',
                    days: 5
                }
            })
            .then(res => {
                this.current = res.data.current
                this.location = res.data.location
                this.weatherImage = res.data.current.condition.icon
                this.text = res.data.current.condition.text
                this.date = res.data.location.localtime
                this.date =  new Date(this.date)
                this.date = this.date.toDateString()
                this.forecast = res.data.forecast.forecastday.slice(1, 5) 

                // for(let day of this.forecast) {
                //    this.forecastImage = day.condition.icon
                // }
                // return this.forecastImage
            })
            .catch(err => console.log(err))
    },
    methods: {
        searchCity() {
            axios.get(this.url + 'forecast.json', {
                    params: {
                        key: 'ffe957c4c28248cc9a203254230206',
                        q: this.place,
                        days: 5
                    }
                })
                .then(res => {
                    this.current = res.data.current
                    this.location = res.data.location
                    this.weatherImage = res.data.current.condition.icon
                    this.text = res.data.current.condition.text
                    this.date = res.data.location.localtime
                    this.date =  new Date(this.date)
                    this.date = this.date.toDateString() 
                    this.forecast = res.data.forecast.forecastday.slice(1, 5) 
                })
                .catch(err => console.log(err))
                this.place = ''
        },

        searchOptionCity(city) {
            this.place = city
        },

        censiusOn () {
            this.censius = true
            this.fereheit = false
            // console.log('On C: and C', this.censius)
            // console.log('On C: and F', this.fereheit)
        },

        censiusOff () {
            this.censius = false
            this.fereheit = true
            // console.log('On F: and C', this.censius)
            // console.log('On F: and F', this.fereheit)
        }
        
    },
}