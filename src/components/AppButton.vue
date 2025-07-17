<script setup lang="ts">
interface AppButtonProps {
  bgColorParam: string
  bgHoverColorParam: string
  textColorParam: string
}

const props = defineProps<AppButtonProps>()

const emit = defineEmits(['click'])
</script>

<template>
  <button
    class="btn"
    :style="{
      '--bgHoverColorParam': `var(--${props.bgHoverColorParam})`,
      background: `var(--${props.bgColorParam})`,
      color: `var(--${props.textColorParam})`,
    }"
    @click="emit('click')"
  >
    <slot />
    <slot name="icon" />
  </button>
</template>

<style scoped>
.btn:hover {
  background: var(--bgHoverColorParam) !important;
}

.btn {
  transition: 0.3s linear;

  border: 0;
  font-family: var(--fond-secondary);
  font-size: 15px;
  font-weight: 500;
  border-radius: 10px;
  padding: 10px 25px;
  flex-shrink: 0;
  cursor: pointer;
}
</style>
