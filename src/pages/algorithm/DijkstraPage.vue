<template>
  <div id="wrapper">
    <TitleComponent :title=title />
    <DijkstraComponent />
    <WeightGraphCanvas />
  </div>
</template>

<script>

import TitleComponent from '@/components/TitleComponent.vue';
import DijkstraComponent from '@/components/algorithm/DijkstraComponent.vue';
import WeightGraphCanvas from '@/canvas/graph/WeightGraphCanvas.vue';

export default {
  name: 'DijstraPage',
  components: {
    TitleComponent,
    DijkstraComponent,
    WeightGraphCanvas
  },  
  props: {
    title: String
  },
}
</script>