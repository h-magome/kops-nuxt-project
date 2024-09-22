<template>
  <div class="bg-gray-50 min-h-screen flex flex-col font-meiryo">
    <!-- Header -->
    <header class="bg-white text-gray-800 shadow-md fixed top-0 left-0 right-0 z-50 rounded-b-lg">
      <div class="container mx-auto px-4 py-4 flex justify-between items-center">
        <div class="flex items-center">
          <div class="flex items-center h-16">
            <img src="/images/KOPSアイコン.webp" alt="KOPS Logo" class="h-full w-auto">
            <a href="#" class="text-2xl font-bold text-green-500 flex items-center h-full" style="font-family: 'Rounded Mplus 1c', sans-serif;">KOPS</a>
          </div>
        </div>
        <div class="flex items-center justify-end flex-grow">
          <nav class="hidden md:flex space-x-4 mr-4">
            <a href="#" class="text-gray-600 hover:text-green-500">Home</a>
            <a href="#" class="text-gray-600 hover:text-green-500">About</a>
            <a href="#" class="text-gray-600 hover:text-green-500">Services</a>
            <a href="#" class="text-gray-600 hover:text-green-500">Contact</a>
          </nav>
          <div class="flex space-x-2">
            <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full text-sm">応募フォーム</a>
          </div>
        </div>
        <button @click="toggleMenu" class="md:hidden ml-4">
          <Menu v-if="!isMenuOpen" class="text-gray-800" />
          <X v-else class="text-gray-800" />
        </button>
      </div>
      <div v-if="isMenuOpen" class="md:hidden bg-white py-2 rounded-b-lg">
        <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
        <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
        <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
        <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
        <div class="px-4 py-2 flex flex-col space-y-2">
          <a href="https://docs.google.com/forms/d/1GCRT-8486N12IWEg2fSIEuyjQzVT5vXa5jek742WMHA/" class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full text-sm text-center">お問い合わせ</a>
          <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full text-sm text-center">応募フォーム</a>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="relative bg-cover bg-center py-20 mt-16 rounded-lg" style="background-image: url('https://kops-data-images.s3.ap-northeast-1.amazonaws.com/HERO%E3%82%BB%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3%E9%83%BD%E5%B8%82%E7%94%BB%E5%83%8F.jpg');">
      <div class="absolute inset-0 bg-blue-900 opacity-60 rounded-lg"></div>
      <div class="container mx-auto px-4 text-center relative z-10">
        <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">
          仕事も収入も自分で選ぶ<br>
          新しいエンジニアの形。
        </h1>
        <button class="bg-white text-green-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md">
          Learn More
        </button>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 bg-white rounded-lg">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">MISSION</h2>
        <p class="text-xl mb-8 text-green-500 font-semibold">私たちの働き方で、IT業界を変えていく。</p>
        <p class="text-lg mb-8 text-gray-600">
          株式会社KOPSでは社員が自ら案件を選びながらスキルに見合った報酬を得る、新しい働き方をはじめています。
        </p>
      </div>
    </section>

    <!-- Representative Section -->
    <section class="py-20 bg-gray-50 rounded-lg">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-gray-800 text-center">MESSAGE</h2>
        <p class="text-xl mb-8 text-green-500 font-semibold text-center">「これほどスキルのある人がどうして評価されないのだろう…？」</p>
        <p class="text-lg mb-8 text-gray-600 text-left">私は、WordPressの販売営業からwebエンジニアに転身し、フリーランスとして数年活動をしていました。その時に目の当たりにしたのは、同じプロジェクトチームで働く同僚エンジニアの不遇な環境や待遇。「これほどスキルのある人がどうして評価されないのだろう…？」そんな違和感とともに、IT業界で働く方々がより幸せに働ける世の中をつくりたいという想いから、KOPSを立ち上げました。</p>
        <p class="text-lg mb-8 text-gray-600 text-left">ちなみに、その時の同僚エンジニアが社員第一号です。</p>
        <p class="text-lg mb-8 text-gray-600 text-left">KOPSでは、「自由正社員」という新しいワークスタイルを提唱し、エンジニア一人ひとりが案件を自ら選択し、理想の報酬や働き方を実現させています。</p>
        <p class="text-lg mb-8 text-gray-600 text-left">そんな中で、ぜひ一緒に働きたいのは、人生における目標や夢がはっきりしている方。必ずしも仕事でなくても、「趣味の時間がもっと欲しい」「私生活を豊かにしたい」などでも構いません。何かしら叶えたい未来のある方を、応援する会社であり続けたいと考えています。</p>
      <div class="flex justify-center space-x-4">
          <a href="https://x.com/cafromjakarta?s=21" class="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
            代表のTwitter
          </a>
          <a href="https://even-wheel-148.notion.site/275c8bd3ec004fe18061816694d39726" class="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
            代表プロフィールはこちら
          </a>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 rounded-lg">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(feature, index) in features" :key="index" class="bg-white p-6 rounded-lg shadow-md">
            <Check class="text-green-500 w-12 h-12 mb-4" />
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ feature.title }}</h3>
            <p class="text-gray-600">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Additional Links Section -->
    <section class="py-10 bg-gray-100 rounded-lg">
      <div class="container mx-auto px-4">
        <div class="flex flex-col space-y-4">
          <a href="#" class="text-green-600 hover:text-green-700 text-lg">→給与情報・還元制度はこちら</a>
          <a href="https://jp.indeed.com/cmp/株式会社kops-2/jobs" class="text-green-600 hover:text-green-700 text-lg">→採用情報はこちら</a>
          <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="text-green-600 hover:text-green-700 text-lg">→応募フォームはこちら</a>
        </div>
      </div>
    </section>

    <!-- Company Information Section -->
    <section class="py-20 bg-white rounded-lg">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">KOPSについて</h2>
        <div class="mb-8">
          <a href="#" class="text-green-600 hover:text-green-700 text-lg">→会社情報はこちら</a>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          <img v-for="graph in graphs" :key="graph.alt" :src="graph.src" :alt="graph.alt" class="w-full h-auto rounded-lg">
        </div>
        <div class="flex flex-col space-y-4">
          <a href="https://jp.indeed.com/cmp/株式会社kops-2/jobs" class="text-green-600 hover:text-green-700 text-lg">→採用情報はこちら</a>
          <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="text-green-600 hover:text-green-700 text-lg">→応募フォームはこちら</a>
        </div>
      </div>
    </section>

    <!-- Employee Interview Section -->
    <section class="py-20 bg-gray-50 rounded-lg">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">社員インタビュー</h2>
        <div class="flex justify-center space-x-8">
          <a v-for="employee in employees" :key="employee" href="#" class="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition duration-300">
            {{ employee }}さん
          </a>
        </div>
      </div>
    </section>

    <!-- Selection Process Section -->
    <section class="py-20 bg-white rounded-lg">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">選考フロー</h2>
        <div class="flex flex-wrap justify-center gap-8">
          <div v-for="(step, index) in selectionProcess" :key="index" class="bg-gray-100 p-6 rounded-lg shadow-md text-center w-48">
            <h3 class="text-xl font-semibold mb-2 text-gray-800">{{ step }}</h3>
          </div>
        </div>
      </div>
    </section>

    <!-- Application Statement Section -->
    <section class="py-20 bg-gray-100 rounded-lg">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8 text-gray-800">応募はこちら！</h2>
        <p class="text-lg mb-4 text-gray-600">あなたと一緒に働けることを楽しみにしております。</p>
        <p class="text-lg mb-8 text-gray-600">ぜひKOPSであなただけの「自由正社員」の形を見つけませんか</p>
        <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/" class="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300">
          応募フォーム
        </a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 rounded-t-lg">
      <div class="container mx-auto px-4">
        <div class="text-center">
          <p>&copy; 2024 KOPS</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, Check } from 'lucide-vue-next'

const isMenuOpen = ref<boolean>(false)

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value
}

interface Feature {
  title: string
  description: string
}

const features = ref<Feature[]>([
  { title: '多様な給与制度', description: 'あなたの理想が見つかる多様な給与制度' },
  { title: '透明性の高い還元制度', description: '透明性の高い還元制度の説明...' },
  { title: 'サポート体制', description: '理想のキャリアを目指す方全のサポート体制...' }
])

interface Graph {
  src: string
  alt: string
}

const graphs = ref<Graph[]>([
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/経験年数.png', alt: '経験年数' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/リモートワーク.png', alt: 'リモートワーク率' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/エンジニア分野.png', alt: 'エンジニア分野' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/社員数.png', alt: '社員数' },
  { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/単価上昇率.png', alt: '単価上昇率' }
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