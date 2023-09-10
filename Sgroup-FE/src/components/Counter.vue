<template>
  <div class="flex justify-center text-3xl">
    <button class="border-solid px-3 text-yellow-500" @click="changeNumber(true)">+</button>
    <span class="text-red-500 rounded-md bg-green-600 p-5">{{ counterStore.count }}</span>
    <button class="border-solid px-3 text-purple-500" @click="changeNumber()">-</button>
  </div>
</template>

<script>
import { useCounterStore } from '@/store/index'
export default {
    setup() {
      

        const counterStore = useCounterStore()

        const changeNumber = (isPlus) => {
            isPlus ? counterStore.increment() : counterStore.decrement()
            counterStore.$reset
        }
        return {
            counterStore,
            changeNumber
        }
    }
}
</script>