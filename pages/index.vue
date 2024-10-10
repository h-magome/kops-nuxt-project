<template>
  <div class="bg-gray-100 min-h-screen flex flex-col font-meiryo">
    <div v-if="isLoading" class="flex items-center justify-center h-screen">
      <img src="/images/KOPSロゴ.png" alt="Loading Logo" class="h-16 w-16">
    </div>
    <!-- Header -->
    <header class="bg-white text-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center cursor-pointer" @click="scrollToTop">
            <img src="/images/KOPSロゴ.png" alt="KOPS Logo" class="h-16 w-16 mr-2">
            <span class="font-bold text-xl text-green-500" style="font-family: 'Rounded Mplus 1c', sans-serif;">KOPS</span>
          </div>
          <div class="hidden md:flex items-center space-x-6">
            <a href="#mission" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('mission')">MISSION</a>
            <a href="#message" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('message')">MESSAGE</a>
            <a href="#kops-way" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('kops-way')">KOPSの強み</a>
            <a href="#company-data" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('company-data')">DATAで見るKOPS</a>
            <a href="https://kops.recruitsite.net/job" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" target="_blank" rel="noopener noreferrer">採用情報</a>
            <a href="#company-info" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('company-info')">会社情報</a>
            <a href="#application-statement" class="bg-green-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105" @click.prevent="scrollToSection('application-statement')">応募フォーム</a>
          </div>
          <div class="md:hidden flex items-center">
            <a href="#application-statement" class="bg-green-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 mr-4" @click.prevent="scrollToSection('application-statement')">応募フォーム</a>
            <button @click="toggleMenu" class="text-gray-600 hover:text-green-500 focus:outline-none">
              <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#mission" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('mission')">MISSION</a>
          <a href="#message" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('message')">MESSAGE</a>
          <a href="#kops-way" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('kops-way')">KOPSの強み</a>
          <a href="#company-data" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('company-data')">DATAで見るKOPS</a>
          <a href="https://kops.recruitsite.net/job" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">採用情報</a>
          <a href="#company-info" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('company-info')">会社情報</a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-cover bg-center py-20 mt-16 rounded-lg" style="background-image: url('https://kops-data-images.s3.ap-northeast-1.amazonaws.com/HERO%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E9%83%BD%E5%B8%82%E7%94%BB%E5%83%8F.jpg');">
      <div class="absolute inset-0 bg-blue-900 opacity-70 rounded-lg"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          仕事も収入も自分で<br>
          選ぶ新しい働き方。
        </h1>
        <a href="https://kops.recruitsite.net/job" target="_blank" rel="noopener noreferrer" class="inline-block bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md">
          採用情報はこちら
        </a>
      </div>
    </section>

    <!-- Mission Section -->
    <section id="mission" class="py-20 bg-white rounded-lg relative">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <p class="text-3xl font-bold mb-8 text-gray-800">MISSION</p>
        <h2 class="text-4xl mb-8 text-green-500 font-semibold">私たちの働き方で、IT業界を変えていく。</h2>
        <p class="text-lg mb-8 text-gray-700">
          株式会社KOPSでは社員が自ら案件を選びながらスキルに見合った報酬を得る、新しい働き方をはじめています。
        </p>
      </div>
    </section>

    <!-- Representative Section -->
    <section id="message" class="py-20 bg-gray-200 rounded-lg relative">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <p class="text-3xl font-bold mb-8 text-gray-800">MESSAGE</p>
        <h2 class="text-4xl mb-8 text-green-500 font-semibold">「これほどスキルのある人がどうして評価されないのだろう…？」</h2>
        <div class="flex flex-col md:flex-row items-center justify-center">
          <img src="/images/リサイズ浩2.png" alt="馬込 浩" class="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-12" />
          <div class="max-w-lg">
            <div class="text-left">
              <p class="text-lg mb-8 text-gray-700">
                私は、WordPressの販売営業からwebエンジニアに転身し、フリーランスとして数年活動をしていました。その時に目の当たりにしたのは、同じプロジェクトチームで働く同僚エンジニアの不遇な環境や待遇。「これほどスキルのある人がどうして評価されないのだろう…？」そんな違和感とともに、IT業界で働く方々がより幸せに働ける世の中をつくりたいという想いから、KOPSを立ち上げました。
              </p>
              <p class="text-lg mb-8 text-gray-700">
                ちなみに、その時の同僚エンジニアが社員第一号です。
              </p>
              <p class="text-lg mb-8 text-gray-700">
                KOPSでは、「自由正社員」という新しいワークスタイルを提唱し、エンジニア一人ひとりが案件を自ら選択し、理想の報酬や働き方を実現させています。
              </p>
              <p class="text-lg mb-8 text-gray-700">
                そんな中で、ぜひ一緒に働きたいのは、人生における目標や夢がはっきりしている方。必ずしも仕事でなくても、「趣味の時間がもっと欲しい」「私生活を豊かにしたい」などでも構いません。何かしら叶えたい未来のある方を、応援する会社であり続けたいと考えています。
              </p>
            </div>
            <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="https://x.com/cafromjakarta?s=21" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                代表のTwitter
              </a>
              <a href="https://even-wheel-148.notion.site/275c8bd3ec004fe18061816694d39726" target="_blank" rel="noopener noreferrer" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
                代表プロフィールはこちら
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="kops-way" class="bg-gray-100 py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center text-green-500">KOPSの強み</h2>
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">多様な給与制度</h3>
              <img src="/images/低価格.svg" alt="給与アイコン" class="w-12 h-12" />
            </div>
            <p class="text-gray-700">
              KOPSでは、あなたの理想が見つかる多様な給与制度があり、自分のスタイルに合った給与制度を自分で選択できます。
            </p>
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-green-700">
                <!-- <a href="#" class="text-green-700 hover:text-green-800">→給与情報はこちら</a> -->
              </span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">透明性の高い還元制度</h3>
              <img src="/images/実行支援.svg" alt="透明性アイコン" class="w-12 h-12" />
            </div>
            <p class="text-gray-700">
              案件単価の最大85%と還元率は業界最高水準。情報もすべてオープンにされ、明確で透明性のある評価を行っています。
            </p>
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-green-700">
                <!-- <a href="#" class="text-green-700 hover:text-green-800">→還元制度の詳細</a> -->
              </span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">自由な案件選択制度</h3>
              <img src="/images/最適な提案.svg" alt="選択アイコン" class="w-12 h-12" />
            </div>
            <p class="text-gray-700">
              すべて開示された案件情報の中から、ご自身の希望に合う案件を選択可能。社員の要望に合わせて追加で案件も獲得してきます。
            </p>
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-green-700">
                <!-- <a href="#" class="text-green-700 hover:text-green-800">→案件選択の流れ</a> -->
              </span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">キャリアサポート体制</h3>
              <img src="/images/幅広い業務対応.svg" alt="キャリアアイコン" class="w-12 h-12" />
            </div>
            <p class="text-gray-700">
              新しい技術や上流工程にチャレンジするために個々に合わせて相談・研修を実施。スキルや経験を習得するためのサポートは惜しみません。
            </p>
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-green-700">
                <!-- <a href="#" class="text-green-700 hover:text-green-800">→サポート制度の詳細</a> -->
              </span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">社内副業制度</h3>
              <img src="/images/業務効率化.svg" alt="副業アイコン" class="w-12 h-12" />
            </div>
            <p class="text-gray-700">
              社内のホームページや技術ブログの作成など社内副業を通じて、スキルアップが可能。もちろん報酬もしっかりお支払いします。
            </p>
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-green-700">
                <!-- <a href="#" class="text-green-700 hover:text-green-800">→社内副業の事例</a> -->
              </span>
            </div>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">アンチブラック体制</h3>
              <img src="/images/KOPSロゴ.png" alt="ワークライフバランスアイコン" class="w-12 h-12" />
            </div>
            <p class="text-gray-700">
              「残業月平均8時間」「年間休日121日」「土日祝休み」といったホワイトな働き方が叶います。育児・介護休業や関連休暇はもちろん、時差出勤やテレワークもOK。
            </p>
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-green-700">
                <!-- <a href="#" class="text-green-700 hover:text-green-800">→働き方の詳細</a> -->
              </span>
            </div>
          </div>
        </div>
          <div class="text-center">
          <a href="#application-statement" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl" @click.prevent="scrollToSection('application-statement')">
            KOPSの特徴をもっと見る
          </a>
        </div>
      </div>
    </section>

    <!-- Employee Interview Section -->
    <section class="py-20 bg-white rounded-lg relative overflow-hidden">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <p class="text-3xl font-bold mb-4 text-gray-800 animate-fade-in-down">INTERVIEW</p>
        <h2 class="text-4xl mb-12 text-green-500 font-semibold animate-fade-in-up">社員インタビュー</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="employee in employees" :key="employee.name" class="bg-gradient-to-br from-white to-green-100 shadow-lg rounded-lg overflow-hidden cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl" @click="openInterview(employee)">
            <div class="relative">
              <img :src="employee.image" :alt="employee.name" class="w-full h-64 object-cover transition duration-300 filter hover:brightness-110">
              <div class="absolute inset-0 bg-green-500 opacity-0 hover:opacity-20 transition duration-300"></div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2 text-green-600">{{ employee.name }}さんのインタビュー</h3>
              <p class="text-gray-600">{{ employee.position }}</p>
              <div class="mt-4">
                <span class="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-700 mr-2">詳細を見る</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- インタビューポップアップ -->
    <div v-if="selectedEmployee" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 overflow-y-auto p-4 sm:p-6 md:p-8" @click="closeInterview">
      <div class="bg-white p-4 sm:p-6 md:p-8 rounded-2xl w-full max-w-4xl my-4 flex flex-col md:flex-row relative shadow-2xl" @click.stop>
        <button @click="closeInterview" class="absolute top-2 right-2 sm:top-4 sm:right-4 text-green-500 hover:text-green-700 transition-colors duration-300 z-10">
          <svg class="w-6 h-6 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="w-full md:w-1/3 md:pr-6 flex flex-col mb-4 md:mb-0">
          <img :src="selectedEmployee.image" :alt="selectedEmployee.name" class="w-full h-auto rounded-lg mb-4 shadow-md">
          <p class="text-xl sm:text-2xl font-bold text-green-600">{{ selectedEmployee.name }}さん</p>
          <p class="text-base sm:text-lg text-gray-600">{{ selectedEmployee.position }}</p>
        </div>
        <div class="w-full md:w-2/3 overflow-y-auto max-h-[50vh] sm:max-h-[60vh] md:max-h-[calc(80vh-4rem)] md:pl-6 md:border-l-2 md:border-green-200">
          <div v-for="(section, index) in selectedEmployee.interview" :key="index" class="mb-6">
            <h3 class="text-lg sm:text-xl font-semibold mb-2 text-green-600">{{ section.heading }}</h3>
            <p v-html="section.content" class="text-sm sm:text-base text-gray-700 leading-relaxed"></p>
          </div>
        </div>
      </div>
    </div>

    <!-- Company Data Section -->
    <section id="company-data" class="bg-gray-100 py-16 px-4">
      <div class="container mx-auto">
        <h2 class="text-3xl font-bold mb-12 text-center text-green-500">DATAで見るKOPS</h2>
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div v-for="graph in graphs" :key="graph.alt" class="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">{{ graph.title }}</h3>
              <Chart class="text-green-500 w-8 h-8" />
            </div>
            <img :src="graph.src" :alt="graph.alt" class="w-full h-auto rounded-lg mb-4">
            <!-- <p class="text-gray-700">{{ graph.description }}</p> -->
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-gray-700">
                {{ graph.highlight }}
              </span>
            </div>
          </div>  
        </div>
        <!-- <div class="text-center">
          <div class="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <a href="#" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl w-full md:w-auto">
              会社情報はこちら
            </a>
            <a href="https://jp.indeed.com/cmp/株式会社kops-2/jobs" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl w-full md:w-auto">
              採用情報はこちら
            </a>
            <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl w-full md:w-auto">
              応募フォームはこちら
            </a>
          </div>
        </div> -->
      </div>
    </section>

    <!-- Recruitment Section -->
    <!-- <section id="recruitment" class="py-20 bg-white rounded-lg relative">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">採用情報</h2>
        <div class="flex flex-wrap justify-center gap-8">
          <div v-for="(step, index) in selectionProcess" :key="index" class="bg-gray-200 p-6 rounded-lg shadow-md text-center w-48">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ step }}</h3>
          </div>
        </div>
      </div>
    </section> -->

    <!-- Company Information Section -->
    <section id="company-info" class="py-20 bg-white rounded-lg relative">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold text-center mb-12 text-green-500">会社情報</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <h3 class="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-green-500 pb-2">会社概要</h3>
            <ul class="space-y-4">
              <li class="flex items-center"><span class="font-bold text-green-500 mr-2">社名：</span>株式会社KOPS</li>
              <li class="flex items-center"><span class="font-bold text-green-500 mr-2">設立：</span>2022年11月24日</li>
              <li class="flex items-center"><span class="font-bold text-green-500 mr-2">従業員数：</span>9名</li>
              <li class="flex items-center"><span class="font-bold text-green-500 mr-2">所在地：</span>千葉県船橋市前原西2-14-2 津田沼駅前安田ビル別館2階26</li>
            </ul>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <h3 class="text-2xl font-semibold mb-6 text-gray-800 border-b-2 border-green-500 pb-2">事業内容</h3>
            <ul class="space-y-4">
              <li class="flex items-center"><Check class="text-green-500 mr-2" /> ITコンサルティング</li>
              <li class="flex items-center"><Check class="text-green-500 mr-2" /> システム開発</li>
              <li class="flex items-center"><Check class="text-green-500 mr-2" /> DX戦略のコンサルティング</li>
              <li class="flex items-center"><Check class="text-green-500 mr-2" /> AI・機械学習ソリューション</li>
              <li class="flex items-center"><Check class="text-green-500 mr-2" /> デジタルマーケティング支援</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Statement Section -->
    <section id="application-statement" class="py-20 bg-gray-200 rounded-lg relative">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">応募はこちら！</h2>
        <p class="text-lg mb-4 text-gray-700">あなたと一緒に働けることを楽しみにしております。</p>
        <p class="text-lg mb-8 text-gray-700">ぜひKOPSであなただけの「自由正社員」の形を見つけませんか</p>
        <div class="flex justify-center">
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScW2PeeYyqmiVGf4Q8lCG5mDMCsbEVpI74Bjz5bXxKIjxODsw/viewform?embedded=true" width="640" height="1672" frameborder="0" marginheight="0" marginwidth="0">読み込んでいます…</iframe>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 px-4">
      <div class="container mx-auto text-center">
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4 cursor-pointer hover:text-gray-300 transition duration-300 ease-in-out" @click="scrollToTop">メニュー</h3>
          <ul class="flex flex-wrap justify-center items-center space-x-4">
            <li><a href="#mission" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('mission')">MISSION</a></li>
            <li><a href="#message" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('message')">MESSAGE</a></li>
            <li><a href="#kops-way" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('kops-way')">KOPSの強み</a></li>
            <li><a href="#company-data" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('company-data')">DATAで見るKOPS</a></li>
            <li><a href="https://kops.recruitsite.net/job" class="hover:text-gray-300 transition duration-300 ease-in-out" target="_blank" rel="noopener noreferrer">採用情報</a></li>
            <li><a href="#company-info" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('company-info')">会社情報</a></li>
            <li><a href="#application-statement" class="inline-block bg-green-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110" @click.prevent="scrollToSection('application-statement')">応募フォーム</a></li>
          </ul>
        </div>
        <div class="border-t border-gray-700 pt-8">
          <h3 class="text-xl font-semibold mb-4">会社情報</h3>
          <div class="text-left max-w-fit mx-auto">
            <p>株式会社KOPS</p>
            <p>住所: 千葉県船橋市前原西2-14-2 津田沼駅前安田ビル別館2階26</p>
          </div>
          <p class="mt-4">&copy; 2024 株式会社KOPS All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Menu, X, Check, BookOpenIcon } from 'lucide-vue-next'

