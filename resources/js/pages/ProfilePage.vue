<script setup>
import { nextTick, reactive, ref } from 'vue'

const props = defineProps({ t: { type: Object, required: true }, locale: { type: String, required: true } })

const form = reactive({ name: '', email: '', subject: '', message: '', website: '', privacy: false })
const loading = ref(false)
const result = ref('')
const resultType = ref('success')
const formRef = ref(null)
const legacyProfile = ref(false)

const required = (value) => Boolean(value) || props.t.required
const validEmail = (value) => /^\S+@\S+\.\S+$/.test(value) || props.t.validEmail

async function submitContact() {
  if (!form.name || !/^\S+@\S+\.\S+$/.test(form.email) || !form.subject || !form.message || !form.privacy) {
    resultType.value = 'error'
    result.value = 'validation'
    return
  }

  loading.value = true
  result.value = ''
  try {
    const token = document.querySelector('meta[name="csrf-token"]')?.content
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-CSRF-TOKEN': token },
      body: JSON.stringify(form),
    })
    if (!response.ok) throw new Error('Contact request failed')
    Object.assign(form, { name: '', email: '', subject: '', message: '', website: '', privacy: false })
    await nextTick()
    formRef.value?.resetValidation()
    resultType.value = 'success'
    result.value = 'success'
  } catch {
    resultType.value = 'error'
    result.value = 'error'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <main>
    <section class="hero-section">
      <div class="site-width hero-grid">
        <div class="hero-content">
          <p class="eyebrow">{{ t.eyebrow }}</p>
          <h1>{{ t.heroTitle }}</h1>
          <p class="hero-lead">{{ t.heroText }}</p>
          <div class="hero-actions">
            <v-btn color="primary" size="large" href="#contact" prepend-icon="mdi-send-outline">{{ t.contactMe }}</v-btn>
            <v-btn variant="outlined" size="large" href="/resumen-curricular.pdf?v2" target="_blank" prepend-icon="mdi-file-pdf-box">{{ t.downloadCv }}</v-btn>
            <v-btn variant="text" size="large" prepend-icon="mdi-card-account-details-outline" @click="legacyProfile = true">{{ t.detailedProfile }}</v-btn>
          </div>
          <div class="hero-meta">
            <span><v-icon icon="mdi-map-marker-outline" />{{ t.based }}</span>
            <span><v-icon icon="mdi-circle-medium" color="success" />{{ t.available }}</span>
          </div>
        </div>
        <div class="portrait-wrap">
          <img :src="'/eurox.jpg'" alt="Euro Dario Fuenmayor Contreras" width="420" height="420">
          <div class="portrait-caption">
            <strong>Euro Dario Fuenmayor</strong>
            <span>Senior Developer</span>
          </div>
        </div>
      </div>
    </section>

    <section class="metrics-strip">
      <div class="site-width metrics-grid">
        <div><strong>{{ t.yearsProgramming }}</strong><span>{{ t.yearsProgrammingLabel }}</span></div>
        <div><strong>{{ t.yearsWeb }}</strong><span>{{ t.yearsWebLabel }}</span></div>
        <div><strong>ServiceNow</strong><span>Certified Application Developer</span></div>
        <div><strong>Laravel · Vue</strong><span>{{ t.metricWeb }}</span></div>
        <div><strong>{{ t.metricEmbedded }}</strong><span>{{ t.metricEmbeddedLabel }}</span></div>
        <div><strong>{{ t.metricGames }}</strong><span>{{ t.metricGamesLabel }}</span></div>
      </div>
    </section>

    <section id="profile" class="content-section site-width intro-grid">
      <div>
        <p class="section-kicker">{{ t.profileIntro }}</p>
        <h2>{{ t.profileIntro }}</h2>
      </div>
      <p class="section-lead">{{ t.profileIntroText }}</p>
    </section>

    <section class="content-section site-width">
      <div class="section-heading">
        <p class="section-kicker">01</p>
        <h2>{{ t.specialties }}</h2>
      </div>
      <div class="expertise-grid">
        <article class="expertise-card"><v-icon icon="mdi-cloud-braces" /><h3>{{ t.serviceNowTitle }}</h3><p>{{ t.serviceNowText }}</p></article>
        <article class="expertise-card"><v-icon icon="mdi-code-tags" /><h3>{{ t.webTitle }}</h3><p>{{ t.webText }}</p></article>
        <article class="expertise-card"><v-icon icon="mdi-integrated-circuit-chip" /><h3>{{ t.embeddedTitle }}</h3><p>{{ t.embeddedText }}</p></article>
        <article class="expertise-card"><v-icon icon="mdi-creation-outline" /><h3>{{ t.aiTitle }}</h3><p>{{ t.aiText }}</p></article>
        <article class="expertise-card game-card"><v-icon icon="mdi-controller-classic-outline" /><h3>{{ t.gamesTitle }}</h3><p>{{ t.gamesText }}</p></article>
      </div>
    </section>

    <section id="experience" class="content-section site-width split-section">
      <div>
        <div class="section-heading"><p class="section-kicker">02</p><h2>{{ t.experience }}</h2></div>
        <div class="timeline">
          <article><span class="timeline-dot"></span><p class="period">{{ t.currentPeriod }}</p><h3>{{ t.currentRole }}</h3><strong>{{ t.currentCompany }}</strong><p>{{ t.currentDetail }}</p></article>
          <article><span class="timeline-dot"></span><p class="period">{{ t.academicPeriod }}</p><h3>{{ t.academicRole }}</h3><p>{{ t.academicDetail }}</p></article>
          <article><span class="timeline-dot"></span><p class="period">{{ t.independentPeriod }}</p><h3>{{ t.independentRole }}</h3><p>{{ t.independentDetail }}</p></article>
        </div>
      </div>
      <aside class="credentials-panel">
        <div class="section-heading"><p class="section-kicker">03</p><h2>{{ t.education }}</h2></div>
        <div class="credential"><v-icon icon="mdi-certificate-outline" /><div><strong>{{ t.certification }}</strong><span>ServiceNow</span></div></div>
        <div class="credential"><v-icon icon="mdi-school-outline" /><div><strong>{{ t.degreeMsc }}</strong><span>Universidad Rafael Belloso Chacín</span></div></div>
        <div class="credential"><v-icon icon="mdi-school-outline" /><div><strong>{{ t.degreeBsc }}</strong><span>Universidad Rafael Urdaneta</span></div></div>
        <v-divider class="my-6" />
        <p>{{ t.stackBuilt }}</p>
        <p>{{ t.gameInterest }}</p>
      </aside>
    </section>

    <section id="contact" class="contact-section">
      <div class="site-width contact-grid">
        <div class="contact-copy">
          <p class="section-kicker">04 · {{ t.contact }}</p>
          <h2>{{ t.contactTitle }}</h2>
          <p>{{ t.contactIntro }}</p>
          <div class="direct-contact"><span>{{ t.directContact }}</span><a href="mailto:development@eurofuenmayor.es">development@eurofuenmayor.es</a></div>
        </div>
        <v-form ref="formRef" class="contact-form" @submit.prevent="submitContact">
          <div class="form-row">
            <v-text-field v-model="form.name" :label="t.name" :rules="[required]" maxlength="100" variant="outlined" />
            <v-text-field v-model="form.email" :label="t.email" :rules="[required, validEmail]" maxlength="160" type="email" variant="outlined" />
          </div>
          <v-text-field v-model="form.subject" :label="t.subject" :rules="[required]" maxlength="160" variant="outlined" />
          <v-textarea v-model="form.message" :label="t.message" :rules="[required]" maxlength="3000" counter rows="5" variant="outlined" />
          <input v-model="form.website" class="honeypot" tabindex="-1" autocomplete="off" aria-hidden="true">
          <v-checkbox v-model="form.privacy" :label="t.privacy" hide-details class="privacy-check" />
          <v-alert v-if="result" :type="resultType" variant="tonal" class="mb-4">{{ result === 'success' ? t.success : t.error }}</v-alert>
          <v-btn type="submit" color="primary" size="large" :loading="loading" prepend-icon="mdi-send-outline">{{ loading ? t.sending : t.send }}</v-btn>
        </v-form>
      </div>
    </section>

    <v-dialog v-model="legacyProfile" max-width="980" scrollable>
      <v-card class="legacy-profile-card">
        <v-card-actions class="legacy-profile-actions"><v-spacer /><v-btn icon="mdi-close" :aria-label="t.closeProfile" @click="legacyProfile = false" /></v-card-actions>
        <div class="legacy-profile-header">
          <img :src="'/eurox.jpg'" alt="Euro Dario Fuenmayor Contreras">
          <h2>Euro Dario Fuenmayor Contreras</h2>
          <h3>Senior Developer</h3>
          <p>{{ t.legacyEducation }}</p>
          <p>{{ t.legacyExperience }}</p>
        </div>
        <div class="legacy-profile-row technology-row"><span class="technology-icons"><v-icon class="laravel-icon" icon="mdi-laravel" /><v-icon class="vue-icon" icon="mdi-vuejs" /><v-icon class="vuetify-icon" icon="mdi-vuetify" /></span><span>{{ t.legacyBuilt }}</span></div>
        <div class="legacy-profile-row">{{ t.legacyLanguages }}</div>
        <div class="legacy-profile-row">{{ t.legacyCertified }}</div>
        <div class="legacy-profile-row">{{ t.legacyAi }}</div>
        <div class="legacy-profile-row">{{ t.legacyFrameworks }}</div>
        <div class="legacy-profile-row">{{ t.legacyDatabases }}</div>
        <div class="legacy-profile-row">{{ t.legacyEmbedded }}</div>
        <div class="legacy-profile-row">{{ t.legacyProfessor }}</div>
        <div class="legacy-profile-row">{{ t.legacyGames }}</div>
      </v-card>
    </v-dialog>
  </main>
</template>
