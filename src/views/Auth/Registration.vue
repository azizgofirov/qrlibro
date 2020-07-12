<template>
  <section>
    <div class="card register">
      <h1>{{ $t('auth.register.register') }}</h1>
      <div class="form">
        <label>
          <BaseIcon name="search" width="30" height="30" />
          <input class="-shadow" type="text" v-model="name" :placeholder="$t('auth.register.name')" />
        </label>
        <label>
          <BaseIcon name="search" width="30" height="30" />
          <input
            class="-shadow"
            type="search"
            v-model="email"
            :placeholder="$t('auth.register.email')"
          />
        </label>
        <label>
          <BaseIcon name="search" width="30" height="30" />
          <input
            class="-shadow"
            type="text"
            v-model="password"
            :placeholder="$t('auth.register.password')"
          />
        </label>
        <label>
          <BaseIcon name="search" width="30" height="30" />
          <input
            class="-shadow"
            type="search"
            v-model="confirmPassword"
            :placeholder="$t('auth.register.confirmPassword')"
          />
        </label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Registration'
}
</script>

<style scoped>
.register {
  max-width: 500px;
}
.section {
  display: flex;
  justify-content: center;
}
</style>
