<script setup>
import { computed, ref } from 'vue'

const tab = ref('one')
const count = ref(0)
const cars = ref([])
const dialog = ref(false)

const safeCount = computed(() => Math.min(10, Math.max(0, Number(count.value) || 0)))

function syncCars() {
  count.value = safeCount.value
  cars.value = Array.from({ length: safeCount.value }, (_, index) => cars.value[index] ?? '')
}

function simulate() {
  if (cars.value.length) dialog.value = true
}
</script>

<template>
  <main>
    <div class="site-width intro">
      In the tabs below, demonstrative implementations are found using pure JS, Angular, Express, Laravel,
      MongoDB, MySQL and MSSQL, depending on the respective case. You can check the code of these
      demonstrations in my private repository on GitHub, which I can explain at an agreed appointment.
    </div>

    <div class="demo-tabs">
      <v-tabs v-model="tab" class="site-width" color="indigo">
        <v-tab value="one" prepend-icon="mdi-language-javascript">Car Data</v-tab>
        <v-tab value="two" prepend-icon="mdi-language-javascript">Car Data 2</v-tab>
      </v-tabs>
    </div>

    <v-window v-model="tab" class="site-width">
      <v-window-item v-for="item in ['one', 'two']" :key="item" :value="item">
        <v-card class="demo-card" elevation="2">
          <h1 class="demo-title">Cars Data Demo using "Vanilla" (Javascript pure)</h1>
          <p class="demo-description">
            The code on this demo was developed with Pure Javascript. Dynamically, as many inputs are generated
            as cars are indicated in the numerical input. Then, the data of each car is added in each input,
            separated by comma. Then when you click on the button Simulate create cars, instances of the car object
            are created with their respective properties and a modal is shown with the car list taking the attributes
            of each car object instantiated
          </p>
          <v-divider class="mb-2" />
          <div class="counter-block">
            <v-text-field v-model.number="count" type="number" min="0" max="10" label="Cars number" variant="underlined" hide-details @update:model-value="syncCars" />
            <div class="counter-meta">
              <strong>Enter the number of cars you want to create on numeric input above</strong>
              <span>count: {{ safeCount }} - max: 10</span>
            </div>
            <div class="car-fields">
              <v-text-field v-for="(_, index) in cars" :key="index" v-model="cars[index]" :label="`Car ${index + 1}: brand, model, year`" variant="underlined" density="compact" />
              <v-btn v-if="cars.length" color="indigo" @click="simulate">Simulate create cars</v-btn>
            </div>
          </div>
        </v-card>
      </v-window-item>
    </v-window>

    <v-dialog v-model="dialog" max-width="560">
      <v-card title="Cars list">
        <v-list :items="cars.map((car, index) => `Car ${index + 1}: ${car || 'No data'}`)" />
        <v-card-actions><v-spacer /><v-btn color="indigo" @click="dialog = false">Close</v-btn></v-card-actions>
      </v-card>
    </v-dialog>
  </main>
</template>
