. .\ps1\bundles.ps1
. .\ps1\emoji.ps1
. .\ps1\minifycss.ps1
. .\ps1\minifyjs.ps1

$PSDefaultParameterValues['Out-File:Encoding'] = 'UTF8'
$PSDefaultParameterValues['Get-Content:Encoding'] = 'UTF8'
Remove-Item -Path '.\dist\js\bundles.js';
New-Item -Path '.\dist\js\bundles.js' -ItemType File | Out-Null;
Remove-Item -Path '.\dist\js\init.js';
New-Item -Path '.\dist\js\init.js' -ItemType File | Out-Null;
Remove-Item -Path '.\dist\css\bundles.css';
New-Item -Path '.\dist\css\bundles.css' -ItemType File | Out-Null;

$pPlugins = $plugins | % {join-path ".\assets\" $_ };
For ($i = 0; $i -lt $pPlugins.Length + 2; $i++) {
   if ($i -lt $pPlugins.Length) {
      $fileJS = Get-ChildItem $pPlugins[$i] -Filter *.js | % { $_.FullName };
      $fileCss = Get-ChildItem $pPlugins[$i] -Filter *.css | % { $_.FullName };
      $fileJSInitS = $pPlugins[$i] + '\init';
      If ($fileCss -ne $Null) {
         Get-Content $fileCss | Out-File '.\dist\css\bundles.css' -Append;
      }
      If ($fileJS -ne $Null) {
         Get-Content $fileJS | Out-File '.\dist\js\bundles.js' -Append;
      }
      If (Test-Path $fileJSInitS -ne $Null) {
         $fileJSInit = Get-ChildItem $fileJSInitS -Filter *.js | % { $_.FullName };
         Get-Content $fileJSInit | Out-File '.\dist\js\init.js' -Append;
      }
      $pluginsName = $pPlugins[$i] -replace ".\\assets\\", "";
      #emoji
      $random1 = Get-Random -Maximum $emoji.Length;
      $random1 = [BitConverter]::GetBytes($emoji[$random1]);
      $random1 = [System.Text.Encoding]::UTF32.GetString($random1) + ' ';
      $random2 = Get-Random -Maximum $emoji.Length;
      $random2 = [BitConverter]::GetBytes($emoji[$random2]);
      $random2 = [System.Text.Encoding]::UTF32.GetString($random2) + ' ';
      $random3 = Get-Random -Maximum $emoji.Length;
      $random3 = [BitConverter]::GetBytes($emoji[$random3]);
      $random3 = [System.Text.Encoding]::UTF32.GetString($random3) + ' ';
      $random = $random1 + $random2 + $random3;
      If ($i + 1 -eq $pPlugins.Length) {
         $random = $CharEncode
      }
      $percentage = [Math]::Ceiling(($i + 1) * (100 / ($pPlugins.Length + 1)));
      #end emoji
      Write-InlineProgress -Activity "$random $percentage% $pluginsName" -PercentComplete $percentage -ProgressCharacter '>' -ProgressFillCharacter '>' -ProgressFill '.'
   }
   else {
      if ($i -eq $pPlugins.Length) {
         $pluginsName = "Compressing CSS..."
         $percentage = [Math]::Ceiling(($i) * (100 / ($pPlugins.Length + 2)));
         $donePercentage = [Math]::Ceiling(($i + 1) * (100 / ($pPlugins.Length + 2)));
         #end emoji
         Write-InlineProgress -Activity "$random $percentage% $pluginsName" -PercentComplete $percentage -ProgressCharacter '>' -ProgressFillCharacter '>' -ProgressFill '.'
         Compress-CssFile '.\dist\css\bundles.css'
         Write-InlineProgress -Activity "$random $donePercentage% $pluginsName" -PercentComplete $donePercentage -ProgressCharacter '>' -ProgressFillCharacter '>' -ProgressFill '.'
      }
      if ($i -eq $pPlugins.Length + 1) {
         $pluginsName = "Compressing JS..."
         $percentage = [Math]::Ceiling(($i) * (100 / ($pPlugins.Length + 2)));
         $donePercentage = [Math]::Ceiling(($i + 1) * (100 / ($pPlugins.Length + 2)));
         #end emoji
         Write-InlineProgress -Activity "$random $percentage% $pluginsName" -PercentComplete $percentage -ProgressCharacter '>' -ProgressFillCharacter '>' -ProgressFill '.'
         Compress-JsFile '.\dist\js\bundles.js'
         Write-InlineProgress -Activity "$random $donePercentage% $pluginsName" -PercentComplete $donePercentage -ProgressCharacter '>' -ProgressFillCharacter '>' -ProgressFill '.'
      }
   }
}
#run jackpot function
jackpot