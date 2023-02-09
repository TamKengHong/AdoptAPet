<script setup>
  const images = ref([""])

  function groupBy(arr, n) {
    let group = []
    for (let i = 0; i < arr.length / n; i++) {
      group.push(arr.slice(i * n, (i + 1) * n))
    }
    return group
  }

  fetch(
    "https://api.thecatapi.com/v1/images/search?limit=45&api_key=live_u7mZYK57LvI7CzqeCH3IGZygd3KvtNy5PtpmGux4bLDt0jp7fOez053NdPLiLGnk"
  )
    .then((res) => res.json())
    .then((data) => (images.value = groupBy(data, 3)))
</script>

<template>
  <v-sheet
    v-if="images.length == 1"
    height="370px"
    class="d-flex align-center justify-center"
    style="background: #fffef6"
  >
    <v-progress-circular indeterminate class="mr-2" /> Loading cat images...
  </v-sheet>
  <v-carousel v-else height="360px" width="100%" class="mt-5">
    <v-carousel-item :key="group" v-for="group in images" eager>
      <v-sheet class="d-flex justify-space-evenly" style="background: #fffef6">
        <img
          :key="single"
          v-for="single in group"
          :src="single.url"
          width="300"
          height="300"
          eager
        />
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>
