<template>
  <div class="w-full h-full bg-mst_construction">
    <div
      class="grid w-full h-full mx-auto overflow-hidden xl:grid-cols-2 xl:w-fit"
    >
      <div class="w-fit h-fit py-10 mx-auto my-auto">
        <img
          src="/images/General/time.jpg"
          class="w-96 xl:w-[500px] 2xl:w-[560px]"
        />
      </div>
      <div class="w-full h-fit mx-auto my-auto pt-10 pb-20">
        <h1
          class="
            mb-5
            text-xl
            tracking-tight
            font-extrabold
            text-center
            mx-auto
            dark:text-white
            md:text-4xl md:px-10
            text-mst_white
          "
        >
          {{ $t("underConstruction.coomingSoon") }}
        </h1>
        <p class="font-light text-mst_white text-center ml-6 sm:text-xl">
          {{ $t("underConstruction.working") }}
        </p>
      </div>
    </div>
  </div>
</template>

