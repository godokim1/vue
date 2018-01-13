
<template>
  <div class="padding">
    <div class="full col-sm-9">

      <!-- content -->
      <div class="row">

        <!-- main col left -->
        <div class="col-sm-5">
          <!-- 글쓰기 폼 -->
          <default-text></default-text>
          <!-- 텍스트 이미지 폼 -->
          <text-img></text-img>
        </div>
      </div>
    </div>
  </div>
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
    // const itemTextImg = localStorage.itemTextImg;
    // if (itemTextImg === undefined) {
      // localStorage.itemTextImg = [{"text" : "테스트 텍스트", img : "https://tpc.googlesyndication.com/simgad/17721934142646718825", reply : []}];
    // }
    // console.log(JSON.parse(localStorage.item));
    // const item = JSON.parse(localStorage.getItem('item'));
    // const dd = JSON.parse(item);

    // console.log(item);

    // if (typeof item) {
      // let data = JSON.stringify({`json${}`})
      // localStorage.setItem('item', );
    // }
  },
  // data() {
  //   return {
  //     storageText: localStorage.item,
  //     msg: '',
  //   };
  // },
  // methods: {
  //   testing1() {
  //     localStorage.item = this.msg;
  //     return false;
  //   },
  // },
};
</script>
