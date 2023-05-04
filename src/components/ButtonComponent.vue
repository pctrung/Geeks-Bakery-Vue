<script setup lang="ts">
defineProps<{
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}>()
</script>

<template>
  <button
    :type="type ?? 'button'"
    :class="[
      'btn',
      {
        'btn--primary': variant === 'primary',
        'btn--secondary': variant === 'secondary',
        'btn--sm': size === 'sm',
        'btn--md': size === 'md',
        'btn--lg': size === 'lg'
      }
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
@import url('@assets/scss/components/button.scss');
</style>
