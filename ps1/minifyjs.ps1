# [CmdletBinding()]
# param
# (
#     [Parameter(Position = 0, Mandatory = $true)]
#     [string] $SolutionDir
# )
$PSDefaultParameterValues['Out-File:Encoding'] = 'UTF8'
$PSDefaultParameterValues['Get-Content:Encoding'] = 'UTF8'
$PSDefaultParameterValues['Set-Content:Encoding'] = 'UTF8'
Function Compress-JsFile
{
   #  [CmdletBinding()]
    param
    (
        [string] $JsFilePath
    )

    $cssFile = Get-Item -Path $JsFilePath
    $content = [System.IO.File]::ReadAllText($cssFile.FullName)
    $body = @{input = $content}
    $response = Invoke-WebRequest -Uri "https://javascript-minifier.com/raw?input" -Method Post -Body $body

    if ($response.StatusCode -ne 200)
    {
        throw "Pick your own error message"
    }
    $compressedContent = $response.Content
   #  $newFilePath = $JsFilePath.Replace(".css", ".min.css")

    Set-Content -Path $JsFilePath -Value $compressedContent -Force
}
