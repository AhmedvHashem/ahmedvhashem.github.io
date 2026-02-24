<!-- 
Sync Impact Report:
- Version change: 0.0.0 → 1.1.0
- Modified principles: Added comprehensive testing principles
- Added sections: Testing-focused principles and governance
- Removed sections: None
- Templates requiring updates: ✅ Updated / ⚠ Pending - All templates updated
- Follow-up TODOs: None
-->
# ahmedvhashem.dev Constitution

## Core Principles

### I. Component-First Development
Every feature starts as a reusable component; Components must be self-contained, independently testable, and properly documented; Clear purpose required - no organizational-only components

### II. Test-Driven Development (TDD)
TDD mandatory: Tests written → User approved → Tests fail → Then implement; Red-Green-Refactor cycle strictly enforced for all new functionality

### III. Test Coverage (NON-NEGOTIABLE)
All components and pages must have corresponding unit and integration tests; Minimum 80% coverage threshold for all new code; Tests must cover both happy path and error scenarios

### IV. Automated Testing Pipeline
Focus areas requiring automated tests: New component contracts, UI interactions, API integrations, Page rendering, Accessibility compliance

### V. Continuous Integration
All tests must pass before merging; Pre-commit hooks run basic tests; CI pipeline validates full test suite and coverage metrics

## Additional Constraints

Technology stack: Jest for unit testing, React Testing Library for component testing, Playwright for end-to-end testing; All pull requests require passing tests; Performance benchmarks for page load times

## Development Workflow

Code review requirements: All new code must include tests; Testing gates: Unit tests, integration tests, accessibility tests; Deployment approval requires passing all test suites

## Governance
All PRs/reviews must verify compliance with testing requirements; Test coverage reports must be included in releases; Use testing guidelines for runtime development

**Version**: 1.1.0 | **Ratified**: 2026-02-11 | **Last Amended**: 2026-02-11