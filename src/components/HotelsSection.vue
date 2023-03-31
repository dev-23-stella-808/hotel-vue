
import MapModal from './modals/MapModal.vue';

<template>
    <section>
        <div v-if="isFiltering && filteredHotels.length === 0">
            <p>
                No Filtered Hotesl yet
            </p>
        </div>
        <div v-else>
            <HotelCard
                v-for="hotel,i in (filteredHotels.length > 0 ? filteredHotels:hotels)"
                :key='i'
                :hotel="hotel"
                class="mb-3"
                @show-on-map = "showOnMap"
                />
        </div>

        <MapModal
            :coordinates="coordinates"
            />
    </section>
</template>

<script>
    import HotelCard from '@/components/HotelCard.vue'
    import MapModal from '@/components/modals/MapModal.vue'
    import hotels from '@/assets/data/hotels'

    export default {
        name:"HotelsSection",
        components:{
            HotelCard,
            MapModal
        },
        data(){
            return {
                hotels,
                filteredHotels:[],
                locationSearch:"",
                isFiltering:false,
                coordinates:{},

            }
        },
        watch:{
            $route:function(){
                this.filter();
            }
        },
        created(){
            this.filter();
        },
        methods:{
            showOnMap(coordinates){
                this.coordinates = coordinates;
            },
            filter(){
                let hotels = this.hotels;
                const to = this.$route;
                this.filteredHotels =[];
                this.isFiltering = false;

                if (to.query.location){
                    this.isFiltering = true;
                    this.locationSearch = to.query.location;
                    hotels = this.hotels.filter(hotel => hotel.location.city.toLowerCase() === this.locationSearch.toLowerCase() 
                    || hotel.location.country.toLowerCase() === this.locationSearch.toLowerCase());
                    this.filteredHotels = hotels;
                }

                //if filtering by facility
                if(to.query.facilities){
                    this.isFiltering = true;
                    const filters = to.query.facilities.split(",");
                    this.filteredHotels = hotels.filter(hotel => filters.every(facility => hotel.facilities.includes(facility)));
                }
            }
        }
    }
</script>