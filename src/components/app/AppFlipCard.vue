<script setup>
defineProps(["title", "paragraph", "img"]);
</script>

<template>
  <div class="flip-card bg-transparent w-full h-[340px] md:w-[320px] md:h-[280px] 2xl:w-[380px] 2xl:h-[340px]">
    <div
      class="
        flip-card-inner
        relative
        w-full
        h-full
        text-center
        duration-[1300ms]
      "
    >
      <div
        class="
          flip-card-front
          absolute
          w-full h-full md:w-[320px] md:h-[280px] 2xl:w-[380px] 2xl:h-[340px]
        "
      >
        <img
          :src="img"
          class="w-full h-full"
        />
      </div>
      <div
        class="
          flip-card-back
          absolute
          w-full
          h-full
          p-2
          text-mst_white
          border-4
          border-mst_bg
          md:w-full
        "
      >
        <h1 class="text-lg md:text-xl text-center font-semibold mt-6 mb-5">
          {{ $t(title) }}
        </h1>
        <p class="text-base align-text-middle md:text-lg">
          {{ $t(paragraph) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style setup>
.flip-card {
  perspective: 1000px;
}
.flip-card-inner {
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front,
.flip-card-back {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.flip-card-back {
  transform: rotateY(180deg);
}
</style>