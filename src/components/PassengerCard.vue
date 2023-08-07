<template>
    <RouterLink class="passenger-link" :to="{ name: 'passenger-detail', params: {id: passenger?.id, airlineId: passenger?.airlineId}}">
      <div class="passenger-class">
        <div class="passenger-card">
          <h4>Name: {{ passenger?.first_name }} {{ passenger?.last_name }}</h4>
        </div>
      </div>
    </RouterLink>
    <!-- <div class="passenger-card">
      <span>@{{ event?.time }} on {{ event?.date }}</span>
      <h4>{{ event?.title }}</h4>
    </div> -->
  </template>
  
  <script setup lang="ts">
  import type { PassengerItem } from '@/type'
  import type { PropType } from 'vue'
  const props = defineProps({
    passenger: {
      type: Object as PropType<PassengerItem>,
      require: true
    }
  })
  </script>
  
  <style scoped>
  .passenger-card {
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
  }
  .passenger-card:hover {
    transform: scale(1.01);
    box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
  }
  
  .passenger-link {
    color: #2c3e50;
    text-decoration: none;
  }
  </style>
  