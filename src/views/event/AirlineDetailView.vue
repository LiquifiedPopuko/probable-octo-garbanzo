<script setup lang="ts">
import type { AirlineItem } from '@/type'
import type { PropType } from 'vue';
defineProps({
    airline: {
        type: Object as PropType<AirlineItem>,
        require: true
    }
})
</script>

<template>
    <p>Name: {{ airline?.AirlineName }}</p>
    <p>Email: {{ airline?.email }}</p>
    <p>Address: {{ airline?.address }}</p>
</template>