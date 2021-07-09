<template>
  <div class="mt-5 md:mt-0 md:col-span-12 p-10">
    <div class="shadow overflow-hidden sm:rounded-md">
      <div class="px-4 py-5 bg-white sm:p-6">
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-6 sm:col-span-3">
            <label for="A" class="block text-sm font-medium text-gray-700"
              >A</label
            >
            <input
              type="number"
              name="A"
              v-model="a"
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
            />
          </div>

          <div class="col-span-6 sm:col-span-3">
            <label for="B" class="block text-sm font-medium text-gray-700"
              >B</label
            >
            <input
              type="number"
              name="B"
              id="B"
              v-model="b"
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
            />
          </div>
          <Total />
        </div>
        <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="button"
            @click="sum"
            class="
              inline-flex
              justify-center
              py-2
              px-4
              border border-transparent
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
            "
          >
            Click
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

// components
import Total from "./Total.vue";

// store
import store from "@/store/index";

@Options({
  components: {
    Total,
  },
})
export default class Sum extends Vue {
  public a = 0;
  public b = 0;

  public sum(): void {
    store.dispatch("updateCount", Number(this.a) + Number(this.b));
  }
}
</script>
