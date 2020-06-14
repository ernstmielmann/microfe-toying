<template>
  <div>
    <p>Vue App</p>
    <ul>
      <li v-for="(msg) in msgs" v-bind:key="msg.id">{{msg.msg}} {{msg.id}}</li>
    </ul>
  </div>
</template>

<script lang="js">
import Vue from 'vue';
console.log("vue app mounted");

export default Vue.extend({
  data: function() {
    return {
      msgs: []
    };
  },
  created: function() {
    document.addEventListener("pass-message", this.addMsg);
  },
  methods: {
    addMsg: function(e) {
      this.msgs = [...this.msgs, e.detail];
    }
  }
});
</script>
