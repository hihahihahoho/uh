
#emoji
$emoji = @(
   0x1F914,
   0x1F923,
   0x1F618,
   0x1F62B,
   0x1F921,
   0x1F4AA,
   0x1F984,
   0x1F419,
   0x1F340,
   0x1F68E,
   0x1F6F5,
   0x1F31B
)
$CharEncode = '';
$jackpotArray = @() ;
$jackpot = 'true';
$moneyBag = [BitConverter]::GetBytes(0x1F389);
$moneyBag = [System.Text.Encoding]::UTF32.GetString($moneyBag) + ' ';
$loser = [BitConverter]::GetBytes(0x1F62D);
$loser = [System.Text.Encoding]::UTF32.GetString($loser) + ' ';
[System.Collections.ArrayList]$ArrayList = $jackpotArray
For ($i = 0; $i -lt 3; $i++) {
   $getEmoji = Get-Random -Maximum $emoji.Length;
   $ArrayList.Add($getEmoji) | Out-Null;
   If ($i -ne 0) {
      If ($ArrayList[$i] -ne $ArrayList[$i - 1]) {
         $jackpot = 'false'
      }
   }
   $CharBytes = [BitConverter]::GetBytes($emoji[$getEmoji]);
   $CharEncode1 = [System.Text.Encoding]::UTF32.GetString($CharBytes) + ' ';
   $CharEncode = $CharEncode + $CharEncode1
}
function jackpot {
   #emoji
   If ($jackpot -eq 'true') {
      $jackpot = "`n`n*---------------------------*"
      $jackpot += "`n|                           |`n"
      $jackpot += "|$moneyBag $moneyBag FUCKING JACKPOT $moneyBag $moneyBag|";
      $jackpot += "`n|          $CharEncode           |"
      $jackpot += "`n|                           |`n"
      $jackpot += "*---------------------------*`n"
      $jackpot
   }
   else {
      $jackpot = "`n`n*---------------------------*"
      $jackpot += "`n|                           |`n"
      $jackpot += "|$loser $loser  FUCKING LOSER  $loser $loser|";
      $jackpot += "`n|          $CharEncode           |"
      $jackpot += "`n|                           |`n"
      $jackpot += "*---------------------------*`n"
      $jackpot
   }
   #end emoji
}
#end moji