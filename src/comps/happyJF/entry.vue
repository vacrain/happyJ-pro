<script setup lang="ts">
  import heart from '@/assets/heart.png'

  let msgAnimation = $ref('bounceInLeft')
  let msgShowFlag = $ref(false)

  const showMsg = () => {
    msgAnimation = 'bounceOutRight'
    msgShowFlag = true
  }
</script>
<template>
  <div :class="['envelope animated', msgAnimation]">
    <div class="triangle-down"></div>
    <img class="heart" :src="heart" @click="showMsg" />
    <div class="triangle-up"></div>
    <div class="text" text-center>There's a msg !</div>
  </div>
</template>
