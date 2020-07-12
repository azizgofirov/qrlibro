<template>
  <section class="section">
    <div class="card login">
      <h2>{{ $t('auth.login.login_into_your_cabinet') }}</h2>
      <div class="form">
        <label>
          <BaseIcon name="search" width="30" height="30" />
          <input class="-shadow" type="text" v-model="email" :placeholder="$t('auth.login.email')" />
        </label>
        <label>
          <BaseIcon name="search" width="30" height="30" />
          <input
            class="-shadow"
            type="password"
            v-model="password"
            :placeholder="$t('auth.login.password')"
          />
        </label>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.login {
  max-width: 500px;
}
.section {
  display: flex;
  justify-content: center;
}
</style>
