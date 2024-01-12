<template>
  <div class=" bg-white w-full lg:h-full xl:h-fit">
    <div class="basis-1/2 visible md:hidden">
      <img class="p-4 saturate-50 rounded-[1000px]" src="/images/General/Miguel.jpg" alt="miguel_portero" />
    </div>
    <div class="
            flex flex-col
            drop-shadow-2xl
            sm:flex-row
          ">
      <div class="
              flex flex-col
              tracking-wider
              p-20
              my-auto
            ">
        <div class="md:text-left">
          <p class="text-blue font-semibold">Hey {{ $t("fullService.edvP") }} 👋 {{ $t("fullService.edv") }}</p>
          <h1 class="text-2xl font-semibold sm:text-5xl sm:py-4">Miguel Portero</h1>
        </div>
        <div class="basis-1/2 md:text-2xl md:text-left">
          <div class="flex flex-row space-x-2 ">
            <h2 class="text-gray pb-5">FrontEnd</h2>
            <h2 class="text-black">{{ $t("home.miguel") }}</h2>
          </div>
          <h2 class="text-gray"><em>"{{ $t("home.partners") }}"</em></h2>
        </div>
      </div>
      <div class="basis-1/2 hidden md:block">
        <img class="saturate-50 rounded-bl-[1200px]" src="/images/General/Miguel.jpg" alt="miguel_portero" />
      </div>
    </div>
  </div>
</template>

