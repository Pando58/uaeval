import { Doughnut } from 'vue-chartjs'

export default {
  name: 'Pastel',
  extends: Doughnut,
  props: [
    'etiquetas',
    'datos',
    'titulo',
    'colores'
  ],
  mounted () {
    this.renderChart({
      labels: this.etiquetas,
      datasets: [{
        label: this.titulo,
        data: this.datos,
        backgroundColor: this.colores
      }]
    }, {responsive: true, maintainAspectRatio: false})
  }
}