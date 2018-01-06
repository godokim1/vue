
<template>
  <default-text></default-text>
  <text-img></text-img>
</template>


<script>
import defaultText from '@/components/default_text';
import textImg from '@/components/text_img';

export default {
  components: {
    'default-text': defaultText,
    'text-img': textImg,
  },
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
