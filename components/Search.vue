<script setup>
  const breedId = ref("All")
  const urls = ref(["", "", ""])
  fetch(
    "https://api.thecatapi.com/v1/images/search?limit=3&breed_ids=beng&api_key=live_u7mZYK57LvI7CzqeCH3IGZygd3KvtNy5PtpmGux4bLDt0jp7fOez053NdPLiLGnk"
  )
    .then((res) => res.json())
    .then((data) => (urls.value = data.map((x) => x.url)))

  async function fetchData() {
    const breedUrl = breedId === "All" ? "" : "&breed_ids=" + breedId
    console.log(breedUrl)
    const fetchUrl =
      "https://api.thecatapi.com/v1/images/search?limit=3" +
      breedUrl +
      "&api_key=live_u7mZYK57LvI7CzqeCH3IGZygd3KvtNy5PtpmGux4bLDt0jp7fOez053NdPLiLGnk"

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => (urls.value = data.map((x) => x.url)))
  }

  fetchData()
  watch(breedId, fetchData)
</script>

<template>
  <SearchBar @response="(msg) => (breedId = msg)" />
  <div class="d-flex justify-space-evenly align-end my-10">
    <div v-for="targetUrl in urls" :key="targetUrl">
      <Card :url="targetUrl" />
    </div>
  </div>
</template>
