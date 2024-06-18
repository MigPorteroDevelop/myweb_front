<template>
  <div id="whoi" class="bg-light_blue">
    <div class="container m-auto">
      <div class="flex flex-col justify-between py-20">
        <div class="lg:w-2/3 m-auto">
          <h1 class="
           text-blue
            text-center
            pb-10
            font-bold
            text-3xl
            sm:text-5xl
            ">
            {{ $t("impressum.streitschlichtung5") }} <br>
          </h1>
          <p class="pb-4 text-lg tracking-wide">{{ $t("impressum.haftungInhalte") }}</p>
          <p class="pb-4 text-lg tracking-wide">{{ $t("impressum.haftungInhalte2") }}</p>
          <p class="text-lg tracking-wide">{{ $t("impressum.haftungInhalte3") }}</p>
        </div>

        <!--
                <div class="order-last lg:order-none w-fit h-96 mx-auto my-12 ">
                    <img class="w-full h-full"  src="/images/General/pc.jpg" alt="pc1" />
                </div>
                -->
      </div>
    </div>
  </div>
</template>
