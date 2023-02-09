<script setup>
  const urls = ref([""])
  fetch(
    "https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=beng&api_key=live_u7mZYK57LvI7CzqeCH3IGZygd3KvtNy5PtpmGux4bLDt0jp7fOez053NdPLiLGnk"
  )
    .then((res) => res.json())
    .then((data) => (urls.value = data.map((x) => x.url)))
</script>

<template>
  <SearchBar />
  <div class="d-flex justify-space-evenly align-end my-10">
    <div v-if="urls.length !== 1" v-for="targetUrl in urls" :key="targetUrl">
      <Card :url="targetUrl" />
    </div>
  </div>
</template>
