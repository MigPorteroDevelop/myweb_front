<template>
  <div class="px-0 sm:px-16">
    <div class="container mx-auto">
      <div class="
            flex flex-col
            drop-shadow-2xl
            lg:flex-row
            py-10
            lg:py-28
          ">
        <div class="
            flex flex-col
            tracking-wider
            p-8
            sm:basis-1/2
            sm:px-0
            sm:p-16
            lg:py-0 lg:pr-96
            lg:flex-1
            relative
          ">
          <div>
            <p class="text-blue font-semibold">Hey {{ $t("fullService.edvP") }} 👋 {{ $t("fullService.edv") }}</p>
            <h1 class="text-2xl sm:text-3xl font-semibold md:text-4xl py-4">Miguel Portero</h1>
          </div>
          <div class="md:text-left">
            <div class="flex flex-row space-x-2 ">
              <h2 class="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-gray pb-5">FrontEnd</h2>
              <h2 class="text-md sm:text-lg md:text-xl lg:text-2xl font-medium text-black">{{ $t("home.miguel") }}</h2>
            </div>
            <h2 class="text-gray text-md sm:text-lg md:text-xl"><em>"{{ $t("home.partners") }}"</em></h2>
          </div>
        </div>
        <div class="flex-1 flex justify-end m-auto lg:mr-0 pb-32 pt-10 md:py-0 w-64 h-64 md:w-96 md:h-96 xl:absolute xl:bottom-0 xl:right-0">
          <img class="saturate-50 hidden lg:block rounded-tl-[1200px]" src="/images/General/Miguel.jpg"
            alt="miguel_portero" />
          <img class="saturate-50 visible lg:hidden block rounded-full lg:rounded-none lg:rounded-tl-[1200px]"
            src="/images/General/Miguel.jpg" alt="miguel_portero" />
        </div>
      </div>
    </div>
  </div>
</template>
