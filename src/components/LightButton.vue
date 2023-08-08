<script setup lang="ts">
import type { PropType } from "vue";
import { useLightsStore } from "@/stores/lightsStore.js";
import { Light } from "@/models/hue.models";

const props = defineProps({
  light: { required: true, type: Object as PropType<Light> },
});

const store = useLightsStore();

const toggleLightState = (light: Light) => {
  // store.toggleLightState(light)
  console.log("clickd!!!!");
};
</script>

<template>
  <div class="switch-holder">
    <div class="switch-label">
      <span
        class="text-h6"
        style="
          width: 150px;
          display: inline-block;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        "
        ><v-icon
          icon="fas fa-lightbulb"
          class="mr-2"
          :style="{ color: light.color }"
        />{{ light.name }}</span
      >
    </div>
    <div class="switch-toggle">
      <input
        type="checkbox"
        @click="toggleLightState(light)"
        :id="'light-' + light.id"
        v-model="light.on"
        :style="{ 'background-color': light.color }"
      />
      <label :for="'light-' + light.id"></label>
    </div>
  </div>
</template>

<style>
@import "../assets/switch.css";
</style>
