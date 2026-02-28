/**
 * GatoHogar — Lógica JavaScript compartida con Vue.js
 * Navbar, footer y componentes comunes
 */

// ============ CONFIGURACIÓN DE TAILWIND (CDN) ============
if (typeof tailwind !== 'undefined') {
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          negro: '#1C1410', marron: '#3D2E25', oxido: '#C4520A',
          ambar: '#E07B2A', miel: '#F0A84E', durazno: '#F5C98A',
          crema: '#FBF0DC', blanco: '#FDFAF5', gris: '#9E8E83'
        },
        fontFamily: {
          lilita: ['"Lilita One"', 'cursive'],
          nunito: ['"Nunito"', 'sans-serif'],
          marker: ['"Permanent Marker"', 'cursive']
        }
      }
    }
  };
}

// ============ APLICACIÓN VUE GLOBAL (NAVBAR + FOOTER) ============
const { createApp } = Vue;

// Datos globales del sitio
const datosSitio = {
  nombre: 'GatoHogar',
  eslogan: 'Adoptá · No compres',
  anio: 2026,
};

// Componente navbar reutilizable
const Navbar = {
  data() {
    const scriptTag = document.querySelector('script[src*="globales.js"]');
    const prefijoRuta = scriptTag && scriptTag.getAttribute('src').startsWith('../') ? '../' : '';
    const pathSegments = window.location.pathname.split('/');
    const paginaActual = pathSegments.pop() || 'index.html';
    const carpetaActual = pathSegments.pop() || '';
    return {
      menuAbierto: false,
      paginaActual,
      carpetaActual,
      prefijoRuta,
    };
  },
  methods: {
    // Alterna el menú móvil
    alternarMenu() {
      this.menuAbierto = !this.menuAbierto;
    },
    // Verifica si el link es el activo
    esActivo(carpeta) {
      if (carpeta === 'index.html') return this.paginaActual === 'index.html' && this.carpetaActual !== 'adopcion' && this.carpetaActual !== 'catalogo' && this.carpetaActual !== 'cuidados' && this.carpetaActual !== 'historias' && this.carpetaActual !== 'ayuda' && this.carpetaActual !== 'juego' && this.carpetaActual !== 'contacto';
      return this.carpetaActual === carpeta;
    },
  },
  template: `
    <div>
      <!-- Barra marquee -->
      <div class="bg-negro text-miel py-2.5 overflow-hidden whitespace-nowrap relative z-10">
        <div class="inline-block animate-[marquee_22s_linear_infinite]">
          <span class="font-marker text-[16px] mx-8 text-ambar">🐈</span><span class="font-marker text-[16px] mx-8">Adoptá · No compres</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">🐾</span><span class="font-marker text-[16px] mx-8">Más de 200 gatitos esperándote</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">🐱</span><span class="font-marker text-[16px] mx-8">La adopción salva vidas</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">❤️</span><span class="font-marker text-[16px] mx-8">Cada gato merece un hogar</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">🐈‍⬛</span><span class="font-marker text-[16px] mx-8">Adoptá · No compres</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">🐾</span><span class="font-marker text-[16px] mx-8">Más de 200 gatitos esperándote</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">🐱</span><span class="font-marker text-[16px] mx-8">La adopción salva vidas</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">❤️</span><span class="font-marker text-[16px] mx-8">Cada gato merece un hogar</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">🐈</span><span class="font-marker text-[16px] mx-8">Adoptá · No compres</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">🐾</span><span class="font-marker text-[16px] mx-8">Más de 200 gatitos esperándote</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">🐱</span><span class="font-marker text-[16px] mx-8">La adopción salva vidas</span>
          <span class="font-marker text-[16px] mx-8 text-ambar">❤️</span><span class="font-marker text-[16px] mx-8">Cada gato merece un hogar</span>
        </div>
      </div>

      <!-- Barra de navegación -->
      <nav class="bg-blanco border-b-[4px] border-negro py-4 px-5 md:px-10 flex items-center justify-between sticky top-0 z-[100] shadow-[4px_4px_0_#1C1410]">
        <a :href="prefijoRuta + 'index.html'" class="font-lilita text-[28px] text-oxido no-underline after:content-['\\00a0🐱']">GatoHogar</a>

        <button class="md:hidden bg-transparent border-[3px] border-negro rounded-[10px] px-3 py-2 text-[20px] cursor-pointer text-negro" @click="alternarMenu" aria-label="Menú">☰</button>

        <ul class="hidden md:flex gap-2 list-none items-center m-0 p-0" :class="{ '!flex absolute top-full left-0 right-0 flex-col bg-blanco border-b-[4px] border-negro p-5 gap-1 shadow-[0_6px_0_#1C1410]': menuAbierto }">
          <li><a :href="prefijoRuta + 'adopcion/index.html'" class="font-nunito font-extrabold text-[14px] text-marron no-underline py-2 px-4 border-[3px] border-transparent rounded-full transition-all duration-150 inline-block hover:border-negro hover:bg-miel hover:-rotate-2" :class="{ 'border-negro bg-miel -rotate-2': esActivo('adopcion') }">Adoptá</a></li>
          <li><a :href="prefijoRuta + 'catalogo/index.html'" class="font-nunito font-extrabold text-[14px] text-marron no-underline py-2 px-4 border-[3px] border-transparent rounded-full transition-all duration-150 inline-block hover:border-negro hover:bg-miel hover:-rotate-2" :class="{ 'border-negro bg-miel -rotate-2': esActivo('catalogo') }">Gatálogo</a></li>
          <li><a :href="prefijoRuta + 'cuidados/index.html'" class="font-nunito font-extrabold text-[14px] text-marron no-underline py-2 px-4 border-[3px] border-transparent rounded-full transition-all duration-150 inline-block hover:border-negro hover:bg-miel hover:-rotate-2" :class="{ 'border-negro bg-miel -rotate-2': esActivo('cuidados') }">Cuidados</a></li>
          <li><a :href="prefijoRuta + 'historias/index.html'" class="font-nunito font-extrabold text-[14px] text-marron no-underline py-2 px-4 border-[3px] border-transparent rounded-full transition-all duration-150 inline-block hover:border-negro hover:bg-miel hover:-rotate-2" :class="{ 'border-negro bg-miel -rotate-2': esActivo('historias') }">Historias</a></li>
          <li><a :href="prefijoRuta + 'ayuda/index.html'" class="font-nunito font-extrabold text-[14px] text-marron no-underline py-2 px-4 border-[3px] border-transparent rounded-full transition-all duration-150 inline-block hover:border-negro hover:bg-miel hover:-rotate-2" :class="{ 'border-negro bg-miel -rotate-2': esActivo('ayuda') }">Ayuda</a></li>
          <li><a :href="prefijoRuta + 'juego/index.html'" class="font-nunito font-extrabold text-[14px] text-marron no-underline py-2 px-4 border-[3px] border-transparent rounded-full transition-all duration-150 inline-block hover:border-negro hover:bg-miel hover:-rotate-2" :class="{ 'border-negro bg-miel -rotate-2': esActivo('juego') }">¡Juega!</a></li>
          <li class="hidden sm:block"><a :href="prefijoRuta + 'catalogo/index.html'" class="font-nunito font-black text-[14px] text-blanco bg-oxido no-underline py-2 px-5 border-[3px] border-negro rounded-full shadow-[3px_3px_0_#1C1410] transition-all duration-150 inline-block hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[5px_5px_0_#1C1410] hover:bg-ambar hover:text-negro">¡Quiero adoptar! 🐾</a></li>
        </ul>
      </nav>
    </div>
  `,
};

