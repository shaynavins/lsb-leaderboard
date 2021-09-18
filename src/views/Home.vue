<template>
  <div class="home">
    <h1 class="title has-text-centered mt-6">Legacy School House Leaderboard</h1>
    <div class="section">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <Leaderboard/>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-half">
              <article class="message is-success">
                <div class="message-body">
                  <p>Dimensions aims to be an event where students are allowed to express themselves and all their talents that vary from all ends of the spectrum.  </p>
                  <p>As we close curtains on Dimensions this year, we hope that we've provided each and every student with a platform to showcase their versatile skills.</p>
                  <p class="content">Congratulations to all the participants and winners for indulging in this experience, we hope you enjoyed it!</p>
                  <i>-Anannya Rajesh, Student Council President.</i>
                </div>
              </article>
              <Updates/>
            </div>
          </div>
          <h3 class="subtitle-2 has-text-centered">Built by <a href="https://nikhilhenry.github.io">Nikhil Henry</a>, from the President's Office.</h3>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Leaderboard from '@/components/LeaderBoard'
import Updates from '@/components/Updates'
export default {
  name: 'Home',
  components: {
    Leaderboard,
    Updates
  }
}
</script>

<style lang="scss" scoped>
.section{
  padding-top:1.5em;
}
</style>
