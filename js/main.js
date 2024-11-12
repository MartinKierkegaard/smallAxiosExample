const baseUrl = "http://localhost:5180/api/cars1"

const app = Vue.createApp({
    data() {
        return {
            intro: 'Axios getall example',
            carlist: [],
        }
    },
    methods: {
        myMethod(){

        },
        GetAllCars(){

            console.log("er i GetAllCArs")

            axios.get(baseUrl)
            .then(response => {
                this.carlist = response.data
                console.log(carlist)
            })
            .catch(
                error => {
                    console.log("er i catch")
                    console.log(error.response)

                })

               
            //     axios.get(baseUrl)
            //     .then(
            //         function(response) {
            //         console.log(response)
            //     })
            //     .catch(
            //         function(error) {
            //             console.log(response)
            //         }
            //     ) 

            // axios.get(baseUrl)
            // .then(
            //     response => {
            //     console.log(response)
            // })
            // .catch(
            //     error =>{
            //         console.log(error)
            //     }
            // )




        },
    },
    computed: {
        myComputed() {
            return ''
        },
        
    }
})
