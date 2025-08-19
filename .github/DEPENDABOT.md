# Dependabot Configuration Documentation

This repository is configured with Dependabot for automatic dependency management. The configuration is optimized for JavaScript/TypeScript projects using modern web development frameworks.

## Configuration Overview

### 📦 Package Ecosystems

- **npm**: Monitors JavaScript/TypeScript dependencies in `package.json`
- **github-actions**: Monitors GitHub Actions workflow dependencies

### ⏰ Update Schedule

- **Frequency**: Weekly updates every Monday
- **Time**: 09:00 AM (npm), 10:00 AM (GitHub Actions)
- **Timezone**: America/Argentina/Cordoba
- **PR Limit**: 5 PRs for npm, 3 PRs for GitHub Actions

### 🏷️ Automatic Labels

All Dependabot PRs are automatically labeled with:
- `dependencies` - General dependency update
- `npm` or `github-actions` - Specific ecosystem
- `automated` - Indicates automated update

### 👤 Assignment & Reviews

- **Auto-assigned**: @ArenasAgustin
- **Reviewers**: @ArenasAgustin (configurable)

## 🎯 Intelligent Dependency Grouping

Dependencies are grouped by category to reduce PR noise and make reviews more manageable:

### Core Framework Groups

| Group | Description | Patterns |
|-------|-------------|----------|
| **astro** | Astro framework and integrations | `astro*`, `@astrojs/*` |
| **typescript** | TypeScript and type definitions | `typescript`, `@types/*`, `ts-*` |
| **tailwind** | Tailwind CSS and plugins | `tailwindcss`, `@tailwindcss/*` |
| **react** | React ecosystem | `react`, `react-*`, `@react*` |
| **vue** | Vue.js ecosystem | `vue`, `vue-*`, `@vue/*` |
| **nextjs** | Next.js framework | `next`, `@next/*` |

### Development Tools Groups

| Group | Description | Patterns |
|-------|-------------|----------|
| **linting** | ESLint, Prettier, etc. | `eslint*`, `prettier*` |
| **testing** | Jest, Vitest, Cypress, Playwright | `jest*`, `vitest*`, `cypress*`, `playwright*` |
| **build-tools** | Vite, Webpack, Rollup | `vite*`, `webpack*`, `rollup*`, `esbuild` |
| **deployment** | Vercel, Netlify | `@vercel/*`, `@netlify/*` |

## 🔒 Security & Stability

### Major Version Protection

Major version updates are **ignored** for critical dependencies to prevent breaking changes:

- **Astro**: Requires manual review for major updates
- **TypeScript**: Manual review for major language changes
- **Tailwind CSS**: Manual review for major API changes
- **Node.js types**: Manual review for major Node.js changes

### Security Updates

- Security vulnerabilities are automatically prioritized
- High-severity vulnerabilities trigger immediate updates
- All security updates bypass grouping rules

## 🔧 Commit & PR Configuration

### Commit Messages

- **Format**: `chore(deps): update dependency-name to version`
- **Development deps**: `chore(deps-dev): update dev-dependency-name to version`
- **Scope**: Includes dependency scope information

### Pull Request Settings

- **Branch naming**: Uses `/` separator for cleaner branch names
- **Rebase strategy**: Automatic rebasing when conflicts occur
- **Auto-merge**: Disabled (requires manual review)

## 🚀 Usage for New Projects

This configuration is designed to be **reusable** for any JavaScript/TypeScript project. To use in a new repository:

1. Copy `.github/dependabot.yml` to your project
2. Update the assignees and reviewers with your GitHub username
3. Adjust timezone if needed
4. Modify grouping patterns based on your tech stack
5. Update ignore rules based on your critical dependencies

### Supported Project Types

- ✅ **Astro** projects (current setup)
- ✅ **React** applications
- ✅ **Vue.js** applications
- ✅ **Next.js** applications
- ✅ **TypeScript** projects
- ✅ **Pure JavaScript** projects
- ✅ **Node.js** applications
- ✅ **Vite-based** projects

## 📊 Monitoring & Maintenance

### Regular Review Tasks

- **Weekly**: Review and merge grouped dependency updates
- **Monthly**: Check for ignored major version updates
- **Quarterly**: Review and adjust grouping rules
- **Annually**: Update timezone and schedule preferences

### Best Practices

1. **Always test** dependency updates in a staging environment
2. **Review breaking changes** for major version updates
3. **Monitor build status** after merging updates
4. **Keep lockfiles** committed for reproducible builds
5. **Update this documentation** when modifying the configuration

## 🔍 Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| Too many PRs | Reduce `open-pull-requests-limit` |
| Missing dependencies | Add patterns to appropriate groups |
| Wrong timezone | Update `timezone` in schedule |
| Conflicting updates | Enable auto-rebase strategy |

### Configuration Validation

To validate the configuration file:

```bash
# Using Python
python3 -c "import yaml; yaml.safe_load(open('.github/dependabot.yml')); print('✅ Valid')"

# Using Node.js
node -e "const yaml=require('js-yaml'); yaml.load(require('fs').readFileSync('.github/dependabot.yml')); console.log('✅ Valid')"
```

## 📚 Additional Resources

- [Dependabot Documentation](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file)
- [Dependency Grouping Guide](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file#groups)
- [Security Updates](https://docs.github.com/en/code-security/dependabot/dependabot-security-updates)

---

**Last Updated**: January 2024  
**Maintainer**: @ArenasAgustin