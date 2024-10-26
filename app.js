// 选择页面中第一个符合选择器 .scroll-indicator .progress 的元素
const indicator = document.querySelector('.scroll-indicator .progress');

window.addEventListener('scroll', () => {
  // 获取页面当前滚动的高度（从顶部开始向下的距离）
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  // 计算页面的总滚动高度（ 返回整个文档的高度 - 返回视口的高度）
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / scrollHeight) * 100;
  // 将计算得出的滚动百分比值应用于进度条的宽度
  indicator.style.width = `${scrolled}%`;
});
