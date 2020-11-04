import component from "@/cc.vue";

export function effect() {
  if (window.__cc) {
    window.__cc(component);
  }
  return component;
}
effect();
