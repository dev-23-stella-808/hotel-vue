<template>
    <b-navbar toggleable="md" type="dark" variant="dark" class="mb-5">
        <b-container>
            <b-navbar-brand to="/">CoolName</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav class="ml-auto">
                    <b-nav-form @submit.prevent = "filter.locationSearch = location">
                        <b-form-input
                            size="sm"
                            class="mr-sm-2"
                            placeholder="Search by location"
                            v-model="location"
                            ></b-form-input>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit" variant="primary">
                            <i class="fas fa-search"></i>
                        </b-button>
                    </b-nav-form>

                    <!-- filter by facilities -->
                    <b-nav-item-dropdown right no-caret>
                        <template #button-content>
                            <b-button size="sm" class="ml-3" variant="primary">
                                Filter <i class="fas fa-filter"></i>
                            </b-button>
                        </template>
                        <b-dropdown-form>
                            <b-dropdown-header>
                                Filter by Facilities
                            </b-dropdown-header>
                            <b-form-checkbox-group
                                v-model="filter.selectedFacilities"
                                :options="facilityOptions"
                                name="facility"
                                stacked
                                ></b-form-checkbox-group>
                        </b-dropdown-form>
                    </b-nav-item-dropdown>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>

<script>

import facilities from "@/assets/data/maps/facility-icons.json"

export default {
    name:"NavBar",
    data(){
        return {
            facilityOptions:[],
            location:"",
            filter:{
                selectedFacilities:[],
                locationSearch:"",
                },
                query:{},
        };
    },
    watch:{
        filter:{
            handler:function(filter){
                this.query.facilities=filter.selectedFacilities.length>0?filter.selectedFacilities.join(","):"";
                this.query.location = filter.locationSearch !== "" > 0 ? filter.locationSearch:"";

                this.$router.push({
                    path:'/',
                    query:this.query
                });
            },
            deep:true,
        },

    },
    created(){
        this.setFacilityOptions();
    },
    methods:{
        //set facility options for the filter
        setFacilityOptions(){
            Object.keys(facilities).forEach((facility) => {
                this.facilityOptions.push({
                    html:facility,
                    value:facility,
                });
            });
        },
    },
};
</script>

<style>
</style>