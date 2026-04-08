<script lang="ts">
import { extend } from "@tresjs/core";
import {
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
} from "three";

extend({
  AmbientLight,
  BoxGeometry,
  DirectionalLight,
  Group,
  Mesh,
  MeshStandardMaterial,
  PerspectiveCamera,
});
</script>

<script setup lang="ts">
import { TresCanvas } from "@tresjs/core";
import {
  TresAmbientLight,
  TresBoxGeometry,
  TresDirectionalLight,
  TresGroup,
  TresMesh,
  TresMeshStandardMaterial,
  TresPerspectiveCamera,
} from "./tresElements.ts";
</script>

<template>
  <TresCanvas clear-color="#ffffff00" :dpr="[1, 2]" :window-size="false">
    <component :is="TresPerspectiveCamera" :position="[0, 0, 4.5]" :fov="42" />
    <component :is="TresAmbientLight" :intensity="1.5" />
    <component :is="TresDirectionalLight" :position="[3, 3, 4]" :intensity="2.2" />

    <component :is="TresGroup" :rotation="[-0.45, 0.45, 0.12]">
      <component :is="TresMesh">
        <component :is="TresBoxGeometry" :args="[1.7, 1.7, 1.7]" />
        <component
          :is="TresMeshStandardMaterial"
          color="#41b883"
          :metalness="0.15"
          :roughness="0.2"
        />
      </component>

      <component :is="TresMesh" :scale="1.08">
        <component :is="TresBoxGeometry" :args="[1.7, 1.7, 1.7]" />
        <component
          :is="TresMeshStandardMaterial"
          color="#0f172a"
          wireframe
          transparent
          :opacity="0.35"
        />
      </component>
    </component>
  </TresCanvas>
</template>
