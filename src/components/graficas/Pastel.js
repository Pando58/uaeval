import { Doughnut, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins;

export default {
  name: 'Pastel',
  extends: Doughnut,
  mixins: [reactiveProp],
  mounted () {
    this.renderChart(this.chartData);
  }
}