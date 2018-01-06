
<template>
  <div class="well">
    <form class="form-horizontal" role="form">
      <h4>What's New</h4>
      <div class="form-group" style="padding:14px;">
        <div v-once>{{storageText}}</div>
        <textarea class="form-control" placeholder="Update your status" v-model="msg" v-on:keyup.enter="submit"></textarea>
      </div>
      <button type="button" @click="testing1">글쓰기</button>
    </form>
  </div>
</template>


<script>
export default {
  created() {
    localStorage.test = 1;
  },
  data() {
    return {
      storageText: localStorage.item,
      msg: '',
    };
  },
  methods: {
    testing1() {
      localStorage.item = this.msg;
      return false;
    },
  },
};
</script>
