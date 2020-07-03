$searchPath = Get-ChildItem -Path '.\assets'  -r | ? { $_.PsIsContainer -and $_.FullName -match 'init' } | % { $_.FullName }

$watcher = New-Object System.IO.FileSystemWatcher
$watcher.Path = $searchPath
# $d = [datetime](Get-ItemProperty -Path $searchPath -Name LastWriteTime).lastwritetime
# $d
$searchPath[1]
