<template>
  <section>
    <h2>{{ title }}</h2>
    <div>
      <textarea v-model="raw" cols="50" rows="10" />
    </div>
    <div>
      <button @click="convertLogos">
        変換
      </button>
      <p>↓に回文が表示されます</p>
    </div>
    <div>
      <textarea v-model="palindorome" cols="50" rows="10" readonly />
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      title: "Let's Palindrome!",
      raw: 'とほかみえみため',
      palindorome: ''
    }
  },
  methods: {
    convertLogos () {
      const text = this.raw.replace(/\r\n|\r/g, '\n')
      const lines = text.split('\n')
      this.palindorome = ''
      lines.forEach((element) => {
        element += element.split('').reverse().join('')
        this.palindorome += element + '\n'
      })
    }
  }
}

</script>
