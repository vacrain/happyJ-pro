<script setup lang="ts">
  import Envelope from './envelope.vue'
  import Msg from './msg.vue'

  let msgShowFlag = $ref(false)

  const showMsg = (isOpen: boolean) => {
    msgShowFlag = isOpen
  }
</script>
<template>
  <Envelope @openEnvelope="showMsg" />
  <Msg v-if="msgShowFlag" />
</template>
