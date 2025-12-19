<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100" dir="rtl">
    <!-- Hero Section -->
    <header class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10 bg-gradient-to-b from-emerald-100/70 via-slate-50 to-slate-50 dark:from-emerald-950/40 dark:via-slate-950 dark:to-slate-950"></div>
      <div class="mx-auto max-w-6xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <nav class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-2xl font-bold text-white shadow-lg shadow-emerald-500/30">
              ر
            </div>
            <div>
              <p class="text-lg font-semibold">ربــاط</p>
              <p class="text-xs text-slate-600 dark:text-slate-400">منصة إدارة العقارات الذكية</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-3 text-sm">
            <a class="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500" href="#features-management">الميزات</a>
            <a class="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500" href="#security">الأمان</a>
            <a class="rounded-full border border-slate-200 px-4 py-2 text-slate-700 transition hover:border-emerald-400 hover:text-emerald-600 dark:border-slate-700 dark:text-slate-300 dark:hover:border-emerald-500" href="#cta">تواصل معنا</a>
          </div>
        </nav>

        <div class="mt-12 grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p class="inline-flex items-center rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
              منصة متكاملة لإدارة المجتمعات السكنية
            </p>
            <h1 class="mt-6 text-4xl font-bold leading-tight sm:text-5xl">
              ربــاط
              <span class="block text-emerald-600 dark:text-emerald-400">يجمعنا العقار ويوحدنا القرار</span>
            </h1>
            <p class="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
              رباط هو نظام ذكي يربط الإدارة بالسكان، يضمن الشفافية في المصروفات، ويختصر الوقت عبر لوحات تحكم مركزية للعمليات والقرارات اليومية.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <button class="rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-700">
                ابدأ الآن
              </button>
              <button class="rounded-full border border-emerald-200 px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:border-emerald-400 dark:border-emerald-500/30 dark:text-emerald-200">
                اطلب عرض توضيحي
              </button>
            </div>
            <div class="mt-10 grid gap-4 sm:grid-cols-3">
              <div class="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-slate-900/60">
                <p class="text-2xl font-bold text-emerald-600">+250</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">مجمع سكني</p>
              </div>
              <div class="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-slate-900/60">
                <p class="text-2xl font-bold text-emerald-600">98%</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">رضا السكان</p>
              </div>
              <div class="rounded-2xl bg-white/80 p-4 shadow-sm backdrop-blur dark:bg-slate-900/60">
                <p class="text-2xl font-bold text-emerald-600">24/7</p>
                <p class="text-sm text-slate-600 dark:text-slate-400">مراقبة وبلاغات</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="absolute -right-10 top-10 hidden h-56 w-56 rounded-full bg-emerald-200/60 blur-3xl dark:bg-emerald-700/30 lg:block"></div>
            <div class="relative rounded-3xl border border-white/60 bg-white/80 p-6 shadow-2xl shadow-emerald-500/10 backdrop-blur dark:border-slate-800 dark:bg-slate-900/70">
              <div class="space-y-4">
                <div class="flex items-center justify-between rounded-2xl bg-slate-50 p-4 dark:bg-slate-950">
                  <div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">مصروفات الشهر</p>
                    <p class="text-xl font-semibold">120,450 ر.س</p>
                  </div>
                  <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">متابعة مباشرة</span>
                </div>
                <div class="rounded-2xl border border-slate-200/60 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                  <p class="text-sm font-semibold">تنبيه صيانة عاجل</p>
                  <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">تم إنشاء طلب صيانة للمصعد - برج 4</p>
                  <div class="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                    <span>قبل 10 دقائق</span>
                    <span class="rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">قيد المعالجة</span>
                  </div>
                </div>
                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-slate-200/60 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p class="text-sm text-slate-500 dark:text-slate-400">قرارات مجلس الإدارة</p>
                    <p class="mt-2 text-lg font-semibold">تصويت جديد</p>
                    <p class="text-xs text-emerald-600 dark:text-emerald-300">تم فتح التصويت</p>
                  </div>
                  <div class="rounded-2xl border border-slate-200/60 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
                    <p class="text-sm text-slate-500 dark:text-slate-400">مستوى الإشغال</p>
                    <p class="mt-2 text-lg font-semibold">92%</p>
                    <p class="text-xs text-slate-500 dark:text-slate-400">تحديث مباشر</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main>
      <!-- Why Rabat Section -->
      <section class="bg-white py-16 dark:bg-slate-900" id="why-rabat">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">لماذا رباط؟</p>
            <h2 class="mt-3 text-3xl font-bold">نظام يجعل إدارة العقار سهلة وشفافة</h2>
            <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
              كل ما تحتاجه الإدارة والسكان في منصة واحدة تساعد على تنظيم العمليات اليومية وتوحيد القرارات.
            </p>
          </div>
          <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div v-for="item in whyRabat" :key="item.title" class="rounded-3xl border border-slate-100 bg-slate-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:border-slate-800 dark:bg-slate-950">
              <div class="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-2xl text-white shadow-lg shadow-emerald-500/30">
                {{ item.icon }}
              </div>
              <h3 class="mt-5 text-lg font-semibold">{{ item.title }}</h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features for Property Management Section -->
      <section class="py-16" id="features-management">
        <div class="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">الإدارة الذكية</p>
            <h2 class="mt-3 text-3xl font-bold">لوحة إدارة شاملة لكل التفاصيل</h2>
            <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
              أدوات متقدمة لإدارة الإعلانات، اتخاذ القرار، التكاليف، والاشتراكات مع تقارير فورية تضمن الشفافية.
            </p>
            <ul class="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <li v-for="feature in managementFeatures" :key="feature" class="flex items-center gap-3">
                <span class="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-200">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="card in managementCards" :key="card.title" class="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 class="text-lg font-semibold">{{ card.title }}</h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ card.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Features for Residents Section -->
      <section class="bg-white py-16 dark:bg-slate-900" id="features-residents">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-2">
            <div class="rounded-3xl bg-emerald-50 p-8 shadow-sm dark:bg-emerald-900/20">
              <h2 class="text-3xl font-bold">تجربة سلسة للسكان</h2>
              <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
                تطبيق متكامل يمكّن السكان من متابعة كل شيء داخل مجتمعهم السكني بسهولة وأمان.
              </p>
              <div class="mt-6 grid gap-3 sm:grid-cols-2">
                <div v-for="feature in residentFeatures" :key="feature" class="flex items-center gap-3 rounded-2xl bg-white/90 p-4 text-sm text-slate-600 shadow-sm dark:bg-slate-950">
                  <span class="text-emerald-600 dark:text-emerald-300">●</span>
                  {{ feature }}
                </div>
              </div>
            </div>
            <div class="grid gap-6">
              <div class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 class="text-lg font-semibold">طلبات الصيانة والمتابعة</h3>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  إنشاء البلاغات، متابعة الحالة، ومشاركة الصور والمستندات مع فريق التشغيل.
                </p>
              </div>
              <div class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 class="text-lg font-semibold">مدفوعات رقمية مرنة</h3>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  دفع الرسوم أو الإيجارات مباشرة مع إشعارات فورية وتاريخ عمليات منظم.
                </p>
              </div>
              <div class="rounded-3xl border border-slate-200/70 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <h3 class="text-lg font-semibold">خصوصية الكاميرات</h3>
                <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                  مراقبة آمنة ومحدودة على مستوى الدور فقط لضمان راحة السكان.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Online Payments Section -->
      <section class="py-16" id="payments">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-2">
            <div>
              <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">مدفوعات إلكترونية</p>
              <h2 class="mt-3 text-3xl font-bold">تحصيل الرسوم والإيجارات بسهولة</h2>
              <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
                نظام تحصيل آمن يدعم الرسوم الشهرية والإيجارات مع سجل كامل للمدفوعات.
              </p>
              <div class="mt-6 space-y-4">
                <div class="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">رسوم شهرية</p>
                    <p class="text-lg font-semibold">600 ر.س</p>
                  </div>
                  <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">تم الدفع</span>
                </div>
                <div class="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">إيجار شهري</p>
                    <p class="text-lg font-semibold">2,200 ر.س</p>
                  </div>
                  <span class="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300">قيد التحصيل</span>
                </div>
                <div class="flex items-center justify-between rounded-2xl border border-slate-200/70 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <div>
                    <p class="text-sm text-slate-500 dark:text-slate-400">تاريخ المدفوعات</p>
                    <p class="text-lg font-semibold">محدث تلقائياً</p>
                  </div>
                  <span class="rounded-full bg-emerald-100 px-3 py-1 text-xs text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">أرشفة ذكية</span>
                </div>
              </div>
            </div>
            <div class="rounded-3xl border border-slate-200/70 bg-white p-8 shadow-lg dark:border-slate-800 dark:bg-slate-900">
              <h3 class="text-xl font-semibold">لوحة تحصيل شهرية</h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">نسب التحصيل الشهرية ومؤشرات الأداء الرئيسية.</p>
              <div class="mt-6 space-y-4">
                <div v-for="metric in paymentMetrics" :key="metric.label" class="space-y-2">
                  <div class="flex items-center justify-between text-sm">
                    <span class="text-slate-600 dark:text-slate-300">{{ metric.label }}</span>
                    <span class="font-semibold">{{ metric.value }}</span>
                  </div>
                  <div class="h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                    <div class="h-full rounded-full bg-emerald-500" :style="{ width: metric.progress }"></div>
                  </div>
                </div>
              </div>
              <div class="mt-8 rounded-2xl bg-slate-50 p-4 text-xs text-slate-500 dark:bg-slate-950 dark:text-slate-400">
                تحديثات لحظية مع إشعارات تلقائية للسكان والإدارة.
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Security & Privacy Section -->
      <section class="bg-white py-16 dark:bg-slate-900" id="security">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-10 lg:grid-cols-2">
            <div>
              <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">الأمان والخصوصية</p>
              <h2 class="mt-3 text-3xl font-bold">حوكمة واضحة وصلاحيات دقيقة</h2>
              <p class="mt-4 text-base text-slate-600 dark:text-slate-300">
                حماية بياناتك أولوية، مع أدوار وصلاحيات مخصصة لكل جهة لضمان الخصوصية والامتثال.
              </p>
              <div class="mt-6 grid gap-4 sm:grid-cols-2">
                <div v-for="item in securityFeatures" :key="item.title" class="rounded-3xl border border-slate-200/70 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                  <h3 class="text-lg font-semibold">{{ item.title }}</h3>
                  <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ item.description }}</p>
                </div>
              </div>
            </div>
            <div class="rounded-3xl bg-emerald-600 p-8 text-white shadow-lg shadow-emerald-500/30">
              <h3 class="text-2xl font-semibold">خصوصية الكاميرات أولاً</h3>
              <p class="mt-3 text-sm text-emerald-100">
                تحديد الوصول لمستوى الدور فقط، مع تشفير كامل ومتابعة لنشاط المشاهدة.
              </p>
              <div class="mt-6 space-y-4 text-sm">
                <div class="flex items-center justify-between rounded-2xl bg-emerald-500/40 p-4">
                  <span>سجل المشاهدات</span>
                  <span class="font-semibold">مفعل</span>
                </div>
                <div class="flex items-center justify-between rounded-2xl bg-emerald-500/40 p-4">
                  <span>تشفير الفيديو</span>
                  <span class="font-semibold">256-bit</span>
                </div>
                <div class="flex items-center justify-between rounded-2xl bg-emerald-500/40 p-4">
                  <span>تنبيهات الخصوصية</span>
                  <span class="font-semibold">فورية</span>
                </div>
              </div>
              <button class="mt-8 w-full rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
                تعرف على سياسات الحماية
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- Target Audience Section -->
      <section class="py-16" id="audience">
        <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <p class="text-sm font-semibold text-emerald-600 dark:text-emerald-300">الفئات المستهدفة</p>
            <h2 class="mt-3 text-3xl font-bold">مصمم لكل نوع من المجتمعات</h2>
          </div>
          <div class="mt-10 grid gap-6 md:grid-cols-3">
            <div v-for="audience in targetAudience" :key="audience.title" class="rounded-3xl border border-slate-200/70 bg-white p-6 text-center shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-xl text-emerald-600 dark:bg-emerald-900/40 dark:text-emerald-200">
                {{ audience.icon }}
              </div>
              <h3 class="mt-4 text-lg font-semibold">{{ audience.title }}</h3>
              <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">{{ audience.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Call To Action Section -->
      <section class="bg-emerald-600 py-16 text-white" id="cta">
        <div class="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-bold">حوّل إدارة عقارك إلى تجربة ذكية اليوم</h2>
          <p class="mt-4 text-base text-emerald-100">
            ابدأ مع رباط واستمتع بتواصل فوري وتقارير واضحة وتجربة سلسة للإدارة والسكان.
          </p>
          <div class="mt-8 flex flex-wrap justify-center gap-4">
            <button class="rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700 transition hover:bg-emerald-50">
              ابدأ الآن
            </button>
            <button class="rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              اطلب عرض توضيحي
            </button>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="bg-slate-900 py-10 text-slate-300">
      <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <p class="text-lg font-semibold text-white">ربــاط</p>
          <p class="mt-1 text-xs text-slate-400">منصة إدارة العقارات الذكية</p>
        </div>
        <div class="flex flex-wrap items-center gap-4 text-sm">
          <a class="transition hover:text-white" href="#why-rabat">لماذا رباط</a>
          <a class="transition hover:text-white" href="#features-management">الإدارة</a>
          <a class="transition hover:text-white" href="#features-residents">السكان</a>
          <a class="transition hover:text-white" href="#security">الأمان</a>
        </div>
        <p class="text-xs text-slate-500">© 2024 Rabat. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const whyRabat = [
  {
    icon: "📊",
    title: "تنظيم شامل",
    description: "لوحات تحكم مركزية تجمع الإيرادات والمصروفات والعقود في مكان واحد."
  },
  {
    icon: "🤝",
    title: "شفافية كاملة",
    description: "تتبع كل قرار ومصروف مع سجل واضح ومتاح لجميع الأطراف."
  },
  {
    icon: "⚡",
    title: "سهولة الاستخدام",
    description: "واجهة بسيطة تدعم العربية وتعمل بسلاسة على جميع الأجهزة."
  },
  {
    icon: "🔔",
    title: "تواصل فوري",
    description: "إعلانات وتنبيهات مباشرة تصل للإدارة والسكان في الوقت المناسب."
  }
];

