<template>
    <div id="whoi" class="bg-light_blue px-6 sm:px-16">
        <div class="container m-auto">
            <div class="flex flex-col lg:flex-row justify-between py-10 lg:py-32">
                <div class="order-last lg:order-none lg:py-0 md:w-2/3 lg:w-1/3 m-auto lg:mx-0">
                    <img class="w-full h-auto drop-shadow-2xl" src="/images/General/pc.jpg" alt="pc1" />
                </div>
                <div class="lg:w-2/4">
                    <h1 class="
                        text-blue
                        text-center
                        pb-10
                        font-bold
                        text-3xl
                        sm:text-left
                        sm:text-5xl
                        ">
                        {{ $t("impressum.streitschlichtung5") }} <br>
                    </h1>
                    <p class="pb-4 text-lg tracking-wide">{{ $t("impressum.haftungInhalte") }}</p>
                    <p class="pb-4 text-lg tracking-wide">{{ $t("impressum.haftungInhalte2") }}</p>
                    <p class="text-lg tracking-wide">{{ $t("impressum.haftungInhalte3") }}</p>
                </div>
            </div>
        </div>
    </div>
</template>
