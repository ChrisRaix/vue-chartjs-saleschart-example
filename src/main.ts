import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Chart from 'chart.js'
import Chroma from 'chroma-js'

Vue.config.productionTip=false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')

const canvas=document.getElementById("mychart") as HTMLCanvasElement;
const ctx=canvas.getContext('2d') as any;

const mychart=new Chart(ctx,{
	type: 'line',
	data: {
		datasets: [
			{
				label: '2018 Sales',
				borderColor: chroma('rgba(50, 115, 220, 0.5)').alpha(0,6),
				backgroundColor: chroma('rgba(50, 115, 220, 0.1)').alpha(0,6),
				data: [300,700,450,750,450]
			},
			{
				label: '2017 Sales',
				borderColor: 'rgba(255, 56, 96, 0.5)',
				backgroundColor: 'rgba(255, 56, 96, 0.1)',
				data: [600,550,750,250,700]
			}
		]
	},
	options: {
		scales: {
			xAxes: [{
				type: 'category',
				labels: ['Jan','Feb','Mar','Apr','May'],
			}]
		}
	}
});





