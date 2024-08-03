import { ref, onMounted, onUnmounted, watch } from 'vue';

export function useScrollFixed(threshold = 64) {
  const isFixed = ref(false);

  const handleScroll = () => {
    isFixed.value = window.scrollY > threshold;
  };

  watch(isFixed, (newValue) => {
    document.body.classList.toggle('pt-16', newValue);
  });

  onMounted(() => {
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  });

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
  });

  return isFixed;
}