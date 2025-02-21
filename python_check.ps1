# Python and Pip Installation Check and Configuration

# Check Python Installation
Write-Host "Checking Python Installation..." -ForegroundColor Cyan

# Try different Python commands
$pythonCommands = @('python', 'py', 'python3')

foreach ($cmd in $pythonCommands) {
    try {
        $version = & $cmd --version
        Write-Host "✅ $version found using $cmd" -ForegroundColor Green
        
        # Check pip
        $pipVersion = & $cmd -m pip --version
        Write-Host "✅ $pipVersion" -ForegroundColor Green
        
        return
    }
    catch {
        Write-Host "❌ $cmd not found" -ForegroundColor Yellow
    }
}

Write-Host @"
Python Installation Guide:
1. Download Python from https://www.python.org/downloads/
2. IMPORTANT: During installation:
   - Check 'Add Python to PATH'
   - Check 'Install pip'
3. Restart your computer after installation
4. Open a new PowerShell and verify with 'python --version'
"@ -ForegroundColor Magenta
