<script setup>
  const emit = defineEmits(["response"])
  const defaultChoice = { id: "", name: "All", description: "All cat breeds!" }
  const breeds = ref([defaultChoice])
  const selection = ref(defaultChoice)
  fetch("https://api.thecatapi.com/v1/breeds")
    .then((res) => res.json())
    .then((data) => (breeds.value = [defaultChoice, ...data]))

  watch(selection, emit("response", selection.breedId))
</script>

<template>
  <v-card
    min-height="100px"
    color="grey-lighten-3"
    width="600px"
    class="mx-auto mt-8"
    elevation="3"
  >
    <v-autocomplete
      v-if="breeds.length > 1"
      label="Search Breed"
      :items="breeds"
      item-title="name"
      variant="outlined"
      class="mx-5 mt-3"
      v-model="selection"
      return-object
      prepend-icon="mdi-magnify"
    />
    <v-card-text color="grey-lighten-2" class="text-h6 mt-n4">
      Description:
      <br />
      <p class="text-body-1 mt-2">
        {{ selection.description }}
      </p>
    </v-card-text>
  </v-card>
</template>