const managementFeatures = [
  "إعلانات وتنبيهات فورية",
  "تصويتات وقرارات رقمية",
  "إدارة الاشتراكات والرسوم",
  "ملفات السكان والعمال",
  "تقارير مالية وتشغيلية"
];

const managementCards = [
  {
    title: "إدارة الإعلانات",
    description: "أنشئ الإعلانات ووزعها حسب المباني والأدوار."
  },
  {
    title: "الحوكمة والقرارات",
    description: "تصويت رقمي محفوظ مع إشعار بالنتائج."
  },
  {
    title: "إدارة السكان",
    description: "ملفات موحدة للسكان والزوار والعمال."
  },
  {
    title: "التقارير المتقدمة",
    description: "لوحات تحليلية للمصاريف والدخل والتشغيل."
  }
];

const residentFeatures = [
  "الشكـاوى والملاحظات",
  "المدفوعات والإيصالات",
  "طلبات الصيانة",
  "إدارة الزوار",
  "إشعارات الكاميرات (على مستوى الدور)"
];

const paymentMetrics = [
  { label: "نسبة التحصيل", value: "92%", progress: "92%" },
  { label: "السداد التلقائي", value: "76%", progress: "76%" },
  { label: "طلبات متأخرة", value: "8%", progress: "8%" }
];

const securityFeatures = [
  {
    title: "أدوار وصلاحيات",
    description: "إدارة مرنة لصلاحيات الإدارة والسكان والموردين."
  },
  {
    title: "حماية البيانات",
    description: "تشفير وحفظ احتياطي مستمر لضمان سلامة المعلومات."
  },
  {
    title: "تدقيق كامل",
    description: "سجل نشاط مفصل لكل قرار ومعاملة مالية."
  },
  {
    title: "خصوصية الكاميرات",
    description: "مراقبة ضمن الحدود مع احترام خصوصية السكان."
  }
];

const targetAudience = [
  {
    icon: "🏢",
    title: "اتحادات الملاك",
    description: "حلول حوكمة وشفافية لإدارة الممتلكات المشتركة."
  },
  {
    icon: "🏬",
    title: "المباني السكنية",
    description: "إدارة المصروفات والصيانة بطريقة رقمية واضحة."
  },
  {
    icon: "🏘️",
    title: "المجمعات السكنية",
    description: "ربط شامل للسكان والإدارة والتشغيل في منصة واحدة."
  }
];
</script>
