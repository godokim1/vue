
<template>
  <div class="well">
    <form class="form-horizontal" role="form">
      <h4>입력하는</h4>
      <div class="form-group" style="padding:14px;">
        <h3>텍스트 입력</h3>
        <input class="form-control" value="" v-model="textValue" v-on:keyup.enter="dataSaveEvent()" placeholder="텍스트 입력">
        <h3>이미지 입력</h3>
        <input class="form-control" value="" v-model="imgValue" v-on:keyup.enter="dataSaveEvent()" placeholder="이미지 입력">
      </div>
      <button type="button" @click="dataSaveEvent">글쓰기</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      textValue: null,
      imgValue: null,
    };
  },
  methods: {
    dataSaveEvent() {
      if (this.imgValue !== null) {
        localStorage.setItem('itemTextImgSrc', this.imgValue);
      }

      if (this.textValue !== null) {
        localStorage.setItem('itemText', this.textValue);
      }
      location.reload();
    },
  },
};
</script>
