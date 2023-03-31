<template>
    <section>
        <b-carousel
         v-model="slide"
         controls
         indicators
         :interval="4000"
         >
            <b-carousel-slide
                v-for="img,i in carouselImgs"
                :key = "i"
                >
                <template #img>
                    <img 
                        class="max-h-20 w-100 object-fit-cover object-position-center-bottom rounded"
                        :src="require(`@/assets/img/${img}.jpg`)">
                </template>
            </b-carousel-slide>
        </b-carousel>
        <div class="d-flex gap-0q mt-1 max-h-5">
            <button 
                v-for="img,i in carouselImgs"
                :key='i'
                class="flex-1 reset-btn"
                @click="slide=i"
                >
                <img 
                    class="w-100 h-100 object-fit-cover object-position-center-bottom rounded"
                    :class="slide !==i ? 'grayscale':''"
                    :src = "require(`@/assets/img/${img}.jpg`)"
                    >
            </button>
        </div>
    </section>
</template>

<script>
    export default {
        name:"HotelCarousel",
        props:{
            showcaseImg:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                carouselImgs:[],
                slide:0,
            }
        },
        created(){
            this.setCarouselImgs();
        },
        methods:{
            randomNumber(min,max){
                return Math.floor(Math.random()*(max-min) + min);
            },
            setCarouselImgs(){
                this.carouselImgs = [
                    `hotels/${this.showcaseImg}`,
                    ...Array.from(Array(4).keys()).map(() => `carousel/${this.randomNumber(1,29)}`)
                ];
            }
        }
    }
</script>

<style>
</style>