<template>
  <div class="w-screen h-screen px-0 sm:px-16 xl:h-fit">
    <div class="container mx-auto">
    <div class="
            flex flex-col
            drop-shadow-2xl
            sm:flex-row
          ">
      <div class="
              flex flex-col
              tracking-wider
              p-8
              sm:px-0
              sm:p-16
              sm:p-0
              sm:py-20 sm:pr-20
              sm:my-auto
            ">
        <div>
          <p class="text-blue font-semibold">Hey {{ $t("fullService.edvP") }} 👋 {{ $t("fullService.edv") }}</p>
          <h1 class="text-3xl font-semibold sm:text-4xl py-4">Miguel Portero</h1>
        </div>
        <div class="basis-1/2 sm:text-2xl md:text-left">
          <div class="flex flex-row space-x-2 ">
            <h2 class="text-lg sm:text-xl font-medium text-gray pb-5">FrontEnd</h2>
            <h2 class="text-lg sm:text-xl font-medium text-black">{{ $t("home.miguel") }}</h2>
          </div>
          <h2 class="text-gray sm:text-xl"><em>"{{ $t("home.partners") }}"</em></h2>
        </div>
      </div>
      <div class="w-screen sm:basis-1/2">
        <img class="saturate-50 hidden sm:block rounded-bl-[1200px]" src="/images/General/Miguel.jpg" alt="miguel_portero" />
        <img class="saturate-50 visible sm:hidden block rounded-tl-[250px]" src="/images/General/Miguel.jpg" alt="miguel_portero" />
      </div>
    </div>
  </div>
</div>
</template>
