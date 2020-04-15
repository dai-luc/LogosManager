<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div class="text-center">
        <palindrome />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
import palindrome from '~/components/palindrome.vue'

export default {
  components: {
    palindrome
  }
}
</script>
