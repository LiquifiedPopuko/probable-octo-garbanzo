<script setup lang="ts">
import type { PassengerItem } from '@/type'
import type { PropType } from 'vue';
defineProps({
    passenger: {
        type: Object as PropType<PassengerItem>,
        require: true
    }
})
</script>

<template>
    <div v-if="passenger">
        <p>Name: {{ passenger?.first_name }} {{ passenger?.last_name }}</p>
        <p>Email: {{ passenger?.email }}</p>
        <p>Gender: {{ passenger?.gender }}</p>
        <p>Destination: {{ passenger?.Destination }}</p>
        <p>Travel Date: {{ passenger?.travelDate }}</p>
    </div>
</template>