const isMenuOpen = ref<boolean>(false)

const isLoading = ref<boolean>(true)

const selectedEmployee = ref<string | null>(null);

const openInterview = (employee: string): void => {
  selectedEmployee.value = employee
}

const closeInterview = (): void => {
  selectedEmployee.value = null
}

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
  isMenuOpen.value = false
}

const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

interface Feature {
  title: string
  description: string
}

const features = ref<Feature[]>([
  { title: '多様な給与制度', description: 'あなたの理想が見つかる多様な給与制度' },
  { 
    title: '透明性の高い還元制度', 
    description: '案件単価の最大85%と還元率は業界最高水準。\n' +
      '情報もすべてオープンにされ、明確で透明性のある評価を行っています。\n' +
      'そのため、現在転職してきたすべての方が前職より収入UPしています。'
  },
  { 
    title: '理想のキャリアを目指す万全のサポート体制', 
    description: '新しい技術や上流工程にチャレンジするために個々に合わせて相談・研修を実施。\n' +
      'スキルや経験を習得するめのサポートは惜しみません。'
  }
])

interface Graph {
  src: string
  alt: string
  highlight: string
}

interface Employee {
  name: string
  position: string
  image: string
  interview: Interview[]
}

interface Interview {
  heading: string
  content: string
}

