<template>
  <v-flex class="pr-3 pb-3" xs12 md6 lg4>
    <v-card class="blue darken-3 white--text">
      <v-card-title class="headline">
        <strong>
          {{ stock.name }}
          <small>(Preço: {{ stock.price | currency }}) | Qtde: {{ stock.quantify }}</small>
        </strong>
      </v-card-title>
    </v-card>
    <v-card>
      <v-container fill-height>
        <v-text-field label="Quantidade" type="number" v-model.number="quantify"></v-text-field>
        <v-btn class="blue darken-3 white--text" :disabled="insufficientQuantify || quantify <= 0 || !Number.isInteger(quantify)" @click="sellStock">{{ insufficientQuantify ? 'Insuficiente' : 'Vender' }}</v-btn>
      </v-container>
    </v-card>
  </v-flex>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: ['stock'],
  data () {
    return {
      quantify: 0
    }
  },
  computed: {
    insufficientQuantify () {
      return this.quantify > this.stock.quantify
    }
  },
  methods: {
    ...mapActions({ sellStockAction: 'sellStock' }),
    sellStock () {
      const order = {
        stockId: this.stock.id,
        stockPrice: this.stock.price,
        quantify: this.quantify
      }
      this.sellStockAction(order)
      // this.$store.dispatch('sellStock', order)
      this.quantify = 0
    }
  }
}
</script>

<style>

</style>