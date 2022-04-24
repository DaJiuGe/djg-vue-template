<template>
  <div class="grid place-content-center w-full h-full bg-gray-200">
    <div class="w-120 py-8 -mt-24 bg-white border rounded-md shadow">
      <SystemLogo />
      <a-form v-bind="formLayout">
        <a-form-item label="Username">
          <a-input v-model:value="form.username"></a-input>
        </a-form-item>
        <a-form-item label="Password">
          <a-input v-model:value="form.password"></a-input>
        </a-form-item>
        <a-form-item v-bind="buttonLayout">
          <a-button class="w-full mt-2" type="primary" @click="handleLogin">
            Login
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
const { form, formLayout, buttonLayout, handleLogin } = useLoginForm()

function useLoginForm() {
  const form = reactive({
    username: '',
    password: ''
  })

  const formLayout = computed(() => {
    return {
      labelCol: { span: 7 },
      wrapperCol: { span: 14 }
    }
  })

  const buttonLayout = computed(() => {
    return {
      wrapperCol: { span: 14, offset: 7 }
    }
  })

  const router = useRouter()
  const handleLogin = () => {
    router.push({ name: 'home' })
  }

  return {
    form,
    formLayout,
    buttonLayout,
    handleLogin
  }
}
</script>

<style></style>
