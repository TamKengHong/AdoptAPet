<template>
  <v-sheet
    min-height="1000px"
    max-height="1000px"
    min-width="1000px"
    max-width="1000px"
    class="mx-auto my-6"
  >
    <v-row>
      <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
        <Card
          url="https://www.oreilly.com/api/v2/epubs/9781600581366/files/images/f0016-01.jpg"
        />
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular
              indeterminate
              color="grey-lighten-5"
            ></v-progress-circular>
          </v-row>
        </template>
      </v-col>
    </v-row>
  </v-sheet>
</template>
