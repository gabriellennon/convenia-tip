<script setup lang="ts">
import type { ApolloError } from '@apollo/client';

    defineProps<{ error: ApolloError }>()

  const reloadWindow = () => {
    location.reload();
  }
</script>

<template>
    <div class="c-tip_error_request">
        <h1>Ops! Algo deu errado! 😵‍💫</h1>
        <Button @click="reloadWindow">
            Recarregar página
        </Button>
        <p>{{ error }}</p>
    </div>
</template>

<style scoped>
    .c-tip_error_request {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
</style>
