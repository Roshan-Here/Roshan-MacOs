# Set the source directory (where the images are located)
$sourceDir = "D:\Leo\My Projects\Roshan-MacOs\macos-leo\public\assets\Icons"

# Set the target directory (where the converted images will be saved)
$targetDir = "$sourceDir\updated"

# Create the target directory if it doesn't exist
if (-not (Test-Path -Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir
}

# Get all image files (customize the types of images to include)
$imageFiles = Get-ChildItem -Path $sourceDir -File | Where-Object { $_.Extension -match '\.jpg|\.jpeg|\.png|\.gif|\.bmp' }

# Debugging: Print the files found
if ($imageFiles.Count -eq 0) {
    Write-Host "No images found. Please check the file extensions or the directory path."
} else {
    $imageFiles | ForEach-Object { Write-Host "Found: $($_.FullName)" }
}

# Loop through each image file
foreach ($image in $imageFiles) {
    # Define the new file path for the converted WebP image
    $newFileName = [System.IO.Path]::ChangeExtension($image.Name, ".webp")
    $newFilePath = Join-Path -Path $targetDir -ChildPath $newFileName

    # Debug: Show the full path of the output file
    Write-Host "Converting: `"$($image.FullName)`" to `"$newFilePath`""

    # Use Start-Process to call the magick command with arguments in quotes
    try {
        $convertOutput = Start-Process -FilePath "magick" -ArgumentList "`"$($image.FullName)`"", "-quality", "80", "`"$newFilePath`"" -Wait -PassThru
        if ($convertOutput.ExitCode -ne 0) {
            Write-Host "Error: Conversion failed for $($image.Name). Exit Code: $($convertOutput.ExitCode)"
        } else {
            Write-Host "Converted: $($image.Name) to $newFileName"
        }
    } catch {
        Write-Host "Error converting $($image.Name): $_"
    }
}

Write-Host "Image conversion complete!"
