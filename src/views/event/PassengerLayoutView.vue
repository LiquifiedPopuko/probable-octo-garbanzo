<!-- eslint-disable vue/no-setup-props-destructure -->
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { type AirlineItem, type PassengerItem } from '@/type'
import PassengerService from '@/services/PassengerService';
const passenger = ref<PassengerItem | null> (null)
const airline = ref<AirlineItem | null> (null)
const props = defineProps({
    id: String,
    airlineId: String
})
PassengerService.getPassengerById(Number(props.id))
.then((response) => {
    passenger.value = response.data
}).catch(error => {
    console.log(error);
    if (error.response && error.response.status === 404) {
        router.push({ name: '404-resource', params: { resource: 'passenger'}})
    } else {
        router.push({ name: 'network-error'})
    }
})
PassengerService.getAirlineById(Number(props.airlineId))
.then((response) => {
    airline.value = response.data
}).catch(error => {
    console.log(error);
    if (error.response && error.response.status === 404) {
        router.push({ name: '404-resource', params: { resource: 'airline'}})
    } else {
        router.push({ name: 'network-error'})
    }
})
const router = useRouter()
</script>

<template>
    <div v-if="passenger && airline">
        <h1>{{ passenger?.first_name }} {{ passenger?.last_name }}</h1>
        <RouterLink :to="{name: 'passenger-detail', params: { id }}">
        Passenger Details            
        </RouterLink>|
        <RouterLink :to="{name: 'airline-detail', params: { airlineId}}">
        Airline Details            
        </RouterLink>
        <RouterView :passenger="passenger" :airline="airline"></RouterView>
    </div>
</template>