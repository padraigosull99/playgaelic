# PlayGaelic — first-time deploy to GitHub Pages.
# Prereq: run `gh auth login` once (choose GitHub.com → HTTPS → Login with browser).
# After this script, future updates are just:  git add -A; git commit -m "..."; git push

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

# make sure gh is on PATH even in shells opened before it was installed
if (-not (Get-Command gh -ErrorAction SilentlyContinue)) {
  $env:Path += ";C:\Program Files\GitHub CLI"
}

# 1. make sure we're logged in
gh auth status
if ($LASTEXITCODE -ne 0) { Write-Host "Run 'gh auth login' first, then re-run this script." -ForegroundColor Yellow; exit 1 }

# 2. create the GitHub repo from this folder and push (skips if remote already set)
$hasRemote = git remote 2>$null
if (-not $hasRemote) {
  gh repo create playgaelic --public --source . --remote origin --push --description "PlayGaelic - daily Gaelic football games & quizzes"
} else {
  git push -u origin main
}

# 3. turn on GitHub Pages, serving the main branch root
$user = gh api user --jq .login
try {
  gh api "repos/$user/playgaelic/pages" -X POST -f "source[branch]=main" -f "source[path]=/" | Out-Null
  Write-Host "GitHub Pages enabled."
} catch {
  Write-Host "Pages may already be enabled - continuing."
}

Write-Host ""
Write-Host "LIVE in ~2 minutes at:  https://$user.github.io/playgaelic/" -ForegroundColor Green
Write-Host "Share that link with the family group chat!"
