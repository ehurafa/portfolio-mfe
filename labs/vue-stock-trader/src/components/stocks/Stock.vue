<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="green darken-3 white--text">
      <v-card-title class="headline">
        <strong>{{ stock.name }} <small>(Preço: {{ stock.price | currency }})</small></strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" 
        :error="insufficientFunds" v-model.number="quantify"></v-text-field>
        <v-btn class="green darken-3 white--text" :disabled="insufficientFunds || quantify <= 0 || !Number.isInteger(quantify)" @click="buyStock">{{ insufficientFunds ? 'Infuficiente' : 'Comprar' }}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: ['stock'],
  data () {
    return {
      quantify: 0
    }
  },
  computed: {
    funds () {
      return this.$store.getters.funds
    },
    insufficientFunds () {
      return this.quantify * this.stock.price > this.funds
    }
  },
  methods: {
    buyStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantify: this.quantify
      }
      console.log('order ', order)
      this.$store.dispatch('buyStock', order)
      this.quantify = 0
    }
  }
}
</script>

<style>

</style>