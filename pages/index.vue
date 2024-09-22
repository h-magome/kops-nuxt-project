<template>
    <div class="bg-gray-50 min-h-screen flex flex-col">
      <!-- Header -->
      <header class="bg-white text-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
          <div class="flex items-center">
            <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DALL%C2%B7E%202024-04-30%2013.04.01%20-%20A%20simple%20and%20cute%20koala%20logo,%20primarily%20in%20shades%20of%20gray%20to%20represent%20the%20koala%20and%20green%20for%20nearby%20eucalyptus%20leaves.%20The%20koala%20should%20be%20adorable%20-uPmPjSwEigBJUnJbcZaFa3s7Jvr8hE.webp" alt="KOPS Logo" class="h-10 w-10 mr-2">
            <a href="#" class="text-2xl font-bold text-gray-800">KOPS</a>
          </div>
          <div class="flex items-center">
            <nav class="hidden md:flex space-x-4 mr-4">
              <a href="#" class="text-gray-600 hover:text-green-500">Home</a>
              <a href="#" class="text-gray-600 hover:text-green-500">About</a>
              <a href="#" class="text-gray-600 hover:text-green-500">Services</a>
              <a href="#" class="text-gray-600 hover:text-green-500">Contact</a>
            </nav>
            <div class="flex space-x-2">
              <a href="https://docs.google.com/forms/d/1GCRT-8486N12IWEg2fSIEuyjQzVT5vXa5jek742WMHA/" class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full text-sm">お問い合わせ</a>
              <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-full text-sm">応募フォーム</a>
            </div>
          </div>
          <button @click="toggleMenu" class="md:hidden ml-4">
            <Menu v-if="!isMenuOpen" class="text-gray-800" />
            <X v-else class="text-gray-800" />
          </button>
        </div>
        <div v-if="isMenuOpen" class="md:hidden bg-white py-2">
          <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Home</a>
          <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">About</a>
          <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Services</a>
          <a href="#" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">Contact</a>
          <a href="https://docs.google.com/forms/d/1GCRT-8486N12IWEg2fSIEuyjQzVT5vXa5jek742WMHA/" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">お問い合わせ</a>
          <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="block px-4 py-2 text-gray-600 hover:bg-gray-100">応募フォーム</a>
        </div>
      </header>
  
      <!-- Hero Section -->
      <section class="relative bg-cover bg-center py-20 mt-16" style="background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toshi4trim2652021111237-Y2FTgPGV6lA9up3I8bVfLQaGAslfjE.jpg');">
        <div class="absolute inset-0 bg-blue-900 opacity-60"></div>
        <div class="container mx-auto px-4 text-center relative z-10">
          <h1 class="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg">私たちの働き方でIT業界を変えていく</h1>
          <p class="text-xl mb-8 text-white drop-shadow-md">「自由正社員」という新たな働き方で変革を起こし、日本のIT業界で働く人々の幸福感を高め、業界全体を好転させていきます。100人100通りのキャリア、働き方を実現し、理想の働き方を叶えたい人を応援します。</p>
          <button class="bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-100 transition duration-300 shadow-md">
            Learn More
          </button>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="py-20">
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
      <section class="py-10 bg-gray-100">
        <div class="container mx-auto px-4">
          <div class="flex flex-col space-y-4">
            <a href="#" class="text-green-600 hover:text-green-700 text-lg">→給与情報・還元制度はこちら</a>
            <a href="https://jp.indeed.com/cmp/株式会社kops-2/jobs" class="text-green-600 hover:text-green-700 text-lg">→採用情報はこちら</a>
            <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="text-green-600 hover:text-green-700 text-lg">→応募フォームはこちら</a>
          </div>
        </div>
      </section>
  
      <!-- Representative Section -->
      <section class="py-20 bg-gray-50">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8 text-gray-800">代表挨拶</h2>
          <p class="text-xl mb-8 text-gray-600">ー エンジニアとして・・・</p>
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
  
      <!-- Company Information Section -->
      <section class="py-20 bg-white">
        <div class="container mx-auto px-4">
          <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">KOPSについて</h2>
          <div class="mb-8">
            <a href="#" class="text-green-600 hover:text-green-700 text-lg">→会社情報はこちら</a>
          </div>
          <div class="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
            <img v-for="graph in graphs" :key="graph.alt" :src="graph.src" :alt="graph.alt" class="w-full h-auto">
          </div>
          <div class="flex flex-col space-y-4">
            <a href="https://jp.indeed.com/cmp/株式会社kops-2/jobs" class="text-green-600 hover:text-green-700 text-lg">→採用情報はこちら</a>
            <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/edit" class="text-green-600 hover:text-green-700 text-lg">→応募フォームはこちら</a>
          </div>
        </div>
      </section>
  
      <!-- Employee Interview Section -->
      <section class="py-20 bg-gray-50">
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
      <section class="py-20 bg-white">
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
      <section class="py-20 bg-gray-100">
        <div class="container mx-auto px-4 text-center">
          <h2 class="text-3xl font-bold mb-8 text-gray-800">応募はこちら！</h2>
          <p class="text-xl mb-4 text-gray-600">あなたと一緒に働けることを楽しみにしております。</p>
          <p class="text-xl mb-8 text-gray-600">ぜひKOPSであなただけの「自由正社員」の形を見つけませんか</p>
          <a href="https://docs.google.com/forms/d/1R6DAChGry9UCcR37jIBMZqHbbYh5HktjKk-aFWmHQM0/" class="bg-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300">
            応募フォーム
          </a>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-800 text-white py-8">
        <div class="container mx-auto px-4">
          <div class="text-center">
            <p>&copy; 2024 KOPS</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Menu, X, Check } from 'lucide-vue-next'
  
  const isMenuOpen = ref(false)
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const features = ref([
    { title: '多様な給与制度', description: 'あなたの理想が見つかる多様な給与制度' },
    { title: '透明性の高い還元制度', description: '透明性の高い還元制度の説明...' },
    { title: 'サポート体制', description: '理想のキャリアを目指す方全のサポート体制...' }
  ])
  
  const graphs = ref([
    { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/経験年数.png', alt: '経験年数' },
    { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/リモートワーク.png', alt: 'リモートワーク率' },
    { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/エンジニア分野.png', alt: 'エンジニア分野' },
    { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/社員数.png', alt: '社員数' },
    { src: 'https://kops-data-images.s3.ap-northeast-1.amazonaws.com/単価上昇率.png', alt: '単価上昇率' }
  ])
  
  const employees = ref(['中村', '柿沼'])
  
  const selectionProcess = ref(['応募', '書類選考', '面接', '内定'])
  </script>
  
  <style scoped>
  /* スタイルは Tailwind CSS クラスで対応しているため、追加のCSSは最小限に抑えています */
  </style>