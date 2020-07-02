<template>
  <section class="section-fluid">
    <div class="card charts">
      <Tabs class="statistics-tabs">
        <Tab :title="$t('statistics.charts.tabs.per_day')">
          <BarChart :chartdata="statistics[0]" :options="options" />
        </Tab>
        <Tab :title="$t('statistics.charts.tabs.per_week')">
          <BarChart :chartdata="statistics[1]" :options="options" />
        </Tab>
        <Tab :title="$t('statistics.charts.tabs.per_month')">
          <BarChart :chartdata="statistics[2]" :options="options" />
        </Tab>
        <Tab :title="$t('statistics.charts.tabs.per_year')">
          <BarChart :chartdata="statistics[3]" :options="options" />
        </Tab>
      </Tabs>
      <HorizontalBarChart :chartdata="statistics[4]" :options="options" />
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
// import ApiService from '../services/ApiService'
export default {
  name: 'Statistics',
  components: { HorizontalBarChart, BarChart, Tabs, Tab },
  data() {
    return {
      statistics: [],
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
.statistics-tabs {
  padding-top: 0.5rem;
}
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
