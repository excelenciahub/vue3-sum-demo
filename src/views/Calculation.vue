<template>
  <div class="bg-gray-200">
    <div class="mt-10 sm:mt-0">
      <div class="md:grid md:grid-cols-12 md:gap-12">
        <Sum />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

// components
import Sum from "../components/Sum.vue";

@Options({
  components: {
    Sum,
  },
})
export default class Calculation extends Vue {}
</script>
