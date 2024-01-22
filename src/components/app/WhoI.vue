<template>
    <div id="whoi" class="bg-light_blue px-16 w-full lg:h-full xl:h-fit">
        <div class="container mx-auto">
            <div class="flex flex-col md:flex-row justify-between py-32">
                <div class="md:w-2/4">
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
                <div class="py-0 pt-10 md:pt-0 2xl:pt-0 2xl:py-6 my-auto md:my-0 mx-auto md:mx-0 md:w-1/3">
                    <img src="/images/General/pc.jpg" alt="pc1" />
                </div>
            </div>
        </div>
    </div>
</template>