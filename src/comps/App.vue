<script setup lang="ts">
  import { computed, onMounted, ref } from 'vue'
  import dayjs from 'dayjs'

  import music from '@/assets/audio/cyskdsn.mp3'

  console.log('setup start------------------------------------------------')

  const autotypeRef = ref<HTMLElement>()
  const autotypeShow = false

  const dateMemory = dayjs('2018-7-5 3:1') // 我们的纪念日
  let now = dayjs()

  const dueDate = computed(now => {
    const dueMillisecond = now.diff(dateMemory)
    return {
      days: Math.floor(dueMillisecond / (24 * 3600 * 1000)),
      hours: Math.floor((dueMillisecond / (3600 * 1000)) % 24),
      minutes: Math.floor((dueMillisecond / (1000 * 60)) % 60),
      second: Math.floor((dueMillisecond / 1000) % 60)
    }
  })

  const printMsg = () => {
    const msg = autotypeRef.value?.innerHTML.replace(/(\s){2,}/g, '$1')

    let i = 0
  }

  console.log('setup end------------------------------------------------')

  const audio = ref<HTMLAudioElement>()

  onMounted(() => {
    printMsg()

    // 每秒获取一次当前时间
    setInterval(() => {
      now = dayjs()
    }, 1000)

    setTimeout(() => audio.value?.play(), 100)
  })
</script>

<template>
  <div className="App animated bounceInLeft">
    <div className="date">{date()}</div>
    <div v-show="autotypeShow" ref="autotypeRef">
      <h1 font-900>Yo～小寿星！！</h1>
      <p>生日快乐歌唱过了，来一首别的音乐，1,2,3,Music~</p>
      <p>当当！今天是我们宇宙超级无敌小可爱的生日啦～</p>
      <p>
        还记得上一个生日吗，那天早早赶到北京机场的我， 挥着闪着娟娟二字的手机，
        等了好久好久才终于接到你。不知道为啥每次这飞机都晚点！！
        不过还好每次小圈圈都安全着陆，也还算OK。
        随后相隔三个月的我们终于再一次拉上了小手手，坐上幸福的高铁去了天津...
      </p>
      <p>
        那天住的M²Hotel幕宿设计酒店​​​​大大的，看着电影《过年好》睡着的你软软的，一切都是那么安逸美好。
      </p>
      <p>
        时隔一年，我们又经历了许许多多，有过分歧，有过异议，但是大部分时候还是欢乐的，即便我们相隔万里。
      </p>
      <p>
        正如你说的，我们不管怎样最后都会好好的，每次都像是一只会预言的小天使一样。
      </p>
      <p>不过就是这样可爱懂事的你还是经常被我气到，甚至吵到要分手...</p>
      <p>我是不太善于哄人的，不过你有任何事我还是非常愿意陪你一起面对的。</p>
      <p>
        这可能就是因为我喜欢你吧，喜欢你的单纯可爱，喜欢你对美食的痴迷，喜欢你做事的认真，喜欢你对生活的热爱，喜欢你待人的真诚...
      </p>
      <p>
        说到待人，宝贝你总是遇到些奇奇怪怪的人呢，更有甚者不知道这世界上没有比你再好的人了，着实气人！！
      </p>
      <p>
        但是就是这世界上最好的女孩，也不知怎么被我骗到手了，嘻嘻嘻...（暗自高兴）
      </p>
      <p>这首《穿越时空的思念》放到这里也即将结束，但是我们的故事还将继续。</p>
      <p>
        不受时间空间所限，下辈子无论何时，下下辈子无论你在哪里，下下下辈子无论你投胎何物，我们再续前缘。
      </p>
      <p></p>
      <p>最后祝小扯生日快乐！！</p>
      <div text-right>
        <p>爱你的老公♥</p>
        <p>2019年12月20日</p>
      </div>
    </div>
    <audio ref="audio" :src="music"></audio>
  </div>
</template>

<style scoped></style>
