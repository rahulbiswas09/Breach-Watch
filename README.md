sequenceDiagram
    participant User as 👤 User (Browser)
    participant FE as 🖥️ Next.js Frontend
    participant API as 🛡️ Secure API Route
    participant HIBP as ☁️ Breach Database

    User->>FE: Enters Email (admin@test.com)
    FE->>API: POST /api/breach (JSON)
    
    Note over API: 🔒 Rate Limit Check
    Note over API: 🔑 Attach Hidden API Keys
    
    alt is Mock Mode / No Key
        API-->>API: Fetch Local Mock Data
    else is Production
        API->>HIBP: Secure Request (Server-to-Server)
        HIBP-->>API: Return Raw Breach Data
    end

    API-->>FE: Return Cleaned JSON
    FE-->>User: 🚨 Render Alert Cards
