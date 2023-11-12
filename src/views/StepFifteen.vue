<script setup lang="ts">
import JSConfetti from 'js-confetti'

const confetti = new JSConfetti()

function showConfetti() {
  confetti.addConfetti()
}

showConfetti()
</script>

<template>
  <h1 @click="showConfetti" class="heading">🎉 Congratulations!</h1>
  <div style="margin-top: 80px">Next:</div>
  <ul>
    <li>
      Set up a real Vue project on your machine by following the
      <a href="https://vuejs.org/guide/quick-start.html">Quick Start</a>.
    </li>
    <li>
      Go through the <a href="https://vuejs.org/guide/essentials/application.html">Main Guide</a>,
      which covers all the topics we learned so far in greater details, and much more.
    </li>
    <li>
      Check out some more practical <a href="https://vuejs.org/examples/#hello-world">Examples</a>.
    </li>
  </ul>
</template>

<style scoped>
.heading {
  text-align: center;
  cursor: pointer;
  margin-top: 3em;
}
</style>
