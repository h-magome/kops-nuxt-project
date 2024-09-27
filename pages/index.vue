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
            <a href="#kops-way" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('kops-way')">KOPS WAY</a>
            <a href="#company-data" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('company-data')">DATAで見るKOPS</a>
            <a href="#recruitment" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('recruitment')">採用情報</a>
            <a href="#company-info" class="text-gray-700 hover:text-green-500 font-medium transition duration-300 ease-in-out border-b-2 border-transparent hover:border-green-500" @click.prevent="scrollToSection('company-info')">会社情報</a>
            <a href="#application-statement" class="bg-green-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105" @click.prevent="scrollToSection('application-statement')">応募フォーム</a>
          </div>
          <div class="md:hidden">
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
          <a href="#kops-way" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('kops-way')">KOPS WAY</a>
          <a href="#company-data" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('company-data')">DATAで見るKOPS</a>
          <a href="#recruitment" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('recruitment')">採用情報</a>
          <a href="#company-info" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('company-info')">会社情報</a>
          <a href="https://docs.google.com/forms/d/1GCRT-8486N12IWEg2fSIEuyjQzVT5vXa5jek742WMHA/" class="block px-3 py-2 text-gray-700 hover:text-green-500 hover:bg-gray-100 rounded-md transition duration-300 ease-in-out">お問い合わせ</a>
          <a href="#application-statement" class="block px-3 py-2 bg-green-500 text-white hover:bg-green-600 rounded-md transition duration-300 ease-in-out" @click="scrollToSection('application-statement')">応募フォーム</a>
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
        <button class="bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md">
          Learn More
        </button>
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
          <img src="/images/KOPSアイコン.webp" alt="馬込 浩" class="rounded-full w-64 h-64 object-cover mb-8 md:mb-0 md:mr-12" />
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
        <h2 class="text-3xl font-bold mb-12 text-center text-green-500">KOPS WAY</h2>
        <div class="grid md:grid-cols-3 gap-8 mb-12">
          <div v-for="(feature, index) in features" :key="index" class="bg-white p-6 rounded-lg shadow-lg border-2 border-green-500 transform hover:scale-105 transition-transform duration-300">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-xl font-semibold">{{ feature.title }}</h3>
              <Check class="text-green-500 w-8 h-8" />
            </div>
            <p class="text-gray-700">{{ feature.description }}</p>
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-green-700">
                <template v-if="feature.title === '多様な給与制度'">
                  <a href="#" class="text-green-700 hover:text-green-800">→給与情報・還元制度はこちら</a>
                </template>
                <template v-else-if="feature.title === '透明性の高い還元制度'">
                  <a href="https://jp.indeed.com/cmp/株式会社kops-2/jobs" class="text-green-700 hover:text-green-800">→採用情報はこちら</a>
                </template>
                <template v-else-if="feature.title === '理想のキャリアを目指す万全のサポート体制'">
                  <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="text-green-700 hover:text-green-800">→応募フォームはこちら</a>
                </template>
                <template v-else>
                  {{ feature.highlight }}
                </template>
              </span>
            </div>
          </div>
        </div>
          <div class="text-center">
          <a href="#mission" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl" @click.prevent="scrollToElement('#contact')">
            KOPSの特徴をもっと見る
          </a>
        </div>
      </div>
    </section>

    <!-- Employee Interview Section -->
    <section class="py-20 bg-white rounded-lg relative">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <p class="text-3xl font-bold mb-8 text-gray-800">INTERVIEW</p>
        <h2 class="text-4xl mb-8 text-green-500 font-semibold">社員インタビュー</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="employee in employees" :key="employee.name" class="bg-white shadow-lg rounded-lg overflow-hidden">
            <img :src="employee.image" :alt="employee.name" class="w-full h-64 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ employee.name }}さんのインタビュー</h3>
              <p class="text-gray-600">{{ employee.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

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
            <p class="text-gray-700">{{ graph.description }}</p>
            <div class="mt-4 bg-green-100 p-2 rounded-md">
              <span class="font-semibold text-green-700">
                {{ graph.highlight }}
              </span>
            </div>
          </div>
        </div>
        <div class="text-center">
          <a href="#" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl mr-4">
            会社情報はこちら
          </a>
          <a href="https://jp.indeed.com/cmp/株式会社kops-2/jobs" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl mr-4">
            採用情報はこちら
          </a>
          <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 shadow-xl">
            応募フォームはこちら
          </a>
        </div>
      </div>
    </section>

    <!-- Recruitment Section -->
    <section id="recruitment" class="py-20 bg-white rounded-lg relative">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">採用情報</h2>
        <div class="flex flex-wrap justify-center gap-8">
          <div v-for="(step, index) in selectionProcess" :key="index" class="bg-gray-200 p-6 rounded-lg shadow-md text-center w-48">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ step }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Company Information Section -->
    <section id="company-info" class="py-20 bg-gray-100 rounded-lg relative">
      <div class="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-10" style="background-image: url('/images/KOPSアイコン.webp');"></div>
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">会社情報</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">会社概要</h3>
            <ul class="space-y-2">
              <li><strong>社名：</strong>株式会社KOPS</li>
              <li><strong>設立：</strong>20XX年X月X日</li>
              <li><strong>従業員数：</strong>XX名</li>
              <li><strong>所在地：</strong>東京都〇〇区〇〇町X-X-X</li>
            </ul>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md">
            <h3 class="text-xl font-semibold mb-4 text-gray-800">事業内容</h3>
            <ul class="list-disc list-inside space-y-2">
              <li>ITコンサルティング</li>
              <li>システム開発</li>
              <li>クラウドサービス提供</li>
              <li>AI・機械学習ソリューション</li>
              <li>デジタルマーケティング支援</li>
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
          <ul class="flex flex-wrap justify-center space-x-4">
            <li><a href="#mission" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('mission')">MISSION</a></li>
            <li><a href="#message" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('message')">MESSAGE</a></li>
            <li><a href="#kops-way" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('kops-way')">KOPS WAY</a></li>
            <li><a href="#company-data" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('company-data')">DATAで見るKOPS</a></li>
            <li><a href="#recruitment" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('recruitment')">採用情報</a></li>
            <li><a href="#company-info" class="hover:text-gray-300 transition duration-300 ease-in-out" @click.prevent="scrollToSection('company-info')">会社情報</a></li>
            <li><a href="#application-statement" class="bg-green-500 text-white hover:bg-green-600 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110" @click.prevent="scrollToSection('application-statement')">応募フォーム</a></li>
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
import { Menu, X, Check } from 'lucide-vue-next'

const isMenuOpen = ref<boolean>(false)

const isLoading = ref<boolean>(true)

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
  description: string
}

const graphs = ref<Graph[]>([
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/経験年数.png', alt: '経験年数', description: 'ダミーテキストダミーテキストダミーテキストダミーテキスト' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/リモートワーク.png', alt: 'リモートワーク率', description: 'ダミーテキストダミーテキストダミーテキストダミーテキスト' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/エンジニア分野.png', alt: 'エンジニア分野', description: 'ダミーテキストダミーテキストダミーテキストダミーテキスト' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/社員数.png', alt: '社員数', description: 'ダミーテキストダミーテキストダミーテキストダミーテキスト' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/単価上昇率.png', alt: '単価上昇率', description: 'ダミーテキストダミーテキストダミーテキストダミーテキスト' }
])

const employees = ref<string[]>(['中村', '柿沼'])

const selectionProcess = ref<string[]>(['応募', '書類選考', '面接', '内定'])
</script>

<style scoped>
/* スタイルは Tailwind CSS クラスで対応しているため、追加のCSSは最小限に抑えています */
body {
  font-family: 'Meiryo', sans-serif;
}
</style>