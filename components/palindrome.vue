<template>
  <section>
    <h2>{{ title }}</h2>
    <div>
      <v-textarea
        v-model="raw"
        cols="50"
        outlined
        rows="7"
        row-height="100"
        clearable="true"
      />
      <v-btn color="secondary" @click="convertLogos">
        変換
      </v-btn>
      <v-btn class="clipcopy" :data-clipboard-text="MethodsText()" color="primary">
        コピー
      </v-btn>
      <p>↓に回文が表示されます</p>
    </div>
    <div>
      <v-textarea
        v-model="palindorome"
        cols="50"
        outlined
        rows="7"
        row-height="10"
        readonly
      />
    </div>
  </section>
</template>

<script>
import Clipboard from 'clipboard'
export default {
  data () {
    return {
      title: "Let's Palindrome!",
      raw: 'とほかみえみため',
      palindorome: '',
      clipBoard: null
    }
  },
  mounted () {
    // -- クリップボード設定
    this.clipBoard = new Clipboard('.clipcopy')
    this.clipBoard.on('success', function (e) {
      alert('クリップボードにコピーしました')
      e.clearSelection()
    })
    this.clipBoard.on('error', function (e) {
      alert('コピー失敗')
    })
    // -- クリップボード設定ここまで
  },
  methods: {
    MethodsText () {
      return this.palindorome
    },
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
