<template>
  <div class="grid place-content-center w-full h-full bg-gray-200">
    <div class="w-120 py-8 -mt-24 bg-white border rounded-md shadow">
      <SystemLogo />
      <a-form
        v-bind="formLayout"
        :model="formState"
        :rules="formRules"
        autocomplete="off"
        @finish="handleLogin"
      >
        <a-form-item label="Username" name="username">
          <a-input v-model:value="formState.username"></a-input>
        </a-form-item>
        <a-form-item label="Password" name="password">
          <a-input-password
            v-model:value="formState.password"
          ></a-input-password>
        </a-form-item>
        <a-form-item v-bind="buttonLayout">
          <a-button class="w-full mt-2" type="primary" html-type="submit">
            Login
          </a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Rule } from 'ant-design-vue/es/form'

const { formState, formRules, formLayout, buttonLayout, handleLogin } =
  useLoginForm()

function useLoginForm() {
  const formState = reactive({
    username: '',
    password: ''
  })

  const formRules: Record<string, Rule[]> = {
    username: [
      {
        required: true,
        trigger: 'change',
        message: 'Please input username'
      }
    ],
    password: [
      {
        required: true,
        trigger: 'change',
        message: 'Please input password'
      }
    ]
  }

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
    formState,
    formRules,
    formLayout,
    buttonLayout,
    handleLogin
  }
}
</script>

<style></style>