// Componente footer reutilizable
const Footer = {
  data() {
    const scriptTag = document.querySelector('script[src*="globales.js"]');
    const prefijoRuta = scriptTag && scriptTag.getAttribute('src').startsWith('../') ? '../' : '';
    return { prefijoRuta };
  },
  template: `
    <footer class="bg-negro pt-[60px] pb-8 px-6 md:px-10 text-crema md:pt-12 md:px-6">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
        <div>
          <div class="font-lilita text-[36px] text-miel mb-3">GatoHogar 🐱</div>
          <p class="text-[14px] text-gris leading-relaxed mb-5 max-w-[260px]">Conectamos gatos con sus familias para siempre. Porque cada gatito merece un hogar lleno de amor, snacks y sol en la ventana.</p>
          <div class="flex gap-2.5">
            <a href="#" class="w-10 h-10 border-[3px] border-gris rounded-[10px] flex items-center justify-center text-[18px] cursor-pointer transition-all duration-150 no-underline hover:border-miel hover:bg-miel hover:scale-110 hover:-rotate-6">📸</a>
            <a href="#" class="w-10 h-10 border-[3px] border-gris rounded-[10px] flex items-center justify-center text-[18px] cursor-pointer transition-all duration-150 no-underline hover:border-miel hover:bg-miel hover:scale-110 hover:-rotate-6">🐦</a>
            <a href="#" class="w-10 h-10 border-[3px] border-gris rounded-[10px] flex items-center justify-center text-[18px] cursor-pointer transition-all duration-150 no-underline hover:border-miel hover:bg-miel hover:scale-110 hover:-rotate-6">📘</a>
            <a href="#" class="w-10 h-10 border-[3px] border-gris rounded-[10px] flex items-center justify-center text-[18px] cursor-pointer transition-all duration-150 no-underline hover:border-miel hover:bg-miel hover:scale-110 hover:-rotate-6">🎵</a>
          </div>
        </div>
        <div>
          <h4 class="font-nunito font-black text-[14px] tracking-widest uppercase text-miel mb-4">Adoptar</h4>
          <ul class="list-none p-0 m-0">
            <li class="mb-2"><a :href="prefijoRuta + 'catalogo/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Ver gatitos</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'adopcion/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Cómo funciona</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'adopcion/requisitos.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Requisitos</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'adopcion/proceso.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Paso a paso</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'contacto/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-nunito font-black text-[14px] tracking-widest uppercase text-miel mb-4">Ayudar</h4>
          <ul class="list-none p-0 m-0">
            <li class="mb-2"><a :href="prefijoRuta + 'ayuda/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Donar</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'ayuda/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Voluntariado</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'contacto/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Reportar un gato</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'ayuda/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Apadrinar</a></li>
          </ul>
        </div>
        <div>
          <h4 class="font-nunito font-black text-[14px] tracking-widest uppercase text-miel mb-4">GatoHogar</h4>
          <ul class="list-none p-0 m-0">
            <li class="mb-2"><a :href="prefijoRuta + 'historias/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Historias</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'juego/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">¡Juega!</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'contacto/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Contacto</a></li>
            <li class="mb-2"><a :href="prefijoRuta + 'creditos/index.html'" class="text-gris no-underline text-[14px] font-semibold transition-colors duration-150 hover:text-blanco">Créditos</a></li>
          </ul>
        </div>
      </div>
      <div class="border-t border-marron pt-6 flex justify-between items-center gap-3 flex-wrap">
        <p class="text-[13px] text-gris m-0">© \${new Date().getFullYear()} GatoHogar · Hecho con <span class="text-oxido">❤️</span> por personas que aman a los gatos</p>
        <p class="text-[13px] text-gris m-0">Adoptá · No compres 🐾</p>
      </div>
    </footer>
  `,
};

