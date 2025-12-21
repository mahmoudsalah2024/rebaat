<template>
  <div>
    <div class="fixed bottom-0 w-full border-t border-slate-200/70 bg-white/80 py-3 backdrop-blur transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/80">
      <div class="mx-auto flex max-w-6xl items-center justify-around px-4 sm:px-6 lg:px-8">
        <router-link to="/" class="inline-flex rounded-full border border-transparent px-4 py-4 text-lg text-slate-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400">
          <svg class="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M11.293 3.293a1 1 0 0 1 1.414 0l6 6 2 2a1 1 0 0 1-1.414 1.414L19 12.414V19a2 2 0 0 1-2 2h-3a1 1 0 0 1-1-1v-3h-2v3a1 1 0 0 1-1 1H7a2 2 0 0 1-2-2v-6.586l-.293.293a1 1 0 0 1-1.414-1.414l2-2 6-6Z" clip-rule="evenodd" />
          </svg>
        </router-link>
        <router-link to="/money_box" class="inline-flex rounded-full border border-transparent px-4 py-4 text-lg text-slate-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400">
          <svg class="h-7 w-7" aria-hidden="true" width="24" height="24" fill="currentColor" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
            <g id="SVGRepo_bgCarrier" stroke-width="0" data--h-bstatus="0OBSERVED"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data--h-bstatus="0OBSERVED"></g>
            <g id="SVGRepo_iconCarrier" data--h-bstatus="0OBSERVED">
              <g data--h-bstatus="0OBSERVED">
                <path d="M17.848,7.822c-0.127-0.007-0.19-0.01-0.199-0.01c-0.785,0-1.178-0.327-1.178-0.981c0-0.625,0.394-0.938,1.184-0.938 l0.193-0.006V7.822L17.848,7.822z M30.964,13.828v14.881l-12.889,7.44L5.186,28.71V13.828l5.209-3.007 c-0.266-0.81-0.413-1.672-0.413-2.571c0-4.557,3.694-8.25,8.25-8.25c4.555,0,8.25,3.693,8.25,8.25c0,0.955-0.172,1.868-0.471,2.721 L30.964,13.828z M15.039,10.093c0,0.797,0.192,1.356,0.574,1.679c0.381,0.321,1.043,0.482,1.981,0.482l0.254,0.006v0.883h0.898 V12.26l0.271-0.006c0.942,0,1.604-0.168,1.983-0.504c0.378-0.337,0.568-0.921,0.568-1.755c0-0.775-0.176-1.308-0.521-1.598 c-0.35-0.292-1.018-0.464-2.008-0.52l-0.297-0.012V5.893h0.209c0.729,0,1.096,0.292,1.096,0.877l0.006,0.142h1.289V6.73 c0-0.775-0.186-1.305-0.551-1.589c-0.367-0.286-1.051-0.428-2.049-0.428V3.945h-0.898v0.768c-1.045,0-1.762,0.149-2.146,0.447 c-0.387,0.297-0.58,0.851-0.58,1.658c0,0.833,0.193,1.402,0.577,1.707c0.384,0.303,1.101,0.454,2.149,0.454v2.139l-0.199-0.004 c-0.535,0-0.883-0.07-1.036-0.212c-0.155-0.141-0.234-0.454-0.234-0.94V9.825h-1.333L15.039,10.093z M17.075,21.573l-9.889-5.708 v11.689l9.889,5.709V21.573z M18.075,19.842l9.65-5.572l-2.596-1.499c-1.477,2.245-4.014,3.73-6.896,3.73 c-2.943,0-5.52-1.546-6.979-3.865l-2.828,1.633L18.075,19.842z M28.964,15.866l-9.89,5.707v11.69l9.89-5.709V15.866z M20.221,10.015c0-0.403-0.096-0.667-0.285-0.795c-0.189-0.127-0.586-0.192-1.188-0.192v2.089h0.189 C19.794,11.117,20.221,10.749,20.221,10.015z" data--h-bstatus="0OBSERVED"></path>
              </g>
            </g>
          </svg>
        </router-link>
        <router-link to="/forms/orderMaintenance" class="inline-flex rounded-full bg-emerald-600 px-4 py-4 text-lg text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700">
          <svg class="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8.4 6.763c-.251.1-.383.196-.422.235L6.564 5.584l2.737-2.737c1.113-1.113 3.053-1.097 4.337.187l1.159 1.159a1 1 0 0 1 1.39.022l4.105 4.105a1 1 0 0 1 .023 1.39l1.345 1.346a1 1 0 0 1 0 1.415l-2.052 2.052a1 1 0 0 1-1.414 0l-1.346-1.346a1 1 0 0 1-1.323.039L11.29 8.983a1 1 0 0 1 .04-1.324l-.849-.848c-.18-.18-.606-.322-1.258-.25a3.271 3.271 0 0 0-.824.202Zm1.519 3.675L3.828 16.53a1 1 0 0 0 0 1.414l2.736 2.737a1 1 0 0 0 1.414 0l6.091-6.091-4.15-4.15Z" />
          </svg>
        </router-link>
        <router-link class="inline-flex rounded-full border border-transparent px-4 py-4 text-lg text-slate-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400">
          <svg class="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M5.617 2.076a1 1 0 0 1 1.09.217L8 3.586l1.293-1.293a1 1 0 0 1 1.414 0L12 3.586l1.293-1.293a1 1 0 0 1 1.414 0L16 3.586l1.293-1.293A1 1 0 0 1 19 3v18a1 1 0 0 1-1.707.707L16 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L12 20.414l-1.293 1.293a1 1 0 0 1-1.414 0L8 20.414l-1.293 1.293A1 1 0 0 1 5 21V3a1 1 0 0 1 .617-.924ZM9 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Z" clip-rule="evenodd" />
          </svg>
        </router-link>
        <router-link class="inline-flex rounded-full border border-transparent px-4 py-4 text-lg text-slate-600 transition hover:border-emerald-400 hover:text-emerald-600 dark:text-slate-300 dark:hover:text-emerald-400">
          <svg class="h-7 w-7" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
            <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
          </svg>
        </router-link>
      </div>
    </div>
  </div>
</template>
