<template>
  <div class="base-layout">
    <HeaderBlock />
  </div>
</template>

<script lang="ts">
  import {defineComponent} from "vue";
  import HeaderBlock from "@/components/components/HeaderBlock/HeaderBlock.vue";

  export default defineComponent({
    components: {
      HeaderBlock
    }
  })
</script>

<style src="./BaseLayout.css"></style>