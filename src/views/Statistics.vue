<template>
  <section class="section-fluid">
    <div class="card charts">
      <Tabs>
        <Tab :title="$t('statistics.charts.tabs.per_day')">
          <BarChart :chartdata="chartDataDay" :options="options" />
        </Tab>
        <Tab :title="$t('statistics.charts.tabs.per_week')">
          <BarChart :chartdata="chartDataWeek" :options="options" />
        </Tab>
        <Tab :title="$t('statistics.charts.tabs.per_month')">
          <BarChart :chartdata="chartDataMonth" :options="options" />
        </Tab>
        <Tab :title="$t('statistics.charts.tabs.per_year')">
          <BarChart :chartdata="chartDataYear" :options="options" />
        </Tab>
      </Tabs>
      <HorizontalBarChart :chartdata="horizontalBarData" :options="options" />
      <carousel per-page="6" class="carousel" navigationEnabled="true">
        <slide v-for="i in 30" :key="i">
          <div class="carousel-media">
            <img src="https://via.placeholder.com/150x100" alt="Placeholder" />
            <div class="carousel-media-text">
              <p>Book name</p>
              <p>Book author</p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
import Tab from '../components/Tab'
import Tabs from '../components/Tabs'
import BarChart from '../components/BarChart'
import HorizontalBarChart from '../components/HorizontalBarChart'
export default {
  name: 'Statistics',
  components: { HorizontalBarChart, BarChart, Tabs, Tab },
  data() {
    return {
      chartDataDay: {
        labels: ['10:00', '12:00', '2:00', '4:00', '6:00', '8:00'],
        datasets: [
          {
            label: 'Статистика',
            backgroundColor: 'green',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10]
          },
          {
            label: 'Не Статистика',
            backgroundColor: 'red',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [30, 10, 20, 40, 80, 0]
          }
        ]
      },
      chartDataWeek: {
        labels: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        datasets: [
          {
            label: 'Статистика',
            backgroundColor: 'green',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10, 20]
          },
          {
            label: 'Не Статистика',
            backgroundColor: 'red',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [30, 10, 20, 40, 80, 0, 10]
          }
        ]
      },
      chartDataMonth: {
        labels: ['1', '6', '13', '20', '27', '31'],
        datasets: [
          {
            label: 'Статистика',
            backgroundColor: 'green',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
          },
          {
            label: 'Не Статистика',
            backgroundColor: 'red',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [30, 10, 20, 40, 80, 0, 10, 30, 40, 60, 80, 90]
          }
        ]
      },
      chartDataYear: {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        datasets: [
          {
            label: 'Статистика',
            backgroundColor: 'green',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
          },
          {
            label: 'Не Статистика',
            backgroundColor: 'red',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            //Data to be represented on y-axis
            data: [30, 10, 20, 40, 80, 0, 10, 30, 40, 60, 80, 90]
          }
        ]
      },
      horizontalBarData: {
        datasets: [
          {
            label: 'First person',
            backgroundColor: 'lightgreen',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [374]
          },
          {
            label: 'Second person',
            backgroundColor: 'aqua',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [280]
          },
          {
            label: 'Third person',
            backgroundColor: 'blue',
            pointBackgroundColor: 'white',
            borderWidth: 1,
            pointBorderColor: '#249EBF',
            data: [270]
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              },
              gridLines: {
                display: true
              }
            }
          ],
          xAxes: [
            {
              gridLines: {
                display: false
              }
            }
          ]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  }
}
</script>

<style lang="scss">
.charts {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
}
.carousel {
  width: 90%;
  margin: 0 auto;
  &-media {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 100px;
      height: 150px;
    }
    &-text {
      p {
        color: black;
        font-weight: bold;
      }
    }
  }
}
</style>
