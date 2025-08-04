# GitHub Repository Creation Script
# You'll need to provide your GitHub username and a Personal Access Token

param(
    [Parameter(Mandatory=$true)]
    [string]$GitHubUsername,
    
    [Parameter(Mandatory=$true)]
    [string]$GitHubToken
)

$repoName = "my-super-greens"
$description = "MY SUPER GREENS - Professional microgreens website with 2BFresh-inspired design"

$headers = @{
    "Authorization" = "token $GitHubToken"
    "Accept" = "application/vnd.github.v3+json"
}

$body = @{
    name = $repoName
    description = $description
    private = $false
    auto_init = $false
} | ConvertTo-Json

try {
    $response = Invoke-RestMethod -Uri "https://api.github.com/user/repos" -Method Post -Headers $headers -Body $body -ContentType "application/json"
    
    Write-Host "✅ Repository created successfully!" -ForegroundColor Green
    Write-Host "Repository URL: $($response.html_url)" -ForegroundColor Cyan
    
    # Add remote and push
    git remote add origin "https://github.com/$GitHubUsername/$repoName.git"
    git push -u origin main
    
    Write-Host "✅ Code pushed to GitHub successfully!" -ForegroundColor Green
    Write-Host "Your website is now available at: $($response.html_url)" -ForegroundColor Cyan
    
} catch {
    Write-Host "❌ Error creating repository: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host "Please check your GitHub username and token." -ForegroundColor Yellow
} 