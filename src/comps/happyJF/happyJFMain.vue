<script setup lang="ts">
  import Envelope from './envelope.vue'
  import Letter from './letter.vue'

  let msgShowFlag = $ref(false)

  const showMsg = (isOpen: boolean) => {
    msgShowFlag = isOpen
  }
</script>
<template>
  <Envelope @openEnvelope="showMsg" />
  <Letter v-if="msgShowFlag" />
</template>
