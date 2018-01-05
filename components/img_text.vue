
<template>
  <div class="well">
    <form class="form-horizontal" role="form">
      <h4>What's New</h4>
      <div class="form-group" style="padding:14px;">
        <textarea class="form-control" placeholder="Update your status" v-model="msg" v-on:keyup.enter="submit"></textarea>
      </div>
      <button type="button" @click="testing1">글쓰기</button>
    </form>
  </div>
</template>


<script>
// import Test from "@/components/test";

export default {
  // name: 'default_text',
  created() {
    console.log(localStorage);
    localStorage.test = 1;
  },
  data() {
    return {
      msg: localStorage.item,
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
