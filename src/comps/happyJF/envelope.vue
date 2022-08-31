<script setup lang="ts">
  // import heart from '@/assets/heart.png'

  let envelopeAnimation = $ref('bounceInLeft')

  const emit = defineEmits<{
    (e: 'openEnvelope', isOpen: boolean): void
  }>()

  const showMsg = () => {
    envelopeAnimation = 'bounceOutDown'
    setTimeout(() => emit('openEnvelope', true), 500)
  }
</script>
<template>
  <div
    :class="['envelope animated', envelopeAnimation]"
    font-900
    w-xs
    h-50
    mt-60
    ml-7
    md="w-lg h-xs mt-50 ml-33%"
    items-center
  >
    <img
      class="heart"
      src="https://cdn.jsdelivr.net/gh/vacrain/static/img/heart.png"
      w-10
      h-10
      mt-20
      md="mt-33 h-15 w-15"
      z-999
      @click="showMsg"
    />
    <div class="text">There's a letter for U !</div>
  </div>
</template>
