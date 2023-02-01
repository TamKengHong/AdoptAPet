<template>
  <v-app-bar app :elevation="1">
    <v-app-bar-nav-icon to="/" width="150">Adopt-A-Pet</v-app-bar-nav-icon>
    <template v-slot:append>
      <v-btn to="/search" icon="mdi-magnify"></v-btn>
      <v-btn to="/favourites" icon="mdi-heart"></v-btn>
    </template>
  </v-app-bar>
</template>
