# PowerShell script to help extract blog posts from Blog.tsx
# This will show you all the blog post titles so you can manually copy them

Write-Host "Extracting blog post titles from Blog.tsx..." -ForegroundColor Green
Write-Host ""

$content = Get-Content "src/pages/Blog.tsx" -Raw

# Find all title patterns
$titles = [regex]::Matches($content, 'title:\s*"([^"]+)"')

Write-Host "Found $($titles.Count) blog posts:" -ForegroundColor Cyan
Write-Host ""

$count = 1
foreach ($match in $titles) {
    Write-Host "$count. $($match.Groups[1].Value)" -ForegroundColor Yellow
    $count++
}

Write-Host ""
Write-Host "Total blog posts found: $($titles.Count)" -ForegroundColor Green
