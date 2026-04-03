# Skill Registry

**Orchestrator use only.** Read this registry once per session to resolve skill paths, then pass pre-resolved skill paths directly to each sub-agent's launch prompt. Sub-agents receive the path and load the skill directly — they do NOT read this registry.

## User Skills

| Trigger | Skill | Path |
|---------|-------|------|
| When creating a pull request, opening a PR, or preparing changes for review. | branch-pr | C:/Users/agusk/.config/opencode/skills/branch-pr/SKILL.md |
| When creating a GitHub issue, reporting a bug, or requesting a feature. | issue-creation | C:/Users/agusk/.config/opencode/skills/issue-creation/SKILL.md |
| When user says "judgment day", "judgment-day", "review adversarial", "dual review", "doble review", "juzgar", "que lo juzguen". | judgment-day | C:/Users/agusk/.config/opencode/skills/judgment-day/SKILL.md |
| When user asks to create a new skill, add agent instructions, or document patterns for AI. | skill-creator | C:/Users/agusk/.config/opencode/skills/skill-creator/SKILL.md |
| When user says "update skills", "skill registry", "actualizar skills", "update registry", or after installing/removing skills. | skill-registry | C:/Users/agusk/.config/opencode/skills/skill-registry/SKILL.md |
| When user asks to discover and install agent skills. | find-skills | C:/Users/agusk/.config/opencode/skills/find-skills/SKILL.md |
| When writing Go tests, using teatest, or adding test coverage. | go-testing | C:/Users/agusk/.config/opencode/skills/go-testing/SKILL.md |
| Android Kotlin development with Coroutines, Jetpack Compose, Hilt, and MockK testing | android-kotlin | C:/Users/agusk/.config/opencode/skills/android-kotlin/SKILL.md |
| React and Next.js performance optimization guidelines from Vercel Engineering. | vercel-react-best-practices | C:/Users/agusk/.config/opencode/skills/vercel-react-best-practices/SKILL.md |

## Project Conventions

| File | Path | Notes |
|------|------|-------|
| — | — | No project convention files found |

Read the convention files listed above for project-specific patterns and rules. All referenced paths have been extracted — no need to read index files to discover more.
