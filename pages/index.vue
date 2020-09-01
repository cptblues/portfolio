<template>
  <section class="w-full font-display border-t-2 border-blue-600 pt-16">

    <div class="flex flex-col md:flex-row">

      <div class="flex flex-col w-full md:w-1/3 px-4 items-center">
        <div class="h-48 w-48">
          <img class="rounded-full" src="../assets/images/profil.jpg" alt="Kévin Poulet">
        </div>
        <div class="flex flex-col">
          <div class="text-2xl font-extrabold text-blue-600 self-center">Kévin Poulet</div>
          <div class="italic self-center">Développeur Web & Mobile</div>
        </div>
      </div>

      <div class="flex flex-col w-full md:w-2/3 my-6 px-4 md:pr-16">
        <div class="flex justify-center md:justify-start">
          <ul class='flex cursor-pointer'>
            <li class='mr-2 py-1 px-4 hover:bg-gray-200 rounded-lg'>Présentation</li>
            <li class='mx-2 py-1 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-500'>Publications</li>
            <li class='ml-2 py-1 px-4 bg-gray-100 rounded-lg hover:bg-gray-200 text-gray-500'>WIP</li>
          </ul>
        </div>
        <div class="flex flex-col justify-center md:justify-left mt-6 text-justify">
          <p>
            Je m'appelle <b>Kévin Poulet</b> et je suis développeur d'applications
             Web & Mobile (<i>Angular</i> / <i>Ionic</i> / <i>.Net Core</i> / <i>Laravel</i>).
          </p>
          <p class="pt-6">
            Je suis actuellement en poste chez <b>Inside Group</b> où je travaille sur 
            des projets pour différents clients. 
            (Si vous souhaitez en savoir un peu plus, je vous invite à consulter <b>mon CV</b>)
          </p>
          <p class="pt-6">
            Ma principale qualité est d'être à l'écoute des besoins du client, 
            mon objectif dans tout projet est d'apporter mon expertise en terme d'<b>UI</b> et 
            d'<b>ergonomie</b> pour mieux répondre aux attentes de l'utilisateur final.
          </p>
          <p class="pt-6">
            En dehors de mon travail, j'aime apprendre et essayer différentes choses comme le dessin,
            la photographie, la sculpture, le jardinnage etc... Je suis quelqu'un d'<b>ouvert d'esprit</b>
            et cela m'aide dans mon activité professionnelle.
          </p>
          <p class="pt-6">
            Durant mon temps libre, je développe une application de gestion de potager.
            Grâce à cette application, l'utilisateur sera assisté dans ses plantations au quotidien
            via l'utilisation d'un planning, de suggestions et de fiches d'aides.
          </p>
          </div>
      </div>

    </div>

  </section>
</template>