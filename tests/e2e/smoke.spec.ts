import { expect, test } from "@playwright/test";

type Route = { path: string; lang: "en" | "es"; translatable: boolean };

// `translatable` routes expose hreflang alternates; the CV pages do not.
const routes: Route[] = [
  { path: "/", lang: "en", translatable: true },
  { path: "/cv", lang: "en", translatable: false },
  { path: "/privacy", lang: "en", translatable: true },
  { path: "/es/", lang: "es", translatable: true },
  { path: "/es/cv", lang: "es", translatable: false },
  { path: "/es/privacy", lang: "es", translatable: true },
];

test.describe("routes", () => {
  for (const { path, lang, translatable } of routes) {
    test(`${path} responds 200 with lang=${lang}`, async ({ page }) => {
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      await expect(page.locator("html")).toHaveAttribute("lang", lang);

      if (translatable) {
        for (const hreflang of ["en", "es", "x-default"]) {
          await expect(
            page.locator(`link[rel="alternate"][hreflang="${hreflang}"]`),
          ).toHaveCount(1);
        }
      }
    });
  }

  test("unknown route returns 404 and renders the 404 page", async ({ page }) => {
    const response = await page.goto("/this-route-does-not-exist");
    expect(response?.status()).toBe(404);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Page not found",
    );
  });
});

test("theme choice persists after reload", async ({ page }) => {
  await page.goto("/");
  const toggle = page.locator("#theme-toggle");
  const readTheme = () =>
    page.evaluate(() => ({
      dataTheme: document.documentElement.dataset.theme ?? null,
      stored: localStorage.getItem("theme"),
    }));

  const initial = (await readTheme()).dataTheme;
  await toggle.click();
  const toggled = await readTheme();
  expect(toggled.dataTheme).not.toBe(initial);
  expect(toggled.stored).toBe(toggled.dataTheme === "light" ? "light" : "dark");

  await page.reload();
  expect(await readTheme()).toEqual(toggled);

  await toggle.click();
  const restored = await readTheme();
  expect(restored.dataTheme).toBe(initial);
});

test("internal links resolve without errors", async ({ page, request }) => {
  const hrefs = new Set<string>();
  for (const { path } of routes) {
    await page.goto(path);
    const found = await page
      .locator('a[href^="/"]')
      .evaluateAll((els) => els.map((el) => el.getAttribute("href") ?? ""));
    for (const href of found) {
      hrefs.add(href.split("#")[0].split("?")[0] || "/");
    }
  }

  expect(hrefs.size).toBeGreaterThan(0);
  for (const href of hrefs) {
    const response = await request.get(href);
    expect(response.status(), `link ${href}`).toBeLessThan(400);
  }
});
