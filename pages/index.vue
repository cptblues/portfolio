<template>
  <section class="container font-display pt-16">

    <div class="flex flex-row">

      <div class="flex flex-col w-1/2 px-4 items-center">
        <div class="h-48 w-48">
          <img class="rounded-full" src="../assets/images/profil.jpg" alt="Kévin Poulet">
        </div>
        <div class="flex flex-col pl-8">
          <div class="text-2xl font-extrabold text-blue-600 self-center">Kévin Poulet</div>
          <div class="italic self-center">Développeur Web & Mobile</div>
        </div>
      </div>

      <div class="flex flex-col w-1/2 mt-6">
        <div class="flex justify-center">
          <ul class='flex cursor-pointer'>
            <li class='mx-2 py-1 px-4 hover:bg-gray-200 rounded-lg'>Présentation</li>
            <li class='mx-2 py-1 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-500'>Publications</li>
            <li class='mx-2 py-1 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-500'>WIP</li>
          </ul>
        </div>
        <div class="flex flex-col justify-center mt-6">
          <p>
            Je m'appelle Kévin Poulet et je suis développeur d'applications Web & Mobile (Angular / Ionic / .Net Core / Laravel).
          </p>
          <p>
            Je suis actuellement en poste chez Inside Group où je travail des projets divers et variés.
          </p>
          </div>
      </div>

    </div>

  </section>
</template>