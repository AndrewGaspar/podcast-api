Param($username, $password)

function GetAuth($username, $password) {
    
    "Basic $([System.Convert]::ToBase64String(
        [System.Text.Encoding]::UTF8.GetBytes(
            "$($username):$($password)")))"
}

$auth = GetAuth $username $password

Invoke-RestMethod "http://localhost:3333/subscriptions" `
    -Method Post `
    -Headers @{ Authorization = $auth } `
    -ContentType "application/json" `
    -Body (@{
        href = "http://www.giantbomb.com/podcast-xml/giant-bombcast"
    } | ConvertTo-Json)