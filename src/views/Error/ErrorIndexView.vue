<template>
  <div class="w-full h-full bg-mst_error">
    <div
      class="grid w-full h-full mx-auto overflow-hidden xl:grid-cols-2 xl:w-fit"
    >
      <div class="w-fit h-full py-10 mx-auto">
        <img src="/images/General/error.jpg" />
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
            md:text-4xl
            md:px-10
            text-mst_white
          "
        >
          {{ $t("404.error") }}
        </h1>
        <div class="w-fit mx-auto">
          <router-link
            to="/"
            class="
              text-mst_white
              bg-gradient-to-br
              from-mst_error
              to-mst_white
              hover:bg-gradient-to-bl
              focus:ring-2 focus:outline-none focus:ring-mst_error
              font-medium
              rounded-lg
              text-md text-bold
              px-5
              py-2.5
              text-center
            "
            >{{ $t("404.errorB") }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

