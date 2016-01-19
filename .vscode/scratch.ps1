Param($username, $password)

function GetAuth($username, $password) {
    
    "Basic $([System.Convert]::ToBase64String(
        [System.Text.Encoding]::UTF8.GetBytes(
            "$($username):$($password)")))"
}

$auth = GetAuth $username $password

Invoke-RestMethod "http://localhost:3333/users" `
    -Method Get `
    -Headers @{ Authorization = $auth }