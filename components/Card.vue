<script setup>
  const isFavourited = ref(false)
  const props = defineProps({
    url: String
  })
</script>

<template>
  <v-card class="mx-auto" width="300px" elevation="4">
    <v-hover v-slot="{ isHovering, props }">
      <v-sheet
        elevation="1"
        :class="{ 'on-hover': isHovering }"
        v-bind="props"
        :style="{ opacity: isHovering ? 0.9 : 1 }"
      >
        <v-img width="300px" max-height="550px" :src="url || ''" />
      </v-sheet>
    </v-hover>
    <v-card-actions>
      <v-btn
        @click="isFavourited = !isFavourited"
        :color="isFavourited ? 'red' : 'black'"
        prepend-icon="mdi-heart"
        class="ml-auto"
      >
        Like
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
