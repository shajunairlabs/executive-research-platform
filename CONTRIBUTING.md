# Contributing to Executive Research Platform

Thank you for your interest in contributing! Here are some guidelines to help you get started.

## How to Contribute

### Adding a New Framework

1. Create a new file in `src/pages/frameworks/` with a descriptive name (kebab-case)
2. Use the `FrameworkLayout` component for consistent styling
3. Include these sections:
   - Overview
   - Core concepts/components
   - How to apply
   - Real-world examples
   - Key takeaways or best practices
4. Add the framework to the frameworks index page

### Adding Research or Ideas

1. Create a new file in `src/pages/research/` or `src/pages/ideas/`
2. Use the `BaseLayout` component
3. Follow the existing structure and styling
4. Add metadata (title, description)
5. Include inline navigation and related links

### Submitting Changes

1. Create a new branch: `git checkout -b feature/your-feature-name`
2. Make your changes
3. Test locally: `npm run dev`
4. Build to verify: `npm run build`
5. Commit with clear messages: `git commit -am 'Add new framework: X'`
6. Push to your fork and submit a pull request

## Content Guidelines

- Keep content concise and executive-focused
- Use clear headings and structure
- Include practical examples
- Provide actionable insights
- Reference sources where applicable
- Use consistent terminology

## Code Style

- Use TypeScript for type safety
- Follow existing component patterns
- Keep components modular and reusable
- Use Tailwind CSS classes for styling
- Maintain responsive design

## Questions?

Feel free to open an issue to discuss potential contributions or ask questions.
