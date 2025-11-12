  <template>
    <div class="app-container">
      <router-view />
      <FooterComponent :footer="Footer"/>
    </div>
  </template>

  <script setup>

  import Footer from '@/assets/footer.png';
  import FooterComponent from '@/components/Footer.vue';

  </script>

  <style scoped>

  .app-container{
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      justify-content: center;
  }

  </style>
