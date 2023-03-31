<template>
    <div>
        <b-row align-v="start">
            <!-- about hotel -->
            <b-col lg="8" class="mb-3 mb-lg-0">
                <b-card class="shadow">
                    <h1 class="mb-3">{{ hotel.name }}</h1>
                    <HotelCarousel :showcase-img="hotel.img"/>

                    <hr>

                    <!-- Location -->

                    <section>
                        <div class ="d-flex flex-wrap align-items-center mb-2">
                            <i class ="fas fa-map-marker-alt mr-2 text-primary"></i>
                            <!-- city -->
                            <span class ="text-muted">{{ hotel.location.city }}</span>
                            <span class = "mx-2">&#8226</span>
                            <!-- show on map -->
                            <b-button class="p-0"
                                variant="link"
                                v-b-modal.map-modal
                                >
                                Show on map
                            </b-button>
                            <span class="mx-2">&#8226</span>
                            <!-- from center -->

                            <span>{{ hotel.location.distance_from_center }} kms from the center</span>
                            <!-- subway -->
                            <span v-if="hotel.location.subway_access">
                                <span class="mx-2">&#8226</span>
                                <span>Subway Access</span>
                            </span>
                            <HotelCardRating 
                                :id="hotel.id"
                                :rating="hotel.rating"
                                class = "flex-1 text-right"
                            />
                            </div>
                            <div>
                                <i class="fas fa-hotel mr-2 text-primary "></i>
                                {{ hotel.location.addr }}
                                {{ hotel.location.city }}
                                {{ hotel.location.country }}
                            </div>
                    </section>

                    <hr>
                    <!-- desc -->
                    <div class="mt-4">
                        <p
                        v-for="desc,i in hotelDesc"
                        :key="i"
                        >
                        {{ desc }}
                    </p>
                    </div>

                    <hr>

                    <!-- facilities -->
                    <div class="d-flex flex-wrap gap-1 mb-3 flex-1">
                        <div v-for="facility,i in hotel.facilities"
                        :key="i">
                        <i
                            class="mr-1 text-primary"
                            :class="facilityIcons[facility]"
                            ></i>
                            <span class="text-muted">
                                {{ facility||capitalize }}
                            </span>
                        </div>
                    </div>
                </b-card>
            </b-col>

            <!-- book -->
        </b-row>
    </div>
</template>