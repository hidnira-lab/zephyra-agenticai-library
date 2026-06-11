# Coding Conventions

**Analysis Date:** 2026-06-11

## Naming Patterns

**Files:**
- No application source-file naming convention exists yet.
- Existing root files use standard names: `README.md`, `package.json`, `package-lock.json`.
- GSD-generated planning files use uppercase markdown names such as `STACK.md`.

**Functions:**
- No project functions exist yet.
- Future conventions should be established when the first application stack is selected.

**Variables:**
- No project variables exist yet.
- No constants, environment variable names, or configuration naming patterns are established.

**Types:**
- No TypeScript or typed application code exists yet.
- No interface, type alias, or enum conventions are established.

## Code Style

**Formatting:**
- No formatter configuration exists.
- No `.prettierrc`, ESLint config, TypeScript config, or editor config was found in tracked project files.
- Current editable project files are JSON and Markdown.

**Linting:**
- No linter is configured.
- `package.json` has no `lint` script.

## Import Organization

**Order:**
1. Not applicable yet because there are no source imports.

**Grouping:**
- No import grouping convention exists.

**Path Aliases:**
- No path aliases are configured.

## Error Handling

**Patterns:**
- No application error handling pattern exists.
- No custom errors, result types, error middleware, or boundary handlers exist.

**Error Types:**
- Not established.

## Logging

**Framework:**
- No application logging framework exists.

**Patterns:**
- No logging pattern exists yet.
- Future code should document whether logging uses console output, structured logging, or an observability provider.

## Comments

**When to Comment:**
- No application comments exist to infer project-specific convention.
- Default to comments that explain intent, constraints, or non-obvious decisions.

**JSDoc/TSDoc:**
- Not established.

**TODO Comments:**
- No TODO/FIXME/HACK markers were found in tracked project files.
- The only search hit was a transitive `package-lock.json` integrity string containing the text `XXX`, which is not a TODO marker.

## Function Design

**Size:**
- Not established.

**Parameters:**
- Not established.

**Return Values:**
- Not established.

## Module Design

**Exports:**
- Not established.

**Barrel Files:**
- Not established.

## Recommended Baseline For New Code

- Add formatter and lint configuration when the application stack is chosen.
- Add package scripts for `test`, `lint`, and any build/dev server commands.
- Prefer conventions from the selected framework instead of inventing custom patterns.
- Update this document after representative source files exist.

---
*Convention analysis: 2026-06-11*
*Update when source code, formatting tools, or lint rules are added*
