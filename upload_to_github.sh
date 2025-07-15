#!/bin/bash

echo "🚀 Starte GitHub Upload..."

# Alle Dateien hinzufügen
git add .
echo "✅ Dateien hinzugefügt"

# Commit erstellen
git commit -m "SimpliMed Förderstrategie Dashboard - Vollständige Version mit CEO-FAQ"
echo "✅ Commit erstellt"

# Mit GitHub verbinden
git remote add origin https://github.com/MarcelGaertner1234/foerderstrategie.git
echo "✅ Mit GitHub verbunden"

# Auf main Branch wechseln
git branch -M main
echo "✅ Branch gewechselt"

# Hochladen
echo "📤 Lade zu GitHub hoch..."
echo "⚠️  Sie werden nach Ihrem GitHub-Benutzernamen und Passwort gefragt!"
git push -u origin main

echo "🎉 Fertig! Prüfen Sie GitHub!"