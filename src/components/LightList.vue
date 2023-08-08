<script lang="ts" setup>
import { computed, ref } from "vue";
import { useLightsStore } from "@/stores/lightsStore.js";

const store = useLightsStore();
store.load();

const tab = ref(1);

const rooms = computed(() => {
  return store.rooms;
});
</script>

<template>
  <v-card>
    <h1>Lights</h1>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab v-for="room in rooms" :key="room.id" :value="room.id">
        <span class="tab-title">{{ room.name }}</span>
      </v-tab>
    </v-tabs>

    <v-window v-model="tab">
      <v-window-item v-for="room in rooms" :key="room.id" :value="room.id">
        <v-container fluid>
          <v-row justify="center">
            <v-col
              class="d-flex justify-center align-center"
              v-for="light in room.lights"
              :key="light.id"
              cols="12"
              md="4"
            >
              <h1>{{ light.name }}</h1>
            </v-col>
          </v-row>
        </v-container>
      </v-window-item>
    </v-window>
  </v-card>
</template>

<style scoped>
.tab-title {
  font-size: 2em !important;
}
</style>
