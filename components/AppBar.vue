<template>
  <v-app-bar color="amber-lighten-2" :elevation="2">
    <v-app-bar-nav-icon prepend-icon="md-paw" to="/" width="165">
      🐾Adopt-A-Pet
    </v-app-bar-nav-icon>
    <template v-slot:append>
      <v-btn to="/search" icon="mdi-magnify"></v-btn>
      <v-btn to="/favourites" icon="mdi-heart"></v-btn>
    </template>
  </v-app-bar>
</template>
