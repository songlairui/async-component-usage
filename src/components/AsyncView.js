export default () => ({
  name: "AsyncView",
  component: new Promise((resolve) => {
    const $script = document.createElement("script");
    $script.src = "http://localhost:5000/cc.min.js";
    let tmp;
    window.__cc = function(x) {
      console.error("hi", x);
      tmp = x;
      resolve(tmp);
    };
    document.head.appendChild($script);
  }),
  loading: { render: (h) => h("h1", "Loading") },
  //   error: () => <div>Error</div>,

  delay: 200,
  timeout: 3000,
});
