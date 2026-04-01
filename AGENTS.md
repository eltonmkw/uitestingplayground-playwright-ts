# Repo Instructions

- Intent: this repo exists to solve the UI Testing Playground site, which is intentionally designed to expose brittle UI automation patterns such as dynamic IDs, shifting classes, hidden overlays, dialogs, and other selector or actionability traps.
- Goal: use Playwright to demonstrate stable automation techniques that keep working even when the page is tricky to test.

- Why Playwright fits this repo:
- It can target the page the way users do, with role-based and text-based locators that survive dynamic IDs better than raw CSS or XPath.
- It has built-in auto-waiting and actionability checks, which helps with hidden layers, intercepted clicks, and elements that are present but not yet usable.
- It handles browser events such as dialogs, popups, and navigation cleanly inside the test flow.
- It supports traces and an HTML report, which are useful when a flaky scenario needs evidence instead of guesswork.

- When writing a new `.spec.ts` file:
- Put it under `tests/` and name it after the playground scenario it covers.
- Keep one scenario per file unless two checks are tightly coupled to the same page behavior.
- Start from `page.goto()` with a path relative to `baseURL`, then interact using user-facing locators first.
- Prefer assertions that prove the scenario outcome, not just that a click happened.
- Handle dialogs, visibility changes, navigation, and retries explicitly when the page behavior requires them.
- Refactor codegen output before keeping it so the final spec is readable and stable.

- Use the Playwright report as a debugging guide:
- The report should confirm which scenario failed, how long it took, and whether the failure happened during navigation, locating, clicking, or assertion.
- When retries happen, traces are the first thing to inspect because they show the DOM state, action timeline, console output, and network activity around the failure.
- If a locator is brittle, prefer replacing it with `getByRole()`, `getByText()`, or a more user-facing locator before adding complexity.
- If an action fails on a tricky page, check actionability in the report or trace before adding waits. Playwright is usually telling you the element was hidden, covered, detached, or not ready.

- Use `npm test` as the default verification command.
- Use `npm run test:list` to inspect discovered tests before broader changes.
- Use `npm run test:ui`, `npm run test:headed`, or `npm run test:debug` only when interactive debugging is needed.
- Use `npm run codegen` to record a new playground flow, then refactor the generated test before keeping it.
- Use `npm run test:report` after a run when the HTML report is needed for debugging or review.
- Keep one UI Testing Playground scenario per spec file in `tests/`.
- Prefer role-based or text-based locators over brittle CSS selectors when the page supports them.
- Avoid hard waits; use Playwright assertions and built-in waiting instead.
- Keep `baseURL` pointed at `http://www.uitestingplayground.com` unless a task explicitly changes the target.
- Run `npm test` after modifying tests or Playwright config.
