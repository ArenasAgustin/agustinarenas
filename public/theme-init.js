(function () {
  var getTheme = function () {
    var urlParams = new URLSearchParams(window.location.search);
    var urlTheme = urlParams.get("theme");
    if (urlTheme === "light" || urlTheme === "dark") return urlTheme;

    try {
      var stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") return stored;
    } catch (e) {}

    if (window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
      if (window.matchMedia("(prefers-color-scheme: light)").matches) return "light";
    }

    return "dark";
  };

  var theme = getTheme();
  var root = document.documentElement;

  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }

  try {
    localStorage.setItem("theme", theme);
  } catch (e) {}
})();
