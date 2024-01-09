<template>
  <div class="w-full h-full">
    <div class="h-full w-full relative">
      <img
        src="/images/General/streaming.jpg"
        class="
          w-full
          h-full
          object-cover
          absolute
          mix-blend-overlay
          object-left-bottom
          brightness-50
          blur-sm
          md:object-center
        "
      />
      <h1
        class="
          text-center
          font-extrabold
          text-4xl
          py-12
          md:text-5xl
          2xl:text-7xl
          text-mst_white
        "
      >
        STREAMING
      </h1>
      <div class="pb-12 2xl:py-12">
        <div
          class="
            border-4
            border-mst_construction
            w-full
            h-full
            drop-shadow-2xl
            m-auto
            md:w-[650px] md:h-full
          "
        >
          <ul class="list-none p-6 text-lg md:text-2xl md:p-12 text-mst_white">
            <li class="leading-normal tracking-wider mb-6">
              {{ $t("streaming.streamingView") }}
            </li>
            <li class="leading-normal tracking-wider mb-6">
              {{ $t("streaming.streamingView2") }}
            </li>
            <li class="leading-normal tracking-wider mb-6">
              {{ $t("streaming.streamingView3") }}
            </li>
            <li class="leading-normal tracking-wider mb-6">
              {{ $t("streaming.streamingView4") }}
            </li>
            <li class="leading-normal tracking-wider mb-6">
              {{ $t("streaming.streamingView5") }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

