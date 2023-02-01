<script setup>
  // let images = fetch(
  //   "https://api.thecatapi.com/v1/images/search?limit=10"
  // ).then((res) => (images = res.json()))
  // console.log(images)
  const a = ref(0)
</script>

<template>
  <v-carousel width="100%">
    <v-carousel-item :key="i" v-for="i in 5">
      <v-layout row>
        <v-card :key="j" v-for="j in 3">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/17238a28-00d3-46a8-81ce-d0cd141b2d7a/dcieyl5-86f3a8f1-d433-4b76-9788-e1f1dd395cbb.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzE3MjM4YTI4LTAwZDMtNDZhOC04MWNlLWQwY2QxNDFiMmQ3YVwvZGNpZXlsNS04NmYzYThmMS1kNDMzLTRiNzYtOTc4OC1lMWYxZGQzOTVjYmIuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.XN5If4ZovqFaGqkc3l716A3KnBK4bt8FuqEtBA3Z3FA"
            alt=""
          />
        </v-card>
      </v-layout>
    </v-carousel-item>
  </v-carousel>
</template>
