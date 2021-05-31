<template>
  <div>
    <div class="header">
        <span v-if="open" @click="open = !open">&#x25B2; Collapse preview</span>
        <span v-if="!open" @click="open = !open">&#x25B2; Expand preview</span>
    </div>
    <slot v-if="open">
     <!-- Vue.js specific element. Shows the content from the CollapsibleSection in RobotBuilder -->
    </slot>
  </div>
</template>
<script>
export default {
  name: 'CollapsibleSection',
  data() {
    return { open: true };
  },
};
</script>
<style scoped>
    .header{
    background-color: #bbb;
    padding: 2px;
    cursor: pointer;
    }
</style>