// Componente de newsletter reutilizable
const Newsletter = {
  data() {
    return {
      correo: '',
      enviado: false,
    };
  },
  methods: {
    // Simula el envío del formulario de newsletter
    suscribirse() {
      if (this.correo && this.correo.includes('@')) {
        this.enviado = true;
        this.correo = '';
        setTimeout(() => { this.enviado = false; }, 4000);
      }
    },
  },
  template: `
    <section class="bg-miel border-y-[4px] border-negro py-[72px] px-10 text-center relative overflow-hidden before:content-['📬'] before:absolute before:text-[260px] before:opacity-5 before:-left-10 before:-top-10 before:pointer-events-none">
      <h2 class="font-lilita text-[clamp(28px,4vw,48px)] text-negro mb-3">¿Querés saber cuando llegan nuevos gatitos? 📬</h2>
      <p class="text-[16px] text-marron font-semibold mb-9">Suscribite y sé el primero en enterarte. No spam, solo gatitos.</p>
      <div v-if="!enviado" class="flex gap-3 justify-center flex-wrap">
        <input
          class="w-[300px] max-w-full border-[4px] border-negro rounded-[14px] px-[22px] py-[14px] font-nunito text-[16px] font-bold bg-blanco text-negro shadow-[4px_4px_0_#1C1410] outline-none placeholder:text-gris focus:bg-crema"
          type="email"
          v-model="correo"
          placeholder="tu@email.com"
          @keyup.enter="suscribirse"
        >
        <button class="bg-oxido text-blanco border-[4px] border-negro rounded-2xl px-7 py-3.5 font-nunito font-black text-[16px] cursor-pointer shadow-[5px_5px_0_#1C1410] transition-all duration-150 inline-block hover:-translate-x-[3px] hover:-translate-y-[3px] hover:shadow-[8px_8px_0_#1C1410] hover:bg-ambar hover:text-negro" @click="suscribirse">¡Avisame! 🐾</button>
      </div>
      <div v-else class="font-nunito font-black text-[24px] text-negro">
        ¡Listo! Te avisamos cuando lleguen nuevos gatitos 🐾✨
      </div>
    </section>
  `,
};

// ============ AUTO-INICIALIZACIÓN (OPCIONAL) ============
// Si el HTML tiene un div#app y no se define un script de vista específico, 
// esta lógica inicializa los componentes globales automáticamente.
document.addEventListener('DOMContentLoaded', () => {
  // Solo actuamos si existe #app y no hay una bandera para evitar el auto-inicio
  if (document.getElementById('app') && !window.evitarAutoInicio) {
    const { createApp } = Vue;
    createApp({
      components: {
        'componente-navbar': Navbar,
        'componente-footer': Footer,
        'componente-newsletter': Newsletter,
      },
    }).mount('#app');
  }
});
