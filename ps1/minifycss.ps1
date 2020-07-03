# [CmdletBinding()]
# param
# (
#     [Parameter(Position = 0, Mandatory = $true)]
#     [string] $SolutionDir
# )

Function Compress-CssFile
{
   #  [CmdletBinding()]
    param
    (
        [string] $CssFilePath
    )

    $cssFile = Get-Item -Path $CssFilePath
    $content = [System.IO.File]::ReadAllText($cssFile.FullName)
    $body = @{input = $content}
    $response = Invoke-WebRequest -Uri "https://cssminifier.com/raw?input" -Method Post -Body $body

    if ($response.StatusCode -ne 200)
    {
        throw "Pick your own error message"
    }
    $compressedContent = $response.Content
   #  $newFilePath = $CssFilePath.Replace(".css", ".min.css")

    Set-Content -Path $CssFilePath -Value $compressedContent -Force
}
