<template>
  <div class="col-span-6 sm:col-span-4">
    <label for="total" class="block text-sm font-medium text-gray-700"
      >Total</label
    >
    <input
      type="text"
      name="total"
      id="total"
      :value="getSum"
      class="
        mt-1
        focus:ring-indigo-500
        focus:border-indigo-500
        block
        w-full
        shadow-sm
        sm:text-sm
        border-gray-300
        rounded-md
      "
      disabled
    />
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

// store
import store from "@/store/index";

@Options({
  components: {},
})
export default class Total extends Vue {
  get getSum() {
    return store.getters.getCount;
  }
}
</script>
