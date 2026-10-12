# Copies the 9 images the new site still loads from the old WordPress site into public/photos,
# so nothing breaks when WordPress is switched off. Run once from the project folder:
#   powershell -ExecutionPolicy Bypass -File scripts\fetch-wp-images.ps1

$ErrorActionPreference = "Stop"
$dest = Join-Path $PSScriptRoot "..\public\photos"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$files = @{
  "gallery-exterior-building.jpg" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/07/Exterior-Building.jpg"
  "director-meghna-marchatwar.jpeg" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/07/Meghna-Maam-768x1076.jpeg"
  "gallery-annual-event.webp" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/Annula-Event-300x200.webp"
  "gallery-csi-jee.webp" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/CSI-JEE-300x200.webp"
  "gallery-felicitation.webp" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/Felicitation-300x200.webp"
  "gallery-freshers-party.webp" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/Freshers-Party-300x135.webp"
  "gallery-parents-meeting.webp" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/08/Parents-Meeting-300x135.webp"
  "blog-mht-cet-2025.png" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/09/2f496abb-550e-4955-a5ae-ceae5b14abf8.png"
  "blog-jee-strategy-guide.png" = "https://centuryscienceinstitute.in/wp-content/uploads/2025/11/Get-More-Information-about-IIT-JEE-Strategy-Guide-1024x536.png"
}
foreach ($name in $files.Keys) {
  $out = Join-Path $dest $name
  Invoke-WebRequest -Uri $files[$name] -OutFile $out -UseBasicParsing
  Write-Host ("Saved " + $name + " (" + [math]::Round((Get-Item $out).Length / 1KB) + " KB)")
}
Write-Host "Done: $($files.Count) images in public\photos"
