# Structure des Images - Climatec

## Organisation des dossiers

### 📁 public/images/projects/
Photos principales affichées sur la page d'accueil :
- `project-1.jpg` - Projet résidentiel (actuellement villa Draveil)
- `project-2.jpg` - Projet commercial (actuellement bureau Évry)
- `project-3.jpg` - Pompe à chaleur (actuellement villa Corbeil)

### 📁 public/images/gallery/
Photos pour la galerie complète :

#### 📁 residential/
- Photos de projets résidentiels (maisons, appartements, villas)
- Nommage suggéré : `villa-draveil-2024.jpg`, `appartement-creteil.jpg`

#### 📁 commercial/
- Photos de projets commerciaux (bureaux, magasins, restaurants)
- Nommage suggéré : `bureau-evry.jpg`, `restaurant-melun.jpg`

#### 📁 heatpump/
- Photos de pompes à chaleur
- Nommage suggéré : `pac-corbeil.jpg`, `pac-brunoy.jpg`

### 📁 public/images/services/
Photos pour les pages services :
- `installation.jpg` - Photo d'installation
- `maintenance.jpg` - Photo de maintenance
- `depannage.jpg` - Photo de dépannage

## Format recommandé
- **Format** : JPG ou PNG
- **Taille** : Optimisé pour le web (< 500KB par image)
- **Résolution** : 1200x800px minimum
- **Ratio** : 3:2 ou 4:3 pour un meilleur rendu

## Images actuellement utilisées dans le code

### Page d'accueil (HomePage.tsx)
```javascript
const recentProjects = [
  {
    image: '/images/projects/project-1.jpg', // ← Remplacez cette image
    title: 'Climatisation résidentielle',
    location: 'Maison individuelle - Draveil'
  },
  {
    image: '/images/projects/project-2.jpg', // ← Remplacez cette image
    title: 'Installation commerciale', 
    location: 'Bureau - Évry-Courcouronnes'
  },
  {
    image: '/images/projects/project-3.jpg', // ← Remplacez cette image
    title: 'Pompe à chaleur',
    location: 'Villa - Corbeil-Essonnes'
  }
];
```

### Page Galerie (GalleryPage.tsx)
Les images de la galerie utilisent actuellement des URLs Pexels mais peuvent être remplacées par vos vraies photos en modifiant les chemins dans le code.

## Comment ajouter vos images

1. **Placez vos images** dans les dossiers correspondants
2. **Respectez les noms** indiqués ci-dessus pour un remplacement automatique
3. **Optimisez vos images** pour le web avant de les ajouter
4. Si vous voulez changer les noms, modifiez les chemins dans le code React

## Fallback automatique
Le code inclut un système de fallback : si une image locale n'existe pas, elle sera remplacée automatiquement par une image Pexels appropriée.