const graphs = ref<Graph[]>([
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/経験年数.png', alt: '経験年数', highlight: '経験5年以上の方が多く活躍中ですが、最近では次世代エンジニア（経験1〜3年想定）の方も積極サポート中です！' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/リモートワーク.png', alt: 'リモートワーク率', highlight: 'フルリモート、リモート併用がおよそ90％。広島、北海道など全国各地で活躍しています！' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/エンジニア分野.png', alt: 'エンジニア分野', highlight: '現状は開発が9割ですが、多職種も積極的に採用しています！' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/社員数.png', alt: '社員数', highlight: '社員爆増中！' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/単価上昇率.png', alt: '単価上昇率', highlight: '転職者の単価上昇率は100%！' }
])

const anInterview = ref<Interview[]>([
  { heading: '▼略歴', content: '広島県出身<br>' +
  '高校卒業後は大阪で3年間学生生活と社会人経験を積み、地元に戻りWeb/DTPデザイナーとしてキャリアをスタートしました。<br>' +
  'Web/DTPデザイナー出身でしたがウェブ系エンジニアとなりました。<br>' +
  '<br>' +
  '約4年会社員、2年ほどフリーランスでデザイナー・エンジニアとして活動した後、株式会社KOPSへ入社しました。' },
  { heading: '▼休日の過ごし方', content: '自然や野鳥が大好きなので、山・川・海などへ行って撮影を行っています。<br>' +
  '数年間リモートワークで部屋の中がメインでした。<br>' +
  'しかし近年、外出して歩く機会が増え、気分転換や健康的な日々を送れるようになりました。<br>' +
  'リモートワークは積極的に運動を取り入れるのが重要です！' },
  { heading: '▼KOPSに入社してよかったこと', content: 'なんと言っても、給与還元率が高いことです。<br>' +
  '私の場合は働いては生活費、カメラ機材に消えていくため、余裕が持てるのは非常にありがたい点です。<br>' +
  'また、弊社代表も現役エンジニアですので、エンジニア視点での経営方針により、働きやすい環境を生み出していると感じています。' },
  { heading: '▼KOPSの課題', content: 'まだまだ社員数が少ない点です。<br>' +
  'これから増えれば、よりスケールして一人一人の還元もより上がると期待しています。<br>' +
  'ご応募お待ちしております！' },
])

const employees = ref<Employee[]>([
  { name: 'AN', position: 'WEBエンジニア', image: '/images/中村篤仁.jpg', interview: anInterview.value },
])

const selectionProcess = ref<string[]>(['応募', '書類選考', '面接', '内定'])
</script>

<style scoped>
/* スタイルは Tailwind CSS クラスで対応しているため、追加のCSSは最小限に抑えています */
body {
  font-family: 'Meiryo', sans-serif;
}
</style>