# Contributing 

First off, thank you for considering contributing! We are thrilled to have you here. Every contribution, from a small typo fix to a major new feature, is valuable and greatly appreciated.

This document provides a set of guidelines to help you through the contribution process.

## How Can I Contribute?

You can contribute in several ways, including reporting bugs, suggesting enhancements, or writing code.

### Reporting Bugs

If you find a bug, please ensure it hasn't already been reported by searching the issues on GitHub. If you're unable to find an open issue addressing the problem, open a new one. Be sure to include a clear title, a detailed description of the bug, and steps to reproduce it.

### Suggesting Enhancements

If you have an idea for a new feature or an improvement, open an issue to start a discussion. This allows us to coordinate efforts and ensure the enhancement aligns with the project's goals before you spend time on implementation.

### Your First Code Contribution

Ready to contribute code? Here’s how to set up your environment and submit your changes.

#### Step 1: Fork the Repository

If you haven't already, fork the repository. Click the "Fork" button on the top-right corner of the main project page on GitHub. This creates a personal copy of the project under your GitHub account.

#### Step 2: Clone Your Fork

Now, clone your forked repository to your local machine so you can work on the files. Replace `<YOUR_USERNAME>` with your actual GitHub username.

```sh
git clone https://github.com/<YOUR_USERNAME>/VJ-Hostels.git
cd VJ-Hostels
```

#### Step 3: Add the 'Upstream' Remote

Add the original project repository as a remote named `upstream`. This will allow you to sync your fork with the main project to keep it up-to-date.

```sh
git remote add upstream https://github.com/gurramkarthiknetha/VJ-Hostels
```

You can verify the new remote was added by running:
```sh
git remote -v
```

#### Step 4: Create a New Branch

It's crucial to create a new branch for your changes. This keeps your work organized and separate from the main branch. Use a descriptive name for your branch.

Before creating a branch, make sure your fork's `main` branch is up-to-date:
```sh
# Fetch changes from the original repository
git fetch upstream

# Switch to your main branch
git checkout main

# Merge the changes
git merge upstream/main
```

Now, create your new branch:
```sh
git checkout -b feature/your-amazing-feature
```
*(Replace `feature/your-amazing-feature` with a suitable name, like `fix/login-bug` or `docs/update-readme`)*

#### Step 5: Make Your Changes

Make your desired changes to the code. Add, edit, or delete files as needed.

#### Step 6: Commit and Push Your Changes

Once you're happy with your changes, commit them with a clear and descriptive message.

```sh
# Stage your changes
git add .

# Commit the changes
git commit -m "feat: Add some amazing feature"
```

Then, push your new branch to your forked repository on GitHub.

```sh
git push origin feature/your-amazing-feature
```

#### Step 7: Open a Pull Request

Go to your forked repository on GitHub. You will see a banner with a "Compare & pull request" button. Click it. This will open a pull request form.

-   Provide a clear title for your pull request.
-   In the description, explain the changes you made and link to any relevant issues (e.g., "Closes #123").
-   Click "Create pull request" to submit it for review.

We will review your contribution as soon as possible. Thank you for your hard work!
