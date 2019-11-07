//function car(name, model, owner, year, phone, image) {
//    return {
//        name, model, owner, year, phone, image
//    }
//}

const car = (name, model, owner, year, phone, image) => ({name, model, owner, year, phone, image})
const  log = (text, type, date = new Date()) => ({text, type, date})
const cars = [
    car('Ford', 'Mustang', 'Max', 2015, '+# 098 876 1234', 'img/ford.jpg'),
    car('Porshe', '911', 'Alex', 2017, '+# 098 876 1234', 'img/porsche.jpg'),
    car('Ford', 'Hathc', 'Max', 2015, '+# 098 876 1234', 'img/hatch.jpg')
]
new Vue({
    el: '#app',
    data: {
        cars: cars,
        car: cars[0],
        logs: [],
        selectedCarIndex: 0,
        phoneVisibility: false,
        search: '',
        modalVizibility: false
    },
    methods: {
        CelectCar: function (index) {
            console.log('Click', index)
            this.car = cars[index]
            this.selectedCarIndex = index
        },
        newOrder() {
            this.modalVizibility = false
            this.logs.push(
                    log(`Susccess order: ${this.car.name} - ${this.car.model}`, 'ok')
                    )
        },
        cancelOrder() {
            this.modalVizibility = false
            this.logs.push(
                    log(`Cancel order: ${this.car.name} - ${this.car.model}`, 'cnl')
                    )
        }
    },
    computed: {
        phoneBtnText() {
            return this.phoneVisibility ? 'Hide phone' : 'Show phone'
        },
        filteredCars() {
            var self = this
            const  filtred = this.cars.filter(function (car) {
                return car.name.indexOf(self.search) > -1 || car.model.indexOf(self.search) > -1
            })
            return filtred
        }
    },
    filters:{
        date(value) {
            return  value.toLocaleString()  
        }
    }
})


