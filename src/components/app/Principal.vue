<template>
  <div class="px-0 sm:px-16">
    <div class="container mx-auto">
      <div class="
            flex flex-col
            drop-shadow-2xl
            sm:basis-1/2
            md:flex-row
          ">
        <div class="
              flex flex-col
              tracking-wider
              p-8
              sm:px-0
              sm:p-16
              sm:py-20 sm:pr-20
              md:flex-1
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
        <div class="flex-1 flex justify-end m-auto pt-12 pb-32 md:h-full">
          <img class="saturate-50 hidden lg:block rounded-bl-[1200px] h-full" src="/images/General/Miguel.jpg"
            alt="miguel_portero" />
          <img class="saturate-50 visible lg:hidden block w-72 h-72 rounded-full md:rounded-none md:rounded-tl-[200px] h-full"
            src="/images/General/Miguel.jpg" alt="miguel_portero" />
        </div>
      </div>
    </div>
  </div>
</template>
