
<template>
  <div class="well" v-if="textImgSrc || storageText">
    <form class="form-horizontal" role="form">
      <h4>이미지 텍스트 타입</h4>
      <!-- 이미지 없으면 비노 -->
      <div class="img-box" v-if="textImgSrc">
        <img v-bind:src="textImgSrc" alt="">
      </div>
      <!-- 텍스트 출력영역 텍스트가 없으면 비노출 -->
      <div class="form-group" style="padding:14px;" v-if="storageText">
        <div v-once>{{storageText}}</div>
      </div>
      <!-- 댓글 영역 -->
      <div class="reply-area">
        <div class="reply-box" v-if="replyDepth01">
          <p>{{replyDepth01}}</p>
        </div>
        <div class="reply-form">
          <textarea name="" id="" cols="5" rows="1" v-model="replyDepth01Input" style="width:100%;height:50px"></textarea>
        </div>
      </div>
      <div class="share-area">
        좋아요 : {{like}}

        <div class="fb-share-button" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count" data-size="small" data-mobile-iframe="false"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse">공유하기</a></div>
      </div>
      <div class="btn-area">
        <button type="button" @click="likeEvent">좋아요</button>
        <button type="button" @click="replyDepth01Event">댓글쓰기</button>
      </div>
    </form>
  </div>
</template>


<script>
  export default {
    created() {
      if (this.like === null || this.like === 'NaN') {
        this.like = localStorage.setItem('itemlike', 0);
      }
    },
    data() {
      return {
        textImgSrc: localStorage.getItem('itemTextImgSrc'),
        storageText: localStorage.getItem('itemText'),
        replyDepth01: localStorage.getItem('itemReplyDepth01'),
        like: localStorage.getItem('itemlike'),
        replyDepth01Input: null,
      };
    },
    methods: {
      replyDepth01Event() {
        // console.log(event.target);
        localStorage.setItem('itemReplyDepth01', this.replyDepth01Input);
        return false;
      },
      likeEvent() {
        if (this.like !== null) {
          localStorage.setItem('itemlike', parseInt(this.like, 10) + 1);
          this.like = localStorage.getItem('itemlike');
        }
        // localStorage.setItem('itemReplyDepth01', this.replyDepth01Input);
      },
    },
  };
</script>
